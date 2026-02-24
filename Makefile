CXX := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic -fPIC -Isrc
LDFLAGS :=
PKG_CONFIG := pkg-config
QT_CFLAGS := $(shell $(PKG_CONFIG) --cflags Qt6Widgets)
QT_LIBS := $(shell $(PKG_CONFIG) --libs Qt6Widgets)
.DEFAULT_GOAL := all
ROOT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
EXE_SUFFIX :=

SRC := src/main.cpp src/views/MainWindow.cpp src/controllers/RsyncRunner.cpp src/views/DirectoryChooserWidget.cpp src/utils/AppSetup.cpp
OBJ := $(SRC:.cpp=.o)
BIN := $(ROOT_DIR)/simple-mirror$(EXE_SUFFIX)
LOCALE_TS_FILES := $(wildcard resources/locales/*/LC_MESSAGES/simple-mirror.ts)
QM_FILES := $(patsubst %/simple-mirror.ts,%/simple-mirror.qm,$(LOCALE_TS_FILES))
LRELEASE := lrelease
MSYS2_BUNDLE_SCRIPT := scripts/bundle-msys2-rsync.sh
MSYS2_RSYNC_EXE := runtime/msys2/usr/bin/rsync.exe
RUNTIME_MANIFEST := $(ROOT_DIR)/.runtime-libs-manifest
WIN_DEPLOY_DIR := $(ROOT_DIR)/dist
WINDEPLOYQT ?= windeployqt6
WIN_MINGW_BIN := $(dir $(shell command -v $(CXX) 2>/dev/null))
WIN_RUNTIME_DLLS := libgcc_s_seh-1.dll libstdc++-6.dll libwinpthread-1.dll

BUNDLE_RSYNC ?= 0
ifeq ($(OS),Windows_NT)
EXE_SUFFIX := .exe
BIN := $(ROOT_DIR)/simple-mirror$(EXE_SUFFIX)
else
LDFLAGS += -Wl,-rpath,'$$ORIGIN'
endif

ALL_TARGETS := $(BIN)
ifeq ($(BUNDLE_RSYNC),1)
ALL_TARGETS += $(MSYS2_RSYNC_EXE)
endif
DEPLOY_WINDOWS_DEPS := $(BIN) translations
ifeq ($(BUNDLE_RSYNC),1)
DEPLOY_WINDOWS_DEPS += $(MSYS2_RSYNC_EXE)
endif

.PHONY: all run clean bundle-rsync clean-bundle bundle-runtime clean-runtime deploy-windows clean-windows-deploy translations

all: $(ALL_TARGETS) translations

$(BIN): $(OBJ)
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $(OBJ) $(QT_LIBS)

src/%.o: src/%.cpp
	$(CXX) $(CXXFLAGS) $(QT_CFLAGS) -c $< -o $@

translations: $(QM_FILES)

%/simple-mirror.qm: %/simple-mirror.ts
	$(LRELEASE) $< -qm $@

bundle-rsync: $(MSYS2_RSYNC_EXE)

$(MSYS2_RSYNC_EXE): $(MSYS2_BUNDLE_SCRIPT)
	$(MSYS2_BUNDLE_SCRIPT)

deploy-windows: $(DEPLOY_WINDOWS_DEPS)
ifeq ($(OS),Windows_NT)
	@set -eu; \
	exe_name="$$(basename "$(BIN)")"; \
	mkdir -p "$(WIN_DEPLOY_DIR)"; \
	cp -f "$(BIN)" "$(WIN_DEPLOY_DIR)/$$exe_name"; \
	for dll in $(WIN_RUNTIME_DLLS); do \
		if [ -f "$(WIN_MINGW_BIN)$$dll" ]; then \
			cp -f "$(WIN_MINGW_BIN)$$dll" "$(WIN_DEPLOY_DIR)/"; \
		else \
			echo "Warning: $(WIN_MINGW_BIN)$$dll not found"; \
		fi; \
	done; \
	mkdir -p "$(WIN_DEPLOY_DIR)/resources"; \
	cp -a resources/locales "$(WIN_DEPLOY_DIR)/resources/"; \
	if [ -f "$(MSYS2_RSYNC_EXE)" ]; then \
		mkdir -p "$(WIN_DEPLOY_DIR)/runtime/msys2/usr/bin"; \
		cp -f "$(MSYS2_RSYNC_EXE)" "$(WIN_DEPLOY_DIR)/runtime/msys2/usr/bin/"; \
	fi; \
	if command -v "$(WINDEPLOYQT)" >/dev/null 2>&1; then \
		"$(WINDEPLOYQT)" --release --no-translations --no-quick-import "$(WIN_DEPLOY_DIR)/$$exe_name"; \
	elif command -v windeployqt >/dev/null 2>&1; then \
		windeployqt --release --no-translations --no-quick-import "$(WIN_DEPLOY_DIR)/$$exe_name"; \
	else \
		echo "Warning: windeployqt not found, Qt runtime was not auto-copied"; \
	fi; \
	echo "Windows deployment is ready in $(WIN_DEPLOY_DIR)"
else
	@echo "deploy-windows is only available when OS=Windows_NT"
	@exit 1
endif

bundle-runtime: $(BIN)
	@set -eu; \
	command -v ldd >/dev/null 2>&1 || { echo "bundle-runtime requires ldd"; exit 1; }; \
	: > "$(RUNTIME_MANIFEST)"; \
	copy_deps() { \
		target="$$1"; \
		ldd "$$target" \
			| awk '/=>/ {print $$3} /^[[:space:]]*\/.*[[:space:]]+\(/ {print $$1}' \
			| sort -u \
			| while read -r lib; do \
				[ -n "$$lib" ] || continue; \
				[ -f "$$lib" ] || continue; \
				base="$$(basename "$$lib")"; \
				case "$$base" in linux-vdso.so*|ld-linux*.so*|ld-musl-*.so*) continue ;; esac; \
				dest="$(ROOT_DIR)/$$base"; \
				echo "$$dest" >> "$(RUNTIME_MANIFEST)"; \
				if [ ! -e "$$dest" ]; then \
					cp -L "$$lib" "$$dest"; \
				fi; \
			done; \
	}; \
	copy_deps "$(BIN)"; \
	qt_plugin_dir="$$(qtpaths6 --plugin-dir 2>/dev/null || true)"; \
	if [ -z "$$qt_plugin_dir" ]; then qt_plugin_dir="$$(qtpaths --plugin-dir 2>/dev/null || true)"; fi; \
	if [ -z "$$qt_plugin_dir" ]; then qt_plugin_dir="$$(pkg-config --variable=pluginsdir Qt6Core 2>/dev/null || true)"; fi; \
	if [ -n "$$qt_plugin_dir" ] && [ -d "$$qt_plugin_dir/platforms" ]; then \
		mkdir -p "$(ROOT_DIR)/plugins"; \
		cp -a "$$qt_plugin_dir/platforms" "$(ROOT_DIR)/plugins/"; \
		find "$(ROOT_DIR)/plugins/platforms" -type f -name '*.so*' | while read -r plugin; do \
			copy_deps "$$plugin"; \
		done; \
	fi; \
	sort -u "$(RUNTIME_MANIFEST)" -o "$(RUNTIME_MANIFEST)"; \
	printf '[Paths]\nPlugins = plugins\n' > "$(ROOT_DIR)/qt.conf"; \
	echo "Runtime dependencies copied next to $(BIN)"

run: $(BIN)
	$(BIN)

clean:
	find src -name '*.o' -delete
	rm -f $(BIN) $(QM_FILES)

clean-bundle:
	rm -rf runtime/msys2 .cache/msys2

clean-windows-deploy:
	rm -rf "$(WIN_DEPLOY_DIR)"

clean-runtime:
	if [ -f "$(RUNTIME_MANIFEST)" ]; then xargs -r rm -f < "$(RUNTIME_MANIFEST)"; fi
	rm -f "$(RUNTIME_MANIFEST)" qt.conf
	rm -rf plugins
