<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl_NL">
<context>
    <name>DirectoryChooserWidget</name>
    <message>
        <source>Select</source>
        <translation>Selecteren</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Simple Mirror</source>
        <translation>Eenvoudige spiegel</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Bron:</translation>
    </message>
    <message>
        <source>The folder to be backed up.</source>
        <translation>De map die moet worden geback-upt.</translation>
    </message>
    <message>
        <source>Select origin folder</source>
        <translation>Bronmap selecteren</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation>Doel:</translation>
    </message>
    <message>
        <source>A folder inside a back-up medium.</source>
        <translation>Een map op een back-upmedium.</translation>
    </message>
    <message>
        <source>Select destination folder</source>
        <translation>Doelmap selecteren</translation>
    </message>
    <message>
        <source>Synchronize</source>
        <translation>Synchroniseren</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Stoppen</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation>Inactief</translation>
    </message>
    <message>
        <source>Choose two directories to synchronize.</source>
        <translation>Kiest u twee mappen om te synchroniseren.</translation>
    </message>
    <message>
        <source>Stopped</source>
        <translation>Gestopt</translation>
    </message>
    <message>
        <source>The program has stopped. Press the button to resume.</source>
        <translation>Het programma is gestopt. Drukt u op de knop om te hervatten.</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Voltooid</translation>
    </message>
    <message>
        <source>Mirroring complete.</source>
        <translation>Spiegelen afgerond.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Mislukt</translation>
    </message>
    <message>
        <source>Synchronization failed with exit code %1.</source>
        <translation>Synchronisatie mislukt met afsluitcode %1.</translation>
    </message>
    <message>
        <source>Synchronization failed</source>
        <translation>Synchronisatie mislukt</translation>
    </message>
    <message>
        <source>Running...</source>
        <translation>Bezig...</translation>
    </message>
    <message>
        <source>Comparing the two folders...</source>
        <translation>De twee mappen worden vergeleken...</translation>
    </message>
    <message>
        <source>Stopping...</source>
        <translation>Wordt gestopt...</translation>
    </message>
    <message>
        <source>rsync not found</source>
        <translation>rsync niet gevonden</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <source>Synchronization error</source>
        <translation>Synchronisatiefout</translation>
    </message>
    <message>
        <source>Notice</source>
        <translation>Melding</translation>
    </message>
    <message>
        <source>WARNING: POSSIBLE DATA LOSS!</source>
        <translation>WAARSCHUWING: MOGELIJK GEGEVENSVERLIES</translation>
    </message>
    <message>
        <source>Please choose both origin and destination folders.</source>
        <translation>Selecteert u zowel de bron- als de doelmap.</translation>
    </message>
    <message>
        <source>Cannot access origin folder: %1</source>
        <translation>Kan geen toegang krijgen tot de bronmap: %1</translation>
    </message>
    <message>
        <source>Cannot access destination folder: %1</source>
        <translation>Kan geen toegang krijgen tot de doelmap: %1</translation>
    </message>
    <message>
        <source>Origin folder does not exist: %1</source>
        <translation>Bronmap bestaat niet: %1</translation>
    </message>
    <message>
        <source>Destination folder does not exist: %1</source>
        <translation>Doelmap bestaat niet: %1</translation>
    </message>
    <message>
        <source>This is a one-way synchronization. The origin will remain unchanged, and any files in the destination folder that do not exist in the origin will be deleted.

By continuing, you confirm that the selected paths are correct, and that you accept your responsibility for any data loss under applicable law.</source>
        <translation>Dit is een eenrichtingssynchronisatie. De bron blijft ongewijzigd en alle bestanden in de doelmap die niet in de bron bestaan, worden verwijderd.

Door door te gaan, bevestigt u dat de geselecteerde paden correct zijn en dat u uw verantwoordelijkheid aanvaardt voor eventueel gegevensverlies volgens het toepasselijke recht.</translation>
    </message>
    <message>
        <source>I understand the risk, continue</source>
        <translation>Ik begrijp het risico, doorgaan</translation>
    </message>
</context>
<context>
    <name>RsyncRunner</name>
    <message>
        <source>A synchronization is already running.</source>
        <translation>Er draait al een synchronisatie.</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC is set but does not point to a valid file: %1</source>
        <translation>SIMPLE_MIRROR_RSYNC is ingesteld maar verwijst niet naar een geldig bestand: %1</translation>
    </message>
    <message>
        <source>Deleting %1</source>
        <translation>Verwijderen van %1</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC points to rsync but MSYS2 runtime is missing (msys-2.0.dll not found near rsync, app directory, or working directory): %1</source>
        <translation>SIMPLE_MIRROR_RSYNC verwijst naar rsync, maar de MSYS2-runtime ontbreekt (msys-2.0.dll is niet gevonden naast rsync, in de appmap of in de werkmap): %1</translation>
    </message>
    <message>
        <source>Could not find bundled MSYS2 rsync. Run &quot;make bundle-rsync&quot; or &quot;make windows-all&quot;, or set SIMPLE_MIRROR_RSYNC to an MSYS2 rsync.exe.</source>
        <translation>Gebundelde MSYS2-rsync is niet gevonden. Voer &quot;make bundle-rsync&quot; of &quot;make windows-all&quot; uit, of stel SIMPLE_MIRROR_RSYNC in op een MSYS2-rsync.exe.</translation>
    </message>
    <message>
        <source>Could not find rsync. Set SIMPLE_MIRROR_RSYNC, add rsync to PATH, or bundle &quot;runtime/bin/rsync&quot;.</source>
        <translation>Kon rsync niet vinden. Stel SIMPLE_MIRROR_RSYNC in, voeg rsync toe aan PATH of bundel &quot;runtime/bin/rsync&quot;.</translation>
    </message>
</context>
</TS>
