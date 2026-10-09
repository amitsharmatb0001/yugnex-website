import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "비전",
    lead: "지속적이고 진화하는 엔지니어링 인텔리전스의 새로운 시대로의 전환",
    paragraphs: [
        "우리는 소프트웨어 엔지니어링이 더 이상 인간의 인지 대역폭이나 현재 도구의 일시적 특성에 의해 제한되지 않는 새로운 시대로 진입하고 있습니다.",
        "YugNex는 인간만의 엔지니어링인 'Yug'(시대)와 협업, 자율 시스템의 'Nex'(다음) 시대를 연결하는 다리를 나타냅니다.",
        "우리의 비전은 소프트웨어를 단순한 텍스트가 아닌 살아있는 진화 시스템으로 이해하여 전체 라이프사이클에 걸쳐 의도, 컨텍스트 및 추론을 보존하는 지속적인 디지털 인텔리전스를 만드는 것입니다.",
        "우리는 소프트웨어의 미래가 인간의 창의성과 기계의 연속성 사이의 공생 관계에 있다고 믿습니다. AI는 단순히 지원하는 것이 아니라 진정한 엔지니어가 우리와 함께합니다.",
    ],
    oldYugTitle: "올드 유그",
    oldYugDesc: "인간만의 소프트웨어 개발. 개인의 인지적 한계로 인해 제약을 받아 소프트웨어 부패, 컨텍스트 단편화, 기술적 부채 축적이 발생합니다.",
    newNexTitle: "넥스트 넥스",
    newNexDesc: "자율 협업 엔지니어링. 아키텍처를 이해하고 불변성을 확인하며 함께 작동하는 지속적이고 의미론적 추론 기반입니다.",
    labels: {
        contextHorizon: "컨텍스트 지평선",
        dependencyTracing: "체계적 종속성 추적",
        codebaseLifecycle: "코드베이스 수명주기",
        verificationLoop: "검증 루프",
    },
    oldValues: {
        contextHorizon: "~100,000개의 토큰(조각화됨)",
        dependencyTracing: "수동 / 대략적인",
        codebaseLifecycle: "엔트로피 및 저하",
        verificationLoop: "구현 후 테스트",
    },
    newValues: {
        contextHorizon: "무한 그래프 표현",
        dependencyTracing: "동적 AST 추적(원인)",
        codebaseLifecycle: "리팩토링 / 부채 없음",
        verificationLoop: "사전 커밋 샌드박스 불변성",
    },
    pillarsTitle: "인지 기질 기둥",
    pillars: [
        {
            id: "context",
            name: "컨텍스트 합성 기판",
            description: "원시 소스 디렉터리를 통합된 다차원 의미 그래프 표현으로 연결합니다.",
            details: "문자열 일치 또는 얕은 벡터 인덱싱에 의존하는 기존의 검색 증강 코딩 도우미와 달리 우리 시스템은 시스템 전체의 AST(추상 구문 트리) 관계, 데이터 흐름 및 종속성 네트워크에서 직접 작동합니다. 파일 전체의 의도와 추론 경로를 추적하여 절대적인 컨텍스트 연속성을 유지합니다.",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "인과 추론 엔진",
            description: "장단점을 평가하고 전문 에이전트를 조정하며 제안된 수정 사항의 시스템적 영향을 평가합니다.",
            details: "소프트웨어 엔지니어링은 논리 문제입니다. 당사의 다중 에이전트 기반은 다양한 소프트웨어 엔지니어링 기능(설계자, 개발자, 보안 감사자, QA)을 나타내는 전문 에이전트를 함께 제공합니다. 구조화된 다단계 추론 토론을 통해 그들은 한 줄을 작성하기 전에 구현 경로에 대한 합의를 확립합니다.",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "영구 불변 검증",
            description: "안전한 샌드박스에서 제안된 모든 변경 사항을 실행, 확인 및 테스트하여 실행 안전성을 보장합니다.",
            details: "구문적으로 올바른 코드는 최종 목표가 아닙니다. YugNex는 격리된 컨테이너 환경 내에서 경험적 검증을 실행합니다. 이는 새 코드가 미리 설정된 아키텍처 불변성을 준수하고, 단위 테스트 경계를 통과하고, 보안 취약성 또는 연결 누출이 발생하지 않도록 보장합니다.",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "시스템 시냅스",
    telemetryTitle: "기판 측정항목",
    telemetryStatus: "달리기",
    pillarMetas: [
        "시스템 제한",
        "다음 시대",
        "디지털 인텔리전스",
        "인간-AI ​​공생",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "인지 대역폭 범위",
                    value: "1024x 확장",
                    pct: 95,
                },
                {
                    label: "파서 메모리 오버헤드",
                    value: "-92% 감소",
                    pct: 92,
                },
                {
                    label: "컨텍스트 일관성 비율",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core: 의미론적 종속성 맵 초기화",
                "cortex_substrate: 구조적 관계 추적",
                "thread_evaluator: 백그라운드에서 AST 노드를 구문 분석하는 중...",
                "상태: 활성 추론 범위가 설정되었습니다.",
            ],
        },
        {
            stats: [
                {
                    label: "인간-AI ​​동기화 지연 시간",
                    value: "< 2.4ms",
                    pct: 98,
                },
                {
                    label: "합의 수렴 깊이",
                    value: "레벨 12 도달",
                    pct: 88,
                },
                {
                    label: "인터페이스 피드백 지수",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge: 신경 합의 채널 연결",
                "코디네이터: PO, 아키텍트, 개발자 에이전트 폴링",
                "합의: 코드 권장사항 해결 중...",
                "상태: 온라인에서 지속적인 자율 협업.",
            ],
        },
        {
            stats: [
                {
                    label: "의도 보존 성공",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "인과관계 연결 깊이",
                    value: "12,042개 노선",
                    pct: 91,
                },
                {
                    label: "상태 스냅샷 수명주기",
                    value: "마디 없는",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache: 저장소 토폴로지 노드 로드",
                "causal_mapper: 4,920개의 링크 업데이트 캐싱",
                "state_preserver: 코드 디자인 불변성 검사 확인 중...",
                "상태: 지속적인 시스템 인텔리전스가 작동 중입니다.",
            ],
        },
        {
            stats: [
                {
                    label: "공동 엔지니어링 생산성",
                    value: "+184.2% 증가",
                    pct: 94,
                },
                {
                    label: "검증 신뢰도 지표",
                    value: "100% 검증됨",
                    pct: 100,
                },
                {
                    label: "건축부채지수",
                    value: "0.04(최소)",
                    pct: 96,
                },
            ],
            logs: [
                "Symbiotic_cortex: 불변 검증 테스트베드 생성",
                "진단: 스테이징에서 89개 안전 속성 확인",
                "compiler_verify: 구조적 경계가 깨끗하게 전달되었습니다.",
                "상태: 기계 연속성을 통해 인간의 창의성이 강화됩니다.",
            ],
        },
    ],
}
