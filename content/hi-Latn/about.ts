import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "Hamare Baare Mein",
    company: {
        name: "YugNex Technology OPC Private Limited",
        status: "Private R&D stage",
        recognition: "DPIIT Recognized (DIPP234393) · 2024 mein founded",
        location: "Gurugram, Haryana, India se operate kar rahe hain"
    },
    founder: {
        name: "Amit Sharma",
        bio: "Software engineering mein extensive background wale founder, AI aur persistent software quality par focus karte hain."
    },
    approach: [
        "Mastery par substance: Hum tab launch karte hain jab ready hote hain",
        "Privacy-first: Aapka code aapka hai aur sirf aapka",
        "Global vision ke saath India mein built",
        "Human judgment + AI execution collaboration par focus"
    ],
    credentials: [
        { label: "Recognition", value: "DPIIT (DIPP234393)" },
        { label: "Founded", value: "2024" },
        { label: "Status", value: "Research phase" },
        { label: "Launch", value: "2026" }
    ]
}
