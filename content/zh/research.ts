import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "建立基础，而不是功能",
    philosophy: {
        title: "为什么需要时间",
        body: "您可能会问：“为什么不现在就发货呢？”因为基础技术不能操之过急。当谷歌构建他们的搜索算法时，他们并没有增量交付。 OpenAI训练GPT-3时，并没有先发布GPT-0.5。当 SpaceX 设计可重复使用火箭时，他们并不是从“部分可重复使用”开始的。我们正在构建能够做出工程决策的人工智能。这需要一定程度的推理、情境感知和可靠性，而当前系统中不存在这些能力。我们花时间是因为这个问题值得我们花时间。",
        points: [
            "深入研究未解决的问题",
            "经过严格测试的新颖架构",
            "可靠工作的系统，而不仅仅是演示",
            "专利保护创新",
            "是时候做对了",
        ],
    },
    papers: [
        {
            id: "whitepaper-2026",
            title: "走向自主软件工程：挑战和方向",
            description: "人工智能辅助软件工程中的推理、上下文和架构理解研究。本白皮书探讨了构建持久、自主的软件工程智能所面临的基本挑战。",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "YugNex技术研究部",
            ],
            tags: [
                "人工智能",
                "软件工程",
                "自治系统",
                "研究",
            ],
        },
    ],
    subtitle: "探索我们关于构建持久自主软件智能模型的出版物、白皮书和研究结果。",
    ledgerTitle: "文件档案 //",
    formatLabel: "格式",
    formatValue: "技术 PDF（英文）",
    noPublications: "未找到研究出版物。",
    peerSignature: "GPG 对等代理签名已验证",
    peerSignStamp: "签名：ARCHITECT_AGENT_0x028A",
}
