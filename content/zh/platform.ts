import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "平台",
    subtitle: "重新构想的自主软件工程",
    hero: {
        title: "我们正在建设什么",
        description: "一个人工智能驱动的平台，超越代码生成，真正理解、推理复杂的软件系统并进行协作。不是另一个自动完成工具。一个协作工程合作伙伴，为您的开发工作流程带来架构理解、系统推理和验证。",
    },
    capabilities: [
        {
            title: "理解架构，而不仅仅是语法",
            description: "虽然当前的工具可以预测下一行代码，但我们的平台可以全面了解您的系统架构、依赖关系和设计模式。",
            points: [
                "在完整的系统上下文中评估更改",
                "在实施之前了解依赖性影响",
                "自动尊重架构边界",
                "技术债务影响主动浮出水面",
            ],
        },
        {
            title: "影响的原因",
            description: "每个代码更改都会产生影响——性能、安全性、可维护性、可扩展性。我们的平台不仅仅生成代码；还生成代码。它会解释该代码对您的系统意味着什么。",
            points: [
                "分析全系统的影响",
                "评估风险和权衡",
                "考虑替代方法",
                "保持建筑的连贯性",
            ],
        },
        {
            title: "多层次验证",
            description: "语法上正确的代码不是目标，架构上合理、可维护、安全的代码才是。",
            points: [
                "正确性：它能在不破坏东西的情况下工作吗？",
                "安全：安全边界是否得到维护？",
                "架构：它与系统设计一致吗？",
                "可维护性：六个月后工程师会理解它吗？",
            ],
        },
    ],
    useCases: [
        {
            title: "复杂的重构",
            challenge: "在大型代码库中进行重构是有风险的。您需要了解使用代码的每个地方，每个可能破坏的依赖关系......",
            solution: "分析完整的依赖关系图，识别所有受影响的组件，评估架构影响，并帮助安全地执行更改。",
        },
        {
            title: "架构分析",
            challenge: "对于新团队成员来说，了解大型代码库的实际工作原理（其模式、隐含契约、设计决策）需要数周时间。",
            solution: "构建全面的架构图，显示系统结构、依赖关系、设计模式和架构边界。",
        },
        {
            title: "安全系统演进",
            challenge: "添加功能或进行更改时不会引入错误、违反架构原则或产生技术债务。",
            solution: "在整个系统环境中评估拟议的更改，在实施之前识别潜在问题，提出架构上一致的方法。",
        },
        {
            title: "遗留代码理解",
            challenge: "具有最少文档、不明确的设计决策和累积的技术债务的继承代码库的维护成本很高。",
            solution: "重建架构意图，识别设计模式和反模式，映射依赖关系，并揭示技术债务。",
        },
        {
            title: "大规模代码审查",
            challenge: "彻底的代码审查需要了解整个系统的影响，但审查者的时间和认知带宽有限。",
            solution: "执行深入的架构分析，识别跨维度的潜在问题，并突出显示需要人类判断的问题。",
        },
    ],
    targetAudience: [
        {
            role: "工程团队",
            painPoints: [
                "多项服务",
                "建筑模式",
                "安全/性能要求",
            ],
            benefit: "您需要的不仅仅是自动完成。您需要了解架构。",
        },
        {
            role: "高级工程师和建筑师",
            painPoints: [
                "跟踪依赖关系",
                "审查架构违规行为",
                "解释上下文",
            ],
            benefit: "处理系统理解的认知负荷，使您能够专注于高层决策。",
        },
        {
            role: "管理技术债务的团队",
            painPoints: [
                "范围未知",
                "优先顺序",
                "安全重构",
            ],
            benefit: "使技术债务变得可见并帮助您系统地解决它。",
        },
    ],
    workflow: {
        title: "它如何与您的工作流程配合使用",
        points: [
            {
                title: "集成，非侵入式",
                description: "适合您现有的环境和代码库。无需迁移。",
            },
            {
                title: "协作，而非自动化",
                description: "平台建议，你决定。它带来了人工智能的优势来补充人类的判断。",
            },
            {
                title: "透明，非黑匣子",
                description: "显示其推理、确定的依赖性、风险和权衡。",
            },
        ],
    },
    comparison: [
        {
            category: "代码自动完成",
            others: "根据模式生成代码。预测下一行。帮助写得更快。",
            us: "关于系统的原因。了解整个架构。帮助建设得更好。",
        },
        {
            category: "静态分析",
            others: "查找代码中的问题。标记语法错误。编码后运行。",
            us: "了解架构的含义。关于系统范围影响的原因。指导您的发展。",
        },
        {
            category: "代码审查工具",
            others: "促进人工审核。显示差异。突出显示变化。",
            us: "执行架构分析。解释影响。验证系统的一致性。",
        },
    ],
    disclaimer: "⚠️研发模拟免责声明：该界面是用于概念可视化目的的交互式演示。 YugNex自主软件工程系统目前处于研发（R&D）阶段。目前没有活跃的公共生产数字应用程序或完全优化的系统。",
    tabs: {
        github: "GitHub 拉取请求",
        ide: "IDE 工作区集成",
        cicd: "CI/CD 不变管道",
    },
    githubPr: {
        statusOpen: "打开",
        securityScore: "安全完整性评分",
        securityBadge: "安全审计代理",
        securityTime: "2 分钟前已验证",
        securityFeedback: "漏洞解决方案已验证。硬编码的 JWT 密钥已被参数化，可以从系统环境变量运行。 X-Frame-Options 安全标头已成功全局注入。不变检查已通过。",
    },
    ideWorkspace: {
        statusReviewing: "审阅",
        ideTitle: "YugNex：解决 WebSocket 中的侦听器泄漏",
        ideDesc: "通过声明显式关闭处理程序解决了内存泄漏。",
        btnAccept: "接受建议",
        btnDecline: "衰退",
    },
    cicdPipeline: {
        statusPipelinePassed: "管道已通过",
        statusSuccess: "状态：成功",
        ciLogs: [
            "[信息] 生成生产运行时容器...",
            "[INFO] 捆绑模块和扫描编译器构建树...",
            "[INFO] 执行形式不变扫描：",
            "✓ 不变式01：API认证完整性（通过）",
            "✓ 不变式02：资源分配约束（通过）",
            "✓ 不变式03：循环依赖验证（通过）",
            "[成功] 系统编译构建已验证。执行完整性通过，内存泄漏为零。",
            "部署到生产边缘...",
        ],
    },
    capabilitiesTitle: "互动平台能力",
    consoleSandboxRunner: "控制台：SANDBOX_RUNNER",
    btnExecuting: "正在执行...",
    btnRun: "跑步",
    capLogs: [
        {
            cmd: "yugnex build --analyze-architecture",
            logs: [
                "[信息] 扫描代码库目录...",
                "[INFO] 构建因果模块间图（1,284 个节点）...",
                "[VCS] 根据设计规范检查架构边界...",
                "[成功] 依赖架构已构建。发现 0 起边界违规行为。",
            ],
        },
        {
            cmd: "yugnex diff --check-implications --file=userModel.ts",
            logs: [
                "[INFO] 跟踪 userModel.ts 的下游导入...",
                "[信息] 检查路由/和控制器/...内的依赖链",
                "[警告] userService.ts 依赖于更改的数据库架构。正在验证参数...",
                "[成功] 因果路径已验证。重构风险评估：0 个问题。",
            ],
        },
        {
            cmd: "yugnex validate --invariants --level=all",
            logs: [
                "[INFO] 执行多级不变验证检查...",
                "[信息] 第 1 级：语法分析（通过）|第 2 级：类型（通过）",
                "[信息] 第 3 级：安全沙箱 (PASS) |第 4 级：内存检查（通过）",
                "[成功] 正式验证成功完成。代码安全。",
            ],
        },
    ],
}
