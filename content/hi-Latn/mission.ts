import { MissionContent } from '@/app/lib/contentTypes'

export const missionContent: MissionContent = {
    title: "uddeshya",
    lead: "Lagatar human-AI collaboration ke through autonomous software engineering platforms banana",
    paragraphs: [
        "Hum 'complete' systems ki concept ko reject karte hain. Intelligence—human ya artificial—lagatar adapt honi chahiye, seekhni chahiye aur refine honi chahiye. Hamara mission AI systems banana hai jo perpetual evolution ko embody karein: sessions ke beech context maintain karein, past projects se seekhein, aur jin teams ki serve karte hain unke sath grow karein.",
        "Hum ek paradigm bana rahe hain jahan naya yug concrete reality ban jata hai. Jahan engineers AI reasoning ke sath insights enhance karte hain. Jahan AI systems apne outputs ko human context aur values mein ground karte hain.",
        "Iska matlab systems banana hai jo software architecture samajhte hain, sirf code snippets generate nahi karte. Systems jo changes suggest karne se pehle system-wide implications ke baare mein reason karein.",
        "Hamara mission complexity ka democratization hai: cutting-edge engineering ko accessible banana by providing intelligent scaffolding jo har builder ko reach higher, build faster, aur un problems solve karne mein madad kare jo unhone ek baar impossible socha tha.",
    ],
    closingStatement: "naya yug koi door ka drishya nahin hai. yah wah buniyadi dhancha hai jiska nirman hum abhi kar rahe han.",
    blueprint: [
        {
            id: "ingestion",
            num: "LAYER_01",
            name: "simentic srot antargrahan substrate",
            badge: "parcing ast",
            telemetryTitle: "sistm::antargrahan_niyantrak",
            logs: [
                "$ yugnex core --parse-directory=./src",
                "scanning kodbes nirdeshika: 1,420 filein milan huin.",
                "abstract sintax tree (ast) sandarbhon ka nirman...",
                "call graph aur relational vactor ka manchitran.",
                "safalta: 12,450 ast nodes ko context sabastrate graph mein sink kiya gaya.",
                "sakriya shrota panjikrit: --pol-antral=500ms par file system par najar rakhne wala",
            ],
        },
        {
            id: "solver",
            num: "LAYER_02",
            name: "malti-agent inveriant solver",
            badge: "vad-vivad tark",
            telemetryTitle: "sistm::AGENT_CONSENSUS_SOLVER",
            logs: [
                "$ yugnex-agent --praarambh-aam sahmati --bhedyata-id=cve-2026-squl",
                "inke saath vad-vivad kaksh ka shubharambh: [vastukar, devalpar, lekha parikshak]",
                "[po]: userController.ts:L24 ke andar kacchi SQL query interpolation ko chinhit kiya gaya",
                "[devalpar]: input satyapan ke liye regex pratisthapan ka prastav.",
                "[vastukar]: aswikrit. regex pratisthapan bypass karne yogya hai. parameter binding query ko phir se likhna hoga.",
                "[auditer]: parameteryukt query path ko manya kiya ja raha hai. aparivartaniya vishleshan pura hua.",
                "sahmati bani. samadhan utpann: parameteryukt kathan injection.",
            ],
        },
        {
            id: "sandbox",
            num: "LAYER_03",
            name: "prithak satyapan sandbox engine",
            badge: "parikshan karyakari",
            telemetryTitle: "sistm::sandbox_validation_pool",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "container paida hua. chhavi: nod-alpin-yugnex: navintam",
                "container file system mein refacterd filon ko inject karna.",
                "compyler satyapan chal raha hai... safalta: nikas code 0.",
                "nishpaadan ikai parikshan sweep... 48/48 parikshan uttirn (240ms).",
                "memory heep leak ki nigrani... 42.1 mb sweep par sthir.",
                "sandbox parikshan purn. satyapan sthiti: satyapit surakshit.",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "satat vcs sinkronizar",
            badge: "samanvayan pratibaddh karen",
            telemetryTitle: "sistm::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "sthaniya shakha banana: yugnex/patch-secur-auth",
                "parivartan kiye ja rahe han: 2 filein sanshodhit, koi chetavniya nahin.",
                "pratibaddh hastaksharon ka satyapan kiya ja raha hai... GPG hastakshar satyapit.",
                "shakha ko upstream vcs mein dhakelna... ho gaya.",
                "opening pul anurodh: [suraksha refacter] surakshit sql query parameterisation.",
                "vcs pipeline sthiti: hara, samikshak vilay ki pratiksha men.",
            ],
        },
    ],
    awaitingPipeline: "pipeline nishpaadan ki pratiksha men...",
    pipelineIntegrationFlow: "pipeline ekikaran pravah",
    triggerDiagnostic: "trigger diagnostic",
    runningDiagnostic: "daudna...",
    layerMetas: [
        "moolbhoot sabastrats",
        "satat vikas",
        "vastushilp sandarbh",
        "sanvardhit satyapan",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "ast parcing schema prarambh karen",
                },
                {
                    label: "manchitra karan arthpurn nodes",
                },
                {
                    label: "docker sandbox runtime ko tvarit karen",
                },
            ],
            logs: [
                "ast_parser: kodbes token padh raha hai...",
                "nirbharta_resolvar: milan parameter suchi badhayen",
                "sandbox_manager: container node layout sankalit kiya ja raha hai...",
                "safalta: moolbhoot substrate parat puri tarah se sakriya.",
            ],
        },
        {
            steps: [
                {
                    label: "hook git pipeline event pratibaddh karta hai",
                },
                {
                    label: "repository vibhedk vriksh sankalit karen",
                },
                {
                    label: "vastushilp aparivartaniya seemaen satyapit karen",
                },
            ],
            logs: [
                "vcs_monitor: mukhya shakha ke push ko sunna...",
                "diff_engine: 14 parivartit AST filon ko pars karna",
                "invariant_runner: 8 satyapan jaanchon ka parikshan...",
                "safalta: vikasvadi compyler loop pura hua. samanvit nirman.",
            ],
        },
        {
            steps: [
                {
                    label: "malti-modul aayat path nikalen",
                },
                {
                    label: "scale sandarbh dayra gatisheel roop se seemit karta hai",
                },
                {
                    label: "bahu-agent sarvasammati jaanch ka samanvay karen",
                },
            ],
            logs: [
                "context_engine: antar-modul nirbharta connection padhna",
                "agent_sahmati: developer sampadan ke saath suraksha audit ka milan",
                "satyapan_agent: ast tark vrikshon ka vishleshan...",
                "safalta: karan sambandhon ko sandarbh maanchitron mein samekit kiya gaya.",
            ],
        },
        {
            steps: [
                {
                    label: "sakriya ide karyasthanon ki nigrani karen",
                },
                {
                    label: "vastavik samay developer mapdandon ka vishleshan karen",
                },
                {
                    label: "output sanrachnatmak nidaan report",
                },
            ],
            logs: [
                "varkaspace_deman: file system parivartanon par sakriya",
                "lint_check: framework api ke viruddh mapdandon ka parikshan",
                "audit_riter: dastavejikaran akhandata notes sankalit karna...",
                "safalta: vastushilp anupalan satyapit. 0 dosh log kiye gaye.",
            ],
        },
    ],
}
