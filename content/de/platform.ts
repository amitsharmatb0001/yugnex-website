import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "Die Plattform",
    subtitle: "Autonomes Software-Engineering, neu gedacht",
    hero: {
        title: "Was wir bauen",
        description: "Eine KI-gestützte Plattform, die über die Codegenerierung hinausgeht, um komplexe Softwaresysteme wirklich zu verstehen, darüber nachzudenken und daran zusammenzuarbeiten. Kein weiteres Autovervollständigungstool. Ein kollaborativer Engineering-Partner, der Architekturverständnis, systemisches Denken und Validierung in Ihren Entwicklungsworkflow einbringt.",
    },
    capabilities: [
        {
            title: "Versteht Architektur, nicht nur Syntax",
            description: "Während aktuelle Tools die nächste Codezeile vorhersagen, baut unsere Plattform ein umfassendes Verständnis der Architektur, Abhängigkeiten und Entwurfsmuster Ihres Systems auf.",
            points: [
                "Änderungen werden im gesamten Systemkontext ausgewertet",
                "Die Auswirkungen von Abhängigkeiten werden vor der Implementierung verstanden",
                "Architektonische Grenzen werden automatisch respektiert",
                "Die Auswirkungen auf die technische Verschuldung werden proaktiv ans Licht gebracht",
            ],
        },
        {
            title: "Gründe für Implikationen",
            description: "Jede Codeänderung hat Auswirkungen – Leistung, Sicherheit, Wartbarkeit, Skalierbarkeit. Unsere Plattform generiert nicht nur Code; Es wird dargelegt, was dieser Code für Ihr System bedeutet.",
            points: [
                "Systemweite Auswirkungen werden analysiert",
                "Risiken und Kompromisse werden bewertet",
                "Alternative Ansätze werden berücksichtigt",
                "Die architektonische Kohärenz bleibt erhalten",
            ],
        },
        {
            title: "Validiert auf mehreren Ebenen",
            description: "Syntaktisch korrekter Code ist nicht das Ziel, sondern architektonisch einwandfreier, wartbarer und sicherer Code.",
            points: [
                "Richtigkeit: Funktioniert es, ohne dass etwas kaputt geht?",
                "Sicherheit: Werden Sicherheitsgrenzen eingehalten?",
                "Architektur: Stimmt sie mit dem Systemdesign überein?",
                "Wartbarkeit: Werden Ingenieure es in sechs Monaten verstehen?",
            ],
        },
    ],
    useCases: [
        {
            title: "Komplexes Refactoring",
            challenge: "Refactoring in großen Codebasen ist riskant. Sie müssen jeden Ort verstehen, an dem der Code verwendet wird, jede Abhängigkeit, die möglicherweise unterbrochen wird ...",
            solution: "Analysiert den gesamten Abhängigkeitsgraphen, identifiziert alle betroffenen Komponenten, bewertet architektonische Auswirkungen und hilft bei der sicheren Ausführung von Änderungen.",
        },
        {
            title: "Architekturanalyse",
            challenge: "Neue Teammitglieder brauchen Wochen, um zu verstehen, wie eine große Codebasis tatsächlich funktioniert – ihre Muster, ihre impliziten Verträge, ihre Designentscheidungen.",
            solution: "Erstellt umfassende Architekturkarten, die die Systemstruktur, Abhängigkeitsbeziehungen, Entwurfsmuster und Architekturgrenzen zeigen.",
        },
        {
            title: "Sichere Systementwicklung",
            challenge: "Funktionen hinzufügen oder Änderungen vornehmen, ohne Fehler einzuführen, Architekturprinzipien zu verletzen oder technische Schulden zu verursachen.",
            solution: "Bewertet vorgeschlagene Änderungen im gesamten Systemkontext, identifiziert potenzielle Probleme vor der Implementierung und schlägt architektonisch kohärente Ansätze vor.",
        },
        {
            title: "Verständnis des Legacy-Codes",
            challenge: "Geerbte Codebasen mit minimaler Dokumentation, unklaren Designentscheidungen und angehäuften technischen Schulden sind teuer in der Wartung.",
            solution: "Rekonstruiert architektonische Absichten, identifiziert Entwurfsmuster und Anti-Muster, bildet Abhängigkeitsbeziehungen ab und deckt technische Schulden auf.",
        },
        {
            title: "Codeüberprüfung im großen Maßstab",
            challenge: "Eine gründliche Codeüberprüfung erfordert ein Verständnis der systemweiten Auswirkungen, doch die Zeit und die kognitive Bandbreite der Prüfer sind begrenzt.",
            solution: "Führt eine umfassende Architekturanalyse durch, identifiziert potenzielle Probleme in allen Dimensionen und hebt Bedenken hervor, die menschliches Urteilsvermögen erfordern.",
        },
    ],
    targetAudience: [
        {
            role: "Ingenieurteams",
            painPoints: [
                "Mehrere Dienste",
                "Architekturmuster",
                "Sicherheits-/Leistungsanforderungen",
            ],
            benefit: "Sie benötigen mehr als nur die automatische Vervollständigung. Sie benötigen architektonisches Verständnis.",
        },
        {
            role: "Leitende Ingenieure und Architekten",
            painPoints: [
                "Abhängigkeiten aufspüren",
                "Überprüfung von Architekturverstößen",
                "Kontext erklären",
            ],
            benefit: "Bewältigt die kognitive Belastung des Systemverständnisses und gibt Ihnen die Möglichkeit, sich auf Entscheidungen auf hoher Ebene zu konzentrieren.",
        },
        {
            role: "Teams, die technische Schulden verwalten",
            painPoints: [
                "Unbekannter Umfang",
                "Priorisierung",
                "Sicheres Refactoring",
            ],
            benefit: "Macht technische Schulden sichtbar und hilft Ihnen, diese systematisch anzugehen.",
        },
    ],
    workflow: {
        title: "Wie es mit Ihrem Workflow funktioniert",
        points: [
            {
                title: "Integriert, nicht aufdringlich",
                description: "Passt in Ihre bestehende Umgebung und Codebasis. Keine Migration erforderlich.",
            },
            {
                title: "Kollaborativ, nicht automatisiert",
                description: "Die Plattform schlägt vor, Sie entscheiden. Es bringt KI-Stärken mit sich, die das menschliche Urteilsvermögen ergänzen.",
            },
            {
                title: "Transparent, keine Blackbox",
                description: "Zeigt seine Begründung, identifizierte Abhängigkeiten, Risiken und Kompromisse.",
            },
        ],
    },
    comparison: [
        {
            category: "Code-Autovervollständigung",
            others: "Generieren Sie Code basierend auf Mustern. Sagen Sie die nächste Zeile voraus. Helfen Sie dabei, schneller zu schreiben.",
            us: "Gründe für Systeme. Gesamte Architektur verstehen. Helfen Sie mit, besser zu bauen.",
        },
        {
            category: "Statische Analyse",
            others: "Finden Sie Probleme im Code. Flag-Syntaxfehler. Nach dem Codieren ausführen.",
            us: "Verstehen Sie architektonische Implikationen. Begründung zu systemweiten Auswirkungen. Begleiten Sie Sie bei Ihrer Entwicklung.",
        },
        {
            category: "Code-Review-Tools",
            others: "Erleichtern Sie die menschliche Überprüfung. Unterschiede anzeigen. Markieren Sie Änderungen.",
            us: "Führen Sie eine Architekturanalyse durch. Erklären Sie die Auswirkungen. Validieren Sie die Systemkohärenz.",
        },
    ],
}
