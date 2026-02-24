# Simple Mirror

Qt GUI wrapper around `rsync -av --info=progress2 --delete` to mirror origin to destination

## Code layout

- `src/main.cpp`: app startup
- `src/views/MainWindow.hpp` + `src/views/MainWindow.cpp`: main UI, validation, dialogs, progress
- `src/views/DirectoryChooserWidget.hpp` + `src/views/DirectoryChooserWidget.cpp`: directory chooser row
- `src/controllers/RsyncRunner.hpp` + `src/controllers/RsyncRunner.cpp`: rsync process and output parsing
- `src/utils/AppSetup.hpp` + `src/utils/AppSetup.cpp`: icon and translation setup

## Build

Requirements:

- `make`
- C++17 compiler
- `pkg-config`
- Qt6 Widgets
- `lrelease` (Qt Linguist tools)

Build:

```bash
make
```

Run:

- Linux: `./simple-mirror`
- Windows output: `dist/simple-mirror.exe`

Targets:

- `make run`: build and run
- `make clean`: remove objects, binary, compiled `.qm`
- `make translations`: compile `resources/locales/<lang>/LC_MESSAGES/simple-mirror.ts` to `.qm`
- `make bundle-rsync`: download and bundle MSYS2 `rsync` into `runtime/msys2`
- `make clean-bundle`: remove bundled rsync and cache
- `make bundle-runtime`: Linux-only runtime bundling (shared libs + Qt plugins + `qt.conf` next to executable)
- `make clean-runtime`: remove files created by `bundle-runtime`
- `make deploy-windows`: create `dist/` with `simple-mirror.exe`, MinGW runtime DLLs, Qt runtime via `windeployqt`, locales, and bundled rsync if present
- `make clean-windows-deploy`: remove `dist/`

## Translations

Default language is English
At startup, system locale is used if `resources/locales/<lang>/LC_MESSAGES/simple-mirror.qm` exists

Included: `de`, `es`, `pt`, `it`, `nl`, `fr`, `zh_CN`, `ja`

## Windows rsync resolution

`rsync` is resolved in this order (relative to executable directory and current working directory):

1. `SIMPLE_MIRROR_RSYNC`
2. Bundled paths:
   - `runtime/msys2/usr/bin/rsync.exe`
   - `runtime/bin/rsync.exe`
   - `msys2/usr/bin/rsync.exe`
   - `bin/rsync.exe`
3. `PATH` (`rsync.exe`, then `rsync`)

Rsync bundling is separate from normal build:

- default: `make`
- explicit bundle: `make bundle-rsync`
- build + bundle: `make BUNDLE_RSYNC=1`

For runnable packaging outside MSYS2 on Windows:

```bash
make deploy-windows
```

On Windows, selected folder paths are converted to MSYS/Cygwin format before rsync call, example: `C:\Data\Backup\` -> `/c/Data/Backup/`
