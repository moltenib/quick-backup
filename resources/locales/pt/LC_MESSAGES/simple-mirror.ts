<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_PT">
<context>
    <name>DirectoryChooserWidget</name>
    <message>
        <source>Select</source>
        <translation>Selecionar</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Simple Mirror</source>
        <translation>Espelho simples</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Origem:</translation>
    </message>
    <message>
        <source>The folder to be backed up.</source>
        <translation>A pasta a ser copiada.</translation>
    </message>
    <message>
        <source>Select origin folder</source>
        <translation>Selecionar pasta de origem</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation>Destino:</translation>
    </message>
    <message>
        <source>A folder inside a back-up medium.</source>
        <translation>Uma pasta dentro de um meio de backup.</translation>
    </message>
    <message>
        <source>Select destination folder</source>
        <translation>Selecionar pasta de destino</translation>
    </message>
    <message>
        <source>Synchronize</source>
        <translation>Sincronizar</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Parar</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation>Inativo</translation>
    </message>
    <message>
        <source>Choose two directories to synchronize.</source>
        <translation>Escolha duas pastas para sincronizar.</translation>
    </message>
    <message>
        <source>Stopped</source>
        <translation>Parado</translation>
    </message>
    <message>
        <source>The program has stopped. Press the button to resume.</source>
        <translation>O programa foi interrompido. Prima o botão para retomar.</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Concluído</translation>
    </message>
    <message>
        <source>Mirroring complete.</source>
        <translation>Espelhamento finalizado.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Falhou</translation>
    </message>
    <message>
        <source>Synchronization failed with exit code %1.</source>
        <translation>A sincronização falhou com o código de saída %1.</translation>
    </message>
    <message>
        <source>Synchronization failed</source>
        <translation>Sincronização falhou</translation>
    </message>
    <message>
        <source>Running...</source>
        <translation>Em execução...</translation>
    </message>
    <message>
        <source>Comparing the two folders...</source>
        <translation>Comparando as duas pastas...</translation>
    </message>
    <message>
        <source>Stopping...</source>
        <translation>A parar...</translation>
    </message>
    <message>
        <source>rsync not found</source>
        <translation>rsync não encontrado</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erro</translation>
    </message>
    <message>
        <source>Synchronization error</source>
        <translation>Erro de sincronização</translation>
    </message>
    <message>
        <source>Notice</source>
        <translation>Aviso</translation>
    </message>
    <message>
        <source>WARNING: POSSIBLE DATA LOSS!</source>
        <translation>AVISO: POSSÍVEL PERDA DE DADOS</translation>
    </message>
    <message>
        <source>Please choose both origin and destination folders.</source>
        <translation>Selecione as pastas de origem e destino.</translation>
    </message>
    <message>
        <source>Cannot access origin folder: %1</source>
        <translation>Não é possível aceder à pasta de origem: %1</translation>
    </message>
    <message>
        <source>Cannot access destination folder: %1</source>
        <translation>Não é possível aceder à pasta de destino: %1</translation>
    </message>
    <message>
        <source>Origin folder does not exist: %1</source>
        <translation>A pasta de origem não existe: %1</translation>
    </message>
    <message>
        <source>Destination folder does not exist: %1</source>
        <translation>A pasta de destino não existe: %1</translation>
    </message>
    <message>
        <source>This is a one-way synchronization. The origin will remain unchanged, and any files in the destination folder that do not exist in the origin will be deleted.

By continuing, you confirm that the selected paths are correct, and that you accept your responsibility for any data loss under applicable law.</source>
        <translation>Esta é uma sincronização unidirecional. A origem permanecerá inalterada e todos os ficheiros na pasta de destino que não existam na origem serão eliminados.

Ao continuar, confirma que os caminhos selecionados estão corretos e que assume a responsabilidade por qualquer perda de dados ao abrigo da lei aplicável.</translation>
    </message>
    <message>
        <source>I understand the risk, continue</source>
        <translation>Compreendo o risco, continuar</translation>
    </message>
</context>
<context>
    <name>RsyncRunner</name>
    <message>
        <source>A synchronization is already running.</source>
        <translation>Já existe uma sincronização em execução.</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC is set but does not point to a valid file: %1</source>
        <translation>SIMPLE_MIRROR_RSYNC está definido mas não aponta para um ficheiro válido: %1</translation>
    </message>
    <message>
        <source>Deleting %1</source>
        <translation>A eliminar %1</translation>
    </message>
    <message>
        <source>SIMPLE_MIRROR_RSYNC points to rsync but MSYS2 runtime is missing (msys-2.0.dll not found near rsync, app directory, or working directory): %1</source>
        <translation>SIMPLE_MIRROR_RSYNC aponta para o rsync, mas o runtime MSYS2 está em falta (msys-2.0.dll não encontrada junto do rsync, na pasta da aplicação ou na pasta de trabalho): %1</translation>
    </message>
    <message>
        <source>Could not find bundled MSYS2 rsync. Run &quot;make bundle-rsync&quot; or &quot;make windows-all&quot;, or set SIMPLE_MIRROR_RSYNC to an MSYS2 rsync.exe.</source>
        <translation>Não foi possível encontrar o rsync MSYS2 incluído. Execute &quot;make bundle-rsync&quot; ou &quot;make windows-all&quot;, ou defina SIMPLE_MIRROR_RSYNC para um rsync.exe do MSYS2.</translation>
    </message>
    <message>
        <source>Could not find rsync. Set SIMPLE_MIRROR_RSYNC, add rsync to PATH, or bundle &quot;runtime/bin/rsync&quot;.</source>
        <translation>Não foi possível encontrar o rsync. Defina SIMPLE_MIRROR_RSYNC, adicione o rsync ao PATH ou inclua &quot;runtime/bin/rsync&quot;.</translation>
    </message>
</context>
</TS>
