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
}
