import { TechnologyContent } from '@/app/lib/contentTypes'

export const technologyContent: TechnologyContent = {
    title: "Current AI Coding Tools Ke Saath Problem",
    problem: {
        title: "Woh Code Generate Karte Hain, Lekin Systems Nahi Samajhte",
        subtitle: "Aaj ke AI coding assistants ne impressive results achieve kiye hain—code auto-complete karna, functions generate karna, languages ke beech translate karna. Lekin woh sab ek fundamental limitation share karte hain: woh software ko text ke roop mein treat karte hain generate karne ke liye, na ki systems ke roop mein samajhne ke liye.",
        body: "Software engineering ek text generation problem nahi hai. Yeh ek system reasoning problem hai.",
        limitations: [
            {
                title: "Context Problem",
                description: "Codebases mein hazaron files ke across millions lines hote hain. Current tools ise simple retrieval ke through bridge karne ki koshish karte hain, lekin software mein relevance textual similarity nahi hai—yeh causal relationships, dependency chains, aur architectural boundaries ke baare mein hai."
            },
            {
                title: "Reasoning Gap",
                description: "Syntactically correct code generate karne aur sound engineering decisions lene ke beech ek fundamental difference hai. Jab experienced engineers code modify karte hain, toh woh system-wide architectural implications, dependency impacts, performance trade-offs, aur maintainability par consider karte hain."
            },
            {
                title: "Validation Gap",
                description: "Software engineering ko correctness chahiye, plausibility nahi. Current tools mein syntax checking se beyond validate karne ke liye mechanisms ki kami hai. Woh yeh reason nahi kar sakte ki kya changes system invariants ko maintain karte hain, architectural boundaries ka respect karte hain, ya security vulnerabilities introduce karte hain."
            }
        ]
    },
    approach: {
        title: "Software Engineering Ke Liye Banaya Gaya",
        subtitle: "Humne ek alag sawal se shuruat ki: \"AI better code kaise likh sakta hai?\" nahi balki \"AI software systems ko usi tarah kaise samajh sakta hai jaise experienced engineers karte hain?\"",
        sections: [
            {
                title: "Generalization Par Specialization",
                body: "Software engineering ke alag-alag aspects ko fundamentally alag tarah ke reasoning ki zarurat hoti hai. Sab kuch ek single model mein compress karne ke bajaye, hum specialized AI components use karte hain—har ek software reasoning ke specific domains ke liye design kiya gaya—ek engineering team ki tarah saath mein kaam karte hue."
            },
            {
                title: "Collaborative Reasoning",
                body: "Software decisions ko aksar competing concerns ke beech trade-offs ko weigh karne ki zarurat hoti hai. Hamari architecture specialized components ko context share karne, assumptions ko challenge karne, aur structured coordination ke through consensus ki taraf kaam karne mein enable karti hai."
            },
            {
                title: "System-Wide Understanding",
                body: "Software understanding multiple levels par operate karti hai: syntax, semantics, architectural patterns, design intent, aur system-wide properties. Hum layered reasoning use karte hain jahan alag components abstraction ke alag levels par operate karte hain."
            },
            {
                title: "Retrieval Se Beyond Context",
                body: "Disconnected code snippets ko pull karne ke bajaye, hum system relationships ke dynamic representations banane ke liye approaches develop kar rahe hain—sirf code ko capture nahi karte, balki dependencies, invariants, aur architectural boundaries ke web ko bhi."
            }
        ]
    },
    difference: {
        title: "Fark",
        comparison: [
            {
                label: "Current Tools",
                value: "Code generate karein → Syntax ke liye optimize karein → Context limits ke andar kaam karein → General-purpose architectures"
            },
            {
                label: "Hamara Approach",
                value: "Systems samjhein → Architecture ke baare mein reason karein → Dynamic representations banayein → Software engineering ke liye purpose-built"
            }
        ]
    }
}
