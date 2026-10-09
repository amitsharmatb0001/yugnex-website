import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "The Platform",
    subtitle: "Autonomous Software Engineering, Reimagined",
    hero: {
        title: "What We're Building",
        description: "An AI-powered platform that goes beyond code generation to truly understand, reason about, and collaborate on complex software systems. Not another autocomplete tool. A collaborative engineering partner that brings architectural understanding, systemic reasoning, and validation to your development workflow.",
    },
    capabilities: [
        {
            title: "Understands Architecture, Not Just Syntax",
            description: "While current tools predict the next line of code, our platform builds a comprehensive understanding of your system's architecture, dependencies, and design patterns.",
            points: [
                "Changes are evaluated in full system context",
                "Dependency impacts are understood before implementation",
                "Architectural boundaries are respected automatically",
                "Technical debt implications are surfaced proactively",
            ],
        },
        {
            title: "Reasons About Implications",
            description: "Every code change has implications—performance, security, maintainability, scalability. Our platform doesn't just generate code; it reasons about what that code means for your system.",
            points: [
                "System-wide impacts are analysed",
                "Risks and trade-offs are evaluated",
                "Alternative approaches are considered",
                "Architectural coherence is maintained",
            ],
        },
        {
            title: "Validates at Multiple Levels",
            description: "Syntactically correct code isn't the goal—architecturally sound, maintainable, secure code is.",
            points: [
                "Correctness: Does it work without breaking things?",
                "Safety: Are security boundaries maintained?",
                "Architecture: Does it align with system design?",
                "Maintainability: Will engineers understand it six months from now?",
            ],
        },
    ],
    useCases: [
        {
            title: "Complex Refactoring",
            challenge: "Refactoring in large codebases is risky. You need to understand every place the code is used, every dependency that might break...",
            solution: "Analyses the complete dependency graph, identifies all affected components, evaluates architectural implications, and helps execute changes safely.",
        },
        {
            title: "Architectural Analysis",
            challenge: "Understanding how a large codebase actually works—its patterns, its implicit contracts, its design decisions—takes weeks for new team members.",
            solution: "Builds comprehensive architectural maps showing system structure, dependency relationships, design patterns, and architectural boundaries.",
        },
        {
            title: "Safe System Evolution",
            challenge: "Adding features or making changes without introducing bugs, violating architectural principles, or creating technical debt.",
            solution: "Evaluates proposed changes in full system context, identifies potential issues before implementation, suggests architecturally coherent approaches.",
        },
        {
            title: "Legacy Code Understanding",
            challenge: "Inherited codebases with minimal documentation, unclear design decisions, and accumulated technical debt are expensive to maintain.",
            solution: "Reconstructs architectural intent, identifies design patterns and anti-patterns, maps dependency relationships, and surfaces technical debt.",
        },
        {
            title: "Code Review at Scale",
            challenge: "Thorough code review requires understanding system-wide implications, but reviewers have limited time and cognitive bandwidth.",
            solution: "Performs deep architectural analysis, identifies potential issues across dimensions, and highlights concerns that require human judgement.",
        },
    ],
    targetAudience: [
        {
            role: "Engineering Teams",
            painPoints: [
                "Multiple services",
                "Architectural patterns",
                "Security/performance requirements",
            ],
            benefit: "You need more than autocomplete. You need architectural understanding.",
        },
        {
            role: "Senior Engineers & Architects",
            painPoints: [
                "Tracing dependencies",
                "Reviewing architectural violations",
                "Explaining context",
            ],
            benefit: "Handles the cognitive load of system understanding, freeing you to focus on high-level decisions.",
        },
        {
            role: "Teams Managing Technical Debt",
            painPoints: [
                "Unknown scope",
                "Prioritisation",
                "Safe refactoring",
            ],
            benefit: "Makes technical debt visible and helps you address it systematically.",
        },
    ],
    workflow: {
        title: "How It Works With Your Workflow",
        points: [
            {
                title: "Integrated, Not Intrusive",
                description: "Fits into your existing environment and codebase. No migration required.",
            },
            {
                title: "Collaborative, Not Automated",
                description: "The platform suggests, you decide. It brings AI strengths to complement human judgement.",
            },
            {
                title: "Transparent, Not Black Box",
                description: "Shows its reasoning, identified dependencies, risks, and trade-offs.",
            },
        ],
    },
    comparison: [
        {
            category: "Code Autocomplete",
            others: "Generate code based on patterns. Predict next line. Help write faster.",
            us: "Reason about systems. Understand entire architecture. Help build better.",
        },
        {
            category: "Static Analysis",
            others: "Find issues in code. Flag syntax errors. Run after coding.",
            us: "Understand architectural implications. Reason about system-wide impacts. Guide as you develop.",
        },
        {
            category: "Code Review Tools",
            others: "Facilitate human review. Show diffs. Highlight changes.",
            us: "Perform architectural analysis. Explain implications. Validate system coherence.",
        },
    ],
    disclaimer: "⚠️ R&D Simulation Disclaimer: This interface is an interactive demonstration for conceptual visualization purposes. The YugNex autonomous software engineering system is currently in the Research & Development (R&D) phase. No public production digital application or fully optimized system is active at this time.",
    tabs: {
        github: "GitHub Pull Request",
        ide: "IDE Workspace Integration",
        cicd: "CI/CD Invariant pipeline",
    },
    githubPr: {
        statusOpen: "Open",
        securityScore: "Security Integrity Score",
        securityBadge: "Security Auditor Agent",
        securityTime: "Verified 2m ago",
        securityFeedback: "Vulnerability resolution verified. The hardcoded JWT secret key has been parameterized to run from system environmental variables. X-Frame-Options security headers have been successfully injected globally. Invariant checks passed.",
    },
    ideWorkspace: {
        statusReviewing: "Reviewing",
        ideTitle: "YugNex: Resolve listener leak in WebSockets",
        ideDesc: "Memory leak resolved by declaring explicit close handler.",
        btnAccept: "Accept Suggestion",
        btnDecline: "Decline",
    },
    cicdPipeline: {
        statusPipelinePassed: "Pipeline Passed",
        statusSuccess: "STATUS: SUCCESS",
        ciLogs: [
            "[INFO] Spawning production runtime containers...",
            "[INFO] Bundling modules and scanning compiler build trees...",
            "[INFO] Executing formal invariant sweeps:",
            "      ✓ Invariant 01: API authentication integrity (passed)",
            "      ✓ Invariant 02: Resource allocation constraints (passed)",
            "      ✓ Invariant 03: Circular dependency verification (passed)",
            "[SUCCESS] System compilation build verified. Execution integrity passes with 0 memory leaks.",
            "deploying to production edge...",
        ],
    },
    capabilitiesTitle: "Interactive Platform Capabilities",
    consoleSandboxRunner: "CONSOLE: SANDBOX_RUNNER",
    btnExecuting: "EXECUTING...",
    btnRun: "RUN",
    capLogs: [
        {
            cmd: "yugnex build --analyze-architecture",
            logs: [
                "[INFO] Scanning codebase directories...",
                "[INFO] Constructing causal inter-module graph (1,284 nodes)...",
                "[VCS] Checking architectural boundaries against design specifications...",
                "[SUCCESS] Dependency schema built. 0 boundary violations found.",
            ],
        },
        {
            cmd: "yugnex diff --check-implications --file=userModel.ts",
            logs: [
                "[INFO] Tracing downstream imports for userModel.ts...",
                "[INFO] Checking dependency chains inside routes/ and controllers/...",
                "[WARN] userService.ts depends on changed database schemas. Validating parameters...",
                "[SUCCESS] Causal paths verified. Refactoring risk assessment: 0 issues.",
            ],
        },
        {
            cmd: "yugnex validate --invariants --level=all",
            logs: [
                "[INFO] Executing multi-level invariant validation checks...",
                "[INFO] Level 1: Syntax Parsing (PASS) | Level 2: Types (PASS)",
                "[INFO] Level 3: Security Sandboxing (PASS) | Level 4: Memory checks (PASS)",
                "[SUCCESS] Formal validation completed successfully. Code safe.",
            ],
        },
    ],
}
