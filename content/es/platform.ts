import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "La plataforma",
    subtitle: "Ingeniería de software autónoma, reinventada",
    hero: {
        title: "Lo que estamos construyendo",
        description: "Una plataforma impulsada por IA que va más allá de la generación de código para comprender, razonar y colaborar verdaderamente en sistemas de software complejos. No es otra herramienta de autocompletar. Un socio de ingeniería colaborativo que aporta comprensión arquitectónica, razonamiento sistémico y validación a su flujo de trabajo de desarrollo.",
    },
    capabilities: [
        {
            title: "Entiende la arquitectura, no solo la sintaxis",
            description: "Si bien las herramientas actuales predicen la siguiente línea de código, nuestra plataforma genera una comprensión integral de la arquitectura, las dependencias y los patrones de diseño de su sistema.",
            points: [
                "Los cambios se evalúan en el contexto completo del sistema.",
                "Los impactos de la dependencia se comprenden antes de la implementación.",
                "Los límites arquitectónicos se respetan automáticamente",
                "Las implicaciones técnicas de la deuda salen a la luz de forma proactiva",
            ],
        },
        {
            title: "Razones sobre las implicaciones",
            description: "Cada cambio de código tiene implicaciones: rendimiento, seguridad, mantenibilidad, escalabilidad. Nuestra plataforma no sólo genera código; Razona sobre lo que significa ese código para su sistema.",
            points: [
                "Se analizan los impactos en todo el sistema",
                "Se evalúan los riesgos y las compensaciones",
                "Se consideran enfoques alternativos",
                "Se mantiene la coherencia arquitectónica",
            ],
        },
        {
            title: "Valida en múltiples niveles",
            description: "El código sintácticamente correcto no es el objetivo; el objetivo sí lo es el código arquitectónicamente sólido, mantenible y seguro.",
            points: [
                "Corrección: ¿Funciona sin romper cosas?",
                "Seguridad: ¿Se mantienen los límites de seguridad?",
                "Arquitectura: ¿Se alinea con el diseño del sistema?",
                "Mantenibilidad: ¿lo entenderán los ingenieros dentro de seis meses?",
            ],
        },
    ],
    useCases: [
        {
            title: "Refactorización compleja",
            challenge: "Refactorizar en grandes bases de código es arriesgado. Es necesario comprender cada lugar en el que se utiliza el código, cada dependencia que podría romperse...",
            solution: "Analiza el gráfico de dependencia completo, identifica todos los componentes afectados, evalúa las implicaciones arquitectónicas y ayuda a ejecutar los cambios de forma segura.",
        },
        {
            title: "Análisis Arquitectónico",
            challenge: "Comprender cómo funciona realmente una gran base de código (sus patrones, sus contratos implícitos, sus decisiones de diseño) lleva semanas para los nuevos miembros del equipo.",
            solution: "Crea mapas arquitectónicos completos que muestran la estructura del sistema, las relaciones de dependencia, los patrones de diseño y los límites arquitectónicos.",
        },
        {
            title: "Evolución del sistema seguro",
            challenge: "Agregar funciones o realizar cambios sin introducir errores, violar principios arquitectónicos o crear deuda técnica.",
            solution: "Evalúa los cambios propuestos en el contexto completo del sistema, identifica problemas potenciales antes de la implementación y sugiere enfoques arquitectónicamente coherentes.",
        },
        {
            title: "Comprensión del código heredado",
            challenge: "Las bases de código heredadas con documentación mínima, decisiones de diseño poco claras y deuda técnica acumulada son costosas de mantener.",
            solution: "Reconstruye la intención arquitectónica, identifica patrones y antipatrones de diseño, mapea las relaciones de dependencia y muestra la deuda técnica.",
        },
        {
            title: "Revisión de código a escala",
            challenge: "La revisión exhaustiva del código requiere comprender las implicaciones que afectan a todo el sistema, pero los revisores tienen tiempo y ancho de banda cognitivo limitados.",
            solution: "Realiza un análisis arquitectónico profundo, identifica problemas potenciales en todas las dimensiones y resalta inquietudes que requieren juicio humano.",
        },
    ],
    targetAudience: [
        {
            role: "Equipos de ingeniería",
            painPoints: [
                "Múltiples servicios",
                "Patrones arquitectónicos",
                "Requisitos de seguridad/rendimiento",
            ],
            benefit: "Necesitas más que autocompletar. Necesitas comprensión arquitectónica.",
        },
        {
            role: "Ingenieros y Arquitectos Senior",
            painPoints: [
                "Seguimiento de dependencias",
                "Revisión de violaciones arquitectónicas",
                "Explicando el contexto",
            ],
            benefit: "Maneja la carga cognitiva de la comprensión del sistema, liberándolo para concentrarse en decisiones de alto nivel.",
        },
        {
            role: "Equipos que gestionan la deuda técnica",
            painPoints: [
                "Alcance desconocido",
                "Priorización",
                "Refactorización segura",
            ],
            benefit: "Visibiliza la deuda técnica y te ayuda a abordarla sistemáticamente.",
        },
    ],
    workflow: {
        title: "Cómo funciona con su flujo de trabajo",
        points: [
            {
                title: "Integrado, no intrusivo",
                description: "Se adapta a su entorno y código base existentes. No se requiere migración.",
            },
            {
                title: "Colaborativo, no automatizado",
                description: "La plataforma sugiere, tú decides. Aporta puntos fuertes de la IA para complementar el juicio humano.",
            },
            {
                title: "Caja transparente, no negra",
                description: "Muestra su razonamiento, dependencias identificadas, riesgos y compensaciones.",
            },
        ],
    },
    comparison: [
        {
            category: "Autocompletar código",
            others: "Generar código basado en patrones. Predice la siguiente línea. Ayuda a escribir más rápido.",
            us: "Razón sobre los sistemas. Comprender toda la arquitectura. Ayuda a construir mejor.",
        },
        {
            category: "Análisis estático",
            others: "Encuentre problemas en el código. Marcar errores de sintaxis. Ejecutar después de la codificación.",
            us: "Comprender las implicaciones arquitectónicas. Razón sobre los impactos en todo el sistema. Guía a medida que te desarrollas.",
        },
        {
            category: "Herramientas de revisión de código",
            others: "Facilitar la revisión humana. Mostrar diferencias. Resalte los cambios.",
            us: "Realizar análisis arquitectónicos. Explique las implicaciones. Validar la coherencia del sistema.",
        },
    ],
}
