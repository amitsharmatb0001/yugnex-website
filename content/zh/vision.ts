import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "想象",
    lead: "向持久、不断发展的工程智能新时代的过渡",
    paragraphs: [
        "我们正在进入一个新时代，软件工程不再受到人类认知带宽或当前工具的短暂性的限制。",
        "YugNex 代表了纯人类工程的“Yug”（时代）和协作、自治系统的“Nex”（下一个）时代之间的桥梁。",
        "我们的愿景是创建持久的数字智能，不仅将软件理解为文本，而且将其理解为一个活生生的、不断发展的系统——在整个生命周期中保留意图、上下文和推理。",
        "我们相信软件的未来在于人类创造力和机器连续性之间的共生关系，其中人工智能不仅提供帮助，而且真正与我们一起工程师。",
    ],
    oldYugTitle: "老余格人",
    oldYugDesc: "纯人力软件开发。受个人认知限制的限制，导致软件衰退、上下文碎片化和技术债务累积。",
    newNexTitle: "下一个下一个",
    newNexDesc: "自主协作工程。持久的语义推理基础，可以理解您的架构、验证不变量并与您一起工作。",
    labels: {
        contextHorizon: "背景地平线",
        dependencyTracing: "系统依赖性追踪",
        codebaseLifecycle: "代码库生命周期",
        verificationLoop: "验证循环",
    },
    oldValues: {
        contextHorizon: "~100K 代币（碎片）",
        dependencyTracing: "手动/近似",
        codebaseLifecycle: "熵与退化",
        verificationLoop: "实施后测试",
    },
    newValues: {
        contextHorizon: "无限图表示",
        dependencyTracing: "动态 AST 追踪（因果）",
        codebaseLifecycle: "重构/零债务",
        verificationLoop: "预提交沙箱不变量",
    },
    pillarsTitle: "认知基础支柱",
    pillars: [
        {
            id: "context",
            name: "上下文合成基底",
            description: "将原始源目录桥接到统一的多维语义图表示中。",
            details: "与依赖字符串匹配或浅向量索引的传统检索增强编码助手不同，我们的系统直接在系统范围的抽象语法树（AST）关系、数据流和依赖网络上运行。它跟踪文件之间的意图和推理路径，保持绝对的上下文连续性。",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "因果推理引擎",
            description: "权衡权衡，协调专门机构，并评估拟议修改的系统影响。",
            details: "软件工程是一个逻辑问题。我们的多代理底层汇集了代表不同软件工程功能（架构师、开发人员、安全审核员、质量保证）的专业代理。通过结构化、多轮推理辩论，他们在编写一行代码之前就实现路径达成共识。",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "永久不变验证",
            description: "通过在安全沙箱中执行、验证和测试所有建议的更改来保证执行安全。",
            details: "语法正确的代码并不是最终目标。 YugNex 在隔离的容器环境中运行经验验证。它确保新代码符合预先建立的架构不变量，通过单元测试边界，并引入零安全漏洞或连接泄漏。",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "系统联触",
    telemetryTitle: "基材指标",
    telemetryStatus: "跑步",
    pillarMetas: [
        "系统限制",
        "下一个时代",
        "数字智能",
        "人机共生",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "认知带宽跨度",
                    value: "1024 倍扩展",
                    pct: 95,
                },
                {
                    label: "解析器内存开销",
                    value: "-92% 减少",
                    pct: 92,
                },
                {
                    label: "上下文一致性率",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core：初始化语义依赖图",
                "cortex_substrate：跟踪结构关系",
                "thread_evaluator：在后台解析 AST 节点...",
                "状态：已建立主动推理界限。",
            ],
        },
        {
            stats: [
                {
                    label: "人类与人工智能同步延迟",
                    value: "< 2.4 毫秒",
                    pct: 98,
                },
                {
                    label: "共识收敛深度",
                    value: "达到12级",
                    pct: 88,
                },
                {
                    label: "接口反馈索引",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge：连接神经共识通道",
                "协调员：轮询 PO、架构师和开发人员代理",
                "共识：解决代码建议...",
                "状态：持续自主在线协作。",
            ],
        },
        {
            stats: [
                {
                    label: "意图保存成功",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "因果关系连接深度",
                    value: "12,042 条航线",
                    pct: 91,
                },
                {
                    label: "状态快照生命周期",
                    value: "连续的",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache：加载存储库拓扑节点",
                "causal_mapper：缓存 4,920 个链接更新",
                "state_preserver：验证代码设计不变性检查...",
                "状态：持续系统智能运行。",
            ],
        },
        {
            stats: [
                {
                    label: "协同设计生产力",
                    value: "+184.2% 增长",
                    pct: 94,
                },
                {
                    label: "验证置信度指标",
                    value: "100% 已验证",
                    pct: 100,
                },
                {
                    label: "建筑债务指数",
                    value: "0.04（最小）",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex：生成不变验证测试平台",
                "诊断：检查分期中的 89 个安全属性",
                "compiler_verify：结构边界通过干净",
                "状态：人类的创造力随着机器的连续性而增强。",
            ],
        },
    ],
}
