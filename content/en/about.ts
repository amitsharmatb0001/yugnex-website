import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "About YugNex Technology",
    company: {
        name: "YugNex Technology",
        status: "Deep Research & MVP Prototyping",
        recognition: "DPIIT Recognized Startup (16 Dec 2025)",
        location: "Bhilwara, Rajasthan, India"
    },
    founder: {
        name: "Amit Sharma",
        bio: "Software developer and entrepreneur. Building autonomous systems that solve real engineering problems."
    },
    approach: [
        "Research-first development",
        "Patent-filed innovations (Provisional Filed January 2026)",
        "Self-funded independence",
        "Focus on fundamentals over hype",
        "Building in India for the world"
    ],
    credentials: [
        { label: "DPIIT Recognition", value: "16 Dec 2025" },
        { label: "Incorporated", value: "Oct 2025" },
        { label: "Status", value: "Deep Research & MVP Prototyping" },
        { label: "Launch Timeline", value: "2027" }
    ],
    journeyTitle: "Our Journey & Milestones",
    ledgerLabel: "Milestone Registry Ledger",
    milestones: [
        {
            year: "Oct 2025",
            title: "Company Incorporation",
            label: "Incorporation",
            description: "YugNex Technology incorporated as an OPC Private Limited company under the Ministry of Corporate Affairs, initiating our mission to build persistent, autonomous software engineering systems.",
            status: "completed",
            statusText: "Completed",
            docs: [
                { label: "Entity Name", value: "YugNex Technology OPC Pvt Ltd" },
                { label: "Registry ID", value: "U72200RJ2025OPC098254" },
                { label: "Location", value: "Bhilwara, Rajasthan, India" },
                { label: "Authority", value: "MCA Government of India" }
            ]
        },
        {
            year: "16 Dec 2025",
            title: "DPIIT Startup Recognition",
            label: "DPIIT Cert",
            description: "Received official recognition as a Startup from the Department for Promotion of Industry and Internal Trade (DPIIT), granting us startup status and IP/tax assistance privileges.",
            status: "completed",
            statusText: "Completed",
            docs: [
                { label: "Certificate No", value: "DIPP234393" },
                { label: "Recognition Date", value: "16 December 2025" },
                { label: "Category", value: "AI Software Systems" },
                { label: "Benefits", value: "IP & Patent Fast-Track Support" }
            ]
        },
        {
            year: "Jan 2026",
            title: "Provisional Patent Filing",
            label: "Patent Filed",
            description: "Filed provisional patent documentation with the Indian Patent Office covering our proprietary symbolic-neural reasoning architecture and semantic AST graph structures.",
            status: "completed",
            statusText: "Completed",
            docs: [
                { label: "Filing Category", value: "System Reasoning Architecture" },
                { label: "Provisional Date", value: "January 2026" },
                { label: "Scope", value: "Multi-Agent Codebase Refactoring" },
                { label: "Filing Status", value: "Patent Pending" }
            ]
        },
        {
            year: "Active 2026",
            title: "Deep Research & MVP Prototyping",
            label: "MVP Phase",
            description: "Currently in the deep research and MVP development stage. We are testing initial multi-agent collaboration pipelines and validating the AST solver in secure container sandboxes.",
            status: "progress",
            statusText: "In Progress",
            docs: [
                { label: "Development Phase", value: "Active R&D & MVP Sandbox" },
                { label: "Prototype Release", value: "v0.4.5-alpha (internal)" },
                { label: "Agent Coordination", value: "Architect-Auditor consensus" },
                { label: "Security Model", value: "Turnstile Secure Sandboxes" }
            ]
        },
        {
            year: "Late 2026",
            title: "Full Swing Development Scale",
            label: "Scale Up",
            description: "Planned scale-up to full swing development phase for our autonomous platforms, expanding our research team and opening secure sandbox APIs to early select partners.",
            status: "planned",
            statusText: "Planned",
            docs: [
                { label: "Expected Startup", value: "Q4 2026" },
                { label: "Focus Area", value: "Production REST API / IDE plugins" },
                { label: "Team Expansion", value: "Core R&D Systems Engineers" },
                { label: "Access Tier", value: "Private Developer Beta" }
            ]
        },
        {
            year: "2027",
            title: "Official Platform Launch",
            label: "Public Launch",
            description: "Official rollout of the YugNex autonomous software engineering platform to the public. Delivering the world’s first persistent software engineering intelligence.",
            status: "planned",
            statusText: "Planned",
            docs: [
                { label: "Launch Schedule", value: "2027" },
                { label: "Target Platforms", value: "Cloud SaaS / On-Premise Engine" },
                { label: "Scope", value: "Enterprise Invariant Solvers" },
                { label: "Security Standard", value: "SOC2 / GPG Signed Deployments" }
            ]
        }
    ]
}
