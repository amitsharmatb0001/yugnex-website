import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "Technology",
    problem: {
        title: "The Problem with Current AI Tools",
        subtitle: "Context-Free Code Generation",
        body: "Current AI coding assistants generate plausible code without understanding your system's architecture, leading to bugs and technical debt.",
        limitations: [
            { title: "No Memory", description: "Forgets context between sessions" },
            { title: "No Architecture Awareness", description: "Doesn't understand your system design" },
            { title: "No Validation", description: "Generates code that compiles but breaks things" }
        ]
    },
    approach: {
        title: "YugNex Approach",
        subtitle: "Architecture-Aware AI Engineering",
        sections: [
            { title: "Persistent Context", body: "Never forgets your codebase architecture and patterns" },
            { title: "Systemic Reasoning", body: "Understands implications across your entire system" },
            { title: "Multi-Level Validation", body: "Ensures correctness, security, and maintainability" }
        ]
    },
    difference: {
        title: "The YugNex Difference",
        comparison: [
            { label: "Context", value: "Persistent" },
            { label: "Understanding", value: "Architecture-Aware" },
            { label: "Validation", value: "Multi-Dimensional" }
        ]
    }
}
