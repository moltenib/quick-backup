<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>DirectoryChooserWidget</name>
    <message>
        <source>Select</source>
        <translation>Sélectionner</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Simple Mirror</source>
        <translation>Miroir simple</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Origine :</translation>
    </message>
    <message>
        <source>The folder to be backed up.</source>
        <translation>Le dossier à sauvegarder.</translation>
    </message>
    <message>
        <source>Select origin folder</source>
        <translation>Sélectionner le dossier d&apos;origine</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation>Destination :</translation>
    </message>
    <message>
        <source>A folder inside a back-up medium.</source>
        <translation>Un dossier sur un support de sauvegarde.</translation>
    </message>
    <message>
        <source>Select destination folder</source>
        <translation>Sélectionner le dossier de destination</translation>
    </message>
    <message>
        <source>Synchronize</source>
        <translation>Synchroniser</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Arrêter</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation>Inactif</translation>
    </message>
    <message>
        <source>Choose two directories to synchronize.</source>
        <translation>Choisissez deux dossiers à synchroniser.</translation>
    </message>
    <message>
        <source>Stopped</source>
        <translation>Arrêté</translation>
    </message>
    <message>
        <source>The program has stopped. Press the button to resume.</source>
        <translation>Le programme s&apos;est arrêté. Appuyez sur le bouton pour reprendre.</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Terminé</translation>
    </message>
    <message>
        <source>Mirroring complete.</source>
        <translation>Mise en miroir achevée.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Échec</translation>
    </message>
    <message>
        <source>Synchronization failed with exit code %1.</source>
        <translation>La synchronisation a échoué avec le code de sortie %1.</translation>
    </message>
    <message>
        <source>Synchronization failed</source>
        <translation>Échec de la synchronisation</translation>
    </message>
    <message>
        <source>Running...</source>
        <translation>En cours...</translation>
    </message>
    <message>
        <source>Comparing the two folders...</source>
        <translation>Comparaison des deux dossiers...</translation>
    </message>
    <message>
        <source>Stopping...</source>
        <translation>Arrêt en cours...</translation>
    </message>
    <message>
        <source>rsync not found</source>
        <translation>rsync introuvable</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <source>Synchronization error</source>
        <translation>Erreur de synchronisation</translation>
    </message>
    <message>
        <source>Notice</source>
        <translation>Avertissement</translation>
    </message>
    <message>
        <source>WARNING: POSSIBLE DATA LOSS!</source>
        <translation>AVERTISSEMENT : PERTE DE DONNÉES POSSIBLE</translation>
    </message>
    <message>
        <source>Please choose both origin and destination folders.</source>
        <translation>Veuillez sélectionner les dossiers d&apos;origine et de destination.</translation>
    </message>
    <message>
        <source>Cannot access origin folder: %1</source>
        <translation>Impossible d&apos;accéder au dossier d&apos;origine : %1</translation>
    </message>
    <message>
        <source>Cannot access destination folder: %1</source>
        <translation>Impossible d&apos;accéder au dossier de destination : %1</translation>
    </message>
    <message>
        <source>Origin folder does not exist: %1</source>
        <translation>Le dossier d&apos;origine n&apos;existe pas : %1</translation>
    </message>
    <message>
        <source>Destination folder does not exist: %1</source>
        <translation>Le dossier de destination n&apos;existe pas : %1</translation>
    </message>
    <message>
        <source>This is a one-way synchronization. The origin will remain unchanged, and any files in the destination folder that do not exist in the origin will be deleted.

By continuing, you confirm that the selected paths are correct, and that you accept your responsibility for any data loss under applicable law.</source>
        <translation>Il s&apos;agit d&apos;une synchronisation unidirectionnelle. Le dossier source restera inchangé et tous les fichiers du dossier de destination qui n&apos;existent pas dans le dossier source seront supprimés.

En continuant, vous confirmez que les chemins sélectionnés sont corrects et que vous acceptez votre responsabilité en cas de perte de données au regard du droit applicable.</translation>
    </message>
    <message>
        <source>I understand the risk, continue</source>
        <translation>Je comprends le risque, continuer</translation>
    </message>
</context>
<context>
    <name>RsyncRunner</name>
    <message>
        <source>A synchronization is already running.</source>
        <translation>Une synchronisation est déjà en cours.</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC is set but does not point to a valid file: %1</source>
        <translation>SIMPLE_MIRROR_RSYNC est défini mais ne pointe pas vers un fichier valide : %1</translation>
    </message>
    <message>
        <source>Deleting %1</source>
        <translation>Suppression de %1</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC points to rsync but MSYS2 runtime is missing (msys-2.0.dll not found near rsync, app directory, or working directory): %1</source>
        <translation>SIMPLE_MIRROR_RSYNC pointe vers rsync, mais l&apos;environnement d&apos;exécution MSYS2 est manquant (msys-2.0.dll introuvable près de rsync, dans le dossier de l&apos;application ou dans le dossier de travail) : %1</translation>
    </message>
    <message>
        <source>Could not find bundled MSYS2 rsync. Run &quot;make bundle-rsync&quot; or &quot;make windows-all&quot;, or set SIMPLE_MIRROR_RSYNC to an MSYS2 rsync.exe.</source>
        <translation>Impossible de trouver le rsync MSYS2 fourni. Exécutez &quot;make bundle-rsync&quot; ou &quot;make windows-all&quot;, ou définissez SIMPLE_MIRROR_RSYNC vers un rsync.exe MSYS2.</translation>
    </message>
    <message>
        <source>Could not find rsync. Set SIMPLE_MIRROR_RSYNC, add rsync to PATH, or bundle &quot;runtime/bin/rsync&quot;.</source>
        <translation>Impossible de trouver rsync. Définissez SIMPLE_MIRROR_RSYNC, ajoutez rsync au PATH, ou incluez &quot;runtime/bin/rsync&quot;.</translation>
    </message>
</context>
</TS>
