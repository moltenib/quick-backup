Unicode true
SetCompressor /SOLID lzma
RequestExecutionLevel admin

!include "MUI2.nsh"
!include "x64.nsh"

!ifndef APP_VERSION
!define APP_VERSION "dev"
!endif

!if /FileExists "..\dist\simple-mirror.exe"
!else
!error "dist\\simple-mirror.exe not found Run make deploy-windows first"
!endif

!define APP_NAME "Simple Mirror"
!define APP_EXE "simple-mirror.exe"
!define COMPANY_NAME "Simple Mirror"
!define UNINSTALL_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\Simple Mirror"

Name "${APP_NAME}"
OutFile "..\simple-mirror-setup-${APP_VERSION}.exe"
InstallDir "$PROGRAMFILES64\Simple Mirror"
InstallDirRegKey HKLM "Software\Simple Mirror" "Install_Dir"

!define MUI_ABORTWARNING
!if /FileExists "..\resources\icons\icon.ico"
!define MUI_ICON "..\resources\icons\icon.ico"
!define MUI_UNICON "..\resources\icons\icon.ico"
!endif

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_LICENSE "..\LICENSE"
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_UNPAGE_FINISH

!insertmacro MUI_LANGUAGE "English"

Function .onInit
    ${If} ${RunningX64}
        SetRegView 64
    ${EndIf}
FunctionEnd

Function un.onInit
    ${If} ${RunningX64}
        SetRegView 64
    ${EndIf}
FunctionEnd

Section "Install" SecInstall
    SetShellVarContext all
    SetOutPath "$INSTDIR"
    File /r "..\dist\*"

    WriteUninstaller "$INSTDIR\Uninstall.exe"

    WriteRegStr HKLM "Software\Simple Mirror" "Install_Dir" "$INSTDIR"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "DisplayName" "${APP_NAME}"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "DisplayVersion" "${APP_VERSION}"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "Publisher" "${COMPANY_NAME}"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "InstallLocation" "$INSTDIR"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "DisplayIcon" "$INSTDIR\${APP_EXE}"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "UninstallString" "$INSTDIR\Uninstall.exe"
    WriteRegStr HKLM "${UNINSTALL_KEY}" "QuietUninstallString" "$INSTDIR\Uninstall.exe /S"
    WriteRegDWORD HKLM "${UNINSTALL_KEY}" "NoModify" 1
    WriteRegDWORD HKLM "${UNINSTALL_KEY}" "NoRepair" 1

    CreateDirectory "$SMPROGRAMS\Simple Mirror"
    IfFileExists "$INSTDIR\resources\icons\icon.ico" 0 +3
    CreateShortcut "$SMPROGRAMS\Simple Mirror\Simple Mirror.lnk" "$INSTDIR\${APP_EXE}" "" "$INSTDIR\resources\icons\icon.ico" 0
    Goto +2
    CreateShortcut "$SMPROGRAMS\Simple Mirror\Simple Mirror.lnk" "$INSTDIR\${APP_EXE}"
    CreateShortcut "$SMPROGRAMS\Simple Mirror\Uninstall Simple Mirror.lnk" "$INSTDIR\Uninstall.exe"
    IfFileExists "$INSTDIR\resources\icons\icon.ico" 0 +3
    CreateShortcut "$DESKTOP\Simple Mirror.lnk" "$INSTDIR\${APP_EXE}" "" "$INSTDIR\resources\icons\icon.ico" 0
    Goto +2
    CreateShortcut "$DESKTOP\Simple Mirror.lnk" "$INSTDIR\${APP_EXE}"
SectionEnd

Section "Uninstall"
    SetShellVarContext all
    Delete "$DESKTOP\Simple Mirror.lnk"
    Delete "$SMPROGRAMS\Simple Mirror\Simple Mirror.lnk"
    Delete "$SMPROGRAMS\Simple Mirror\Uninstall Simple Mirror.lnk"
    RMDir "$SMPROGRAMS\Simple Mirror"

    RMDir /r "$INSTDIR"
    DeleteRegKey HKLM "${UNINSTALL_KEY}"
    DeleteRegKey HKLM "Software\Simple Mirror"
SectionEnd
