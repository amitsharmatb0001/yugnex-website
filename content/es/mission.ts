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
    closingStatement: "La nueva época no es una visión lejana. Es la infraestructura que estamos construyendo ahora mismo.",
    blueprint: [
        {
            id: "ingestion",
            num: "CAPA_01",
            name: "Sustrato de ingestión de fuente semántica",
            badge: "Analizando AST",
            telemetryTitle: "SISTEMA::INGESTION_CONTROLLER",
            logs: [
                "$ núcleo yugnex --parse-directory=./src",
                "Escaneo del directorio base del código: 1.420 archivos coincidentes.",
                "Construcción de referencias del árbol de sintaxis abstracta (AST)...",
                "Mapeo de gráficos de llamadas y vectores relacionales.",
                "ÉXITO: ​​12,450 nodos AST hicieron sinapsis en Context Substrate Graph.",
                "Oyentes activos registrados: observador del sistema de archivos en --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "CAPA_02",
            name: "Solucionador invariante multiagente",
            badge: "Lógica de debate",
            telemetryTitle: "SISTEMA::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ agentes-yugnex --start-consensus --vulnerability-id=CVE-2026-SQL",
                "Lanzamiento de sala de debate con: [Arquitecto, Desarrollador, Auditor]",
                "[PO]: Interpolación de consultas SQL sin procesar marcadas dentro de userController.ts:L24",
                "[Desarrollador]: Proponiendo el reemplazo de expresiones regulares para la validación de entradas.",
                "[Arquitecto]: RECHAZADO. El reemplazo de expresiones regulares se puede omitir. Debe reescribirse en la consulta de enlace de parámetros.",
                "[Auditor]: Validando ruta de consulta parametrizada. Análisis invariante completo.",
                "Se alcanzó el consenso. Solución generada: inyección de sentencia parametrizada.",
            ],
        },
        {
            id: "sandbox",
            num: "CAPA_03",
            name: "Motor Sandbox de verificación aislado",
            badge: "Ejecutivo de pruebas",
            telemetryTitle: "SISTEMA::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "Contenedor generado. Imagen: nodo-alpino-yugnex:último",
                "Inyectar archivos refactorizados en el sistema de archivos contenedor.",
                "Ejecutando la validación del compilador... ÉXITO: ​​código de salida 0.",
                "Ejecutando barrido de prueba unitaria... 48/48 pruebas aprobadas (240 ms).",
                "Monitoreo de pérdidas de montón de memoria... estable en barridos de 42,1 MB.",
                "Pruebas de sandbox completadas. Estado de verificación: VERIFICADO SEGURO.",
            ],
        },
        {
            id: "sync",
            num: "CAPA_04",
            name: "Sincronizador VCS perpetuo",
            badge: "Confirmar sincronización",
            telemetryTitle: "SISTEMA::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "Creando sucursal local: yugnex/patch-secure-auth",
                "Confirmación de cambios: 2 archivos modificados, cero advertencias.",
                "Verificando firmas de confirmación... Firma GPG validada.",
                "Empujando la rama al VCS ascendente... listo.",
                "Solicitud de extracción de apertura: [Refactor de seguridad] Parametrización segura de consultas SQL.",
                "Estado de la canalización de VCS: verde, en espera de fusión del revisor.",
            ],
        },
    ],
    awaitingPipeline: "esperando la ejecución del oleoducto...",
    pipelineIntegrationFlow: "Flujo de integración de tuberías",
    triggerDiagnostic: "DIAGNÓSTICO DEL GATILLO",
    runningDiagnostic: "CORRER...",
    layerMetas: [
        "Sustratos fundamentales",
        "Evolución perpetua",
        "Contexto arquitectónico",
        "Validación aumentada",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "Inicializar esquemas de análisis AST",
                },
                {
                    label: "Mapa de nodos semánticos causales",
                },
                {
                    label: "Crear instancias de tiempos de ejecución de Docker Sandbox",
                },
            ],
            logs: [
                "ast_parser: leyendo tokens de código base...",
                "dependency_resolver: restricciones de la lista de parámetros coincidentes",
                "sandbox_manager: compilando el diseño del nodo del contenedor...",
                "ÉXITO: ​​Capa de sustrato fundacional totalmente activa.",
            ],
        },
        {
            steps: [
                {
                    label: "Enganchar eventos de canalización de confirmación de Git",
                },
                {
                    label: "Compilar árboles diferenciales de repositorio",
                },
                {
                    label: "Verificar límites invariantes arquitectónicos",
                },
            ],
            logs: [
                "vcs_monitor: escuchando los push de la rama principal...",
                "diff_engine: analizando 14 archivos AST modificados",
                "invariant_runner: probando 8 comprobaciones de validación...",
                "ÉXITO: ​​Se completaron los bucles del compilador evolutivo. Construir sincronizado.",
            ],
        },
        {
            steps: [
                {
                    label: "Extraer rutas de importación de múltiples módulos",
                },
                {
                    label: "Escalar los límites del alcance del contexto dinámicamente",
                },
                {
                    label: "Coordinar comprobaciones de consenso de múltiples agentes.",
                },
            ],
            logs: [
                "context_engine: lectura de conexiones de dependencia entre módulos",
                "agent_consensus: hacer coincidir las auditorías de seguridad con las ediciones de los desarrolladores",
                "validation_agent: analizando árboles de razonamiento AST...",
                "ÉXITO: ​​Relaciones causales consolidadas en mapas de contexto.",
            ],
        },
        {
            steps: [
                {
                    label: "Monitorear espacios de trabajo IDE activos",
                },
                {
                    label: "Analice los parámetros del desarrollador en tiempo real",
                },
                {
                    label: "Generar informes de diagnóstico estructural.",
                },
            ],
            logs: [
                "workspace_daemon: activo en cambios del sistema de archivos",
                "lint_check: parámetros de prueba contra las API del marco",
                "audit_writer: compilando notas de integridad de la documentación...",
                "ÉXITO: ​​Cumplimiento arquitectónico verificado. 0 defectos registrados.",
            ],
        },
    ],
}
