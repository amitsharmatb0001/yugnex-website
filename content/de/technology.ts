import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "Das Problem mit aktuellen KI-Codierungstools",
    problem: {
        title: "Sie generieren Code, verstehen aber keine Systeme",
        subtitle: "Die heutigen KI-Codierungsassistenten haben beeindruckende Ergebnisse erzielt – sie vervollständigen Code automatisch, generieren Funktionen und übersetzen zwischen Sprachen. Sie alle haben jedoch eine grundlegende Einschränkung gemeinsam: Sie behandeln Software als zu generierenden Text und nicht als zu verstehende Systeme.",
        body: "Software-Engineering ist kein Problem der Textgenerierung. Es handelt sich um ein systemisches Denkproblem.",
        limitations: [
            {
                title: "Das Kontextproblem",
                description: "Codebasen enthalten Millionen von Zeilen in Tausenden von Dateien. Aktuelle Tools versuchen, dies durch einfachen Abruf zu überbrücken, aber Relevanz in Software ist nicht textliche Ähnlichkeit – es geht um kausale Zusammenhänge, Abhängigkeitsketten und architektonische Grenzen.",
            },
            {
                title: "Die Argumentationslücke",
                description: "Es gibt einen grundlegenden Unterschied zwischen der Generierung syntaktisch korrekten Codes und dem Treffen fundierter technischer Entscheidungen. Wenn erfahrene Ingenieure Code ändern, berücksichtigen sie systemweite Auswirkungen auf die Architektur, Auswirkungen von Abhängigkeiten, Leistungseinbußen und Wartbarkeit.",
            },
            {
                title: "Die Validierungslücke",
                description: "Software-Engineering erfordert Korrektheit, nicht Plausibilität. Aktuelle Tools verfügen nicht über Mechanismen zur Validierung, die über die Syntaxprüfung hinausgehen. Sie können nicht darüber nachdenken, ob Änderungen Systeminvarianten aufrechterhalten, architektonische Grenzen respektieren oder Sicherheitslücken schaffen.",
            },
        ],
    },
    approach: {
        title: "Entwickelt für Software-Engineering",
        subtitle: "Wir begannen mit einer anderen Frage: Nicht „Wie kann KI besseren Code schreiben?“ Aber „Wie kann KI Softwaresysteme so verstehen wie erfahrene Ingenieure?“",
        sections: [
            {
                title: "Spezialisierung statt Generalisierung",
                body: "Verschiedene Aspekte des Software-Engineerings erfordern grundlegend unterschiedliche Arten der Argumentation. Anstatt alles in einem einzigen Modell zu komprimieren, verwenden wir spezielle KI-Komponenten, die jeweils für bestimmte Bereiche des Software-Argumentation entwickelt wurden, und arbeiten wie ein Ingenieurteam zusammen.",
            },
            {
                title: "Kollaboratives Denken",
                body: "Softwareentscheidungen erfordern oft die Abwägung konkurrierender Anliegen. Unsere Architektur ermöglicht es spezialisierten Komponenten, Kontexte auszutauschen, Annahmen zu hinterfragen und durch strukturierte Koordination auf einen Konsens hinzuarbeiten.",
            },
            {
                title: "Systemweites Verständnis",
                body: "Softwareverständnis funktioniert auf mehreren Ebenen: Syntax, Semantik, Architekturmuster, Entwurfsabsicht und systemweite Eigenschaften. Wir verwenden mehrschichtiges Denken, bei dem verschiedene Komponenten auf unterschiedlichen Abstraktionsebenen agieren.",
            },
            {
                title: "Kontext jenseits des Abrufs",
                body: "Anstatt unzusammenhängende Codeschnipsel zu extrahieren, entwickeln wir Ansätze, um dynamische Darstellungen von Systembeziehungen zu erstellen und dabei nicht nur Code, sondern das Netz aus Abhängigkeiten, Invarianten und Architekturgrenzen zu erfassen.",
            },
        ],
    },
    difference: {
        title: "Der Unterschied",
        comparison: [
            {
                label: "Aktuelle Tools",
                value: "Code generieren → Syntax optimieren → Innerhalb von Kontextgrenzen arbeiten → Allzweckarchitekturen",
            },
            {
                label: "Unser Ansatz",
                value: "Systeme verstehen → Argumente zur Architektur → Dynamische Darstellungen erstellen → Speziell für die Softwareentwicklung entwickelt",
            },
        ],
    },
    diagnosticsTitle: "Interaktive Einschränkungsdiagnose",
    approachTitle: "Unser mehrschichtiger Ansatz",
    debateTitle: "Konsens zum autonomen Analysator",
    debateSubtitle: "Bewegen Sie den Mauszeiger über Codezeilen, um das Multi-Agent-Konsensgremium von YugNex zu aktivieren, in dem Sicherheits- und Refactoring-Bedenken diskutiert werden.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[INFO] Repository-Architektur-Trace wird ausgeführt …",
                "[WARN] Kontextlimit bei Dateiindex 512 erreicht.",
                "[FAIL] context_overflow: Die Stapelgröße von 1.048.576 Byte hat das Standardkontextfenster überschritten.",
                "[KRITISCH] Parser abgebrochen. Herkömmliches LLM ist nicht in der Lage, systemweite Beziehungen aufzulösen.",
                "[YUGNEX-LÖSUNG] Umleitung zum kausalen Kontextsubstrat ...",
                "[ERFOLGREICH] Kausaldiagramm-Trace abgeschlossen. 48.091 Dateien mit persistenten Cache-Knoten indiziert.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[INFO] Parameter-Refactoring-Job wird initialisiert...",
                "[INFO] Der Analysator führt eine symbolische Argumentationsprüfung über Abhängigkeitsknoten hinweg durch ...",
                "[WARNUNG] Vom herkömmlichen Assistenten generierter Code: Parameterliste von userService.ts stimmt nicht überein (fehlendes Token).",
                "[KRITISCH] Kompilierungsfehler: Die Codesyntax ist gültig, unterbricht jedoch den Aufruf in der Produktion.",
                "[YUGNEX-LÖSUNG] Der symbolische Argumentationsblock hat eine ungültige Parameterliste abgefangen. Änderungen werden rückgängig gemacht...",
                "[ERFOLGREICH] Parametrisierte Bindungen und synchronisierte Aufrufer in 14 abhängigen Modulen angewendet.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[INFO] Überprüfung der CI-Pipeline wird gestartet …",
                "[INFO] Scannen von Modellen/auf Sicherheitsvektoren für die Injektion von Benutzerabfragen ...",
                "[WARN] direct_interpolation: Abfrageinterpolation in ProfileSearch.ts erkannt.",
                "[FAIL] Invariante 02 verletzt: Datenbankparameter müssen gebunden werden. Build-Status: BLOCKIERT.",
                "[YUGNEX-LÖSUNG] Automatische Korrektur von Parametern mit parametrisierten SQL-Abfragen ...",
                "[ERFOLGREICH] Invarianten bestanden. Sicherheitsüberprüfungen überprüft (0 Risiken gefunden). Build veröffentlicht.",
            ],
        },
    ],
    approachDiagrams: [
        "[AST Parser Agent] =======> [Causal Solver Agent]\n                                   ||\n                                   \\/ \n[Consensus Agent] <======== [Refactor Agent]\nSTATUS: Spezialisiertes kollaboratives Denken online.",
        "Agent[Architekt]: „Direkte SQL-Interpolation verstößt gegen den Standard.“\nAgent[Sicherheit]: „Sicherheitslücke bestätigt. Build mit automatischer Blockierung.“\nAgent[Entwickler]: „Abfragebindungen werden aktualisiert. Fix wird eingefügt …“\nSTATUS: Konsens erreicht. Code erfolgreich gepatcht.",
        "Level 5 (Architektonische Designmuster) – AKTIV\nLevel 4 (Modul-Interdependenzen) – AKTIV\nEbene 3 (Semantische Variablenbindung) – AKTIV\nEbene 2 (Abstrakter Syntaxbaum) – AKTIV\nSTATUS: Systemweite mehrschichtige Argumentation überprüft.",
        "Zwischengespeicherte kausale Zusammenhänge: 184.902\nAktive Kontextknoten: 12.042\nSuchlatenz: 1,2 ms (98 % Beschleunigung gegenüber der LLM-Suche)\nSTATUS: Kausaldiagramme vollständig synchronisiert.",
    ],
    liveTelemetry: "Live-Telemetriediagramm",
    codeLens: {
        panelTitle: "active_routes.js – Hover-/Klicklinien mit Alarmknoten",
        insightTitleAutoFix: "YugNex Auto-Fix-Empfehlung",
        insightTitleDebate: "Debatte zur Agentenlösung",
        solutionsDefault: "Bewegen Sie den Mauszeiger über die Codezeilen auf der linken Seite, um die autonome Analyselinse von YugNex zu aktivieren.",
        lines: [
            {
            },
            {
                warningTitle: "SQL-Injection-Sicherheitslücke",
                warningDesc: "Durch die direkte Interpolation von Benutzereingaben in eine SQL-Abfragezeichenfolge können Angreifer bösartige SQL-Befehle einschleusen und die Authentifizierung umgehen oder nicht autorisierte Tabellen anzeigen.",
                debate: [
                    {
                        role: "Architekt",
                        text: "Direkte SQL-Abfrageinterpolation erkannt. Dies verstößt gegen unsere Sicherheitsstandards.",
                    },
                    {
                        role: "Sicherheitsprüfer",
                        text: "Remote-Exploit über Statusparameter möglich. Commit blockiert.",
                    },
                    {
                        role: "Entwickler",
                        text: "Abfrage mit db.execute(query, [status]) in parametrisierte Bindung umschreiben.",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
                warningTitle: "N+1-Abfrageengpass",
                warningDesc: "Das Ausführen einer separaten Datenbankabfrage innerhalb einer Schleife führt zu N Abfragen für N Benutzer. Dies führt zu starken Latenzspitzen und einer Serverüberlastung, da die Datenbankverbindungspools ausgelastet sind.",
                debate: [
                    {
                        role: "Architekt",
                        text: "Engpass bei relationalen Datenbanken. Das Ausführen von Abfragen innerhalb einer Schleife ist blockiert.",
                    },
                    {
                        role: "Entwickler",
                        text: "Aggregieren von Benutzer-IDs, um Profile in einer einzigen SELECT ... WHERE IN (?)-Abfrage stapelweise abzurufen.",
                    },
                    {
                        role: "QA-Auditor",
                        text: "Verifiziert. Benchmark-Metriken zeigen, dass die Gesamtzahl der ausgeführten Abfragen von N auf 1 gesunken ist.",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
            },
        ],
    },
}
