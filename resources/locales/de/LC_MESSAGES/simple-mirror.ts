<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de_DE">
<context>
    <name>DirectoryChooserWidget</name>
    <message>
        <source>Select</source>
        <translation>Wählen</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Simple Mirror</source>
        <translation>Einfacher Spiegel</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Quelle:</translation>
    </message>
    <message>
        <source>The folder to be backed up.</source>
        <translation>Der Ordner, der gesichert werden soll.</translation>
    </message>
    <message>
        <source>Select origin folder</source>
        <translation>Quellordner auswählen</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation>Ziel:</translation>
    </message>
    <message>
        <source>A folder inside a back-up medium.</source>
        <translation>Ein Ordner auf einem Sicherungsmedium.</translation>
    </message>
    <message>
        <source>Select destination folder</source>
        <translation>Zielordner auswählen</translation>
    </message>
    <message>
        <source>Synchronize</source>
        <translation>Synchronisieren</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Stoppen</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation>Bereit</translation>
    </message>
    <message>
        <source>Choose two directories to synchronize.</source>
        <translation>Wählen Sie zwei Ordner zur Synchronisierung aus.</translation>
    </message>
    <message>
        <source>Stopped</source>
        <translation>Gestoppt</translation>
    </message>
    <message>
        <source>The program has stopped. Press the button to resume.</source>
        <translation>Das Programm wurde gestoppt. Drücken Sie die Schaltfläche, um fortzufahren.</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Fertig</translation>
    </message>
    <message>
        <source>Mirroring complete.</source>
        <translation>Spiegelung abgeschlossen.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Fehlgeschlagen</translation>
    </message>
    <message>
        <source>Synchronization failed with exit code %1.</source>
        <translation>Synchronisierung ist mit Exit-Code %1 fehlgeschlagen.</translation>
    </message>
    <message>
        <source>Synchronization failed</source>
        <translation>Synchronisierung fehlgeschlagen</translation>
    </message>
    <message>
        <source>Running...</source>
        <translation>Läuft...</translation>
    </message>
    <message>
        <source>Comparing the two folders...</source>
        <translation>Vergleiche die beiden Ordner...</translation>
    </message>
    <message>
        <source>Stopping...</source>
        <translation>Wird gestoppt...</translation>
    </message>
    <message>
        <source>rsync not found</source>
        <translation>rsync nicht gefunden</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <source>Synchronization error</source>
        <translation>Synchronisierungsfehler</translation>
    </message>
    <message>
        <source>Notice</source>
        <translation>Hinweis</translation>
    </message>
    <message>
        <source>WARNING: POSSIBLE DATA LOSS!</source>
        <translation>WARNUNG: MÖGLICHER DATENVERLUST!</translation>
    </message>
    <message>
        <source>Please choose both origin and destination folders.</source>
        <translation>Bitte wählen Sie sowohl Quell- als auch Zielordner.</translation>
    </message>
    <message>
        <source>Cannot access origin folder: %1</source>
        <translation>Auf den Quellordner kann nicht zugegriffen werden: %1</translation>
    </message>
    <message>
        <source>Cannot access destination folder: %1</source>
        <translation>Auf den Zielordner kann nicht zugegriffen werden: %1</translation>
    </message>
    <message>
        <source>Origin folder does not exist: %1</source>
        <translation>Quellordner existiert nicht: %1</translation>
    </message>
    <message>
        <source>Destination folder does not exist: %1</source>
        <translation>Zielordner existiert nicht: %1</translation>
    </message>
    <message>
        <source>This is a one-way synchronization. The origin will remain unchanged, and any files in the destination folder that do not exist in the origin will be deleted.

By continuing, you confirm that the selected paths are correct, and that you accept your responsibility for any data loss under applicable law.</source>
        <translation>Dies ist eine Einweg-Synchronisierung. Der Quellordner bleibt unverändert, und alle Dateien im Zielordner, die im Quellordner nicht vorhanden sind, werden gelöscht.

Indem Sie fortfahren, bestätigen Sie, dass die ausgewählten Pfade korrekt sind und dass Sie die Verantwortung für Datenverlust nach geltendem Recht übernehmen.</translation>
    </message>
    <message>
        <source>I understand the risk, continue</source>
        <translation>Ich verstehe das Risiko, fortfahren</translation>
    </message>
</context>
<context>
    <name>RsyncRunner</name>
    <message>
        <source>A synchronization is already running.</source>
        <translation>Eine Synchronisierung läuft bereits.</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC is set but does not point to a valid file: %1</source>
        <translation>SIMPLE_MIRROR_RSYNC ist gesetzt, zeigt aber nicht auf eine gültige Datei: %1</translation>
    </message>
    <message>
        <source>Deleting %1</source>
        <translation>Lösche %1</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC points to rsync but MSYS2 runtime is missing (msys-2.0.dll not found near rsync, app directory, or working directory): %1</source>
        <translation>SIMPLE_MIRROR_RSYNC zeigt auf rsync, aber die MSYS2-Laufzeit fehlt (msys-2.0.dll wurde weder neben rsync noch im App-Verzeichnis noch im Arbeitsverzeichnis gefunden): %1</translation>
    </message>
    <message>
        <source>Could not find bundled MSYS2 rsync. Run &quot;make bundle-rsync&quot; or &quot;make windows-all&quot;, or set SIMPLE_MIRROR_RSYNC to an MSYS2 rsync.exe.</source>
        <translation>Gebündeltes MSYS2-rsync konnte nicht gefunden werden. Führen Sie &quot;make bundle-rsync&quot; oder &quot;make windows-all&quot; aus, oder setzen Sie SIMPLE_MIRROR_RSYNC auf eine MSYS2-rsync.exe.</translation>
    </message>
    <message>
        <source>Could not find rsync. Set SIMPLE_MIRROR_RSYNC, add rsync to PATH, or bundle &quot;runtime/bin/rsync&quot;.</source>
        <translation>rsync konnte nicht gefunden werden. Setzen Sie SIMPLE_MIRROR_RSYNC, fügen Sie rsync zum PATH hinzu oder bündeln Sie &quot;runtime/bin/rsync&quot;.</translation>
    </message>
</context>
</TS>
