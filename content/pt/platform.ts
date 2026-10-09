import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "A plataforma",
    subtitle: "Engenharia de software autônoma, reimaginada",
    hero: {
        title: "O que estamos construindo",
        description: "Uma plataforma alimentada por IA que vai além da geração de código para realmente compreender, raciocinar e colaborar em sistemas de software complexos. Não é outra ferramenta de preenchimento automático. Um parceiro de engenharia colaborativa que traz compreensão arquitetônica, raciocínio sistêmico e validação ao seu fluxo de trabalho de desenvolvimento.",
    },
    capabilities: [
        {
            title: "Compreende arquitetura, não apenas sintaxe",
            description: "Embora as ferramentas atuais prevejam a próxima linha de código, nossa plataforma cria uma compreensão abrangente da arquitetura, das dependências e dos padrões de design do seu sistema.",
            points: [
                "As alterações são avaliadas no contexto completo do sistema",
                "Os impactos da dependência são compreendidos antes da implementação",
                "Os limites arquitetônicos são respeitados automaticamente",
                "As implicações da dívida técnica são reveladas proativamente",
            ],
        },
        {
            title: "Razões sobre implicações",
            description: "Cada mudança de código tem implicações: desempenho, segurança, capacidade de manutenção, escalabilidade. Nossa plataforma não gera apenas código; raciocina sobre o que esse código significa para o seu sistema.",
            points: [
                "Os impactos em todo o sistema são analisados",
                "Riscos e compensações são avaliados",
                "Abordagens alternativas são consideradas",
                "A coerência arquitetônica é mantida",
            ],
        },
        {
            title: "Valida em vários níveis",
            description: "Código sintaticamente correto não é o objetivo – código arquiteturalmente sólido, sustentável e seguro é.",
            points: [
                "Correção: Funciona sem quebrar as coisas?",
                "Segurança: Os limites de segurança são mantidos?",
                "Arquitetura: está alinhada com o design do sistema?",
                "Capacidade de manutenção: os engenheiros entenderão isso daqui a seis meses?",
            ],
        },
    ],
    useCases: [
        {
            title: "Refatoração Complexa",
            challenge: "Refatorar em grandes bases de código é arriscado. Você precisa entender cada lugar onde o código é usado, cada dependência que pode quebrar...",
            solution: "Analisa o gráfico de dependência completo, identifica todos os componentes afetados, avalia as implicações arquitetônicas e ajuda a executar alterações com segurança.",
        },
        {
            title: "Análise Arquitetônica",
            challenge: "Compreender como uma grande base de código realmente funciona – seus padrões, seus contratos implícitos, suas decisões de design – leva semanas para novos membros da equipe.",
            solution: "Constrói mapas arquitetônicos abrangentes mostrando a estrutura do sistema, relacionamentos de dependência, padrões de projeto e limites arquitetônicos.",
        },
        {
            title: "Evolução Segura do Sistema",
            challenge: "Adicionar recursos ou fazer alterações sem introduzir bugs, violar princípios arquitetônicos ou criar dívida técnica.",
            solution: "Avalia as alterações propostas no contexto completo do sistema, identifica possíveis problemas antes da implementação e sugere abordagens arquiteturalmente coerentes.",
        },
        {
            title: "Compreensão do código legado",
            challenge: "Bases de código herdadas com documentação mínima, decisões de design pouco claras e dívida técnica acumulada são caras de manter.",
            solution: "Reconstrói a intenção arquitetônica, identifica padrões de design e antipadrões, mapeia relacionamentos de dependência e revela dívidas técnicas.",
        },
        {
            title: "Revisão de código em escala",
            challenge: "A revisão completa do código requer a compreensão das implicações de todo o sistema, mas os revisores têm tempo e largura de banda cognitiva limitados.",
            solution: "Executa análises arquitetônicas profundas, identifica possíveis problemas em todas as dimensões e destaca preocupações que exigem julgamento humano.",
        },
    ],
    targetAudience: [
        {
            role: "Equipes de Engenharia",
            painPoints: [
                "Vários serviços",
                "Padrões arquitetônicos",
                "Requisitos de segurança/desempenho",
            ],
            benefit: "Você precisa de mais do que preenchimento automático. Você precisa de compreensão arquitetônica.",
        },
        {
            role: "Engenheiros e arquitetos seniores",
            painPoints: [
                "Rastreando dependências",
                "Revendo violações arquitetônicas",
                "Explicando o contexto",
            ],
            benefit: "Lida com a carga cognitiva da compreensão do sistema, liberando você para se concentrar em decisões de alto nível.",
        },
        {
            role: "Equipes gerenciando dívida técnica",
            painPoints: [
                "Escopo desconhecido",
                "Priorização",
                "Refatoração segura",
            ],
            benefit: "Torna a dívida técnica visível e ajuda a resolvê-la de forma sistemática.",
        },
    ],
    workflow: {
        title: "Como funciona com seu fluxo de trabalho",
        points: [
            {
                title: "Integrado, não intrusivo",
                description: "Adapta-se ao seu ambiente e base de código existentes. Nenhuma migração necessária.",
            },
            {
                title: "Colaborativo, não automatizado",
                description: "A plataforma sugere, você decide. Traz os pontos fortes da IA ​​para complementar o julgamento humano.",
            },
            {
                title: "Transparente, não caixa preta",
                description: "Mostra seu raciocínio, dependências identificadas, riscos e compensações.",
            },
        ],
    },
    comparison: [
        {
            category: "Preenchimento automático de código",
            others: "Gere código com base em padrões. Preveja a próxima linha. Ajude a escrever mais rápido.",
            us: "Razão sobre sistemas. Entenda toda a arquitetura. Ajude a construir melhor.",
        },
        {
            category: "Análise Estática",
            others: "Encontre problemas no código. Sinalizar erros de sintaxe. Execute após a codificação.",
            us: "Entenda as implicações arquitetônicas. Razão sobre os impactos em todo o sistema. Guie conforme você se desenvolve.",
        },
        {
            category: "Ferramentas de revisão de código",
            others: "Facilite a revisão humana. Mostrar diferenças. Destaque as alterações.",
            us: "Realize análises arquitetônicas. Explique as implicações. Valide a coerência do sistema.",
        },
    ],
    disclaimer: "⚠️ Isenção de responsabilidade da simulação de P&D: esta interface é uma demonstração interativa para fins de visualização conceitual. O sistema autônomo de engenharia de software YugNex está atualmente na fase de Pesquisa e Desenvolvimento (P&D). Nenhum aplicativo digital de produção pública ou sistema totalmente otimizado está ativo no momento.",
    tabs: {
        github: "Solicitação pull do GitHub",
        ide: "Integração de espaço de trabalho IDE",
        cicd: "Pipeline invariável de CI/CD",
    },
    githubPr: {
        statusOpen: "Abrir",
        securityScore: "Pontuação de integridade de segurança",
        securityBadge: "Agente Auditor de Segurança",
        securityTime: "Verificado há 2 minutos",
        securityFeedback: "Resolução de vulnerabilidade verificada. A chave secreta JWT codificada foi parametrizada para ser executada a partir de variáveis ​​ambientais do sistema. Os cabeçalhos de segurança X-Frame-Options foram injetados globalmente com sucesso. Verificações invariantes aprovadas.",
    },
    ideWorkspace: {
        statusReviewing: "Revendo",
        ideTitle: "YugNex: Resolver vazamento de listener em WebSockets",
        ideDesc: "Vazamento de memória resolvido declarando o manipulador de fechamento explícito.",
        btnAccept: "Aceitar sugestão",
        btnDecline: "Declínio",
    },
    cicdPipeline: {
        statusPipelinePassed: "Pipeline aprovado",
        statusSuccess: "ESTADO: SUCESSO",
        ciLogs: [
            "[INFO] Gerando contêineres de tempo de execução de produção...",
            "[INFO] Agrupando módulos e verificando árvores de construção do compilador...",
            "[INFO] Executando varreduras invariantes formais:",
            "✓ Invariante 01: integridade de autenticação da API (aprovada)",
            "✓ Invariante 02: Restrições de alocação de recursos (aprovado)",
            "✓ Invariante 03: Verificação de dependência circular (aprovada)",
            "[SUCESSO] Compilação do sistema verificada. A integridade da execução passa com 0 vazamentos de memória.",
            "implantando na borda da produção...",
        ],
    },
    capabilitiesTitle: "Capacidades de plataforma interativa",
    consoleSandboxRunner: "CONSOLE: SANDBOX_RUNNER",
    btnExecuting: "EXECUÇÃO...",
    btnRun: "CORRER",
    capLogs: [
        {
            cmd: "yugnex build --analyze-architecture",
            logs: [
                "[INFO] Verificando diretórios de base de código...",
                "[INFO] Construindo gráfico intermódulo causal (1.284 nós)...",
                "[VCS] Verificando os limites arquitetônicos em relação às especificações do projeto...",
                "[SUCESSO] Esquema de dependência construído. 0 violações de limite encontradas.",
            ],
        },
        {
            cmd: "yugnex diff --check-implications --file=userModel.ts",
            logs: [
                "[INFO] Rastreando importações downstream para userModel.ts...",
                "[INFO] Verificando cadeias de dependências dentro de rotas/ e controladores/...",
                "[WARN] userService.ts depende dos esquemas de banco de dados alterados. Validando parâmetros...",
                "[SUCESSO] Caminhos causais verificados. Avaliação de risco de refatoração: 0 problemas.",
            ],
        },
        {
            cmd: "yugnex validate --invariants --level=all",
            logs: [
                "[INFO] Executando verificações de validação invariante multinível...",
                "[INFO] Nível 1: Análise de sintaxe (PASS) | Nível 2: Tipos (PASS)",
                "[INFO] Nível 3: Sandbox de segurança (PASS) | Nível 4: verificações de memória (PASS)",
                "[SUCESSO] Validação formal concluída com sucesso. Código seguro.",
            ],
        },
    ],
}
