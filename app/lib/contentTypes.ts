// Content type definitions for all pages

export interface HomeContent {
    heroTitle: string
    tagline: string
    subline: string
    banner: string
    credentials: string
}

export interface VisionContent {
    title: string
    lead: string
    paragraphs: string[]
}

export interface MissionContent {
    title: string
    lead: string
    paragraphs: string[]
}

// vision-content.ts
// Philosophical version using YugNex ideology

export const visionContent = {
    en: {
        title: "Vision",
        lead: "The transition to a new epoch of persistent, evolving engineering intelligence",
        paragraphs: [
            "\"Yug\" (युग) denotes an epoch, an age, a turning point in history—a concept deeply rooted in ancient wisdom that recognizes the cyclical nature of transformation. Each Yug represents not just a passage of time, but a fundamental shift in consciousness, capability, and possibility. \"Nex\" signifies what comes next—the immediate future, the adjacent possible, the next iteration in an infinite cycle of evolution.",

            "We stand at the threshold. The tools exist. The models are powerful. But the integration—the seamless fusion of human intent and machine execution—remains elusive. Traditional tools forget. Traditional sessions end. The continuity is lost.",

            "YugNex is the bridge. We're building the infrastructure, philosophy, and practice of making this new epoch real. Where developers no longer fight tools but collaborate with persistent intelligence. Where AI understands project history, anticipates needs, and executes with both precision and creativity. Where human judgment meets machine capability in continuous, evolving partnership.",

            "This is the turning point. From developers context-switching between fragmented tools to continuous collaboration with systems that understand. From AI as novelty to AI as persistent engineering partner. From innovation bottlenecked by individual expertise to collective intelligence amplifying human creativity.",

            "Not someday. Now. Next."
        ]
    }
}
// mission-content.ts
// Hybrid: Philosophical principles + Concrete mission

export const missionContent = {
    en: {
        title: "Mission",
        lead: "Building autonomous software engineering platforms through continuous human-AI collaboration",
        paragraphs: [
            "We reject the notion of \"finished\" systems. Intelligence—whether human or artificial—must continuously adapt, learn, and refine. Our mission is to build AI systems that embody perpetual evolution: maintaining context across sessions, learning from past projects, and growing alongside the teams they serve.",

            "We're creating a paradigm where the new epoch becomes tangible reality. Where engineers augment intuition with AI reasoning. Where AI systems ground their outputs in human context and values. Where problems are solved through iterative dialogue between human judgment and machine execution—not isolated computation.",

            "This means building systems that understand software architecture, not just generate code snippets. Systems that reason about system-wide implications before suggesting changes. Systems that validate across multiple dimensions—correctness, security, maintainability—because plausible code that breaks things is worse than no code at all.",

            "Our mission is democratization of complexity: making sophisticated engineering accessible not by dumbing it down, but by providing intelligent scaffolding that helps every builder reach higher, create faster, and solve problems they once thought impossible.",

            "We build with five core principles: Context is sacred—never lose track of where you are or why. Iteration is intelligence—refinement is where mastery lives. Transparency over black boxes—understand what's happening and why. Human judgment, machine execution—strategy from humans, tireless implementation from machines. Build towards tomorrow—every solution should make the next problem easier to solve.",

            "This is how we make the turning point real: the seamless fusion of ancient principles of craftsmanship with modern computational power. The bridge to an era where innovation is accelerated by collective intelligence. The infrastructure for the next chapter of software engineering."
        ]
    }
}

export interface ResearchContent {
    title: string
    philosophy: {
        title: string
        body: string
        points: string[]
    }
    papers: Array<{
        id: string
        title: string
        description: string
        pdfUrl: string
        fileName: string
        publishDate: string
        authors: string[]
        tags: string[]
    }>
}

export interface TechnologyContent {
    title: string
    problem: {
        title: string
        subtitle: string
        body: string
        limitations: Array<{
            title: string
            description: string
        }>
    }
    approach: {
        title: string
        subtitle: string
        sections: Array<{
            title: string
            body: string
        }>
    }
    difference: {
        title: string
        comparison: Array<{
            label: string
            value: string
        }>
    }
}

export interface PlatformContent {
    title: string
    subtitle: string
    hero: {
        title: string
        description: string
    }
    builtFor?: {
        title: string
        subtitle: string
        body: string
    }
    capabilities: Array<{
        title: string
        description: string
        points: string[]
    }>
    useCases: Array<{
        title: string
        challenge: string
        solution: string
    }>
    targetAudience: Array<{
        role: string
        painPoints: string[]
        benefit: string
    }>
    workflow: {
        title: string
        points: Array<{
            title: string
            description: string
        }>
    }
    comparison: Array<{
        category: string
        others: string
        us: string
    }>
}

export interface ContactContent {
    title: string
    intro: {
        title: string
        body: string
    }
    form: {
        title: string
        nameLabel: string
        emailLabel: string
        orgLabel: string
        messageLabel: string
        submitLabel: string
    }
    socials: {
        twitter: string
        email: string
        location: string
    }
}

export interface AboutContent {
    title: string
    company: {
        name: string
        status: string
        recognition: string
        location: string
    }
    founder: {
        name: string
        bio: string
    }
    approach: string[]
    credentials: Array<{
        label: string
        value: string
    }>
}
