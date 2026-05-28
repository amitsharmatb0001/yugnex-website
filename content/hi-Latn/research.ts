import { ResearchContent } from '@/app/lib/contentTypes'

export const researchContent: ResearchContent = {
    title: "Shodh",
    philosophy: {
        title: "Pratham Siddhant Soch",
        body: "Hum AI engineering ko pratham siddhanton se dekhte hain, aisi systems banate hain jo vastav mein software architecture ko samajhti hain.",
        points: [
            "Satahi star ki generation par gehri samajh",
            "Architecture aur implications ke bare mein systematic tark",
            "Nirantar seekhna aur anukuln (adaptation)",
            "Manav-AI sahyogi buddhimatta"
        ]
    },
    papers: [
        {
            id: 'whitepaper-2026',
            title: 'Swayatt Software Engineering ki or: Chunautiyan aur Dishayein',
            description: 'AI-assisted software engineering mein reasoning, context, aur architectural samajh par shodh. Yeh whitepaper persistent, autonomous software engineering intelligence banane mein aane wali moolbhoot chunautiyon ki padtaal karta hai.',
            pdfUrl: '/YugNex_Research_Whitepaper.pdf',
            fileName: 'YugNex_Research_Whitepaper.pdf',
            publishDate: '2026-01-01',
            authors: ['YugNex Technical Research Division'],
            tags: ['AI', 'Software Engineering', 'Autonomous Systems', 'Research']
        }
    ]
}
