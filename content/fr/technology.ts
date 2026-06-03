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
}
