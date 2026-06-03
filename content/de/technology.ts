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
}
