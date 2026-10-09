import { MissionContent } from '@/app/lib/contentTypes'

export const missionContent: MissionContent = {
    title: "Misión",
    lead: "Construir plataformas de ingeniería de software autónomas mediante colaboración continua humano-IA",
    paragraphs: [
        "Rechazamos la noción de sistemas \"terminados\". La inteligencia, ya sea humana o artificial, debe adaptarse, aprender y refinarse continuamente.",
        "Estamos creando un paradigma donde la nueva época se convierte en realidad tangible. Donde los ingenieros aumentan la intuición con el razonamiento de IA.",
        "Esto significa construir sistemas que comprendan la arquitectura del software, no solo generen fragmentos de código.",
        "Nuestra misión es la democratización de la complejidad: hacer que la ingeniería sofisticada sea accesible.",
    ],
    closingStatement: "La nouvelle époque n’est pas une vision lointaine. C'est l'infrastructure que nous construisons actuellement.",
    blueprint: [
        {
            id: "ingestion",
            num: "COUCHE_01",
            name: "Substrat d'ingestion de source sémantique",
            badge: "Analyse AST",
            telemetryTitle: "SYSTÈME ::INGESTION_CONTROLLER",
            logs: [
                "$ noyau yugnex --parse-directory=./src",
                "Répertoire de base de code d'analyse : 1 420 fichiers correspondants.",
                "Construction de références à l'arbre de syntaxe abstraite (AST)...",
                "Cartographie des graphiques d'appels et des vecteurs relationnels.",
                "SUCCÈS : 12 450 nœuds AST synapsés dans Context Substrate Graph.",
                "Écouteurs actifs enregistrés : observateur du système de fichiers activé --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "COUCHE_02",
            name: "Solveur invariant multi-agents",
            badge: "Débattre de la logique",
            telemetryTitle: "SYSTÈME : AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "Lancement de la salle de débat avec : [Architecte, Aménageur, Auditeur]",
                "[PO] : interpolation de requête SQL brute signalée dans userController.ts : L24",
                "[Développeur] : Proposition de remplacement d'expression régulière pour la validation des entrées.",
                "[Architecte] : REJETÉ. Le remplacement de Regex est contournable. Doit réécrire dans la requête de liaison de paramètres.",
                "[Auditeur] : Validation du chemin de requête paramétré. Analyse invariante terminée.",
                "Consensus atteint. Solution générée : injection d'instructions paramétrées.",
            ],
        },
        {
            id: "sandbox",
            num: "COUCHE_03",
            name: "Moteur de bac à sable de vérification isolé",
            badge: "Exécutif des tests",
            telemetryTitle: "SYSTÈME : SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "Conteneur généré. Image : node-alpine-yugnex : dernière",
                "Injection de fichiers refactorisés dans le système de fichiers du conteneur.",
                "Exécution de la validation du compilateur... SUCCÈS : code de sortie 0.",
                "Exécution du balayage des tests unitaires... 48/48 tests réussis (240 ms).",
                "Surveillance des fuites de tas de mémoire... stable à 42,1 Mo de balayage.",
                "Les tests du bac à sable sont terminés. Statut de vérification : VÉRIFIÉ SÛR.",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "Synchroniseur VCS perpétuel",
            badge: "Valider la synchronisation",
            telemetryTitle: "SYSTÈME : VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "Création d'une branche locale : yugnex/patch-secure-auth",
                "Validation des modifications : 2 fichiers modifiés, zéro avertissement.",
                "Vérification des signatures de validation... Signature GPG validée.",
                "Pousser la branche vers le VCS en amont... terminé.",
                "Demande d'extraction d'ouverture : [Security Refactor] Paramétrage sécurisé des requêtes SQL.",
                "Statut du pipeline VCS : vert, en attente de fusion des réviseurs.",
            ],
        },
    ],
    awaitingPipeline: "en attente d'exécution du pipeline...",
    pipelineIntegrationFlow: "Flux d'intégration du pipeline",
    triggerDiagnostic: "DIAGNOSTIC DE DÉCLENCHEMENT",
    runningDiagnostic: "EN COURS D'EXÉCUTION...",
    layerMetas: [
        "Substrats fondamentaux",
        "Évolution perpétuelle",
        "Contexte architectural",
        "Validation augmentée",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "Initialiser les schémas d'analyse AST",
                },
                {
                    label: "Cartographier les nœuds sémantiques causals",
                },
                {
                    label: "Instancier les environnements d'exécution du bac à sable Docker",
                },
            ],
            logs: [
                "ast_parser : lecture des jetons de base de code...",
                "dependency_resolver : correspondance des contraintes de la liste de paramètres",
                "sandbox_manager : compilation de la disposition des nœuds de conteneur...",
                "SUCCÈS : couche de substrat de base pleinement active.",
            ],
        },
        {
            steps: [
                {
                    label: "Événements du pipeline de validation Hook Git",
                },
                {
                    label: "Compiler les arbres différentiels du référentiel",
                },
                {
                    label: "Vérifier les limites architecturales invariantes",
                },
            ],
            logs: [
                "vcs_monitor : écoute des push de la branche principale...",
                "diff_engine : analyse de 14 fichiers AST modifiés",
                "invariant_runner : test de 8 contrôles de validation...",
                "SUCCÈS : boucles du compilateur évolutif terminées. Construction synchronisée.",
            ],
        },
        {
            steps: [
                {
                    label: "Extraire les chemins d'importation multi-modules",
                },
                {
                    label: "Mettre à l'échelle dynamiquement les limites de la portée du contexte",
                },
                {
                    label: "Coordonner les contrôles de consensus multi-agents",
                },
            ],
            logs: [
                "context_engine : lecture des connexions de dépendances inter-modules",
                "agent_consensus : faire correspondre les audits de sécurité avec les modifications des développeurs",
                "validation_agent : analyse des arbres de raisonnement AST...",
                "SUCCÈS : relations causales consolidées dans des cartes contextuelles.",
            ],
        },
        {
            steps: [
                {
                    label: "Surveiller les espaces de travail IDE actifs",
                },
                {
                    label: "Analyser les paramètres du développeur en temps réel",
                },
                {
                    label: "Générer des rapports de diagnostic structurel",
                },
            ],
            logs: [
                "workspace_daemon : actif lors des modifications du système de fichiers",
                "lint_check : tester les paramètres par rapport aux API du framework",
                "audit_writer : compilation de notes sur l'intégrité de la documentation...",
                "SUCCÈS : Conformité architecturale vérifiée. 0 défaut enregistré.",
            ],
        },
    ],
}
