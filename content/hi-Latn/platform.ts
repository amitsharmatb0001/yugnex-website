import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "Platform",
    subtitle: "Autonomous Software Engineering, Reimagined",
    hero: {
        title: "Hum Kya Bana Rahe Hain",
        description: "Ek AI-powered platform jo code generation se aage jaake complex software systems ko truly samajhta hai, reason karta hai aur collaborate karta hai. Ek aur autocomplete tool nahi. Ek collaborative engineering partner jo architectural understanding, systemic reasoning aur validation aapke development workflow mein laata hai."
    },
    capabilities: [
        {
            title: "Architecture Ko Samajhta Hai, Sirf Syntax Nahi",
            description: "Jab current tools code ki next line predict karte hain, hamara platform aapke system ke architecture, dependencies aur design patterns ki comprehensive understanding banata hai.",
            points: [
                "Changes ko full system context mein evaluate kiya jata hai",
                "Dependency impacts ko implementation se pehle samjha jata hai",
                "Architectural boundaries automatically respect ki jati hain",
                "Technical debt implications proactively surface kiye jate hain"
            ]
        },
        {
            title: "Implications Ke Baare Mein Reason Karta Hai",
            description: "Har code change ke implications hote hain—performance, security, maintainability, scalability. Hamara platform sirf code generate nahi karta; yeh reason karta hai ki woh code aapke system ke liye kya matlab rakhta hai.",
            points: [
                "System-wide impacts analyze kiye jate hain",
                "Risks aur trade-offs evaluate kiye jate hain",
                "Alternative approaches consider kiye jate hain",
                "Architectural coherence maintain ki jati hai"
            ]
        },
        {
            title: "Multiple Levels Par Validate Karta Hai",
            description: "Syntactically correct code goal nahi hai—architecturally sound, maintainable, secure code hai.",
            points: [
                "Correctness: Kya yeh cheezein todey bina kaam karta hai?",
                "Safety: Kya security boundaries maintain ki jati hain?",
                "Architecture: Kya yeh system design ke saath align hota hai?",
                "Maintainability: Kya engineers isse chhe mahine baad samjhenge?"
            ]
        }
    ],
    useCases: [
        {
            title: "Complex Refactoring",
            challenge: "Large codebases mein refactoring risky hai. Aapko har jagah samajhni hoti hai jahan code use hota hai, har dependency jo toot sakti hai...",
            solution: "Complete dependency graph analyze karta hai, sabhi affected components identify karta hai, architectural implications evaluate karta hai, aur changes safely execute karne mein madad karta hai."
        },
        {
            title: "Architectural Analysis",
            challenge: "Samajhna ki ek bada codebase actually kaise kaam karta hai—uske patterns, uske implicit contracts, uske design decisions—naye team members ke liye hafton lagta hai.",
            solution: "Comprehensive architectural maps banata hai jo system structure, dependency relationships, design patterns aur architectural boundaries dikhate hain."
        },
        {
            title: "Safe System Evolution",
            challenge: "Features add karna ya changes karna bina bugs introduce kiye, architectural principles violate kiye, ya technical debt create kiye.",
            solution: "Proposed changes ko full system context mein evaluate karta hai, implementation se pehle potential issues identify karta hai, architecturally coherent approaches suggest karta hai."
        },
        {
            title: "Legacy Code Understanding",
            challenge: "Inherited codebases minimal documentation, unclear design decisions aur accumulated technical debt ke saath maintain karna expensive hai.",
            solution: "Architectural intent reconstruct karta hai, design patterns aur anti-patterns identify karta hai, dependency relationships map karta hai, aur technical debt surface karta hai."
        },
        {
            title: "Code Review at Scale",
            challenge: "Thorough code review ke liye system-wide implications samajhne ki zarurat hoti hai, lekin reviewers ke paas limited time aur cognitive bandwidth hai.",
            solution: "Deep architectural analysis perform karta hai, dimensions ke across potential issues identify karta hai, aur concerns highlight karta hai jinke liye human judgment chahiye."
        }
    ],
    targetAudience: [
        {
            role: "Engineering Teams",
            painPoints: ["Multiple services", "Architectural patterns", "Security/performance requirements"],
            benefit: "Aapko autocomplete se zyada chahiye. Aapko architectural understanding chahiye."
        },
        {
            role: "Senior Engineers & Architects",
            painPoints: ["Dependencies trace karna", "Architectural violations review karna", "Context explain karna"],
            benefit: "System understanding ka cognitive load handle karta hai, aapko high-level decisions par focus karne ke liye free karta hai."
        },
        {
            role: "Technical Debt Manage Karne Wali Teams",
            painPoints: ["Unknown scope", "Prioritization", "Safe refactoring"],
            benefit: "Technical debt ko visible banata hai aur aapko systematically address karne mein madad karta hai."
        }
    ],
    workflow: {
        title: "Yeh Aapke Workflow Ke Saath Kaise Kaam Karta Hai",
        points: [
            {
                title: "Integrated, Intrusive Nahi",
                description: "Aapke existing environment aur codebase mein fit hota hai. Koi migration required nahi."
            },
            {
                title: "Collaborative, Automated Nahi",
                description: "Platform suggest karta hai, aap decide karte hain. Yeh AI strengths laata hai human judgment complement karne ke liye."
            },
            {
                title: "Transparent, Black Box Nahi",
                description: "Apni reasoning, identified dependencies, risks aur trade-offs dikhata hai."
            }
        ]
    },
    comparison: [
        {
            category: "Code Autocomplete",
            others: "Patterns ke basis par code generate karein. Next line predict karein. Fast likhne mein madad karein.",
            us: "Systems ke baare mein reason karein. Entire architecture samjhein. Better build karne mein madad karein."
        },
        {
            category: "Static Analysis",
            others: "Code mein issues dhundein. Syntax errors flag karein. Coding ke baad run karein.",
            us: "Architectural implications samjhein. System-wide impacts ke baare mein reason karein. Develop karte waqt guide karein."
        },
        {
            category: "Code Review Tools",
            others: "Human review facilitate karein. Diffs dikhayein. Changes highlight karein.",
            us: "Architectural analysis perform karein. Implications explain karein. System coherence validate karein."
        }
    ]
}
