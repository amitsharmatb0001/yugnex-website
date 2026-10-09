import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "The Problem with Current AI Coding Tools",
    problem: {
        title: "They Generate Code, But Don't Understand Systems",
        subtitle: "Today's AI coding assistants have achieved impressive results—autocompleting code, generating functions, translating between languages. But they all share a fundamental limitation: they treat software as text to be generated, not systems to be understood.",
        body: "Software engineering is not a text generation problem. It's a system reasoning problem.",
        limitations: [
            {
                title: "The Context Problem",
                description: "Codebases contain millions of lines across thousands of files. Current tools attempt to bridge this through simple retrieval, but relevance in software isn't textual similarity—it's about causal relationships, dependency chains, and architectural boundaries.",
            },
            {
                title: "The Reasoning Gap",
                description: "There's a fundamental difference between generating syntactically correct code and making sound engineering decisions. When experienced engineers modify code, they consider system-wide architectural implications, dependency impacts, performance trade-offs, and maintainability.",
            },
            {
                title: "The Validation Gap",
                description: "Software engineering requires correctness, not plausibility. Current tools lack mechanisms to validate beyond syntax checking. They can't reason about whether changes maintain system invariants, respect architectural boundaries, or introduce security vulnerabilities.",
            },
        ],
    },
    approach: {
        title: "Built for Software Engineering",
        subtitle: "We started with a different question: Not \"How can AI write better code?\" But \"How can AI understand software systems the way experienced engineers do?\"",
        sections: [
            {
                title: "Specialisation Over Generalisation",
                body: "Different aspects of software engineering require fundamentally different types of reasoning. Rather than compressing everything into a single model, we use specialised AI components—each designed for specific domains of software reasoning—working together like an engineering team.",
            },
            {
                title: "Collaborative Reasoning",
                body: "Software decisions often require weighing trade-offs between competing concerns. Our architecture enables specialised components to share context, challenge assumptions, and work towards consensus through structured coordination.",
            },
            {
                title: "System-Wide Understanding",
                body: "Software understanding operates at multiple levels: syntax, semantics, architectural patterns, design intent, and system-wide properties. We use layered reasoning where different components operate at different levels of abstraction.",
            },
            {
                title: "Context Beyond Retrieval",
                body: "Rather than pulling disconnected code snippets, we're developing approaches to build dynamic representations of system relationships—capturing not just code, but the web of dependencies, invariants, and architectural boundaries.",
            },
        ],
    },
    difference: {
        title: "The Difference",
        comparison: [
            {
                label: "Current Tools",
                value: "Generate code → Optimise for syntax → Work within context limits → General-purpose architectures",
            },
            {
                label: "Our Approach",
                value: "Understand systems → Reason about architecture → Build dynamic representations → Purpose-built for software engineering",
            },
        ],
    },
    diagnosticsTitle: "Interactive Limitations Diagnostics",
    approachTitle: "Our Layered Approach",
    debateTitle: "Autonomous Analyzer Consensuses",
    debateSubtitle: "Hover over code lines to activate YugNex's multi-agent consensus panel debating security and refactoring concerns.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[INFO] Executing repository architecture trace...",
                "[WARN] Context limit reached at file index 512.",
                "[FAIL] context_overflow: stack size 1,048,576 bytes exceeded standard context window.",
                "[CRITICAL] Parser aborted. Traditional LLM fails to resolve system-wide relationships.",
                "[YUGNEX SOLUTION] Re-routing to Causal Context Substrate...",
                "[SUCCESS] Causal Graph trace complete. 48,091 files indexed with persistent cache nodes.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[INFO] Initializing parameter refactor job...",
                "[INFO] Analyzer running symbolic reasoning check across dependency nodes...",
                "[WARN] Traditional assistant generated code: userService.ts parameter list mismatch (missing token).",
                "[CRITICAL] compilation_error: code syntax is valid but will break invocation in production.",
                "[YUGNEX SOLUTION] Symbolic reasoning block intercepted invalid parameter list. Reverting changes...",
                "[SUCCESS] Applied parameterized bindings and synchronized callers in 14 dependant modules.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[INFO] Initiating CI pipeline verification...",
                "[INFO] Scanning models/ for user query injection security vectors...",
                "[WARN] direct_interpolation: query interpolation detected in profileSearch.ts.",
                "[FAIL] Invariant 02 violated: database parameters must be bound. Build status: BLOCKED.",
                "[YUGNEX SOLUTION] Auto-fixing parameters with parameterized SQL queries...",
                "[SUCCESS] Invariants passed. Security checks verified (0 risks found). Build released.",
            ],
        },
    ],
    approachDiagrams: [
        "[AST Parser Agent] =======> [Causal Solver Agent]\n                                   ||\n                                   \\/ \n[Consensus Agent] <======== [Refactor Agent]\nSTATUS: Specialized collaborative reasoning online.",
        "Agent[Architect]: \"Direct SQL interpolation violates standard.\"\nAgent[Security]: \"Vulnerability confirmed. Auto-blocking build.\"\nAgent[Developer]: \"Updating query binds. Injecting fix...\"\nSTATUS: Consensus reached. Code patched successfully.",
        "Level 5 (Architectural Design Patterns) - ACTIVE\nLevel 4 (Module Interdependencies)      - ACTIVE\nLevel 3 (Semantic Variable Binding)     - ACTIVE\nLevel 2 (Abstract Syntax Tree)          - ACTIVE\nSTATUS: System-wide layered reasoning verified.",
        "Causal Relations Cached: 184,902\nActive Context Nodes: 12,042\nLookup Latency: 1.2ms (98% speedup over LLM search)\nSTATUS: Causal graphs fully synched.",
    ],
    liveTelemetry: "Live Telemetry Graph",
    codeLens: {
        panelTitle: "active_routes.js — Hover/Click lines with alert nodes",
        insightTitleAutoFix: "YugNex Auto-Fix Recommendation",
        insightTitleDebate: "Agent Resolution Debate",
        solutionsDefault: "Hover over lines of code on the left to activate the YugNex autonomous analyzer lens.",
        lines: [
            {
            },
            {
                warningTitle: "SQL Injection Vulnerability",
                warningDesc: "Directly interpolating user input into an SQL query string allows attackers to inject malicious SQL commands and bypass authentication or view unauthorized tables.",
                debate: [
                    {
                        role: "Architect",
                        text: "Direct SQL query interpolation detected. This violates our security standards.",
                    },
                    {
                        role: "Security Auditor",
                        text: "Remote exploit possible via status parameters. Commit blocked.",
                    },
                    {
                        role: "Developer",
                        text: "Re-writing query to parameterized binding using db.execute(query, [status]).",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
                warningTitle: "N+1 Query Bottleneck",
                warningDesc: "Executing a separate database query inside a loop causes N queries for N users. This leads to heavy latency spikes and server overload as database connection pools saturate.",
                debate: [
                    {
                        role: "Architect",
                        text: "Relational database bottleneck. Executing queries inside a loop is blocked.",
                    },
                    {
                        role: "Developer",
                        text: "Aggregating user IDs to batch fetch profiles in a single SELECT ... WHERE IN (?) query.",
                    },
                    {
                        role: "QA Auditor",
                        text: "Verified. Benchmark metrics show total queries executed dropped from N to 1.",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
            },
        ],
    },
}
