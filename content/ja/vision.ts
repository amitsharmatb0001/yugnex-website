import { VisionContent } from '@/app/lib/contentTypes'

export const visionContent: VisionContent = {
    title: "ビジョン",
    lead: "永続的に進化するエンジニアリング インテリジェンスの新時代への移行",
    paragraphs: [
        "私たちは、ソフトウェア エンジニアリングが人間の認知帯域幅や現在のツールの一時的な性質によってもはや制限されない、新しい時代に突入しています。",
        "YugNex は、人間のみのエンジニアリングの「Yug」（時代）と協調的で自律的なシステムの「Nex」（次の）時代の間の架け橋を表します。",
        "私たちのビジョンは、ソフトウェアを単なるテキストとしてではなく、生きた進化するシステムとして理解し、ライフサイクル全体にわたって意図、コンテキスト、推論を維持する永続的なデジタル インテリジェンスを作成することです。",
        "私たちは、ソフトウェアの未来は人間の創造性と機械の継続性との共生関係にあると信じています。AI は単に支援するだけでなく、真にエンジニアが私たちに寄り添ってくれるのです。",
    ],
    oldYugTitle: "オールド・ユグ",
    oldYugDesc: "人間のみによるソフトウェア開発。個人の認知限界による制約により、ソフトウェアの劣化、コンテキストの断片化、技術的負債の蓄積が生じます。",
    newNexTitle: "次のネックス",
    newNexDesc: "自律的な協調エンジニアリング。アーキテクチャを理解し、不変条件を検証し、連携して動作する永続的な意味論的推論基盤。",
    labels: {
        contextHorizon: "コンテキストホライズン",
        dependencyTracing: "システム的な依存関係の追跡",
        codebaseLifecycle: "コードベースのライフサイクル",
        verificationLoop: "検証ループ",
    },
    oldValues: {
        contextHorizon: "~100,000 トークン (断片化)",
        dependencyTracing: "手動/概算",
        codebaseLifecycle: "エントロピーと劣化",
        verificationLoop: "導入後のテスト",
    },
    newValues: {
        contextHorizon: "無限のグラフ表現",
        dependencyTracing: "動的 AST トレース (因果関係)",
        codebaseLifecycle: "リファクタリング / 負債ゼロ",
        verificationLoop: "コミット前のサンドボックスの不変条件",
    },
    pillarsTitle: "認知基質の柱",
    pillars: [
        {
            id: "context",
            name: "コンテキスト合成基板",
            description: "生のソース ディレクトリを統合された多次元セマンティック グラフ表現にブリッジします。",
            details: "文字列のマッチングや浅いベクトルのインデックス作成に依存する従来の検索拡張コーディング アシスタントとは異なり、当社のシステムはシステム全体の抽象構文ツリー (AST) 関係、データ フロー、および依存関係ネットワーク上で直接動作します。ファイル全体の意図と推論のパスを追跡し、絶対的なコンテキストの連続性を維持します。",
            terminalLog: "yugnex.engine --compile-context-substrate --target=all",
        },
        {
            id: "reasoning",
            name: "因果推論エンジン",
            description: "トレードオフを比較検討し、専門エージェントを調整し、提案された変更によるシステムへの影響を評価します。",
            details: "ソフトウェアエンジニアリングは論理的な問題です。当社のマルチエージェント基盤は、さまざまなソフトウェア エンジニアリング機能 (アーキテクト、開発者、セキュリティ監査人、QA) を代表する専門エージェントをまとめます。構造化された複数ターンの推論議論を通じて、一行を書く前に実装パスに関する合意を確立します。",
            terminalLog: "yugnex.agent.coordinator --evaluate-systemic-impact",
        },
        {
            id: "verification",
            name: "永続的な不変性の検証",
            description: "提案されたすべての変更を安全なサンドボックスで実行、検証、テストすることにより、実行の安全性を保証します。",
            details: "構文的に正しいコードは最終目標ではありません。 YugNex は、隔離されたコンテナ環境内で実証的検証を実行します。これにより、新しいコードが事前に確立されたアーキテクチャ上の不変条件に準拠し、単体テストの境界を通過し、セキュリティの脆弱性や接続リークが発生しないことが保証されます。",
            terminalLog: "yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524",
        },
    ],
    systemSynapsed: "システムのシナプス化",
    telemetryTitle: "基材のメトリクス",
    telemetryStatus: "ランニング中",
    pillarMetas: [
        "システムの制限",
        "次の時代",
        "デジタルインテリジェンス",
        "人間とAIの共生",
    ],
    telemetryMap: [
        {
            stats: [
                {
                    label: "認知帯域幅スパン",
                    value: "1024x 拡張",
                    pct: 95,
                },
                {
                    label: "パーサーのメモリ オーバーヘッド",
                    value: "-92%削減",
                    pct: 92,
                },
                {
                    label: "コンテキスト一貫性率",
                    value: "99.4%",
                    pct: 99,
                },
            ],
            logs: [
                "parser_core: セマンティック依存関係マップの初期化",
                "Cortex_substrate: 構造的関係の追跡",
                "thread_evaluator: バックグラウンドで AST ノードを解析しています...",
                "ステータス: アクティブな推論限界が確立されました。",
            ],
        },
        {
            stats: [
                {
                    label: "人間と AI の同期遅延",
                    value: "< 2.4ms",
                    pct: 98,
                },
                {
                    label: "コンセンサス収束の深さ",
                    value: "レベル12に到達しました",
                    pct: 88,
                },
                {
                    label: "インターフェースフィードバックインデックス",
                    value: "0.985 / 1.0",
                    pct: 96,
                },
            ],
            logs: [
                "nex_bridge: ニューラルコンセンサスチャネルの接続",
                "コーディネーター: PO、アーキテクト、開発者エージェントへのポーリング",
                "コンセンサス: コードの推奨事項を解決しています...",
                "ステータス: オンラインでの継続的な自律的なコラボレーション。",
            ],
        },
        {
            stats: [
                {
                    label: "インテントの保存の成功",
                    value: "99.98%",
                    pct: 99,
                },
                {
                    label: "因果関係のつながりの深さ",
                    value: "12,042路線",
                    pct: 91,
                },
                {
                    label: "状態スナップショットのライフサイクル",
                    value: "継続的",
                    pct: 100,
                },
            ],
            logs: [
                "context_cache: リポジトリ トポロジ ノードのロード",
                "causal_mapper: 4,920 個のリンク更新をキャッシュします",
                "state_preserver: コード設計の不変チェックを検証しています...",
                "ステータス: 永続的なシステム インテリジェンスが動作中。",
            ],
        },
        {
            stats: [
                {
                    label: "共同エンジニアリングの生産性",
                    value: "+184.2%増加",
                    pct: 94,
                },
                {
                    label: "検証信頼度メトリック",
                    value: "100%検証済み",
                    pct: 100,
                },
                {
                    label: "建築負債指数",
                    value: "0.04 (最小)",
                    pct: 96,
                },
            ],
            logs: [
                "symbiotic_cortex: 不変検証テストベッドの生成",
                "診断: ステージングでの 89 の安全性プロパティのチェック",
                "Compiler_verify: 構造境界がクリーンに渡されました",
                "ステータス: 人間の創造性が機械の継続性によって強化されています。",
            ],
        },
    ],
}
