import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "The Platform",
    subtitle: "Autonomous Software Engineering, Reimagined",
    hero: {
        title: "What We're Building",
        description: "An AI-powered platform that goes beyond code generation to truly understand, reason about, and collaborate on complex software systems. Not another autocomplete tool. A collaborative engineering partner that brings architectural understanding, systemic reasoning, and validation to your development workflow."
    },
    capabilities: [
        {
            title: "Understands Architecture, Not Just Syntax",
            description: "While current tools predict the next line of code, our platform builds a comprehensive understanding of your system's architecture, dependencies, and design patterns.",
            points: [
                "Changes are evaluated in full system context",
                "Dependency impacts are understood before implementation",
                "Architectural boundaries are respected automatically",
                "Technical debt implications are surfaced proactively"
            ]
        },
        {
            title: "Reasons About Implications",
            description: "Every code change has implications—performance, security, maintainability, scalability. Our platform doesn't just generate code; it reasons about what that code means for your system.",
            points: [
                "System-wide impacts are analyzed",
                "Risks and trade-offs are evaluated",
                "Alternative approaches are considered",
                "Architectural coherence is maintained"
            ]
        },
        {
            title: "Validates at Multiple Levels",
            description: "Syntactically correct code isn't the goal—architecturally sound, maintainable, secure code is.",
            points: [
                "Correctness: Does it work without breaking things?",
                "Safety: Are security boundaries maintained?",
                "Architecture: Does it align with system design?",
                "Maintainability: Will engineers understand it six months from now?"
            ]
        }
    ],
    useCases: [
        {
            title: "Complex Refactoring",
            challenge: "Refactoring in large codebases is risky. You need to understand every place the code is used, every dependency that might break...",
            solution: "Analyzes the complete dependency graph, identifies all affected components, evaluates architectural implications, and helps execute changes safely."
        },
        {
            title: "Architectural Analysis",
            challenge: "Understanding how a large codebase actually works—its patterns, its implicit contracts, its design decisions—takes weeks for new team members.",
            solution: "Builds comprehensive architectural maps showing system structure, dependency relationships, design patterns, and architectural boundaries."
        },
        {
            title: "Safe System Evolution",
            challenge: "Adding features or making changes without introducing bugs, violating architectural principles, or creating technical debt.",
            solution: "Evaluates proposed changes in full system context, identifies potential issues before implementation, suggests architecturally coherent approaches."
        },
        {
            title: "Legacy Code Understanding",
            challenge: "Inherited codebases with minimal documentation, unclear design decisions, and accumulated technical debt are expensive to maintain.",
            solution: "Reconstructs architectural intent, identifies design patterns and anti-patterns, maps dependency relationships, and surfaces technical debt."
        },
        {
            title: "Code Review at Scale",
            challenge: "Thorough code review requires understanding system-wide implications, but reviewers have limited time and cognitive bandwidth.",
            solution: "Performs deep architectural analysis, identifies potential issues across dimensions, and highlights concerns that require human judgment."
        }
    ],
    targetAudience: [
        {
            role: "Engineering Teams",
            painPoints: ["Multiple services", "Architectural patterns", "Security/performance reqs"],
            benefit: "You need more than autocomplete. You need architectural understanding."
        },
        {
            role: "Senior Engineers & Architects",
            painPoints: ["Tracing dependencies", "Reviewing architectural violations", "Explaining context"],
            benefit: "Handles the cognitive load of system understanding, freeing you to focus on high-level decisions."
        },
        {
            role: "Teams Managing Technical Debt",
            painPoints: ["Unknown scope", "Prioritization", "Safe refactoring"],
            benefit: "Makes technical debt visible and helps you address it systematically."
        }
    ],
    workflow: {
        title: "How It Works With Your Workflow",
        points: [
            {
                title: "Integrated, Not Intrusive",
                description: "Fits into your existing environment and codebase. No migration required."
            },
            {
                title: "Collaborative, Not Automated",
                description: "The platform suggests, you decide. It brings AI strengths to complement human judgment."
            },
            {
                title: "Transparent, Not Black Box",
                description: "Shows its reasoning, identified dependencies, risks, and trade-offs."
            }
        ]
    },
    comparison: [
        {
            category: "Code Autocomplete",
            others: "Generate code based on patterns. Predict next line. Help write faster.",
            us: "Reason about systems. Understand entire architecture. Help build better."
        },
        {
            category: "Static Analysis",
            others: "Find issues in code. Flag syntax errors. Run after coding.",
            us: "Understand architectural implications. Reason about system-wide impacts. Guide as you develop."
        },
        {
            category: "Code Review Tools",
            others: "Facilitate human review. Show diffs. Highlight changes.",
            us: "Perform architectural analysis. Explain implications. Validate system coherence."
        }
    ]
}
