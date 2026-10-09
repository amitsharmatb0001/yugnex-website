import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "Le problème avec les outils de codage d'IA actuels",
    problem: {
        title: "Ils génèrent du code, mais ne comprennent pas les systèmes",
        subtitle: "Les assistants de codage IA d'aujourd'hui ont obtenu des résultats impressionnants : saisie semi-automatique du code, génération de fonctions, traduction entre langues. Mais ils partagent tous une limite fondamentale : ils traitent les logiciels comme du texte à générer et non comme des systèmes à comprendre.",
        body: "Le génie logiciel n'est pas un problème de génération de texte. C'est un problème de raisonnement système.",
        limitations: [
            {
                title: "Le problème du contexte",
                description: "Les bases de code contiennent des millions de lignes réparties sur des milliers de fichiers. Les outils actuels tentent de résoudre ce problème grâce à une simple récupération, mais la pertinence dans les logiciels n'est pas une similitude textuelle : il s'agit de relations causales, de chaînes de dépendance et de limites architecturales.",
            },
            {
                title: "L'écart de raisonnement",
                description: "Il existe une différence fondamentale entre générer un code syntaxiquement correct et prendre des décisions d'ingénierie judicieuses. Lorsque des ingénieurs expérimentés modifient du code, ils prennent en compte les implications architecturales à l'échelle du système, les impacts sur les dépendances, les compromis en matière de performances et la maintenabilité.",
            },
            {
                title: "L'écart de validation",
                description: "Le génie logiciel exige de l’exactitude et non de la plausibilité. Les outils actuels manquent de mécanismes de validation au-delà de la vérification de la syntaxe. Ils ne peuvent pas déterminer si les changements maintiennent les invariants du système, respectent les limites architecturales ou introduisent des vulnérabilités de sécurité.",
            },
        ],
    },
    approach: {
        title: "Conçu pour le génie logiciel",
        subtitle: "Nous avons commencé avec une question différente : et non « Comment l'IA peut-elle écrire un meilleur code ? » Mais \"Comment l'IA peut-elle comprendre les systèmes logiciels comme le font les ingénieurs expérimentés ?\"",
        sections: [
            {
                title: "Spécialisation plutôt que généralisation",
                body: "Différents aspects du génie logiciel nécessitent des types de raisonnement fondamentalement différents. Plutôt que de tout compresser dans un seul modèle, nous utilisons des composants d'IA spécialisés, chacun conçu pour des domaines spécifiques de raisonnement logiciel, travaillant ensemble comme une équipe d'ingénierie.",
            },
            {
                title: "Raisonnement collaboratif",
                body: "Les décisions en matière de logiciels nécessitent souvent de peser des compromis entre des préoccupations concurrentes. Notre architecture permet à des composants spécialisés de partager le contexte, de remettre en question les hypothèses et de parvenir à un consensus grâce à une coordination structurée.",
            },
            {
                title: "Compréhension à l'échelle du système",
                body: "La compréhension des logiciels fonctionne à plusieurs niveaux : syntaxe, sémantique, modèles architecturaux, intention de conception et propriétés à l'échelle du système. Nous utilisons un raisonnement en couches dans lequel différents composants fonctionnent à différents niveaux d'abstraction.",
            },
            {
                title: "Contexte au-delà de la récupération",
                body: "Plutôt que d'extraire des extraits de code déconnectés, nous développons des approches pour créer des représentations dynamiques des relations système, en capturant non seulement le code, mais aussi l'ensemble des dépendances, des invariants et des limites architecturales.",
            },
        ],
    },
    difference: {
        title: "La différence",
        comparison: [
            {
                label: "Outils actuels",
                value: "Générer du code → Optimiser pour la syntaxe → Travailler dans les limites du contexte → Architectures à usage général",
            },
            {
                label: "Notre approche",
                value: "Comprendre les systèmes → Raison sur l'architecture → Créer des représentations dynamiques → Spécialement conçues pour l'ingénierie logicielle",
            },
        ],
    },
    diagnosticsTitle: "Diagnostic des limitations interactives",
    approachTitle: "Notre approche à plusieurs niveaux",
    debateTitle: "Consensus des analyseurs autonomes",
    debateSubtitle: "Passez la souris sur les lignes de code pour activer le panel de consensus multi-agents de YugNex débattant des problèmes de sécurité et de refactorisation.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[INFO] Exécution de la trace de l'architecture du référentiel...",
                "[WARN] Limite de contexte atteinte à l'index de fichier 512.",
                "[FAIL] context_overflow : la taille de la pile de 1 048 576 octets a dépassé la fenêtre de contexte standard.",
                "[CRITIQUE] L'analyseur a été abandonné. Le LLM traditionnel ne parvient pas à résoudre les relations à l’échelle du système.",
                "[SOLUTION YUGNEX] Reroutage vers le substrat de contexte causal...",
                "[SUCCÈS] Trace du graphique causal terminée. 48 091 fichiers indexés avec des nœuds de cache persistants.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[INFO] Initialisation du travail de refactorisation des paramètres...",
                "[INFO] L'analyseur exécute une vérification du raisonnement symbolique sur les nœuds de dépendance...",
                "[WARN] Code généré par l'assistant traditionnel : incompatibilité de la liste des paramètres userService.ts (jeton manquant).",
                "[CRITICAL] compilation_error : la syntaxe du code est valide mais interrompra l'invocation en production.",
                "[SOLUTION YUGNEX] Un bloc de raisonnement symbolique a intercepté une liste de paramètres non valides. Annuler les modifications...",
                "[SUCCÈS] Application de liaisons paramétrées et d'appelants synchronisés dans 14 modules dépendants.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[INFO] Lancement de la vérification du pipeline CI...",
                "[INFO] Modèles d'analyse/pour les vecteurs de sécurité d'injection de requêtes utilisateur...",
                "[WARN] direct_interpolation : interpolation de requête détectée dans profileSearch.ts.",
                "[FAIL] Invariant 02 violé : les paramètres de la base de données doivent être liés. Statut de construction : BLOQUÉ.",
                "[SOLUTION YUGNEX] Paramètres d'auto-fixation avec des requêtes SQL paramétrées...",
                "[SUCCÈS] Invariants passés. Contrôles de sécurité vérifiés (0 risques trouvés). Version publiée.",
            ],
        },
    ],
    approachDiagrams: [
        "[Agent d'analyseur AST] =======> [Agent de résolution causale]\n                                   ||\n                                   \\/ \n[Agent de consensus] <======== [Agent de refactorisation]\nSTATUT : Raisonnement collaboratif spécialisé en ligne.",
        "Agent[Architecte] : \"L'interpolation SQL directe viole la norme.\"\nAgent[Sécurité] : \"Vulnérabilité confirmée. Version autobloquante.\"\nAgent [Développeur] : \"Mise à jour des liaisons de requête. Injection du correctif...\"\nSTATUT : Consensus atteint. Code corrigé avec succès.",
        "Niveau 5 (Modèles de conception architecturale) - ACTIF\nNiveau 4 (Interdépendances des modules) - ACTIF\nNiveau 3 (liaison de variable sémantique) - ACTIF\nNiveau 2 (Arbre de syntaxe abstraite) - ACTIF\nSTATUT : Raisonnement en couches à l’échelle du système vérifié.",
        "Relations causales mises en cache : 184 902\nNœuds de contexte actifs : 12 042\nLatence de recherche : 1,2 ms (accélération de 98 % par rapport à la recherche LLM)\nSTATUT : Graphiques causals entièrement synchronisés.",
    ],
    liveTelemetry: "Graphique de télémétrie en direct",
    codeLens: {
        panelTitle: "active_routes.js — Lignes de survol/clic avec nœuds d'alerte",
        insightTitleAutoFix: "Recommandation de réparation automatique YugNex",
        insightTitleDebate: "Débat sur la résolution des agents",
        solutionsDefault: "Passez la souris sur les lignes de code sur la gauche pour activer l'objectif de l'analyseur autonome YugNex.",
        lines: [
            {
            },
            {
                warningTitle: "Vulnérabilité d'injection SQL",
                warningDesc: "L'interpolation directe des entrées utilisateur dans une chaîne de requête SQL permet aux attaquants d'injecter des commandes SQL malveillantes et de contourner l'authentification ou d'afficher des tables non autorisées.",
                debate: [
                    {
                        role: "Architecte",
                        text: "Interpolation de requête SQL directe détectée. Cela viole nos normes de sécurité.",
                    },
                    {
                        role: "Auditeur de sécurité",
                        text: "Exploitation à distance possible via les paramètres d'état. Validation bloquée.",
                    },
                    {
                        role: "Promoteur",
                        text: "Réécriture de la requête vers une liaison paramétrée à l'aide de db.execute(query, [status]).",
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
                warningTitle: "Goulot d'étranglement des requêtes N+1",
                warningDesc: "L'exécution d'une requête de base de données distincte à l'intérieur d'une boucle provoque N requêtes pour N utilisateurs. Cela entraîne de forts pics de latence et une surcharge du serveur à mesure que les pools de connexions aux bases de données saturent.",
                debate: [
                    {
                        role: "Architecte",
                        text: "Goulot d’étranglement de la base de données relationnelle. L'exécution de requêtes à l'intérieur d'une boucle est bloquée.",
                    },
                    {
                        role: "Promoteur",
                        text: "Agrégation des ID utilisateur pour récupérer par lots des profils dans une seule requête SELECT ... WHERE IN (?).",
                    },
                    {
                        role: "Auditeur AQ",
                        text: "Vérifié. Les métriques de référence montrent que le nombre total de requêtes exécutées est passé de N à 1.",
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
