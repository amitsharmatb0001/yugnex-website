import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "About YugNex Technology",
    company: {
        name: "YugNex Technology",
        status: "Private R&D Phase",
        recognition: "DPIIT Recognized Startup (DIPP234393)",
        location: "Bhilwara, Rajasthan, India"
    },
    founder: {
        name: "Amit Sharma",
        bio: "Software developer and entrepreneur. Building autonomous systems that solve real engineering problems."
    },
    approach: [
        "Research-first development",
        "Patent-filed innovations (Filed January 2026)",
        "Self-funded independence",
        "Focus on fundamentals over hype",
        "Building in India for the world"
    ],
    credentials: [
        { label: "DPIIT Recognition", value: "DIPP234393" },
        { label: "Incorporated", value: "2024" },
        { label: "Status", value: "Private R&D Phase" },
        { label: "Launch Timeline", value: "Later this year" }
    ]
}
