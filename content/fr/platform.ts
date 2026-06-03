import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "La plateforme",
    subtitle: "Le génie logiciel autonome, réinventé",
    hero: {
        title: "Ce que nous construisons",
        description: "Une plateforme basée sur l'IA qui va au-delà de la génération de code pour véritablement comprendre, raisonner et collaborer sur des systèmes logiciels complexes. Pas un autre outil de saisie semi-automatique. Un partenaire d'ingénierie collaboratif qui apporte une compréhension architecturale, un raisonnement systémique et une validation à votre flux de travail de développement.",
    },
    capabilities: [
        {
            title: "Comprend l'architecture, pas seulement la syntaxe",
            description: "Alors que les outils actuels prédisent la prochaine ligne de code, notre plateforme permet d'acquérir une compréhension globale de l'architecture, des dépendances et des modèles de conception de votre système.",
            points: [
                "Les modifications sont évaluées dans le contexte complet du système",
                "Les impacts de dépendance sont compris avant la mise en œuvre",
                "Les limites architecturales sont automatiquement respectées",
                "Les implications techniques de la dette sont révélées de manière proactive",
            ],
        },
        {
            title: "Raisons concernant les implications",
            description: "Chaque modification de code a des implications : performances, sécurité, maintenabilité, évolutivité. Notre plateforme ne se contente pas de générer du code ; il explique ce que ce code signifie pour votre système.",
            points: [
                "Les impacts à l’échelle du système sont analysés",
                "Les risques et les compromis sont évalués",
                "Des approches alternatives sont envisagées",
                "La cohérence architecturale est préservée",
            ],
        },
        {
            title: "Valide à plusieurs niveaux",
            description: "Un code syntaxiquement correct n’est pas l’objectif – un code architecturalement solide, maintenable et sécurisé l’est.",
            points: [
                "Exactitude : est-ce que cela fonctionne sans casser des choses ?",
                "Sécurité : les limites de sécurité sont-elles maintenues ?",
                "Architecture : est-elle conforme à la conception du système ?",
                "Maintenabilité : les ingénieurs la comprendront-ils dans six mois ?",
            ],
        },
    ],
    useCases: [
        {
            title: "Refactorisation complexe",
            challenge: "La refactorisation dans de grandes bases de code est risquée. Vous devez comprendre chaque endroit où le code est utilisé, chaque dépendance qui pourrait se briser...",
            solution: "Analyse le graphique complet des dépendances, identifie tous les composants concernés, évalue les implications architecturales et aide à exécuter les modifications en toute sécurité.",
        },
        {
            title: "Analyse architecturale",
            challenge: "Comprendre le fonctionnement réel d'une grande base de code (ses modèles, ses contrats implicites, ses décisions de conception) prend des semaines pour les nouveaux membres de l'équipe.",
            solution: "Crée des cartes architecturales complètes montrant la structure du système, les relations de dépendance, les modèles de conception et les limites architecturales.",
        },
        {
            title: "Évolution sûre du système",
            challenge: "Ajouter des fonctionnalités ou apporter des modifications sans introduire de bugs, violer les principes architecturaux ou créer de dette technique.",
            solution: "Évalue les changements proposés dans le contexte complet du système, identifie les problèmes potentiels avant la mise en œuvre et suggère des approches architecturales cohérentes.",
        },
        {
            title: "Compréhension du code hérité",
            challenge: "Les bases de code héritées avec une documentation minimale, des décisions de conception peu claires et une dette technique accumulée sont coûteuses à maintenir.",
            solution: "Reconstruit l'intention architecturale, identifie les modèles de conception et les anti-modèles, cartographie les relations de dépendance et fait apparaître la dette technique.",
        },
        {
            title: "Révision du code à grande échelle",
            challenge: "Une révision approfondie du code nécessite de comprendre les implications à l’échelle du système, mais les réviseurs disposent d’un temps et d’une bande passante cognitive limités.",
            solution: "Effectue une analyse architecturale approfondie, identifie les problèmes potentiels dans toutes les dimensions et met en évidence les préoccupations qui nécessitent un jugement humain.",
        },
    ],
    targetAudience: [
        {
            role: "Équipes d'ingénierie",
            painPoints: [
                "Services multiples",
                "Modèles architecturaux",
                "Exigences de sécurité/performance",
            ],
            benefit: "Vous avez besoin de plus que la saisie semi-automatique. Vous avez besoin d’une compréhension architecturale.",
        },
        {
            role: "Ingénieurs et architectes seniors",
            painPoints: [
                "Traçage des dépendances",
                "Examen des violations architecturales",
                "Expliquer le contexte",
            ],
            benefit: "Gère la charge cognitive liée à la compréhension du système, vous permettant ainsi de vous concentrer sur des décisions de haut niveau.",
        },
        {
            role: "Équipes gérant la dette technique",
            painPoints: [
                "Portée inconnue",
                "Priorisation",
                "Refactorisation sécurisée",
            ],
            benefit: "Rend visible la dette technique et vous aide à y remédier systématiquement.",
        },
    ],
    workflow: {
        title: "Comment cela fonctionne avec votre flux de travail",
        points: [
            {
                title: "Intégré, non intrusif",
                description: "S'adapte à votre environnement et à votre base de code existants. Aucune migration requise.",
            },
            {
                title: "Collaboratif, non automatisé",
                description: "La plateforme suggère, vous décidez. Il apporte les atouts de l’IA pour compléter le jugement humain.",
            },
            {
                title: "Boîte transparente et non noire",
                description: "Montre son raisonnement, les dépendances identifiées, les risques et les compromis.",
            },
        ],
    },
    comparison: [
        {
            category: "Saisie semi-automatique du code",
            others: "Générez du code basé sur des modèles. Prédisez la ligne suivante. Aidez à écrire plus rapidement.",
            us: "Raison sur les systèmes. Comprendre l’ensemble de l’architecture. Aidez-nous à mieux construire.",
        },
        {
            category: "Analyse statique",
            others: "Recherchez les problèmes dans le code. Signaler les erreurs de syntaxe. Exécuter après le codage.",
            us: "Comprendre les implications architecturales. Raisonnez sur les impacts à l’échelle du système. Guidez-vous au fur et à mesure de votre développement.",
        },
        {
            category: "Outils de révision de code",
            others: "Facilitez l’examen humain. Afficher les différences. Mettez en surbrillance les changements.",
            us: "Effectuer une analyse architecturale. Expliquez les implications. Valider la cohérence du système.",
        },
    ],
}
