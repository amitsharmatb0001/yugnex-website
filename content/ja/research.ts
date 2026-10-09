import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "機能ではなく基盤を構築する",
    philosophy: {
        title: "なぜ時間がかかるのか",
        body: "「なぜ今すぐ何かを発送しないのですか?」と疑問に思うかもしれません。基礎技術は急いではいけないからです。 Google が検索アルゴリズムを構築したとき、それらは段階的に出荷されませんでした。 OpenAI が GPT-3 をトレーニングしたとき、最初に GPT-0.5 をリリースしませんでした。 SpaceX が再利用可能なロケットを設計したとき、それらは「部分的に再利用可能」ということから始まったわけではありません。私たちはエンジニアリング上の意思決定を行う AI を構築しています。それには、現在のシステムには存在しないレベルの推論、コンテキスト認識、信頼性が必要です。この問題は時間がかかるに値するものなので、時間をかけて取り組んでいます。",
        points: [
            "未解決の問題に対する深い調査",
            "厳密にテストされた新しいアーキテクチャ",
            "単なるデモではなく、確実に動作するシステム",
            "イノベーションを保護する特許",
            "正しく対処する時期が来た",
        ],
    },
    papers: [
        {
            id: "whitepaper-2026",
            title: "自律型ソフトウェアエンジニアリングに向けて: 課題と方向性",
            description: "AI 支援ソフトウェア エンジニアリングにおける推論、コンテキスト、アーキテクチャの理解に関する研究。このホワイトペーパーでは、永続的で自律的なソフトウェア エンジニアリング インテリジェンスを構築する際の基本的な課題について説明します。",
            pdfUrl: "/YugNex_Research_Whitepaper.pdf",
            fileName: "YugNex_Research_Whitepaper.pdf",
            publishDate: "2026-01-01",
            authors: [
                "YugNex技術研究部",
            ],
            tags: [
                "AI",
                "ソフトウェアエンジニアリング",
                "自律システム",
                "研究",
            ],
        },
    ],
    subtitle: "永続的な自律型ソフトウェア インテリジェンス モデルの構築に関する当社の出版物、ホワイトペーパー、および調査結果をご覧ください。",
    ledgerTitle: "文書関係書類 //",
    formatLabel: "形式",
    formatValue: "技術PDF（英語）",
    noPublications: "研究出版物は見つかりませんでした。",
    peerSignature: "GPG ピア エージェントの署名が検証されました",
    peerSignStamp: "記号: ARCHITECT_AGENT_0x028A",
}
