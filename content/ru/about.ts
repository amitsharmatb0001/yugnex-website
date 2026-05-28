import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "हमारे बारे में",
    company: {
        name: "YugNex Technology OPC Private Limited",
        status: "गहन अनुसंधान एवं विकास चरण में सक्रिय",
        recognition: "DPIIT मान्यता प्राप्त स्टार्टअप (DIPP234393)",
        location: "भीलवाड़ा, राजस्थान, भारत"
    },
    founder: {
        name: "अमित शर्मा",
        bio: "YugNex के संस्थापक और मुख्य दूरदर्शी, स्वायत्त सॉफ्टवेयर इंजीनियरिंग प्रणालियों के निर्माण पर ध्यान केंद्रित करते हैं जो वास्तव में समझती हैं, तर्क करती हैं और सहयोग करती हैं।"
    },
    approach: [
        "हम दीर्घकालिक अनुसंधान और विकास में विश्वास करते हैं",
        "गुणवत्ता गति से अधिक महत्वपूर्ण है",
        "AI को मानवीय निर्णय के साथ जोड़ना",
        "भारत से वैश्विक प्रभाव के लिए निर्माण"
    ],
    credentials: [
        { label: "DPIIT मान्यता प्राप्त", value: "DIPP234393" },
        { label: "स्थापना", value: "2024" },
        { label: "स्थिति", value: "गहन अनुसंधान मोड" }
    ]
}
