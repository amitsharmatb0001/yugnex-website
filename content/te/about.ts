import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "మా గురించి",
    company: {
        name: "YugNex Technology OPC Private Limited",
        status: "ప్రైవేట్ R&D దశ",
        recognition: "DPIIT గుర్తింపు పొందింది (DIPP234393) · 2024లో స్థాపించబడింది",
        location: "Gurugram, Haryana, India నుండి పనిచేస్తోంది"
    },
    founder: {
        name: "Amit Sharma",
        bio: "సాఫ్ట్‌వేర్ ఇంజినీరింగ్‌లో విస్తృత నేపథ్యం కలిగిన వ్యవస్థాపకుడు, AI మరియు నిరంతర సాఫ్ట్‌వేర్ నాణ్యతపై దృష్టి సారించారు."
    },
    approach: [
        "నైపుణ్యం మీద పదార్థం: మేము పూర్తయినప్పుడు మాత్రమే ప్రయోగిస్తాము",
        "గోప్యత-మొదటిది: మీ కోడ్ మీది మరియు మీది మాత్రమే",
        "గ్లోబల్ విజన్‌తో భారతదేశంలో నిర్మించబడింది",
        "మానవ తీర్పు + AI అమలు సహకారంపై దృష్టి పెట్టండి"
    ],
    credentials: [
        { label: "గుర్తింపు", value: "DPIIT (DIPP234393)" },
        { label: "స్థాపన", value: "2024" },
        { label: "స్థితి", value: "పరిశోధన దశ" },
        { label: "ప్రయోగం", value: "2026" }
    ]
}
