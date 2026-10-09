import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "기능이 아닌 기초 구축",
    philosophy: {
        title: "시간이 걸리는 이유",
        body: "\"지금 배송해 보는 건 어떨까요?\"라고 물을 수도 있습니다. 기초기술은 서두르면 안 되기 때문이다. Google이 검색 알고리즘을 구축했을 때 점진적으로 출시되지 않았습니다. OpenAI가 GPT-3를 교육할 때 GPT-0.5를 먼저 출시하지 않았습니다. SpaceX는 재사용 가능한 로켓을 설계할 때 \"부분적으로 재사용 가능한\" 로켓으로 시작하지 않았습니다. 우리는 엔지니어링 결정을 내리는 AI를 구축하고 있습니다. 이를 위해서는 현재 시스템에는 존재하지 않는 수준의 추론, 상황 인식 및 신뢰성이 필요합니다. 문제가 그럴만한 가치가 있기 때문에 시간을 할애하고 있습니다.",
        points: [
            "해결되지 않은 문제에 대한 심층 연구",
            "엄격한 테스트를 거친 새로운 아키텍처",
            "단순한 데모가 아닌 안정적으로 작동하는 시스템",
            "혁신을 보호하기 위한 특허",
            "바로잡을 시간이야",
        ],
    },
    papers: [
        {
            id: "whitepaper-2026",
            title: "자율 소프트웨어 엔지니어링을 향하여: 과제와 방향",
            description: "AI 기반 소프트웨어 엔지니어링 분야의 추론, 맥락, 구조적 이해에 관한 연구입니다. 이 백서는 지속적이고 자율적인 소프트웨어 엔지니어링 인텔리전스를 구축하는 데 있어 기본적인 과제를 살펴봅니다.",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "유그넥스 기술연구본부",
            ],
            tags: [
                "일체 포함",
                "소프트웨어 공학",
                "자율 시스템",
                "연구",
            ],
        },
    ],
    subtitle: "지속적인 자율 소프트웨어 인텔리전스 모델 구축에 관한 간행물, 백서 및 연구 결과를 살펴보세요.",
    ledgerTitle: "문서 서류 //",
    formatLabel: "체재",
    formatValue: "기술 PDF(영어)",
    noPublications: "연구발행물을 찾을 수 없습니다.",
    peerSignature: "GPG 피어 에이전트 서명 확인됨",
    peerSignStamp: "서명: ARCHITECT_AGENT_0x028A",
}
