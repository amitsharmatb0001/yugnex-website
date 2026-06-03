import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "El problema con las herramientas de codificación de IA actuales",
    problem: {
        title: "Generan código, pero no entienden los sistemas",
        subtitle: "Los asistentes de codificación de IA actuales han logrado resultados impresionantes: autocompletar código, generar funciones y traducir entre idiomas. Pero todos comparten una limitación fundamental: tratan el software como texto que debe generarse, no sistemas que deben entenderse.",
        body: "La ingeniería de software no es un problema de generación de texto. Es un problema de razonamiento del sistema.",
        limitations: [
            {
                title: "El problema del contexto",
                description: "Las bases de código contienen millones de líneas en miles de archivos. Las herramientas actuales intentan salvar esto a través de una simple recuperación, pero la relevancia en el software no es la similitud textual: se trata de relaciones causales, cadenas de dependencia y límites arquitectónicos.",
            },
            {
                title: "La brecha de razonamiento",
                description: "Existe una diferencia fundamental entre generar código sintácticamente correcto y tomar decisiones de ingeniería acertadas. Cuando los ingenieros experimentados modifican el código, consideran las implicaciones arquitectónicas de todo el sistema, los impactos de la dependencia, las compensaciones en el rendimiento y la capacidad de mantenimiento.",
            },
            {
                title: "La brecha de validación",
                description: "La ingeniería de software requiere corrección, no plausibilidad. Las herramientas actuales carecen de mecanismos para validar más allá de la verificación de sintaxis. No pueden razonar sobre si los cambios mantienen las invariantes del sistema, respetan los límites arquitectónicos o introducen vulnerabilidades de seguridad.",
            },
        ],
    },
    approach: {
        title: "Creado para la ingeniería de software",
        subtitle: "Comenzamos con una pregunta diferente: no \"¿Cómo puede la IA escribir mejor código?\" Pero \"¿cómo puede la IA entender los sistemas de software como lo hacen los ingenieros experimentados?\"",
        sections: [
            {
                title: "Especialización sobre generalización",
                body: "Diferentes aspectos de la ingeniería de software requieren tipos de razonamiento fundamentalmente diferentes. En lugar de comprimir todo en un solo modelo, utilizamos componentes de IA especializados (cada uno diseñado para dominios específicos de razonamiento de software) que trabajan juntos como un equipo de ingeniería.",
            },
            {
                title: "Razonamiento colaborativo",
                body: "Las decisiones sobre software a menudo requieren sopesar compensaciones entre preocupaciones en competencia. Nuestra arquitectura permite que los componentes especializados compartan contexto, desafíen suposiciones y trabajen hacia el consenso a través de una coordinación estructurada.",
            },
            {
                title: "Comprensión de todo el sistema",
                body: "La comprensión del software opera en múltiples niveles: sintaxis, semántica, patrones arquitectónicos, intención del diseño y propiedades de todo el sistema. Usamos razonamiento en capas donde diferentes componentes operan en diferentes niveles de abstracción.",
            },
            {
                title: "Contexto más allá de la recuperación",
                body: "En lugar de extraer fragmentos de código desconectados, estamos desarrollando enfoques para construir representaciones dinámicas de las relaciones del sistema, capturando no solo el código, sino también la red de dependencias, invariantes y límites arquitectónicos.",
            },
        ],
    },
    difference: {
        title: "La diferencia",
        comparison: [
            {
                label: "Herramientas actuales",
                value: "Generar código → Optimizar para sintaxis → Trabajar dentro de los límites del contexto → Arquitecturas de propósito general",
            },
            {
                label: "Nuestro enfoque",
                value: "Comprender los sistemas → Razones sobre la arquitectura → Construir representaciones dinámicas → Diseñado específicamente para la ingeniería de software",
            },
        ],
    },
}
