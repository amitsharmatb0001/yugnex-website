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
    closingStatement: "A nova época não é uma visão distante. É a infraestrutura que estamos construindo agora.",
    blueprint: [
        {
            id: "ingestion",
            num: "CAMADA_01",
            name: "Substrato de ingestão de fonte semântica",
            badge: "Analisando AST",
            telemetryTitle: "SISTEMA::INGESTION_CONTROLLER",
            logs: [
                "$ yugnex core --parse-directory=./src",
                "Verificando o diretório da base de código: 1.420 arquivos correspondentes.",
                "Construindo referências de Árvore de Sintaxe Abstrata (AST)...",
                "Mapeamento de gráficos de chamadas e vetores relacionais.",
                "SUCESSO: 12.450 nós AST sincronizados com o Context Substrate Graph.",
                "Ouvintes ativos registrados: observador do sistema de arquivos em --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "CAMADA_02",
            name: "Solucionador Invariante Multiagente",
            badge: "Debatendo Lógica",
            telemetryTitle: "SISTEMA::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "Lançamento de sala de debate com: [Arquiteto, Desenvolvedor, Auditor]",
                "[PO]: Interpolação de consulta SQL bruta sinalizada dentro de userController.ts:L24",
                "[Desenvolvedor]: Propondo substituição de regex para validação de entrada.",
                "[Arquiteto]: REJEITADO. A substituição de Regex pode ser ignorada. Deve reescrever a consulta de ligação de parâmetro.",
                "[Auditor]: Validando caminho de consulta parametrizado. Análise invariante concluída.",
                "Consenso alcançado. Solução gerada: injeção de instrução parametrizada.",
            ],
        },
        {
            id: "sandbox",
            num: "CAMADA_03",
            name: "Mecanismo de sandbox de verificação isolada",
            badge: "Executivo de testes",
            telemetryTitle: "SISTEMA::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "Contêiner gerado. Imagem: node-alpine-yugnex:mais recente",
                "Injetando arquivos refatorados no sistema de arquivos contêiner.",
                "Executando validação do compilador... SUCESSO: código de saída 0.",
                "Executando varredura de teste de unidade... 48/48 testes aprovados (240ms).",
                "Monitorando vazamentos de heap de memória... estável em varreduras de 42,1 MB.",
                "Testes de sandbox concluídos. Status de verificação: VERIFICADO SEGURO.",
            ],
        },
        {
            id: "sync",
            num: "CAMADA_04",
            name: "Sincronizador VCS perpétuo",
            badge: "Confirmar sincronização",
            telemetryTitle: "SISTEMA::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "Criando filial local: yugnex/patch-secure-auth",
                "Confirmando alterações: 2 arquivos modificados, zero avisos.",
                "Verificando assinaturas de commit... Assinatura GPG validada.",
                "Enviando branch para VCS upstream... pronto.",
                "Abrindo pull request: [Refator de segurança] Parametrização de consulta SQL segura.",
                "Status do pipeline do VCS: verde, aguardando mesclagem do revisor.",
            ],
        },
    ],
    awaitingPipeline: "aguardando a execução do pipeline...",
    pipelineIntegrationFlow: "Fluxo de integração de pipeline",
    triggerDiagnostic: "DIAGNÓSTICO DE GATILHO",
    runningDiagnostic: "CORRENDO...",
    layerMetas: [
        "Substratos Fundacionais",
        "Evolução Perpétua",
        "Contexto Arquitetônico",
        "Validação Aumentada",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "Inicializar esquemas de análise AST",
                },
                {
                    label: "Mapear nós semânticos causais",
                },
                {
                    label: "Instanciar tempos de execução de sandbox do Docker",
                },
            ],
            logs: [
                "ast_parser: lendo tokens de base de código...",
                "dependency_resolver: restrições da lista de parâmetros correspondentes",
                "sandbox_manager: compilando o layout do nó do contêiner...",
                "SUCESSO: Camada de substrato fundamental totalmente ativa.",
            ],
        },
        {
            steps: [
                {
                    label: "Gancho eventos de pipeline de commit do Git",
                },
                {
                    label: "Compilar árvores diferenciais de repositório",
                },
                {
                    label: "Verifique os limites invariantes arquitetônicos",
                },
            ],
            logs: [
                "vcs_monitor: ouvindo push do branch principal...",
                "diff_engine: analisando 14 arquivos AST alterados",
                "invariant_runner: testando 8 verificações de validação...",
                "SUCESSO: Loops do compilador evolutivo concluídos. Construa sincronizado.",
            ],
        },
        {
            steps: [
                {
                    label: "Extraia caminhos de importação de vários módulos",
                },
                {
                    label: "Dimensione os limites do escopo do contexto dinamicamente",
                },
                {
                    label: "Coordenar verificações de consenso multiagentes",
                },
            ],
            logs: [
                "context_engine: lendo conexões de dependência entre módulos",
                "agent_consensus: combinando auditorias de segurança com edições de desenvolvedores",
                "validação_agent: analisando árvores de raciocínio AST...",
                "SUCESSO: Relações causais consolidadas em mapas de contexto.",
            ],
        },
        {
            steps: [
                {
                    label: "Monitore espaços de trabalho IDE ativos",
                },
                {
                    label: "Analise os parâmetros do desenvolvedor em tempo real",
                },
                {
                    label: "Relatórios de diagnóstico estrutural de saída",
                },
            ],
            logs: [
                "workspace_daemon: ativo em alterações no sistema de arquivos",
                "lint_check: testando parâmetros em APIs de estrutura",
                "audit_writer: compilando notas de integridade da documentação...",
                "SUCESSO: Conformidade arquitetônica verificada. 0 defeitos registrados.",
            ],
        },
    ],
}
