import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "Fundamente bauen, keine Merkmale",
    philosophy: {
        title: "Warum es Zeit braucht",
        body: "Sie fragen sich vielleicht: „Warum versenden Sie nicht gleich etwas?“ Weil grundlegende Technologie nicht überstürzt werden kann. Als Google seinen Suchalgorithmus entwickelte, lieferte er die Suchergebnisse nicht inkrementell aus. Als OpenAI GPT-3 trainierte, wurde GPT-0.5 nicht zuerst veröffentlicht. Als SpaceX wiederverwendbare Raketen entwarf, begann es nicht mit „teilweise wiederverwendbar“. Wir bauen KI, die technische Entscheidungen trifft. Dies erfordert ein Maß an Argumentation, Kontextbewusstsein und Zuverlässigkeit, das in aktuellen Systemen nicht vorhanden ist. Wir nehmen uns die Zeit, weil das Problem es verdient.",
        points: [
            "Tiefgreifende Recherche zu ungelösten Problemen",
            "Neuartige Architekturen wurden rigoros getestet",
            "Systeme, die zuverlässig funktionieren, nicht nur Demos",
            "Patente zum Schutz von Innovationen",
            "Zeit, es richtig zu machen",
        ],
    },
    papers: [
        {
            id: "whitepaper-2026",
            title: "Auf dem Weg zum autonomen Software-Engineering: Herausforderungen und Richtungen",
            description: "Forschung zu Argumentation, Kontext und Architekturverständnis in der KI-gestützten Softwareentwicklung. In diesem Whitepaper werden die grundlegenden Herausforderungen beim Aufbau persistenter, autonomer Software-Engineering-Intelligenz untersucht.",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "Forschungsabteilung für YugNex-Technologie",
            ],
            tags: [
                "KI",
                "Software-Engineering",
                "Autonome Systeme",
                "Forschung",
            ],
        },
    ],
    subtitle: "Entdecken Sie unsere Veröffentlichungen, Whitepapers und Erkenntnisse zum Aufbau persistenter autonomer Software-Intelligence-Modelle.",
    ledgerTitle: "DOKUMENTENDOSSIER //",
    formatLabel: "Format",
    formatValue: "Technisches PDF (Englisch)",
    noPublications: "Keine Forschungspublikationen gefunden.",
    peerSignature: "GPG-Peer-Agent-Signatur überprüft",
    peerSignStamp: "ZEICHEN: ARCHITECT_AGENT_0x028A",
}
