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
    closingStatement: "新しい時代は遠い夢ではありません。それは私たちが今構築しているインフラです。",
    blueprint: [
        {
            id: "ingestion",
            num: "レイヤー_01",
            name: "セマンティック ソース取り込みのサブストレート",
            badge: "ASTの解析",
            telemetryTitle: "SYSTEM::INGESTION_CONTROLLER",
            logs: [
                "$ yugnex core --parse-directory=./src",
                "コードベース ディレクトリをスキャン中: 1,420 個のファイルが一致しました。",
                "抽象構文ツリー (AST) 参照を構築しています...",
                "コール グラフとリレーショナル ベクトルのマッピング。",
                "成功: 12,450 の AST ノードがコンテキスト サブストレート グラフにシナプスされました。",
                "アクティブなリスナーが登録されました: --poll-interval=500ms のファイル システム ウォッチャー",
            ],
        },
        {
            id: "solver",
            num: "レイヤー_02",
            name: "マルチエージェント不変ソルバー",
            badge: "論理を議論する",
            telemetryTitle: "SYSTEM::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL",
                "ディベート ルームを開始: [アーキテクト、開発者、監査人]",
                "[PO]: userController.ts:L24 内のフラグ付き生 SQL クエリ補間",
                "[開発者]: 入力検証のための正規表現の置換を提案しています。",
                "[アーキテクト]: 拒否されました。正規表現の置換はバイパス可能です。パラメータ バインディング クエリに書き換える必要があります。",
                "[監査者]: パラメータ化されたクエリ パスを検証しています。インバリアント分析が完了しました。",
                "合意に達しました。生成されたソリューション: パラメーター化されたステートメント インジェクション。",
            ],
        },
        {
            id: "sandbox",
            num: "レイヤー_03",
            name: "分離された検証サンドボックス エンジン",
            badge: "テスト実行者",
            telemetryTitle: "SYSTEM::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "コンテナが生成されました。画像: ノード-alpine-yugnex:最新",
                "リファクタリングされたファイルをコンテナ ファイル システムに挿入します。",
                "コンパイラ検証を実行中... 成功: 終了コード 0。",
                "単体テスト スイープを実行中... 48/48 テストに合格しました (240 ミリ秒)。",
                "メモリ ヒープ リークを監視しています... 42.1 MB スイープで安定しています。",
                "サンドボックステストが完了しました。検証ステータス: 安全であることが確認されました。",
            ],
        },
        {
            id: "sync",
            num: "レイヤー_04",
            name: "永久 VCS シンクロナイザー",
            badge: "同期のコミット",
            telemetryTitle: "SYSTEM::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "ローカルブランチの作成: yugnex/patch-secure-auth",
                "変更をコミットしています: 2 つのファイルが変更されましたが、警告はありません。",
                "コミット署名を検証しています... GPG 署名が検証されました。",
                "ブランチを上流の VCS にプッシュしています... 完了しました。",
                "プル リクエストを開く: [セキュリティ リファクタリング] 安全な SQL クエリのパラメータ化。",
                "VCS パイプラインのステータス: 緑色、レビュー担当者のマージを待機中。",
            ],
        },
    ],
    awaitingPipeline: "パイプラインの実行を待っています...",
    pipelineIntegrationFlow: "パイプライン統合フロー",
    triggerDiagnostic: "トリガー診断",
    runningDiagnostic: "実行中...",
    layerMetas: [
        "基礎基材",
        "永遠の進化",
        "アーキテクチャのコンテキスト",
        "拡張された検証",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "AST 解析スキーマを初期化する",
                },
                {
                    label: "因果的意味ノードをマップする",
                },
                {
                    label: "Docker サンドボックス ランタイムをインスタンス化する",
                },
            ],
            logs: [
                "ast_parser: コードベース トークンを読み取り中...",
                "dependency_resolver: パラメータ リスト制約の一致",
                "Sandbox_manager: コンテナ ノード レイアウトをコンパイルしています...",
                "成功: 基礎基板層は完全にアクティブです。",
            ],
        },
        {
            steps: [
                {
                    label: "Git コミット パイプライン イベントをフックする",
                },
                {
                    label: "リポジトリの差分ツリーをコンパイルする",
                },
                {
                    label: "アーキテクチャ上の不変境界を検証する",
                },
            ],
            logs: [
                "vcs_monitor: メインブランチのプッシュをリッスンしています...",
                "diff_engine: 14 個の変更された AST ファイルを解析しています",
                "invariant_runner: 8 つの検証チェックをテストしています...",
                "成功: 進化的なコンパイラ ループが完了しました。ビルドが同期されました。",
            ],
        },
        {
            steps: [
                {
                    label: "複数モジュールのインポート経路を抽出する",
                },
                {
                    label: "コンテキストのスコープ制限を動的に拡張する",
                },
                {
                    label: "マルチエージェントのコンセンサスチェックを調整する",
                },
            ],
            logs: [
                "context_engine: モジュール間の依存関係接続の読み取り",
                "Agent_consensus: セキュリティ監査と開発者の編集を一致させる",
                "validation_agent: AST 推論ツリーを分析しています...",
                "成功: 因果関係がコンテキスト マップに統合されました。",
            ],
        },
        {
            steps: [
                {
                    label: "アクティブな IDE ワークスペースを監視する",
                },
                {
                    label: "リアルタイムの開発者パラメータを分析する",
                },
                {
                    label: "構造診断レポートの出力",
                },
            ],
            logs: [
                "workspace_daemon: ファイル システムの変更時にアクティブになります",
                "lint_check: フレームワーク API に対するパラメーターのテスト",
                "Audit_writer: ドキュメントの整合性に関するメモを編集しています...",
                "成功: アーキテクチャへの準拠が確認されました。 0 件の欠陥が記録されました。",
            ],
        },
    ],
}
