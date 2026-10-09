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
    disclaimer: "⚠️ Descargo de responsabilidad sobre simulación de I+D: esta interfaz es una demostración interactiva con fines de visualización conceptual. El sistema autónomo de ingeniería de software YugNex se encuentra actualmente en la fase de Investigación y Desarrollo (I+D). No hay ninguna aplicación digital de producción pública ni ningún sistema totalmente optimizado activo en este momento.",
    tabs: {
        github: "Solicitud de extracción de GitHub",
        ide: "Integración del espacio de trabajo IDE",
        cicd: "Canalización invariante de CI/CD",
    },
    githubPr: {
        statusOpen: "Abierto",
        securityScore: "Puntuación de integridad de seguridad",
        securityBadge: "Agente Auditor de Seguridad",
        securityTime: "Verificado hace 2m",
        securityFeedback: "Resolución de vulnerabilidad verificada. La clave secreta JWT codificada se ha parametrizado para ejecutarse desde variables ambientales del sistema. Los encabezados de seguridad X-Frame-Options se han inyectado con éxito a nivel mundial. Se pasaron los controles invariantes.",
    },
    ideWorkspace: {
        statusReviewing: "Revisando",
        ideTitle: "YugNex: Resuelve la fuga del oyente en WebSockets",
        ideDesc: "La pérdida de memoria se resolvió declarando un controlador cercano explícito.",
        btnAccept: "Aceptar sugerencia",
        btnDecline: "Rechazar",
    },
    cicdPipeline: {
        statusPipelinePassed: "Tubería aprobada",
        statusSuccess: "ESTADO: ÉXITO",
        ciLogs: [
            "[INFO] Generando contenedores de tiempo de ejecución de producción...",
            "[INFO] Agrupación de módulos y escaneo de árboles de compilación del compilador...",
            "[INFO] Ejecutando barridos invariantes formales:",
            "✓ Invariante 01: Integridad de autenticación API (aprobada)",
            "✓ Invariante 02: Restricciones de asignación de recursos (aprobada)",
            "✓ Invariante 03: Verificación de dependencia circular (aprobada)",
            "[ÉXITO] Compilación del sistema verificada. La integridad de la ejecución pasa con 0 pérdidas de memoria.",
            "implementando hasta el borde de producción...",
        ],
    },
    capabilitiesTitle: "Capacidades de plataforma interactiva",
    consoleSandboxRunner: "CONSOLA: SANDBOX_RUNNER",
    btnExecuting: "EJECUTANDO...",
    btnRun: "CORRER",
    capLogs: [
        {
            cmd: "yugnex build --analyze-architecture",
            logs: [
                "[INFO] Escaneando directorios de código base...",
                "[INFO] Construyendo un gráfico causal entre módulos (1284 nodos)...",
                "[VCS] Comprobación de los límites arquitectónicos frente a las especificaciones de diseño...",
                "[ÉXITO] Esquema de dependencia creado. 0 violaciones de límites encontradas.",
            ],
        },
        {
            cmd: "yugnex diff --check-implications --file=userModel.ts",
            logs: [
                "[INFO] Seguimiento de importaciones posteriores para userModel.ts...",
                "[INFO] Comprobando cadenas de dependencia dentro de rutas/ y controladores/...",
                "[ADVERTENCIA] userService.ts depende de los esquemas de base de datos modificados. Validando parámetros...",
                "[ÉXITO] Rutas causales verificadas. Evaluación de riesgos de refactorización: 0 problemas.",
            ],
        },
        {
            cmd: "yugnex validate --invariants --level=all",
            logs: [
                "[INFO] Ejecutando comprobaciones de validación invariante multinivel...",
                "[INFO] Nivel 1: Análisis de sintaxis (PASS) | Nivel 2: Tipos (PASS)",
                "[INFO] Nivel 3: Sandboxing de Seguridad (PASS) | Nivel 4: Comprobaciones de memoria (PASS)",
                "[ÉXITO] La validación formal se completó con éxito. Código seguro.",
            ],
        },
    ],
}
