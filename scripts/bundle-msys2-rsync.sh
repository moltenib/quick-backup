#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_URL="${MSYS2_REPO_URL:-https://repo.msys2.org/msys/x86_64}"
CACHE_DIR="${ROOT_DIR}/.cache/msys2"
DB_FILE="${CACHE_DIR}/msys.db"
DB_DIR="${CACHE_DIR}/db"
PKG_CACHE_DIR="${CACHE_DIR}/pkgs"
BUNDLE_DIR="${ROOT_DIR}/runtime/msys2"

shopt -s nullglob

read_desc_field() {
    local desc_path="$1"
    local field_name="$2"
    awk -v key="%${field_name}%" '
        $0 == key { in_section = 1; next }
        /^%[A-Z0-9_]+%$/ { if (in_section) exit }
        in_section && NF { print }
    ' "${desc_path}"
}

normalize_dep_name() {
    local dep="$1"
    dep="${dep#"${dep%%[![:space:]]*}"}"
    dep="${dep%"${dep##*[![:space:]]}"}"
    dep="${dep%%:*}"
    dep="${dep%%|*}"
    dep="${dep%%[<>=]*}"
    dep="${dep%% *}"
    case "${dep}" in
    sh)
        dep="bash"
        ;;
    esac
    printf '%s\n' "${dep}"
}

mkdir -p "${CACHE_DIR}" "${PKG_CACHE_DIR}" "${BUNDLE_DIR}"

echo "Fetching MSYS2 package index..."
curl -fsSL "${REPO_URL}/msys.db" -o "${DB_FILE}"

rm -rf "${DB_DIR}"
mkdir -p "${DB_DIR}"
tar --zstd -xf "${DB_FILE}" -C "${DB_DIR}"

declare -A seen_packages=()
declare -A package_desc=()
declare -A desc_by_name=()
declare -a packages_to_download=()
declare -a dependency_queue=("rsync" "msys2-runtime")

for desc_path in "${DB_DIR}"/*/desc; do
    indexed_name="$(read_desc_field "${desc_path}" "NAME" | head -n1)"
    if [[ -z "${indexed_name}" ]]; then
        continue
    fi

    existing_desc="${desc_by_name[${indexed_name}]:-}"
    if [[ -z "${existing_desc}" ]]; then
        desc_by_name["${indexed_name}"]="${desc_path}"
        continue
    fi

    newest_desc="$(printf '%s\n%s\n' "${existing_desc}" "${desc_path}" | sort -V | tail -n1)"
    desc_by_name["${indexed_name}"]="${newest_desc}"
done

queue_index=0
while ((queue_index < ${#dependency_queue[@]})); do
    package_name="${dependency_queue[queue_index]}"
    ((queue_index += 1))

    if [[ -z "${package_name}" ]]; then
        continue
    fi
    if [[ -n "${seen_packages[${package_name}]:-}" ]]; then
        continue
    fi

    desc_path="${desc_by_name[${package_name}]:-}"
    if [[ -z "${desc_path}" ]]; then
        echo "Failed to resolve MSYS2 package '${package_name}' in ${REPO_URL}" >&2
        exit 1
    fi

    seen_packages["${package_name}"]=1
    package_desc["${package_name}"]="${desc_path}"
    packages_to_download+=("${package_name}")

    while IFS= read -r raw_dep; do
        dep_name="$(normalize_dep_name "${raw_dep}")"
        if [[ -n "${dep_name}" ]]; then
            dependency_queue+=("${dep_name}")
        fi
    done < <(read_desc_field "${desc_path}" "DEPENDS")
done

echo "Resolved ${#packages_to_download[@]} MSYS2 package(s):"
printf '  - %s\n' "${packages_to_download[@]}"

for package_name in "${packages_to_download[@]}"; do
    desc_path="${package_desc[${package_name}]}"
    package_file="$(read_desc_field "${desc_path}" "FILENAME" | head -n1)"
    if [[ -z "${package_file}" ]]; then
        echo "Missing package filename for '${package_name}'." >&2
        exit 1
    fi

    package_cache_path="${PKG_CACHE_DIR}/${package_file}"
    if [[ ! -f "${package_cache_path}" ]]; then
        echo "Downloading ${package_file}..."
        curl -fsSL "${REPO_URL}/${package_file}" -o "${package_cache_path}"
    fi

    echo "Extracting ${package_file}..."
    tar --zstd -xf "${package_cache_path}" -C "${BUNDLE_DIR}"
done

if [[ ! -f "${BUNDLE_DIR}/usr/bin/rsync.exe" ]]; then
    echo "Bundling failed: ${BUNDLE_DIR}/usr/bin/rsync.exe not found after extraction." >&2
    exit 1
fi

echo "MSYS2 rsync bundle is ready at ${BUNDLE_DIR}/usr/bin/rsync.exe"
