import { MissionContent } from '@/app/lib/contentTypes'

export const missionContent: MissionContent = {
    title: "Misión",
    lead: "Construir plataformas de ingeniería de software autónomas mediante colaboración continua humano-IA",
    paragraphs: [
        "Rechazamos la noción de sistemas \"terminados\". La inteligencia, ya sea humana o artificial, debe adaptarse, aprender y refinarse continuamente.",
        "Estamos creando un paradigma donde la nueva época se convierte en realidad tangible. Donde los ingenieros aumentan la intuición con el razonamiento de IA.",
        "Esto significa construir sistemas que comprendan la arquitectura del software, no solo generen fragmentos de código.",
        "Nuestra misión es la democratización de la complejidad: hacer que la ingeniería sofisticada sea accesible.",
    ],
    closingStatement: "Die neue Epoche ist keine ferne Vision. Es ist die Infrastruktur, die wir gerade aufbauen.",
    blueprint: [
        {
            id: "ingestion",
            num: "LAYER_01",
            name: "Semantisches Quellenaufnahmesubstrat",
            badge: "AST analysieren",
            telemetryTitle: "SYSTEM::INGESTION_CONTROLLER",
            logs: [
                "$ yugnex core --parse-directory=./src",
                "Codebasisverzeichnis scannen: 1.420 übereinstimmende Dateien.",
                "Erstellen von AST-Referenzen (Abstract Syntax Tree) ...",
                "Aufrufdiagramme und relationale Vektoren zuordnen.",
                "ERFOLGREICH: 12.450 AST-Knoten wurden in den Context Substrate Graph synchronisiert.",
                "Aktive Listener registriert: Dateisystem-Watcher auf --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "LAYER_02",
            name: "Multiagenten-Invariantenlöser",
            badge: "Debatte über Logik",
            telemetryTitle: "SYSTEM::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "Eröffnung des Diskussionsraums mit: [Architekt, Entwickler, Prüfer]",
                "[PO]: Rohe SQL-Abfrageinterpolation in userController.ts:L24 markiert",
                "[Entwickler]: Schlagen Sie einen Regex-Ersatz für die Eingabevalidierung vor.",
                "[Architekt]: ABGELEHNT. Der Regex-Ersatz kann umgangen werden. Muss zur Parameterbindungsabfrage umgeschrieben werden.",
                "[Auditor]: Validierung des parametrisierten Abfragepfads. Invariantenanalyse abgeschlossen.",
                "Konsens erreicht. Generierte Lösung: parametrisierte Anweisungsinjektion.",
            ],
        },
        {
            id: "sandbox",
            num: "LAYER_03",
            name: "Isolierte Verifizierungs-Sandbox-Engine",
            badge: "Testen Exec",
            telemetryTitle: "SYSTEM::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "Container erzeugt. Bild: node-alpine-yugnex:latest",
                "Einfügen überarbeiteter Dateien in das Container-Dateisystem.",
                "Compiler-Validierung wird ausgeführt ... ERFOLGREICH: Exit-Code 0.",
                "Unit-Test-Sweep wird ausgeführt ... 48/48 Tests bestanden (240 ms).",
                "Überwachung von Speicher-Heap-Lecks ... stabil bei 42,1-MB-Sweeps.",
                "Sandbox-Tests abgeschlossen. Verifizierungsstatus: VERIFIED SAFE.",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "Perpetual VCS Synchronizer",
            badge: "Commit-Synchronisierung",
            telemetryTitle: "SYSTEM::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "Lokalen Zweig erstellen: yugnex/patch-secure-auth",
                "Änderungen werden übernommen: 2 Dateien geändert, keine Warnungen.",
                "Commit-Signaturen werden überprüft ... GPG-Signatur validiert.",
                "Verzweigung zum Upstream-VCS verschieben ... fertig.",
                "Pull-Request öffnen: [Security Refactor] Sichere SQL-Abfrageparametrisierung.",
                "Status der VCS-Pipeline: grün, wartet auf Zusammenführung der Prüfer.",
            ],
        },
    ],
    awaitingPipeline: "Warten auf Pipeline-Ausführung ...",
    pipelineIntegrationFlow: "Pipeline-Integrationsfluss",
    triggerDiagnostic: "AUSLÖSERDIAGNOSE",
    runningDiagnostic: "LÄUFT...",
    layerMetas: [
        "Grundsubstrate",
        "Ewige Evolution",
        "Architektonischer Kontext",
        "Erweiterte Validierung",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "Initialisieren Sie AST-Parsing-Schemata",
                },
                {
                    label: "Kausale semantische Knoten abbilden",
                },
                {
                    label: "Instanziieren Sie Docker-Sandbox-Laufzeiten",
                },
            ],
            logs: [
                "ast_parser: Codebasis-Tokens lesen...",
                "dependency_resolver: Einschränkungen der passenden Parameterliste",
                "sandbox_manager: Container-Knoten-Layout wird kompiliert ...",
                "ERFOLGREICH: Grundsubstratschicht voll aktiv.",
            ],
        },
        {
            steps: [
                {
                    label: "Hook-Git-Commit-Pipeline-Ereignisse",
                },
                {
                    label: "Kompilieren Sie Repository-Differenzbäume",
                },
                {
                    label: "Überprüfen Sie architektonische Invariantengrenzen",
                },
            ],
            logs: [
                "vcs_monitor: Hauptzweig-Pushs abhören ...",
                "diff_engine: Parsen von 14 geänderten AST-Dateien",
                "invariant_runner: 8 Validierungsprüfungen testen ...",
                "ERFOLGREICH: Evolutionäre Compilerschleifen abgeschlossen. Build synchronisiert.",
            ],
        },
        {
            steps: [
                {
                    label: "Extrahieren Sie Importpfade für mehrere Module",
                },
                {
                    label: "Skalieren Sie die Grenzen des Kontextbereichs dynamisch",
                },
                {
                    label: "Koordinieren Sie Multi-Agent-Konsensprüfungen",
                },
            ],
            logs: [
                "context_engine: Abhängigkeitsverbindungen zwischen Modulen lesen",
                "agent_consensus: Sicherheitsüberprüfungen mit Entwickleränderungen abgleichen",
                "validation_agent: Analyse von AST-Argumentationsbäumen ...",
                "ERFOLGREICH: Kausalzusammenhänge in Kontextkarten zusammengefasst.",
            ],
        },
        {
            steps: [
                {
                    label: "Überwachen Sie aktive IDE-Arbeitsbereiche",
                },
                {
                    label: "Analysieren Sie Echtzeit-Entwicklerparameter",
                },
                {
                    label: "Strukturdiagnoseberichte ausgeben",
                },
            ],
            logs: [
                "workspace_daemon: aktiv bei Dateisystemänderungen",
                "lint_check: Parameter anhand von Framework-APIs testen",
                "audit_writer: Kompilieren von Notizen zur Dokumentationsintegrität ...",
                "ERFOLGREICH: Architekturkonformität überprüft. 0 Fehler protokolliert.",
            ],
        },
    ],
}
