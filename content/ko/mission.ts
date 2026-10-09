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
    closingStatement: "새로운 시대는 먼 비전이 아닙니다. 지금 우리가 구축하고 있는 인프라입니다.",
    blueprint: [
        {
            id: "ingestion",
            num: "LAYER_01",
            name: "시맨틱 소스 수집 기판",
            badge: "AST 구문 분석",
            telemetryTitle: "시스템::INGESTION_ControlLER",
            logs: [
                "$ yugnex 코어 --parse-directory=./src",
                "코드베이스 디렉터리 검색 중: 1,420개 파일이 일치합니다.",
                "추상 구문 트리(AST) 참조를 구성하는 중...",
                "호출 그래프와 관계형 벡터를 매핑합니다.",
                "성공: 12,450개의 AST 노드가 컨텍스트 기판 그래프에 시냅스되었습니다.",
                "등록된 활성 리스너: --poll-interval=500ms의 파일 시스템 감시자",
            ],
        },
        {
            id: "solver",
            num: "LAYER_02",
            name: "다중 에이전트 불변 솔버",
            badge: "토론 논리",
            telemetryTitle: "시스템::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "[설계자, 개발자, 감사자]와 함께 토론방 개설",
                "[PO]: userController.ts:L24 내부에 플래그가 지정된 원시 SQL 쿼리 보간",
                "[개발자]: 입력 유효성 검사를 위한 정규식 대체를 제안합니다.",
                "[건축가]: 거부되었습니다. 정규식 교체는 우회 가능합니다. 매개변수 바인딩 쿼리를 다시 작성해야 합니다.",
                "[감사자]: ​​매개변수화된 쿼리 경로를 검증하는 중입니다. 불변 분석이 완료되었습니다.",
                "합의에 도달했습니다. 생성된 솔루션: 매개변수화된 문 삽입.",
            ],
        },
        {
            id: "sandbox",
            num: "LAYER_03",
            name: "격리 검증 샌드박스 엔진",
            badge: "테스트 임원",
            telemetryTitle: "시스템::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "컨테이너가 생성되었습니다. 이미지: node-alpine-yugnex:최신",
                "리팩터링된 파일을 컨테이너 파일 시스템에 삽입합니다.",
                "컴파일러 유효성 검사 실행 중... 성공: 종료 코드 0.",
                "단위 테스트 스윕 실행 중... 48/48 테스트가 통과되었습니다(240ms).",
                "메모리 힙 누수 모니터링... 42.1MB 스윕에서 안정적입니다.",
                "샌드박스 테스트가 완료되었습니다. 확인 상태: 안전 확인됨.",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "영구 VCS 동기화 장치",
            badge: "동기화 커밋",
            telemetryTitle: "시스템::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "로컬 브랜치 생성: yugnex/patch-secure-auth",
                "변경 사항 커밋 중: 파일 2개가 수정되었으며 경고가 없습니다.",
                "커밋 서명 확인 중... GPG 서명이 확인되었습니다.",
                "분기를 업스트림 VCS로 푸시하는 중... 완료되었습니다.",
                "풀 요청 열기: [보안 리팩터링] 보안 SQL 쿼리 매개변수화.",
                "VCS 파이프라인 상태: 녹색, 검토자 병합 대기 중.",
            ],
        },
    ],
    awaitingPipeline: "파이프라인 실행을 기다리는 중...",
    pipelineIntegrationFlow: "파이프라인 통합 흐름",
    triggerDiagnostic: "트리거 진단",
    runningDiagnostic: "달리기...",
    layerMetas: [
        "기초 기판",
        "영원한 진화",
        "아키텍처 컨텍스트",
        "증강된 검증",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "AST 구문 분석 스키마 초기화",
                },
                {
                    label: "인과적 의미 노드 매핑",
                },
                {
                    label: "Docker 샌드박스 런타임 인스턴스화",
                },
            ],
            logs: [
                "ast_parser: 코드베이스 토큰을 읽는 중...",
                "dependency_resolver: 일치하는 매개변수 목록 제약조건",
                "sandbox_manager: 컨테이너 노드 레이아웃 컴파일 중...",
                "성공: 기초 기질 층이 완전히 활성화되었습니다.",
            ],
        },
        {
            steps: [
                {
                    label: "Git 커밋 파이프라인 이벤트 후크",
                },
                {
                    label: "저장소 차등 트리 컴파일",
                },
                {
                    label: "아키텍처 불변 범위 확인",
                },
            ],
            logs: [
                "vcs_monitor: 메인 브랜치 푸시 수신 중...",
                "diff_engine: 변경된 AST 파일 14개를 구문 분석하는 중",
                "invariant_runner: 8개의 유효성 검사 테스트 중...",
                "성공: 혁신적인 컴파일러 루프가 완료되었습니다. 빌드가 동기화되었습니다.",
            ],
        },
        {
            steps: [
                {
                    label: "다중 모듈 가져오기 경로 추출",
                },
                {
                    label: "컨텍스트 범위 제한을 동적으로 확장",
                },
                {
                    label: "다중 에이전트 합의 확인 조정",
                },
            ],
            logs: [
                "context_engine: 모듈 간 종속성 연결 읽기",
                "Agent_consensus: 보안 감사와 개발자 편집 일치",
                "검증_에이전트: AST 추론 트리 분석 중...",
                "성공: 인과 관계가 컨텍스트 맵으로 통합되었습니다.",
            ],
        },
        {
            steps: [
                {
                    label: "활성 IDE 작업 공간 모니터링",
                },
                {
                    label: "실시간 개발자 매개변수 분석",
                },
                {
                    label: "구조 진단 보고서 출력",
                },
            ],
            logs: [
                "작업 공간_데몬: 파일 시스템 변경 시 활성",
                "lint_check: 프레임워크 API에 대한 매개변수 테스트",
                "audit_writer: 문서 무결성 메모를 컴파일하는 중...",
                "성공: 아키텍처 준수가 확인되었습니다. 0개의 결함이 기록되었습니다.",
            ],
        },
    ],
}
