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
    diagnosticsTitle: "Diagnóstico interactivo de limitaciones",
    approachTitle: "Nuestro enfoque en capas",
    debateTitle: "Consensos del analizador autónomo",
    debateSubtitle: "Pase el cursor sobre las líneas de código para activar el panel de consenso de múltiples agentes de YugNex que debate cuestiones de seguridad y refactorización.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[INFO] Ejecutando rastreo de arquitectura del repositorio...",
                "[ADVERTENCIA] Límite de contexto alcanzado en el índice de archivo 512.",
                "[FALLO] context_overflow: el tamaño de la pila 1.048.576 bytes superó la ventana de contexto estándar.",
                "[CRÍTICO] Analizador cancelado. El LLM tradicional no logra resolver las relaciones en todo el sistema.",
                "[SOLUCIÓN YUGNEX] Redireccionamiento al sustrato de contexto causal...",
                "[ÉXITO] Se completó el seguimiento del gráfico causal. 48.091 archivos indexados con nodos de caché persistente.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[INFO] Inicializando trabajo de refactorización de parámetros...",
                "[INFO] Analizador ejecutando verificación de razonamiento simbólico en nodos de dependencia...",
                "[ADVERTENCIA] Código generado por el asistente tradicional: la lista de parámetros userService.ts no coincide (falta el token).",
                "[CRÍTICO] error_compilación: la sintaxis del código es válida pero interrumpirá la invocación en producción.",
                "[SOLUCIÓN YUGNEX] El bloque de razonamiento simbólico interceptó una lista de parámetros no válidos. Revirtiendo cambios...",
                "[ÉXITO] Se aplicaron enlaces parametrizados y llamadas sincronizadas en 14 módulos dependientes.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[INFO] Iniciando la verificación de canalización de CI...",
                "[INFO] Modelos de escaneo/para vectores de seguridad de inyección de consultas de usuarios...",
                "[ADVERTENCIA] direct_interpolation: interpolación de consultas detectada en perfilSearch.ts.",
                "[FALLO] Invariante 02 violada: los parámetros de la base de datos deben estar vinculados. Estado de construcción: BLOQUEADO.",
                "[SOLUCIÓN YUGNEX] Parámetros de fijación automática con consultas SQL parametrizadas...",
                "[ÉXITO] Se aprobaron las invariantes. Controles de seguridad verificados (0 riesgos encontrados). Construcción publicada.",
            ],
        },
    ],
    approachDiagrams: [
        "[Agente analizador AST] =======> [Agente solucionador causal]\n                                   ||\n                                   \\/ \n[Agente de consenso] <======== [Agente de refactor]\nESTADO: Razonamiento colaborativo especializado en línea.",
        "Agente[Arquitecto]: \"La interpolación directa de SQL viola el estándar\".\nAgente[Seguridad]: \"Vulnerabilidad confirmada. Construcción de bloqueo automático\".\nAgente[Desarrollador]: \"Actualizando enlaces de consulta. Inyectando corrección...\"\nESTADO: Se alcanzó consenso. Código parcheado exitosamente.",
        "Nivel 5 (Patrones de Diseño Arquitectónico) - ACTIVO\nNivel 4 (Interdependencias del Módulo) - ACTIVO\nNivel 3 (Enlace de variable semántica) - ACTIVO\nNivel 2 (Árbol de sintaxis abstracta) - ACTIVO\nESTADO: Razonamiento en capas en todo el sistema verificado.",
        "Relaciones causales almacenadas en caché: 184.902\nNodos de contexto activos: 12.042\nLatencia de búsqueda: 1,2 ms (98 % de aceleración respecto a la búsqueda LLM)\nESTADO: Gráficos causales completamente sincronizados.",
    ],
    liveTelemetry: "Gráfico de telemetría en vivo",
    codeLens: {
        panelTitle: "active_routes.js — Líneas de desplazamiento/clic con nodos de alerta",
        insightTitleAutoFix: "Recomendación de reparación automática de YugNex",
        insightTitleDebate: "Debate sobre la resolución del agente",
        solutionsDefault: "Pase el cursor sobre las líneas de código de la izquierda para activar la lente del analizador autónomo YugNex.",
        lines: [
            {
            },
            {
                warningTitle: "Vulnerabilidad de inyección SQL",
                warningDesc: "La interpolación directa de la entrada del usuario en una cadena de consulta SQL permite a los atacantes inyectar comandos SQL maliciosos y eludir la autenticación o ver tablas no autorizadas.",
                debate: [
                    {
                        role: "Arquitecto",
                        text: "Se detectó interpolación de consulta SQL directa. Esto viola nuestros estándares de seguridad.",
                    },
                    {
                        role: "Auditor de seguridad",
                        text: "Explotación remota posible a través de parámetros de estado. Confirmación bloqueada.",
                    },
                    {
                        role: "Revelador",
                        text: "Reescribir la consulta en el enlace parametrizado usando db.execute (consulta, [estado]).",
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
                warningTitle: "Cuello de botella de consulta N+1",
                warningDesc: "La ejecución de una consulta de base de datos separada dentro de un bucle genera N consultas para N usuarios. Esto provoca fuertes picos de latencia y sobrecarga del servidor a medida que los grupos de conexiones de bases de datos se saturan.",
                debate: [
                    {
                        role: "Arquitecto",
                        text: "Cuello de botella de bases de datos relacionales. La ejecución de consultas dentro de un bucle está bloqueada.",
                    },
                    {
                        role: "Revelador",
                        text: "Agregar ID de usuario para buscar perfiles por lotes en una única consulta SELECT... WHERE IN (?).",
                    },
                    {
                        role: "Auditor de Calidad",
                        text: "Verificado. Las métricas de referencia muestran que el total de consultas ejecutadas disminuyó de N a 1.",
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
