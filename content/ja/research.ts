import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "Building Foundations, Not Features",
    philosophy: {
        title: "Why It Takes Time",
        body: "You might ask: \"Why not ship something now?\" Because foundational technology can't be rushed. When Google built their search algorithm, they didn't ship incrementally. When OpenAI trained GPT-3, they didn't release GPT-0.5 first. When SpaceX designed reusable rockets, they didn't start with \"partially reusable.\" We're building AI that makes engineering decisions. That requires a level of reasoning, context-awareness, and reliability that doesn't exist in current systems. We're taking the time because the problem deserves it.",
        points: [
            "Deep research into unsolved problems",
            "Novel architectures tested rigorously",
            "Systems that work reliably, not just demos",
            "Patents to protect innovations",
            "Time to get it right"
        ]
    },
    papers: [
        {
            id: 'whitepaper-2026',
            title: 'Toward Autonomous Software Engineering: Challenges and Directions',
            description: 'Research on reasoning, context, and architectural understanding in AI-assisted software engineering. This whitepaper explores the foundational challenges in building persistent, autonomous software engineering intelligence.',
            pdfUrl: '/YugNex_Research_Whitepaper.pdf',
            fileName: 'YugNex_Research_Whitepaper.pdf',
            publishDate: '2026-01-01',
            authors: ['YugNex Technology Research Division'],
            tags: ['AI', 'Software Engineering', 'Autonomous Systems', 'Research']
        }
    ]
}
