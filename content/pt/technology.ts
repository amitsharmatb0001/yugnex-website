import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "O problema com as ferramentas atuais de codificação de IA",
    problem: {
        title: "Eles geram código, mas não entendem os sistemas",
        subtitle: "Os assistentes de codificação de IA atuais alcançaram resultados impressionantes: preenchimento automático de código, geração de funções e tradução entre idiomas. Mas todos partilham uma limitação fundamental: tratam o software como texto a ser gerado e não como sistemas a serem compreendidos.",
        body: "A engenharia de software não é um problema de geração de texto. É um problema de raciocínio do sistema.",
        limitations: [
            {
                title: "O problema do contexto",
                description: "As bases de código contêm milhões de linhas em milhares de arquivos. As ferramentas atuais tentam superar isso por meio de recuperação simples, mas a relevância em software não é uma semelhança textual – trata-se de relações causais, cadeias de dependência e limites arquitetônicos.",
            },
            {
                title: "A lacuna de raciocínio",
                description: "Há uma diferença fundamental entre gerar código sintaticamente correto e tomar decisões de engenharia sólidas. Quando engenheiros experientes modificam o código, eles consideram as implicações arquitetônicas de todo o sistema, os impactos de dependência, as compensações de desempenho e a capacidade de manutenção.",
            },
            {
                title: "A lacuna de validação",
                description: "A engenharia de software requer correção, não plausibilidade. As ferramentas atuais carecem de mecanismos para validar além da verificação de sintaxe. Eles não conseguem raciocinar se as mudanças mantêm as invariantes do sistema, respeitam os limites arquitetônicos ou introduzem vulnerabilidades de segurança.",
            },
        ],
    },
    approach: {
        title: "Construído para Engenharia de Software",
        subtitle: "Começamos com uma pergunta diferente: não “Como a IA pode escrever um código melhor?” Mas \"Como a IA pode entender os sistemas de software da mesma forma que os engenheiros experientes fazem?\"",
        sections: [
            {
                title: "Especialização em vez de generalização",
                body: "Diferentes aspectos da engenharia de software requerem tipos de raciocínio fundamentalmente diferentes. Em vez de compactar tudo em um único modelo, usamos componentes especializados de IA – cada um projetado para domínios específicos de raciocínio de software – trabalhando juntos como uma equipe de engenharia.",
            },
            {
                title: "Raciocínio Colaborativo",
                body: "As decisões de software muitas vezes exigem a ponderação de compensações entre preocupações concorrentes. Nossa arquitetura permite que componentes especializados compartilhem contexto, desafiem suposições e trabalhem em direção ao consenso por meio de coordenação estruturada.",
            },
            {
                title: "Compreensão de todo o sistema",
                body: "A compreensão do software opera em vários níveis: sintaxe, semântica, padrões de arquitetura, intenção de design e propriedades de todo o sistema. Usamos raciocínio em camadas onde diferentes componentes operam em diferentes níveis de abstração.",
            },
            {
                title: "Contexto além da recuperação",
                body: "Em vez de extrair trechos de código desconectados, estamos desenvolvendo abordagens para construir representações dinâmicas de relacionamentos de sistema – capturando não apenas o código, mas a rede de dependências, invariantes e limites arquitetônicos.",
            },
        ],
    },
    difference: {
        title: "A diferença",
        comparison: [
            {
                label: "Ferramentas atuais",
                value: "Gerar código → Otimizar para sintaxe → Trabalhar dentro dos limites do contexto → Arquiteturas de uso geral",
            },
            {
                label: "Nossa abordagem",
                value: "Compreender os sistemas → Raciocinar sobre arquitetura → Construir representações dinâmicas → Desenvolvido especificamente para engenharia de software",
            },
        ],
    },
    diagnosticsTitle: "Diagnóstico interativo de limitações",
    approachTitle: "Nossa abordagem em camadas",
    debateTitle: "Consensos do Analisador Autônomo",
    debateSubtitle: "Passe o mouse sobre as linhas de código para ativar o painel de consenso multiagente do YugNex, debatendo questões de segurança e refatoração.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[INFO] Executando rastreamento de arquitetura de repositório...",
                "[AVISO] Limite de contexto atingido no índice de arquivo 512.",
                "[FAIL] context_overflow: o tamanho da pilha 1.048.576 bytes excedeu a janela de contexto padrão.",
                "[CRÍTICO] Analisador abortado. O LLM tradicional não consegue resolver relacionamentos em todo o sistema.",
                "[SOLUÇÃO YUGNEX] Redirecionamento para substrato de contexto causal...",
                "[SUCESSO] Rastreamento do Gráfico Causal concluído. 48.091 arquivos indexados com nós de cache persistentes.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[INFO] Inicializando trabalho de refatoração de parâmetro...",
                "[INFO] Analisador executando verificação de raciocínio simbólico em nós de dependência...",
                "[AVISO] Código gerado pelo assistente tradicional: incompatibilidade na lista de parâmetros userService.ts (token ausente).",
                "[CRÍTICO] erro_de_compilação: a sintaxe do código é válida, mas interromperá a invocação na produção.",
                "[SOLUÇÃO YUGNEX] Bloco de raciocínio simbólico interceptou lista de parâmetros inválidos. Revertendo alterações...",
                "[SUCESSO] Aplicadas ligações parametrizadas e chamadores sincronizados em 14 módulos dependentes.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[INFO] Iniciando verificação do pipeline de CI...",
                "[INFO] Verificando modelos/para vetores de segurança de injeção de consulta do usuário...",
                "[WARN] direct_interpolation: interpolação de consulta detectada em profileSearch.ts.",
                "[FAIL] Invariante 02 violada: os parâmetros do banco de dados devem ser vinculados. Status da compilação: BLOQUEADO.",
                "[SOLUÇÃO YUGNEX] Correção automática de parâmetros com consultas SQL parametrizadas...",
                "[SUCESSO] Invariantes aprovados. Verificações de segurança verificadas (0 riscos encontrados). Versão lançada.",
            ],
        },
    ],
    approachDiagrams: [
        "[Agente analisador AST] =======> [Agente solucionador causal]\n                                   ||\n                                   \\/ \n[Agente de Consenso] <======== [Agente de Refatoração]\nSTATUS: Raciocínio colaborativo especializado online.",
        "Agent[Architect]: \"A interpolação SQL direta viola o padrão.\"\nAgente [Segurança]: \"Vulnerabilidade confirmada. Construção com bloqueio automático.\"\nAgente[Desenvolvedor]: \"Atualizando vínculos de consulta. Injetando correção...\"\nSTATUS: Consenso alcançado. Código corrigido com sucesso.",
        "Nível 5 (Padrões de Projeto Arquitetônico) - ATIVO\nNível 4 (Interdependências de Módulos) - ATIVO\nNível 3 (ligação de variável semântica) - ATIVO\nNível 2 (Árvore de Sintaxe Abstrata) - ATIVO\nSTATUS: Raciocínio em camadas de todo o sistema verificado.",
        "Relações causais armazenadas em cache: 184.902\nNós de contexto ativo: 12.042\nLatência de pesquisa: 1,2 ms (98% de aceleração em relação à pesquisa LLM)\nSTATUS: Gráficos causais totalmente sincronizados.",
    ],
    liveTelemetry: "Gráfico de telemetria ao vivo",
    codeLens: {
        panelTitle: "active_routes.js — Linhas de foco/clique com nós de alerta",
        insightTitleAutoFix: "Recomendação de correção automática YugNex",
        insightTitleDebate: "Debate sobre resolução de agentes",
        solutionsDefault: "Passe o mouse sobre as linhas de código à esquerda para ativar a lente do analisador autônomo YugNex.",
        lines: [
            {
            },
            {
                warningTitle: "Vulnerabilidade de injeção SQL",
                warningDesc: "A interpolação direta da entrada do usuário em uma string de consulta SQL permite que invasores injetem comandos SQL maliciosos e ignorem a autenticação ou visualizem tabelas não autorizadas.",
                debate: [
                    {
                        role: "Arquiteto",
                        text: "Interpolação de consulta SQL direta detectada. Isso viola nossos padrões de segurança.",
                    },
                    {
                        role: "Auditor de segurança",
                        text: "Exploração remota possível através de parâmetros de status. Confirmação bloqueada.",
                    },
                    {
                        role: "Desenvolvedor",
                        text: "Reescrevendo a consulta para ligação parametrizada usando db.execute(query, [status]).",
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
                warningTitle: "Gargalo de consulta N+1",
                warningDesc: "A execução de uma consulta de banco de dados separada dentro de um loop causa N consultas para N usuários. Isso leva a grandes picos de latência e sobrecarga do servidor à medida que os pools de conexões de banco de dados ficam saturados.",
                debate: [
                    {
                        role: "Arquiteto",
                        text: "Gargalo do banco de dados relacional. A execução de consultas dentro de um loop está bloqueada.",
                    },
                    {
                        role: "Desenvolvedor",
                        text: "Agregando IDs de usuário para perfis de busca em lote em uma única consulta SELECT ... WHERE IN (?).",
                    },
                    {
                        role: "Auditor de controle de qualidade",
                        text: "Verificado. As métricas de benchmark mostram que o total de consultas executadas caiu de N para 1.",
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
