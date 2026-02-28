<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
<context>
    <name>DirectoryChooserWidget</name>
    <message>
        <source>Select</source>
        <translation>Seleziona</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Simple Mirror</source>
        <translation>Specchio semplice</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Origine:</translation>
    </message>
    <message>
        <source>The folder to be backed up.</source>
        <translation>La cartella da salvare.</translation>
    </message>
    <message>
        <source>Select origin folder</source>
        <translation>Seleziona cartella di origine</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation>Destinazione:</translation>
    </message>
    <message>
        <source>A folder inside a back-up medium.</source>
        <translation>Una cartella all&apos;interno di un supporto di backup.</translation>
    </message>
    <message>
        <source>Select destination folder</source>
        <translation>Seleziona cartella di destinazione</translation>
    </message>
    <message>
        <source>Synchronize</source>
        <translation>Sincronizza</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Ferma</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation>Inattivo</translation>
    </message>
    <message>
        <source>Choose two directories to synchronize.</source>
        <translation>Seleziona due cartelle da sincronizzare.</translation>
    </message>
    <message>
        <source>Stopped</source>
        <translation>Fermato</translation>
    </message>
    <message>
        <source>The program has stopped. Press the button to resume.</source>
        <translation>Il programma si è fermato. Premi il pulsante per riprendere.</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Completato</translation>
    </message>
    <message>
        <source>Mirroring complete.</source>
        <translation>Specchiatura terminata.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Non riuscito</translation>
    </message>
    <message>
        <source>Synchronization failed with exit code %1.</source>
        <translation>La sincronizzazione non è riuscita con codice di uscita %1.</translation>
    </message>
    <message>
        <source>Synchronization failed</source>
        <translation>Sincronizzazione non riuscita</translation>
    </message>
    <message>
        <source>Running...</source>
        <translation>In esecuzione...</translation>
    </message>
    <message>
        <source>Comparing the two folders...</source>
        <translation>Confronto delle due cartelle...</translation>
    </message>
    <message>
        <source>Stopping...</source>
        <translation>Arresto in corso...</translation>
    </message>
    <message>
        <source>rsync not found</source>
        <translation>rsync non trovato</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Errore</translation>
    </message>
    <message>
        <source>Synchronization error</source>
        <translation>Errore di sincronizzazione</translation>
    </message>
    <message>
        <source>Notice</source>
        <translation>Avviso</translation>
    </message>
    <message>
        <source>WARNING: POSSIBLE DATA LOSS!</source>
        <translation>ATTENZIONE: POSSIBILE PERDITA DI DATI</translation>
    </message>
    <message>
        <source>Please choose both origin and destination folders.</source>
        <translation>Seleziona sia la cartella di origine sia quella di destinazione.</translation>
    </message>
    <message>
        <source>Cannot access origin folder: %1</source>
        <translation>Impossibile accedere alla cartella di origine: %1</translation>
    </message>
    <message>
        <source>Cannot access destination folder: %1</source>
        <translation>Impossibile accedere alla cartella di destinazione: %1</translation>
    </message>
    <message>
        <source>Origin folder does not exist: %1</source>
        <translation>La cartella di origine non esiste: %1</translation>
    </message>
    <message>
        <source>Destination folder does not exist: %1</source>
        <translation>La cartella di destinazione non esiste: %1</translation>
    </message>
    <message>
        <source>This is a one-way synchronization. The origin will remain unchanged, and any files in the destination folder that do not exist in the origin will be deleted.

By continuing, you confirm that the selected paths are correct, and that you accept your responsibility for any data loss under applicable law.</source>
        <translation>Questa è una sincronizzazione unidirezionale. L&apos;origine rimarrà invariata e tutti i file nella cartella di destinazione che non esistono nell&apos;origine verranno eliminati.

Proseguendo, conferma che i percorsi selezionati sono corretti e che si assume la responsabilità per eventuali perdite di dati ai sensi della legge applicabile.</translation>
    </message>
    <message>
        <source>I understand the risk, continue</source>
        <translation>Comprendo il rischio, proseguire</translation>
    </message>
</context>
<context>
    <name>RsyncRunner</name>
    <message>
        <source>A synchronization is already running.</source>
        <translation>È già in esecuzione una sincronizzazione.</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC is set but does not point to a valid file: %1</source>
        <translation>SIMPLE_MIRROR_RSYNC è impostata ma non punta a un file valido: %1</translation>
    </message>
    <message>
        <source>Deleting %1</source>
        <translation>Eliminazione di %1</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC points to rsync but MSYS2 runtime is missing (msys-2.0.dll not found near rsync, app directory, or working directory): %1</source>
        <translation>SIMPLE_MIRROR_RSYNC punta a rsync, ma il runtime MSYS2 è mancante (msys-2.0.dll non trovata vicino a rsync, nella cartella dell&apos;applicazione o nella cartella di lavoro): %1</translation>
    </message>
    <message>
        <source>Could not find bundled MSYS2 rsync. Run &quot;make bundle-rsync&quot; or &quot;make windows-all&quot;, or set SIMPLE_MIRROR_RSYNC to an MSYS2 rsync.exe.</source>
        <translation>Impossibile trovare il rsync MSYS2 incluso. Eseguire &quot;make bundle-rsync&quot; o &quot;make windows-all&quot;, oppure impostare SIMPLE_MIRROR_RSYNC su un rsync.exe di MSYS2.</translation>
    </message>
    <message>
        <source>Could not find rsync. Set SIMPLE_MIRROR_RSYNC, add rsync to PATH, or bundle &quot;runtime/bin/rsync&quot;.</source>
        <translation>Impossibile trovare rsync. Impostare SIMPLE_MIRROR_RSYNC, aggiungere rsync al PATH oppure includere &quot;runtime/bin/rsync&quot;.</translation>
    </message>
</context>
</TS>
