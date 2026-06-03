import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "Construyendo cimientos, no características",
    philosophy: {
        title: "Por qué lleva tiempo",
        body: "Quizás se pregunte: \"¿Por qué no enviar algo ahora?\" Porque la tecnología fundamental no se puede apresurar. Cuando Google creó su algoritmo de búsqueda, no lo realizó de forma incremental. Cuando OpenAI entrenó GPT-3, no lanzaron GPT-0.5 primero. Cuando SpaceX diseñó cohetes reutilizables, no comenzaron con \"parcialmente reutilizables\". Estamos construyendo IA que toma decisiones de ingeniería. Eso requiere un nivel de razonamiento, conciencia del contexto y confiabilidad que no existe en los sistemas actuales. Nos estamos tomando el tiempo porque el problema lo merece.",
        points: [
            "Investigación profunda de problemas no resueltos.",
            "Arquitecturas novedosas probadas rigurosamente",
            "Sistemas que funcionan de forma fiable, no sólo demostraciones",
            "Patentes para proteger las innovaciones",
            "Es hora de hacerlo bien",
        ],
    },
    papers: [
        {
            id: "documento técnico-2026",
            title: "Hacia la ingeniería de software autónoma: desafíos y direcciones",
            description: "Investigación sobre razonamiento, contexto y comprensión arquitectónica en la ingeniería de software asistida por IA. Este documento técnico explora los desafíos fundamentales en la creación de inteligencia de ingeniería de software autónoma y persistente.",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "División de Investigación de Tecnología YugNex",
            ],
            tags: [
                "AI",
                "Ingeniería de software",
                "Sistemas Autónomos",
                "Investigación",
            ],
        },
    ],
}
