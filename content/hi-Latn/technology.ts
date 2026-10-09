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
                description: "Codebases mein hazaron files ke across millions lines hote hain. Current tools ise simple retrieval ke through bridge karne ki koshish karte hain, lekin software mein relevance textual similarity nahi hai—yeh causal relationships, dependency chains, aur architectural boundaries ke baare mein hai.",
            },
            {
                title: "Reasoning Gap",
                description: "Syntactically correct code generate karne aur sound engineering decisions lene ke beech ek fundamental difference hai. Jab experienced engineers code modify karte hain, toh woh system-wide architectural implications, dependency impacts, performance trade-offs, aur maintainability par consider karte hain.",
            },
            {
                title: "Validation Gap",
                description: "Software engineering ko correctness chahiye, plausibility nahi. Current tools mein syntax checking se beyond validate karne ke liye mechanisms ki kami hai. Woh yeh reason nahi kar sakte ki kya changes system invariants ko maintain karte hain, architectural boundaries ka respect karte hain, ya security vulnerabilities introduce karte hain.",
            },
        ],
    },
    approach: {
        title: "Software Engineering Ke Liye Banaya Gaya",
        subtitle: "Humne ek alag sawal se shuruat ki: \"AI better code kaise likh sakta hai?\" nahi balki \"AI software systems ko usi tarah kaise samajh sakta hai jaise experienced engineers karte hain?\"",
        sections: [
            {
                title: "Generalization Par Specialization",
                body: "Software engineering ke alag-alag aspects ko fundamentally alag tarah ke reasoning ki zarurat hoti hai. Sab kuch ek single model mein compress karne ke bajaye, hum specialized AI components use karte hain—har ek software reasoning ke specific domains ke liye design kiya gaya—ek engineering team ki tarah saath mein kaam karte hue.",
            },
            {
                title: "sahyogatmak tark",
                body: "Software decisions ko aksar competing concerns ke beech trade-offs ko weigh karne ki zarurat hoti hai. Hamari architecture specialized components ko context share karne, assumptions ko challenge karne, aur structured coordination ke through consensus ki taraf kaam karne mein enable karti hai.",
            },
            {
                title: "sistm-vyapi samajh",
                body: "Software understanding multiple levels par operate karti hai: syntax, semantics, architectural patterns, design intent, aur system-wide properties. Hum layered reasoning use karte hain jahan alag components abstraction ke alag levels par operate karte hain.",
            },
            {
                title: "Retrieval Se Beyond Context",
                body: "Disconnected code snippets ko pull karne ke bajaye, hum system relationships ke dynamic representations banane ke liye approaches develop kar rahe hain—sirf code ko capture nahi karte, balki dependencies, invariants, aur architectural boundaries ke web ko bhi.",
            },
        ],
    },
    difference: {
        title: "Fark",
        comparison: [
            {
                label: "vartmaan upkaran",
                value: "Code generate karein → Syntax ke liye optimize karein → Context limits ke andar kaam karein → General-purpose architectures",
            },
            {
                label: "Hamara Approach",
                value: "Systems samjhein → Architecture ke baare mein reason karein → Dynamic representations banayein → Software engineering ke liye purpose-built",
            },
        ],
    },
    diagnosticsTitle: "interactive seemaen diagnostics",
    approachTitle: "hamara starit drishtikon",
    debateTitle: "swayatt vishleshak sarvasammati",
    debateSubtitle: "suraksha aur refactoring chintaon par bahas karne wale yugnex ke malti-agent sarvasammati panel ko sakriya karne ke liye code lainon par hover karen.",
    limitationLogs: [
        {
            cmd: "yugnex run trace --target=./src",
            logs: [
                "[suchna] repository architecture trace nishpadit kar raha hai...",
                "[chetavni] file anukramanika 512 par sandarbh seema pahunch gai hai.",
                "[vifal] context_overflow: stack aakaar 1,048,576 bytes manak sandarbh window se adhik hai.",
                "[gambhir] parsar ka garbhpat ho gaya. paramparik llm sistm-vyapi sambandhon ko hal karne mein vifal rahata hai.",
                "[YUGNEX samadhan] cozal context sabastrate par punah rooting...",
                "[safalta] karan graph trace purn. 48,091 filein lagatar cash nodes ke saath anukramit.",
            ],
        },
        {
            cmd: "yugnex run refactor --task=\"Update API params in userController.ts\"",
            logs: [
                "[jankari] parameter refacter karya prarambh kiya ja raha hai...",
                "[suchna] vishleshak nirbharta nodes mein pratikatmak tark jaanch chala raha hai...",
                "[chetavni] paramparik sahayak dwara utpann kod: userService.ts parameter suchi bemel (tokan gayab).",
                "[gambhir] sankalan_truti: code sintax manya hai lekin utpadan mein aahvaan ko tod dega.",
                "[YUGNEX samadhan] pratikatmak tark block ne amanya parameter suchi ko intercept kiya. parivartan purvavat kiye ja rahe han...",
                "[safalta] 14 aashrit module mein parameteryukt binding aur sinkronised callers lagu kiye gaye.",
            ],
        },
        {
            cmd: "yugnex run check-invariants --ci",
            logs: [
                "[jankari] ci pipeline satyapan shuru kiya ja raha hai...",
                "[suchna] scanning model/upyogkarta query injection suraksha vactor ke liye...",
                "[chetavni] Direct_interpolation: profyleSearch.ts mein query interpolation ka pata chala.",
                "[vifal] aparivartaniya 02 ka ullanghan: database parameter badhya hona chahiye. nirman sthiti: avaruddh.",
                "[YUGNEX solution] parameteryukt SQL queries ke saath parameters ko swachalit roop se theek karna...",
                "[safalta] aparivartaniya paarit hue. suraksha jaanch satyapit (0 jokhim paye gaye). build jaari kiya gaya.",
            ],
        },
    ],
    approachDiagrams: [
        "[ast parsar agent] =======> [karan solver agent]\n                                   ||\n                                   \\/ \n[sarvasammati agent] <======== [refacter agent]\nsthiti: vishesh sahyogatmak tark onlin.",
        "agent[vastukar]: \"pratyaksh sql interpolation manak ka ullanghan karta hai.\"\nagent[suraksha]: \"bhedyata ki pushti ho gai hai. build ko auto-block kiya ja raha hai.\"\nagent[devalpar]: \"queri ko update kiya ja raha hai. fix inject kiya ja raha hai...\"\nsthiti: sahmati bani. code safaltapurvak patch kiya gaya.",
        "star 5 (vastushilp design patern) - sakriya\nstar 4 (modul anyonyashray) - sakriya\nstar 3 (simentic variable binding) - sakriya\nstar 2 (sar sintax tri) - sakriya\nsthiti: sistm-vyapi starit tark satyapit.",
        "karan sambandh cashd: 184,902\nsakriya sandarbh nods: 12,042\nlukup vilambata: 1.2 ms (llm khoj par 98% spidup)\nsthiti: karan graph puri tarah se samanvyit.",
    ],
    liveTelemetry: "live telemetry graph",
    codeLens: {
        panelTitle: "Active_routes.js - alert nodes ke saath howar/clik lainen",
        insightTitleAutoFix: "yugnex auto-fix anushansa",
        insightTitleDebate: "agent sankalp bahas",
        solutionsDefault: "YugNex swayatt vishleshak lens ko sakriya karne ke liye bai or code ki panktiyon par hover karen.",
        lines: [
            {
            },
            {
                warningTitle: "SQL injection bhedyata",
                warningDesc: "upyogkarta input ko sidhe SQL query string mein interpol karne se hamlavaron ko durbhavnapurn SQL command inject karne aur pramanikaran ko bypass karne ya anadhikrit talikaon ko dekhne ki anumati milti hai.",
                debate: [
                    {
                        role: "vastukar",
                        text: "direct sql query interpolation ka pata chala. yah hamare suraksha maanakon ka ullanghan hai.",
                    },
                    {
                        role: "suraksha lekha parikshak",
                        text: "sthiti mapdandon ke madhyam se durasth shoshan sambhav hai. pratibaddh avaruddh.",
                    },
                    {
                        role: "developer",
                        text: "db.execute(query, [status]) ka upyog karke parameteryukt binding mein query ko phir se likhna.",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
                warningTitle: "n+1 query badha",
                warningDesc: "loop ke andar ek alag database query nishpadit karne se an upyogkartaon ke liye an queries utpann hoti han. isse database connection pool santript hone ke karan bhari vilambta spikes aur server overload hota hai.",
                debate: [
                    {
                        role: "vastukar",
                        text: "sambandhparak database badha. loop ke andar query nishpadit karna avruddh hai.",
                    },
                    {
                        role: "developer",
                        text: "ekal SELECT ... WHERE IN (?) query mein profile laane ke liye upyogkarta id ko ekatrit karna.",
                    },
                    {
                        role: "qa auditor",
                        text: "satyapit. benchmark matrix nishpadit kul query ko an se ghatakar 1 dikhate han.",
                    },
                ],
            },
            {
            },
            {
            },
            {
            },
            {
            },
        ],
    },
}
