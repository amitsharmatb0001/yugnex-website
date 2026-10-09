import { PlatformContent } from '@/app/lib/contentTypes'

export const platformContent: PlatformContent = {
    title: "Platform",
    subtitle: "swayatt software engineering, punarkalpit",
    hero: {
        title: "Hum Kya Bana Rahe Hain",
        description: "Ek AI-powered platform jo code generation se aage jaake complex software systems ko truly samajhta hai, reason karta hai aur collaborate karta hai. Ek aur autocomplete tool nahi. Ek collaborative engineering partner jo architectural understanding, systemic reasoning aur validation aapke development workflow mein laata hai.",
    },
    capabilities: [
        {
            title: "Architecture Ko Samajhta Hai, Sirf Syntax Nahi",
            description: "Jab current tools code ki next line predict karte hain, hamara platform aapke system ke architecture, dependencies aur design patterns ki comprehensive understanding banata hai.",
            points: [
                "Changes ko full system context mein evaluate kiya jata hai",
                "Dependency impacts ko implementation se pehle samjha jata hai",
                "Architectural boundaries automatically respect ki jati hain",
                "Technical debt implications proactively surface kiye jate hain",
            ],
        },
        {
            title: "Implications Ke Baare Mein Reason Karta Hai",
            description: "Har code change ke implications hote hain—performance, security, maintainability, scalability. Hamara platform sirf code generate nahi karta; yeh reason karta hai ki woh code aapke system ke liye kya matlab rakhta hai.",
            points: [
                "System-wide impacts analyze kiye jate hain",
                "Risks aur trade-offs evaluate kiye jate hain",
                "Alternative approaches consider kiye jate hain",
                "Architectural coherence maintain ki jati hai",
            ],
        },
        {
            title: "Multiple Levels Par Validate Karta Hai",
            description: "Syntactically correct code goal nahi hai—architecturally sound, maintainable, secure code hai.",
            points: [
                "Correctness: Kya yeh cheezein todey bina kaam karta hai?",
                "Safety: Kya security boundaries maintain ki jati hain?",
                "Architecture: Kya yeh system design ke saath align hota hai?",
                "Maintainability: Kya engineers isse chhe mahine baad samjhenge?",
            ],
        },
    ],
    useCases: [
        {
            title: "jatil refactoring",
            challenge: "Large codebases mein refactoring risky hai. Aapko har jagah samajhni hoti hai jahan code use hota hai, har dependency jo toot sakti hai...",
            solution: "Complete dependency graph analyze karta hai, sabhi affected components identify karta hai, architectural implications evaluate karta hai, aur changes safely execute karne mein madad karta hai.",
        },
        {
            title: "vastu vishleshan",
            challenge: "Samajhna ki ek bada codebase actually kaise kaam karta hai—uske patterns, uske implicit contracts, uske design decisions—naye team members ke liye hafton lagta hai.",
            solution: "Comprehensive architectural maps banata hai jo system structure, dependency relationships, design patterns aur architectural boundaries dikhate hain.",
        },
        {
            title: "surakshit pranali vikas",
            challenge: "Features add karna ya changes karna bina bugs introduce kiye, architectural principles violate kiye, ya technical debt create kiye.",
            solution: "Proposed changes ko full system context mein evaluate karta hai, implementation se pehle potential issues identify karta hai, architecturally coherent approaches suggest karta hai.",
        },
        {
            title: "virasat code ko samajhna",
            challenge: "Inherited codebases minimal documentation, unclear design decisions aur accumulated technical debt ke saath maintain karna expensive hai.",
            solution: "Architectural intent reconstruct karta hai, design patterns aur anti-patterns identify karta hai, dependency relationships map karta hai, aur technical debt surface karta hai.",
        },
        {
            title: "paimane par code samiksha",
            challenge: "Thorough code review ke liye system-wide implications samajhne ki zarurat hoti hai, lekin reviewers ke paas limited time aur cognitive bandwidth hai.",
            solution: "Deep architectural analysis perform karta hai, dimensions ke across potential issues identify karta hai, aur concerns highlight karta hai jinke liye human judgment chahiye.",
        },
    ],
    targetAudience: [
        {
            role: "engineering teamein",
            painPoints: [
                "ekadhik sevaen",
                "sthapatya pattern",
                "Security/performance requirements",
            ],
            benefit: "Aapko autocomplete se zyada chahiye. Aapko architectural understanding chahiye.",
        },
        {
            role: "varishth engineer aur architect",
            painPoints: [
                "Dependencies trace karna",
                "Architectural violations review karna",
                "Context explain karna",
            ],
            benefit: "System understanding ka cognitive load handle karta hai, aapko high-level decisions par focus karne ke liye free karta hai.",
        },
        {
            role: "Technical Debt Manage Karne Wali Teams",
            painPoints: [
                "agyat dayra",
                "prathmikta",
                "surakshit refactoring",
            ],
            benefit: "Technical debt ko visible banata hai aur aapko systematically address karne mein madad karta hai.",
        },
    ],
    workflow: {
        title: "Yeh Aapke Workflow Ke Saath Kaise Kaam Karta Hai",
        points: [
            {
                title: "Integrated, Intrusive Nahi",
                description: "Aapke existing environment aur codebase mein fit hota hai. Koi migration required nahi.",
            },
            {
                title: "Collaborative, Automated Nahi",
                description: "Platform suggest karta hai, aap decide karte hain. Yeh AI strengths laata hai human judgment complement karne ke liye.",
            },
            {
                title: "Transparent, Black Box Nahi",
                description: "Apni reasoning, identified dependencies, risks aur trade-offs dikhata hai.",
            },
        ],
    },
    comparison: [
        {
            category: "code swatah purna",
            others: "Patterns ke basis par code generate karein. Next line predict karein. Fast likhne mein madad karein.",
            us: "Systems ke baare mein reason karein. Entire architecture samjhein. Better build karne mein madad karein.",
        },
        {
            category: "sthaitik vishleshan",
            others: "Code mein issues dhundein. Syntax errors flag karein. Coding ke baad run karein.",
            us: "Architectural implications samjhein. System-wide impacts ke baare mein reason karein. Develop karte waqt guide karein.",
        },
        {
            category: "code samiksha upkaran",
            others: "Human review facilitate karein. Diffs dikhayein. Changes highlight karein.",
            us: "Architectural analysis perform karein. Implications explain karein. System coherence validate karein.",
        },
    ],
    disclaimer: "⚠️ aar and de simulation aswikaran: yah interface vaicharik visualisation uddeshyon ke liye ek interactive pradarshan hai. yugnex swayatt software engineering pranali vartmaan mein anusandhan evam vikas (r and d) charan mein hai. is samay koi bhi sarvajanik utpadan digital application ya puri tarah se anukulit system sakriya nahin hai.",
    tabs: {
        github: "GitHub pul anurodh",
        ide: "ide karyakshetra ekikaran",
        cicd: "ci/cd aparivartaniya pipeline",
    },
    githubPr: {
        statusOpen: "khula",
        securityScore: "suraksha akhandata score",
        securityBadge: "suraksha lekha parikshak agent",
        securityTime: "2 minute pehle satyapit",
        securityFeedback: "bhedyata samadhan satyapit. hardcoded JWT gupt kunji ko system paryavaran char se chalane ke liye parameteriz kiya gaya hai. ex-frem-options suraksha header ko vishwa star par safaltapurvak inject kiya gaya hai. aparivartaniya check paas ho gaye.",
    },
    ideWorkspace: {
        statusReviewing: "ki samiksha",
        ideTitle: "YugNex: WebSockets mein shrota leak ka samadhan karen",
        ideDesc: "spasht close handler ghoshit karke memory leak ka samadhan kiya gaya.",
        btnAccept: "sujhaav sweekar karen",
        btnDecline: "giravat",
    },
    cicdPipeline: {
        statusPipelinePassed: "pipeline paas ho gai",
        statusSuccess: "sthiti: safalta",
        ciLogs: [
            "[jankari] utpadan runtime containeron ko taiyar karna...",
            "[jankari] bandling module aur scanning compyler pedon ka nirman karte han...",
            "[jankari] aupcharik aparivartaniya sweep nishpadit karna:",
            "✓ aparivartaniya 01: api pramanikaran akhandata (uttirn)",
            "✓ aparivartaniya 02: sansadhan aavantan badhayen (uttirn)",
            "✓ aparivartaniya 03: paripatra nirbharta satyapan (uttirn)",
            "[safalta] system sankalan build satyapit. nishpaadan akhandata 0 memory leak ke saath gujarti hai.",
            "utpadan kshetra mein tainati...",
        ],
    },
    capabilitiesTitle: "interactive platform kshamtaen",
    consoleSandboxRunner: "consol: sandbox_ranar",
    btnExecuting: "criyanvan...",
    btnRun: "daudana",
    capLogs: [
        {
            cmd: "yugnex build --analyze-architecture",
            logs: [
                "[jankari] kodbes nirdeshikaon ko scan kiya ja raha hai...",
                "[jankari] karan antar-modul graph (1,284 nods) ka nirman...",
                "[vcs] design vishishtataon ke viruddh vastushilp seemaon ki janch karna...",
                "[safalta] nirbharta schema banaya gaya. 0 seema ullanghan paya gaya.",
            ],
        },
        {
            cmd: "yugnex diff --check-implications --file=userModel.ts",
            logs: [
                "[suchna] userModel.ts ke liye downstream aayat ka pata lagaya ja raha hai...",
                "[suchna] margon/ aur niyantrakon/ ke andar nirbharta shrinkhalaon ki jaanch ki ja rahi hai...",
                "[chetavni] userService.ts parivartit database schema par nirbhar karta hai. mapdandon ko manya kiya ja raha hai...",
                "[safalta] karan path satyapit. refactoring jokhim mulyankan: 0 mudde.",
            ],
        },
        {
            cmd: "yugnex validate --invariants --level=all",
            logs: [
                "[suchna] bahu-stariy aparivartaniya satyapan jaanch nishpadit karna...",
                "[jankari] star 1: sintax parcing (pas) | star 2: prakar (pas)",
                "[jankari] star 3: suraksha sandboxing (pas) | star 4: memory jaanch (pas)",
                "[safalta] aupcharik satyapan safaltapurvak pura hua. code surakshit.",
            ],
        },
    ],
}
