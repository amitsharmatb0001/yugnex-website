import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "Visão",
    lead: "A transição para uma nova era de inteligência de engenharia persistente e em evolução",
    paragraphs: [
        "Estamos entrando em uma nova era em que a engenharia de software não está mais limitada pela largura de banda cognitiva humana ou pela natureza efêmera das ferramentas atuais.",
        "YugNex representa a ponte entre a 'Yug' (época) da engenharia exclusivamente humana e a 'Nex' (próxima) era de sistemas colaborativos e autônomos.",
        "Nossa visão é criar uma inteligência digital persistente que entenda o software não apenas como texto, mas como um sistema vivo e em evolução – preservando a intenção, o contexto e o raciocínio ao longo de todo o ciclo de vida.",
        "Acreditamos que o futuro do software reside na relação simbiótica entre a criatividade humana e a continuidade da máquina, onde a IA não apenas ajuda, mas realmente projeta ao nosso lado.",
    ],
    oldYugTitle: "O velho Yug",
    oldYugDesc: "Desenvolvimento de software apenas humano. Limitado por limites cognitivos individuais, resultando em decadência de software, fragmentação de contexto e dívida técnica acumulada.",
    newNexTitle: "O próximo próximo",
    newNexDesc: "Engenharia colaborativa autônoma. Um substrato de raciocínio semântico persistente que entende sua arquitetura, verifica invariantes e trabalha ao seu lado.",
    labels: {
        contextHorizon: "Horizonte de Contexto",
        dependencyTracing: "Rastreamento de Dependência Sistêmica",
        codebaseLifecycle: "Ciclo de vida da base de código",
        verificationLoop: "Ciclo de verificação",
    },
    oldValues: {
        contextHorizon: "~ 100 mil tokens (fragmentados)",
        dependencyTracing: "Manual / Aproximado",
        codebaseLifecycle: "Entropia e Degradação",
        verificationLoop: "Testes Pós-Implementação",
    },
    newValues: {
        contextHorizon: "Representação gráfica infinita",
        dependencyTracing: "Rastreamento AST dinâmico (causal)",
        codebaseLifecycle: "Refatorado / Dívida Zero",
        verificationLoop: "Invariantes de sandbox pré-confirmados",
    },
    pillarsTitle: "Pilares do Substrato Cognitivo",
    pillars: [
        {
            id: "context",
            name: "Substrato de Síntese de Contexto",
            description: "Une diretórios de origem brutos em uma representação gráfica semântica unificada e multidimensional.",
            details: "Ao contrário dos assistentes de codificação com recuperação aumentada tradicionais que dependem de correspondência de strings ou indexação vetorial superficial, nosso sistema opera diretamente em relacionamentos, fluxos de dados e redes de dependência de árvore de sintaxe abstrata (AST) em todo o sistema. Ele rastreia intenções e caminhos de raciocínio entre arquivos, preservando a continuidade absoluta do contexto.",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "Motor de raciocínio causal",
            description: "Pesa as compensações, coordena agentes especializados e avalia os impactos sistêmicos das modificações propostas.",
            details: "A engenharia de software é um problema lógico. Nosso substrato multiagente reúne agentes especializados que representam diferentes funções de engenharia de software (Arquiteto, Desenvolvedor, Auditor de Segurança, QA). Através de debates estruturados e de raciocínio multifacetado, eles estabelecem consenso sobre os caminhos de implementação antes de escreverem uma única linha.",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "Verificação Invariante Perpétua",
            description: "Garante a segurança de execução executando, verificando e testando todas as alterações propostas em sandboxes seguras.",
            details: "O código sintaticamente correto não é o objetivo final. YugNex executa validações empíricas em ambientes de contêineres isolados. Ele garante que o novo código esteja em conformidade com invariantes de arquitetura pré-estabelecidas, ultrapasse os limites dos testes de unidade e não introduza nenhuma vulnerabilidade de segurança ou vazamento de conexão.",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "Sistema Sinapseado",
    telemetryTitle: "Métricas de substrato",
    telemetryStatus: "CORRENDO",
    pillarMetas: [
        "Limites do sistema",
        "A próxima época",
        "Inteligência Digital",
        "Simbiose Humano-IA",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "Extensão de largura de banda cognitiva",
                    value: "Expansão de 1024x",
                    pct: 95,
                },
                {
                    label: "Sobrecarga de memória do analisador",
                    value: "-92% de redução",
                    pct: 92,
                },
                {
                    label: "Taxa de coerência de contexto",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core: inicializando mapa de dependência semântica",
                "cortex_substrate: rastreando relacionamentos estruturais",
                "thread_evaluator: analisando nós AST em segundo plano...",
                "status: limites de raciocínio ativo estabelecidos.",
            ],
        },
        {
            stats: [
                {
                    label: "Latência de sincronização humano-IA",
                    value: "<2,4ms",
                    pct: 98,
                },
                {
                    label: "Profundidade de Convergência de Consenso",
                    value: "Nível 12 alcançado",
                    pct: 88,
                },
                {
                    label: "Índice de feedback da interface",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge: conectando canais de consenso neural",
                "coordenador: sondagem de agentes de PO, arquiteto e desenvolvedor",
                "consenso: resolvendo recomendações de código...",
                "status: colaboração autônoma contínua online.",
            ],
        },
        {
            stats: [
                {
                    label: "Sucesso na preservação da intenção",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "Profundidade de conexão do link causal",
                    value: "12.042 rotas",
                    pct: 91,
                },
                {
                    label: "Ciclo de vida do instantâneo de estado",
                    value: "Contínuo",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache: carregando nós de topologia do repositório",
                "causal_mapper: armazenando em cache 4.920 atualizações de link",
                "state_preserver: verificando verificações invariantes de design de código...",
                "status: inteligência persistente do sistema operacional.",
            ],
        },
        {
            stats: [
                {
                    label: "Produtividade de Coengenharia",
                    value: "+184,2% de aumento",
                    pct: 94,
                },
                {
                    label: "Métrica de confiança de validação",
                    value: "100% verificado",
                    pct: 100,
                },
                {
                    label: "Índice de dívida arquitetônica",
                    value: "0,04 (mínimo)",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex: gerando testbeds de verificação invariável",
                "diagnóstico: verificação de 89 propriedades de segurança no estadiamento",
                "compiler_verify: limites estruturais aprovados",
                "status: criatividade humana aumentada pela continuidade da máquina.",
            ],
        },
    ],
}
