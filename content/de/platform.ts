import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "Platform",
    subtitle: "Autonomous Software Engineering Platform",
    hero: {
        title: "YugNex Platform",
        description: "An AI-powered platform that understands, reasons, and collaborates on complex software systems."
    },
    builtFor: {
        title: "Built for Engineers",
        subtitle: "By Engineers",
        body: "We understand the challenges of building complex software systems. YugNex is designed to amplify your capabilities, not replace them."
    },
    capabilities: [
        {
            title: "Architecture Understanding",
            description: "Comprehends your system's structure and design patterns",
            points: [
                "Analyzes code relationships and dependencies",
                "Understands design patterns and architectural decisions",
                "Maintains context across the entire codebase"
            ]
        }
    ],
    useCases: [
        {
            title: "Legacy Code Modernization",
            challenge: "Update old codebases without breaking functionality",
            solution: "YugNex understands the entire system and suggests safe refactoring paths"
        }
    ],
    targetAudience: [
        {
            role: "Engineering Teams",
            painPoints: ["Context switching", "Knowledge silos", "Technical debt"],
            benefit: "Shared AI teammate with perfect memory and system understanding"
        }
    ],
    workflow: {
        title: "How It Works",
        points: [
            { title: "Connect", description: "Link your codebase to YugNex" },
            { title: "Understand", description: "AI analyzes and maps your architecture" },
            { title: "Collaborate", description: "Work together on features and fixes" },
            { title: "Evolve", description: "System learns and improves continuously" }
        ]
    },
    comparison: [
        { category: "Context", others: "Session-based", us: "Persistent" },
        { category: "Understanding", others: "Syntax-level", us: "Architecture-level" },
        { category: "Collaboration", others: "One-shot", us: "Continuous" }
    ]
}
