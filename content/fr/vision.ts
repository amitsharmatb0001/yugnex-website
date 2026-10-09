import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "Vision",
    lead: "La transition vers une nouvelle ère d’intelligence technique persistante et évolutive",
    paragraphs: [
        "Nous entrons dans une nouvelle ère où le génie logiciel n’est plus limité par la bande passante cognitive humaine ou par la nature éphémère des outils actuels.",
        "YugNex représente le pont entre l'ère « Yug » (époque) de l'ingénierie exclusivement humaine et l'ère « Nex » (prochaine) des systèmes collaboratifs et autonomes.",
        "Notre vision est de créer une intelligence numérique persistante qui comprend les logiciels non seulement comme du texte, mais comme un système vivant et évolutif, préservant l'intention, le contexte et le raisonnement tout au long de son cycle de vie.",
        "Nous pensons que l'avenir du logiciel réside dans la relation symbiotique entre la créativité humaine et la continuité des machines, où l'IA ne se contente pas de nous assister, mais crée véritablement des ingénieurs à nos côtés.",
    ],
    oldYugTitle: "Le vieux Youg",
    oldYugDesc: "Développement de logiciels exclusivement humains. Contraint par des limites cognitives individuelles, entraînant une dégradation des logiciels, une fragmentation du contexte et une dette technique accumulée.",
    newNexTitle: "Le prochain Nex",
    newNexDesc: "Ingénierie collaborative autonome. Un substrat de raisonnement sémantique persistant qui comprend votre architecture, vérifie les invariants et travaille à vos côtés.",
    labels: {
        contextHorizon: "Horizon contextuel",
        dependencyTracing: "Suivi des dépendances systémiques",
        codebaseLifecycle: "Cycle de vie de la base de code",
        verificationLoop: "Boucle de vérification",
    },
    oldValues: {
        contextHorizon: "~ 100 000 jetons (fragmentés)",
        dependencyTracing: "Manuel/approximatif",
        codebaseLifecycle: "Entropie et dégradation",
        verificationLoop: "Tests post-implémentation",
    },
    newValues: {
        contextHorizon: "Représentation graphique infinie",
        dependencyTracing: "Trace AST dynamique (causale)",
        codebaseLifecycle: "Refactorisé / Zéro dette",
        verificationLoop: "Invariants du bac à sable avant la validation",
    },
    pillarsTitle: "Piliers du substrat cognitif",
    pillars: [
        {
            id: "context",
            name: "Substrat de synthèse de contexte",
            description: "Relie les répertoires sources bruts en une représentation graphique sémantique unifiée et multidimensionnelle.",
            details: "Contrairement aux assistants de codage traditionnels à récupération augmentée qui s'appuient sur la correspondance de chaînes ou sur une indexation vectorielle superficielle, notre système fonctionne directement sur les relations de l'arbre de syntaxe abstraite (AST), les flux de données et les réseaux de dépendances à l'échelle du système. Il suit les chemins d'intention et de raisonnement à travers les fichiers, préservant ainsi la continuité absolue du contexte.",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "Moteur de raisonnement causal",
            description: "Pèse les compromis, coordonne les agents spécialisés et évalue les impacts systémiques des modifications proposées.",
            details: "Le génie logiciel est un problème de logique. Notre substrat multi-agents regroupe des agents spécialisés représentant différentes fonctions de l'ingénierie logicielle (Architecte, Développeur, Auditeur de Sécurité, QA). Grâce à des débats de raisonnement structurés et à plusieurs tours, ils établissent un consensus sur les voies de mise en œuvre avant d’écrire une seule ligne.",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "Vérification invariante perpétuelle",
            description: "Garantit la sécurité d’exécution en exécutant, vérifiant et testant toutes les modifications proposées dans des bacs à sable sécurisés.",
            details: "Un code syntaxiquement correct n’est pas l’objectif final. YugNex exécute des validations empiriques dans des environnements de conteneurs isolés. Il garantit que le nouveau code est conforme aux invariants architecturaux préétablis, dépasse les limites des tests unitaires et n'introduit aucune vulnérabilité de sécurité ni fuite de connexion.",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "Système synapsé",
    telemetryTitle: "Métriques du substrat",
    telemetryStatus: "EN COURS D'EXÉCUTION",
    pillarMetas: [
        "Limites du système",
        "La prochaine époque",
        "Intelligence numérique",
        "Symbiose humain-IA",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "Durée de bande passante cognitive",
                    value: "1024x agrandir",
                    pct: 95,
                },
                {
                    label: "Surcharge de mémoire de l'analyseur",
                    value: "-92% de réduction",
                    pct: 92,
                },
                {
                    label: "Taux de cohérence du contexte",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core : initialisation de la carte de dépendances sémantiques",
                "cortex_substrate : suivi des relations structurelles",
                "thread_evaluator : analyse des nœuds AST en arrière-plan...",
                "statut : limites de raisonnement actif établies.",
            ],
        },
        {
            stats: [
                {
                    label: "Latence de synchronisation homme-IA",
                    value: "< 2,4 ms",
                    pct: 98,
                },
                {
                    label: "Profondeur de la convergence du consensus",
                    value: "Niveau 12 atteint",
                    pct: 88,
                },
                {
                    label: "Index des commentaires sur l'interface",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge : connecter les canaux de consensus neuronaux",
                "coordinateur : interrogation des agents PO, Architecte et Développeur",
                "consensus : résolution des recommandations de code...",
                "statut : collaboration autonome continue en ligne.",
            ],
        },
        {
            stats: [
                {
                    label: "Succès de la préservation de l'intention",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "Profondeur de connexion du lien causal",
                    value: "12 042 itinéraires",
                    pct: 91,
                },
                {
                    label: "Cycle de vie des instantanés d’état",
                    value: "Continu",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache : chargement des nœuds de topologie du référentiel",
                "causal_mapper : mise en cache de 4 920 mises à jour de liens",
                "state_preserver : vérification des contrôles invariants de la conception du code...",
                "statut : intelligence système persistante opérationnelle.",
            ],
        },
        {
            stats: [
                {
                    label: "Productivité de la co-ingénierie",
                    value: "+184,2% d'augmentation",
                    pct: 94,
                },
                {
                    label: "Métrique de confiance de validation",
                    value: "100% vérifié",
                    pct: 100,
                },
                {
                    label: "Indice de la dette architecturale",
                    value: "0,04 (minimum)",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex : création de bancs d'essai de vérification invariante",
                "diagnostic : vérification de 89 propriétés de sécurité lors de la mise en scène",
                "compiler_verify : les limites structurelles ont été nettoyées",
                "statut : la créativité humaine augmentée par la continuité de la machine.",
            ],
        },
    ],
}
