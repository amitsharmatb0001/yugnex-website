import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "Construire des fondations, pas des fonctionnalités",
    philosophy: {
        title: "Pourquoi cela prend du temps",
        body: "Vous pourriez demander : « Pourquoi ne pas expédier quelque chose maintenant ? » Parce que la technologie fondamentale ne peut pas être précipitée. Lorsque Google a créé son algorithme de recherche, il n'a pas été livré de manière incrémentielle. Lorsque OpenAI a formé GPT-3, ils n'ont pas publié GPT-0.5 en premier. Lorsque SpaceX a conçu des fusées réutilisables, ils n’ont pas commencé par « partiellement réutilisables ». Nous construisons une IA qui prend des décisions techniques. Cela nécessite un niveau de raisonnement, de conscience du contexte et de fiabilité qui n'existe pas dans les systèmes actuels. Nous prenons le temps parce que le problème le mérite.",
        points: [
            "Recherche approfondie sur les problèmes non résolus",
            "De nouvelles architectures testées rigoureusement",
            "Des systèmes qui fonctionnent de manière fiable, pas seulement des démonstrations",
            "Des brevets pour protéger les innovations",
            "Il est temps de bien faire les choses",
        ],
    },
    papers: [
        {
            id: "livre blanc-2026",
            title: "Vers le génie logiciel autonome : défis et orientations",
            description: "Recherche sur le raisonnement, le contexte et la compréhension architecturale dans le génie logiciel assisté par l'IA. Ce livre blanc explore les défis fondamentaux liés à la création d’une intelligence d’ingénierie logicielle persistante et autonome.",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "Division de recherche technologique YugNex",
            ],
            tags: [
                "IA",
                "Génie logiciel",
                "Systèmes autonomes",
                "Recherche",
            ],
        },
    ],
}
