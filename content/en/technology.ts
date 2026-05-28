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
                description: "Codebases contain millions of lines across thousands of files. Current tools attempt to bridge this through simple retrieval, but relevance in software isn't textual similarity—it's about causal relationships, dependency chains, and architectural boundaries."
            },
            {
                title: "The Reasoning Gap",
                description: "There's a fundamental difference between generating syntactically correct code and making sound engineering decisions. When experienced engineers modify code, they consider system-wide architectural implications, dependency impacts, performance trade-offs, and maintainability."
            },
            {
                title: "The Validation Gap",
                description: "Software engineering requires correctness, not plausibility. Current tools lack mechanisms to validate beyond syntax checking. They can't reason about whether changes maintain system invariants, respect architectural boundaries, or introduce security vulnerabilities."
            }
        ]
    },
    approach: {
        title: "Built for Software Engineering",
        subtitle: "We started with a different question: Not \"How can AI write better code?\" But \"How can AI understand software systems the way experienced engineers do?\"",
        sections: [
            {
                title: "Specialization Over Generalization",
                body: "Different aspects of software engineering require fundamentally different types of reasoning. Rather than compressing everything into a single model, we use specialized AI components—each designed for specific domains of software reasoning—working together like an engineering team."
            },
            {
                title: "Collaborative Reasoning",
                body: "Software decisions often require weighing trade-offs between competing concerns. Our architecture enables specialized components to share context, challenge assumptions, and work toward consensus through structured coordination."
            },
            {
                title: "System-Wide Understanding",
                body: "Software understanding operates at multiple levels: syntax, semantics, architectural patterns, design intent, and system-wide properties. We use layered reasoning where different components operate at different levels of abstraction."
            },
            {
                title: "Context Beyond Retrieval",
                body: "Rather than pulling disconnected code snippets, we're developing approaches to build dynamic representations of system relationships—capturing not just code, but the web of dependencies, invariants, and architectural boundaries."
            }
        ]
    },
    difference: {
        title: "The Difference",
        comparison: [
            {
                label: "Current Tools",
                value: "Generate code → Optimize for syntax → Work within context limits → General-purpose architectures"
            },
            {
                label: "Our Approach",
                value: "Understand systems → Reason about architecture → Build dynamic representations → Purpose-built for software engineering"
            }
        ]
    }
}
