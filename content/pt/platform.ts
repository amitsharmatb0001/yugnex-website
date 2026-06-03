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
}
