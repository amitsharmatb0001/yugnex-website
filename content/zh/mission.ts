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
    closingStatement: "新时代并不是一个遥远的愿景。这是我们现在正在建设的基础设施。",
    blueprint: [
        {
            id: "ingestion",
            num: "LAYER_01",
            name: "语义源摄取基质",
            badge: "解析 AST",
            telemetryTitle: "系统::INGESTION_CONTROLLER",
            logs: [
                "$ yugnex 核心 --parse-directory=./src",
                "扫描代码库目录：匹配 1,420 个文件。",
                "构建抽象语法树 (AST) 引用...",
                "映射调用图和关系向量。",
                "成功：12,450 个 AST 节点突触到 Context Substrate Graph。",
                "注册的活动侦听器：文件系统观察器 --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "LAYER_02",
            name: "多智能体不变求解器",
            badge: "辩论逻辑",
            telemetryTitle: "系统::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "与以下人员启动辩论室：[架构师、开发人员、审计师]",
                "[PO]：userController.ts:L24 内标记的原始 SQL 查询插值",
                "[开发人员]：建议使用正则表达式替换输入验证。",
                "[建筑师]：拒绝。正则表达式替换是可绕过的。必须重写参数绑定查询。",
                "[审核员]：验证参数化查询路径。不变分析完成。",
                "达成共识。生成的解决方案：参数化语句注入。",
            ],
        },
        {
            id: "sandbox",
            num: "LAYER_03",
            name: "隔离验证沙箱引擎",
            badge: "测试执行人员",
            telemetryTitle: "系统::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "容器产生。图片：node-alpine-yugnex：最新",
                "将重构的文件注入容器文件系统。",
                "正在运行编译器验证...成功：退出代码 0。",
                "正在执行单元测试扫描...48/48 测试通过（240 毫秒）。",
                "监控内存堆泄漏...稳定在 42.1 MB 扫描量。",
                "沙箱测试完成。验证状态：已验证安全。",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "永久 VCS 同步器",
            badge: "提交同步",
            telemetryTitle: "系统::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "创建本地分支：yugnex/patch-secure-auth",
                "提交更改：修改了 2 个文件，零警告。",
                "正在验证提交签名...GPG 签名已验证。",
                "将分支推送到上游 VCS...完成。",
                "打开拉取请求：[安全重构]安全 SQL 查询参数化。",
                "VCS 管道状态：绿色，等待审阅者合并。",
            ],
        },
    ],
    awaitingPipeline: "等待管道执行...",
    pipelineIntegrationFlow: "管道集成流程",
    triggerDiagnostic: "触发诊断",
    runningDiagnostic: "跑步...",
    layerMetas: [
        "基础基材",
        "永恒的进化",
        "建筑文脉",
        "增强验证",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "初始化 AST 解析模式",
                },
                {
                    label: "映射因果语义节点",
                },
                {
                    label: "实例化 Docker 沙箱运行时",
                },
            ],
            logs: [
                "ast_parser：读取代码库标记...",
                "dependency_resolver：匹配参数列表约束",
                "sandbox_manager：编译容器节点布局...",
                "成功：基础基材层完全活跃。",
            ],
        },
        {
            steps: [
                {
                    label: "挂钩 Git 提交管道事件",
                },
                {
                    label: "编译存储库差异树",
                },
                {
                    label: "验证架构不变边界",
                },
            ],
            logs: [
                "vcs_monitor：正在监听主分支推送...",
                "diff_engine：解析 14 个更改的 AST 文件",
                "invariant_runner：测试 8 项验证检查...",
                "成功：进化编译器循环完成。构建同步。",
            ],
        },
        {
            steps: [
                {
                    label: "提取多模块导入路径",
                },
                {
                    label: "动态扩展上下文范围限制",
                },
                {
                    label: "协调多代理共识检查",
                },
            ],
            logs: [
                "context_engine：读取模块间依赖连接",
                "agent_consensus：将安全审核与开发人员编辑相匹配",
                "validation_agent：分析 AST 推理树...",
                "成功：因果关系整合到上下文地图中。",
            ],
        },
        {
            steps: [
                {
                    label: "监视活动的 IDE 工作区",
                },
                {
                    label: "分析实时开发人员参数",
                },
                {
                    label: "输出结构诊断报告",
                },
            ],
            logs: [
                "workspace_daemon：在文件系统更改时处于活动状态",
                "lint_check：针对框架 API 测试参数",
                "audit_writer：正在编译文档完整性注释...",
                "成功：已验证架构合规性。记录了 0 个缺陷。",
            ],
        },
    ],
}
