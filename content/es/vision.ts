import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "Visión",
    lead: "La transición a una nueva época de inteligencia de ingeniería persistente y evolutiva",
    paragraphs: [
        "Estamos entrando en una nueva era donde la ingeniería de software ya no está limitada por el ancho de banda cognitivo humano o la naturaleza efímera de las herramientas actuales.",
        "YugNex representa el puente entre la 'Yug' (época) de ingeniería solo humana y la 'Nex' (siguiente) era de sistemas colaborativos y autónomos.",
        "Nuestra visión es crear una inteligencia digital persistente que comprenda el software no solo como texto, sino como un sistema vivo y evolutivo, preservando la intención, el contexto y el razonamiento a lo largo de todo el ciclo de vida.",
        "Creemos que el futuro del software radica en la relación simbiótica entre la creatividad humana y la continuidad de las máquinas, donde la IA no solo asiste, sino que verdaderamente ingenieriza junto a nosotros.",
    ],
    oldYugTitle: "El viejo Yug",
    oldYugDesc: "Desarrollo de software solo para humanos. Limitados por límites cognitivos individuales, lo que resulta en deterioro del software, fragmentación del contexto y deuda técnica acumulada.",
    newNexTitle: "El próximo próximo",
    newNexDesc: "Ingeniería colaborativa autónoma. Un sustrato de razonamiento semántico persistente que comprende su arquitectura, verifica invariantes y trabaja junto a usted.",
    labels: {
        contextHorizon: "Horizonte de contexto",
        dependencyTracing: "Seguimiento de dependencia sistémica",
        codebaseLifecycle: "Ciclo de vida de la base de código",
        verificationLoop: "Bucle de verificación",
    },
    oldValues: {
        contextHorizon: "~100K tokens (fragmentados)",
        dependencyTracing: "Manual / Aproximado",
        codebaseLifecycle: "Entropía y degradación",
        verificationLoop: "Pruebas posteriores a la implementación",
    },
    newValues: {
        contextHorizon: "Representación de gráfico infinito",
        dependencyTracing: "Traza dinámica de AST (causal)",
        codebaseLifecycle: "Refactorizado / Deuda Cero",
        verificationLoop: "Invariantes de sandbox de confirmación previa",
    },
    pillarsTitle: "Pilares del sustrato cognitivo",
    pillars: [
        {
            id: "context",
            name: "Sustrato de síntesis de contexto",
            description: "Une directorios de fuentes sin procesar en una representación gráfica semántica multidimensional unificada.",
            details: "A diferencia de los asistentes de codificación tradicionales con recuperación aumentada que se basan en la coincidencia de cadenas o la indexación de vectores superficiales, nuestro sistema opera directamente en relaciones de árbol de sintaxis abstracta (AST), flujos de datos y redes de dependencia de todo el sistema. Realiza un seguimiento de las rutas de intención y razonamiento a través de los archivos, preservando la continuidad absoluta del contexto.",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "Motor de razonamiento causal",
            description: "Sopesa las compensaciones, coordina a los agentes especializados y evalúa los impactos sistémicos de las modificaciones propuestas.",
            details: "La ingeniería de software es un problema lógico. Nuestro sustrato multiagente reúne agentes especializados que representan diferentes funciones de ingeniería de software (arquitecto, desarrollador, auditor de seguridad, control de calidad). A través de debates de razonamiento estructurados y de múltiples turnos, establecen un consenso sobre las vías de implementación antes de escribir una sola línea.",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "Verificación invariante perpetua",
            description: "Garantiza la seguridad de la ejecución mediante la ejecución, verificación y prueba de todos los cambios propuestos en entornos sandbox seguros.",
            details: "El código sintácticamente correcto no es el objetivo final. YugNex ejecuta validaciones empíricas en entornos de contenedores aislados. Garantiza que el nuevo código se ajuste a las invariantes arquitectónicas preestablecidas, supere los límites de las pruebas unitarias e introduzca cero vulnerabilidades de seguridad o fugas de conexión.",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "Sistema sinapsis",
    telemetryTitle: "Métricas de sustrato",
    telemetryStatus: "CORRER",
    pillarMetas: [
        "Límites del sistema",
        "La próxima época",
        "Inteligencia Digital",
        "Simbiosis humano-IA",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "Intervalo de ancho de banda cognitivo",
                    value: "1024x expandir",
                    pct: 95,
                },
                {
                    label: "Sobrecarga de memoria del analizador",
                    value: "-92% de reducción",
                    pct: 92,
                },
                {
                    label: "Tasa de coherencia contextual",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core: inicializando el mapa de dependencia semántica",
                "corteza_substrate: seguimiento de relaciones estructurales",
                "thread_evaluator: analizando nodos AST en segundo plano...",
                "Estado: límites de razonamiento activo establecidos.",
            ],
        },
        {
            stats: [
                {
                    label: "Latencia de sincronización entre humanos y IA",
                    value: "< 2,4 ms",
                    pct: 98,
                },
                {
                    label: "Profundidad de convergencia del consenso",
                    value: "Nivel 12 alcanzado",
                    pct: 88,
                },
                {
                    label: "Índice de comentarios de la interfaz",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge: conectando canales de consenso neuronal",
                "Coordinador: PO de votación, arquitecto y agentes desarrolladores.",
                "consenso: resolución de recomendaciones de código...",
                "Estado: colaboración autónoma continua en línea.",
            ],
        },
        {
            stats: [
                {
                    label: "Éxito en la preservación de la intención",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "Profundidad de conexión del enlace causal",
                    value: "12.042 rutas",
                    pct: 91,
                },
                {
                    label: "Ciclo de vida de la instantánea de estado",
                    value: "Continuo",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache: cargando nodos de topología del repositorio",
                "causal_mapper: almacenamiento en caché de 4920 actualizaciones de enlaces",
                "state_preserver: verificando las comprobaciones invariantes del diseño del código...",
                "Estado: inteligencia persistente del sistema operativa.",
            ],
        },
        {
            stats: [
                {
                    label: "Productividad de co-ingeniería",
                    value: "+184,2% de aumento",
                    pct: 94,
                },
                {
                    label: "Métrica de confianza de validación",
                    value: "100% verificado",
                    pct: 100,
                },
                {
                    label: "Índice de deuda arquitectónica",
                    value: "0,04 (mínimo)",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex: generación de bancos de pruebas de verificación invariante",
                "diagnóstico: comprobando 89 propiedades de seguridad en la puesta en escena",
                "compiler_verify: los límites estructurales pasaron limpios",
                "Estado: creatividad humana aumentada con continuidad de la máquina.",
            ],
        },
    ],
}
