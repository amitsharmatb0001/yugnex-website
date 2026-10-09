import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "Vision",
    lead: "Der Übergang zu einer neuen Epoche anhaltender, sich weiterentwickelnder technischer Intelligenz",
    paragraphs: [
        "Wir treten in eine neue Ära ein, in der die Softwareentwicklung nicht länger durch die kognitive Bandbreite des Menschen oder die Vergänglichkeit aktueller Tools eingeschränkt ist.",
        "YugNex stellt die Brücke zwischen der „Yug“ (Epoche) der rein menschlichen Technik und der „Nex“ (nächsten) Ära kollaborativer, autonomer Systeme dar.",
        "Unsere Vision ist es, eine beständige digitale Intelligenz zu schaffen, die Software nicht nur als Text, sondern als lebendiges, sich entwickelndes System versteht und dabei Absicht, Kontext und Argumentation über den gesamten Lebenszyklus hinweg bewahrt.",
        "Wir glauben, dass die Zukunft der Software in der symbiotischen Beziehung zwischen menschlicher Kreativität und maschineller Kontinuität liegt, in der KI nicht nur hilft, sondern wirklich an unserer Seite arbeitet.",
    ],
    oldYugTitle: "Der alte Yug",
    oldYugDesc: "Softwareentwicklung nur für Menschen. Eingeschränkt durch individuelle kognitive Grenzen, was zu Softwareverfall, Kontextfragmentierung und angehäufter technischer Verschuldung führt.",
    newNexTitle: "Der nächste Nex",
    newNexDesc: "Autonomes kollaboratives Engineering. Ein persistentes, semantisches Argumentationssubstrat, das Ihre Architektur versteht, Invarianten überprüft und mit Ihnen zusammenarbeitet.",
    labels: {
        contextHorizon: "Kontexthorizont",
        dependencyTracing: "Systemische Abhängigkeitsverfolgung",
        codebaseLifecycle: "Codebasis-Lebenszyklus",
        verificationLoop: "Verifizierungsschleife",
    },
    oldValues: {
        contextHorizon: "~100.000 Token (fragmentiert)",
        dependencyTracing: "Manuell / Ungefähr",
        codebaseLifecycle: "Entropie und Abbau",
        verificationLoop: "Tests nach der Implementierung",
    },
    newValues: {
        contextHorizon: "Darstellung unendlicher Graphen",
        dependencyTracing: "Dynamischer AST-Trace (kausal)",
        codebaseLifecycle: "Überarbeitet / Null-Schulden",
        verificationLoop: "Sandbox-Invarianten vor dem Festschreiben",
    },
    pillarsTitle: "Kognitive Substratsäulen",
    pillars: [
        {
            id: "context",
            name: "Kontextsynthesesubstrat",
            description: "Überbrückt Rohquellverzeichnisse in einer einheitlichen, mehrdimensionalen semantischen Diagrammdarstellung.",
            details: "Im Gegensatz zu herkömmlichen abrufgestützten Codierungsassistenten, die auf String-Matching oder flacher Vektorindizierung basieren, arbeitet unser System direkt mit systemweiten Abstract Syntax Tree (AST)-Beziehungen, Datenflüssen und Abhängigkeitsnetzwerken. Es verfolgt Absichten und Argumentationspfade über Dateien hinweg und bewahrt so die absolute Kontextkontinuität.",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "Causal Reasoning Engine",
            description: "Wägt Kompromisse ab, koordiniert spezialisierte Agenten und bewertet systemische Auswirkungen vorgeschlagener Änderungen.",
            details: "Softwareentwicklung ist ein logisches Problem. Unser Multi-Agent-Substrat vereint spezialisierte Agenten, die verschiedene Software-Engineering-Funktionen repräsentieren (Architekt, Entwickler, Sicherheitsprüfer, Qualitätssicherung). Durch strukturierte, mehrstufige Argumentationsdebatten stellen sie einen Konsens über Umsetzungspfade her, bevor sie eine einzige Zeile schreiben.",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "Perpetual Invariante Verification",
            description: "Gewährleistet die Ausführungssicherheit, indem alle vorgeschlagenen Änderungen in sicheren Sandboxen ausgeführt, überprüft und getestet werden.",
            details: "Syntaktisch korrekter Code ist nicht das Endziel. YugNex führt empirische Validierungen in isolierten Containerumgebungen durch. Es stellt sicher, dass neuer Code vorab festgelegten Architekturinvarianten entspricht, die Grenzen von Unit-Tests überschreitet und keine Sicherheitslücken oder Verbindungslecks mit sich bringt.",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "System synapsiert",
    telemetryTitle: "Substratmetriken",
    telemetryStatus: "LÄUFT",
    pillarMetas: [
        "Systemgrenzen",
        "Die nächste Epoche",
        "Digitale Intelligenz",
        "Mensch-KI-Symbiose",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "Kognitive Bandbreitenspanne",
                    value: "1024x erweitern",
                    pct: 95,
                },
                {
                    label: "Parser-Speicheraufwand",
                    value: "-92 % Reduzierung",
                    pct: 92,
                },
                {
                    label: "Kontextkohärenzrate",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core: Initialisierung der semantischen Abhängigkeitskarte",
                "cortex_substrat: Verfolgung struktureller Beziehungen",
                "thread_evaluator: Analysieren von AST-Knoten im Hintergrund ...",
                "Status: Aktive Argumentationsgrenzen festgelegt.",
            ],
        },
        {
            stats: [
                {
                    label: "Latenz der Mensch-KI-Synchronisierung",
                    value: "< 2,4 ms",
                    pct: 98,
                },
                {
                    label: "Tiefe der Konsenskonvergenz",
                    value: "Level 12 erreicht",
                    pct: 88,
                },
                {
                    label: "Schnittstellen-Feedback-Index",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge: Verbindung neuronaler Konsenskanäle",
                "Koordinator: befragende PO-, Architekten- und Entwickleragenten",
                "Konsens: Code-Empfehlungen auflösen...",
                "Status: Kontinuierliche autonome Zusammenarbeit online.",
            ],
        },
        {
            stats: [
                {
                    label: "Erfolg bei der Absichtserhaltung",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "Tiefe der Kausalverbindung",
                    value: "12.042 Routen",
                    pct: 91,
                },
                {
                    label: "Status-Snapshot-Lebenszyklus",
                    value: "Kontinuierlich",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache: Repository-Topologieknoten werden geladen",
                "causal_mapper: Zwischenspeicherung von 4.920 Linkaktualisierungen",
                "state_preserver: Überprüfung der Code-Design-Invariantenprüfungen ...",
                "Status: Persistente Systemintelligenz betriebsbereit.",
            ],
        },
        {
            stats: [
                {
                    label: "Co-Engineering-Produktivität",
                    value: "+184,2 % Steigerung",
                    pct: 94,
                },
                {
                    label: "Validierungskonfidenzmetrik",
                    value: "100 % verifiziert",
                    pct: 100,
                },
                {
                    label: "Architekturschuldenindex",
                    value: "0,04 (minimal)",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex: Erzeugt Testumgebungen für die invariante Verifizierung",
                "Diagnose: Überprüfung von 89 Sicherheitseigenschaften im Staging",
                "Compiler_verify: Strukturgrenzen wurden sauber übergeben",
                "Status: menschliche Kreativität ergänzt durch maschinelle Kontinuität.",
            ],
        },
    ],
}
