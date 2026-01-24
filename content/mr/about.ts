import { AboutContent } from '@/app/lib/contentTypes'

export const aboutContent: AboutContent = {
    title: "आमच्याबद्दल",
    company: {
        name: "YugNex Technology OPC Private Limited",
        status: "खाजगी R&D टप्पा",
        recognition: "DPIIT मान्यताप्राप्त (DIPP234393) · 2024 मध्ये स्थापित",
        location: "Gurugram, Haryana, India येथून कार्यरत"
    },
    founder: {
        name: "Amit Sharma",
        bio: "सॉफ्टवेअर अभियांत्रिकीमध्ये विस्तृत पार्श्वभूमी असलेले संस्थापक, AI आणि सतत सॉफ्टवेअर गुणवत्तेवर लक्ष केंद्रित."
    },
    approach: [
        "दक्षतेवर पदार्थ: आम्ही तयार असताना लाँच करतो",
        "गोपनीयता-प्रथम: तुमचा कोड तुमचा आणि फक्त तुमचा",
        "जागतिक दृष्टिकोनासह भारतात निर्मित",
        "मानवी निर्णय + AI अंमलबजावणी सहकार्यावर लक्ष केंद्रित करा"
    ],
    credentials: [
        { label: "मान्यता", value: "DPIIT (DIPP234393)" },
        { label: "स्थापित", value: "2024" },
        { label: "स्थिती", value: "संशोधन टप्पा" },
        { label: "लाँच", value: "2026" }
    ]
}
