import { MissionContent } from '@/app/lib/contentTypes'

export const missionContent: MissionContent = {
    title: "Misión",
    lead: "Construir plataformas de ingeniería de software autónomas mediante colaboración continua humano-IA",
    paragraphs: [
        "Rechazamos la noción de sistemas \"terminados\". La inteligencia, ya sea humana o artificial, debe adaptarse, aprender y refinarse continuamente.",
        "Estamos creando un paradigma donde la nueva época se convierte en realidad tangible. Donde los ingenieros aumentan la intuición con el razonamiento de IA.",
        "Esto significa construir sistemas que comprendan la arquitectura del software, no solo generen fragmentos de código.",
        "Nuestra misión es la democratización de la complejidad: hacer que la ingeniería sofisticada sea accesible.",
    ],
    closingStatement: "العصر الجديد ليس رؤية بعيدة. إنها البنية التحتية التي نبنيها الآن.",
    blueprint: [
        {
            id: "ingestion",
            num: "LAYER_01",
            name: "الركيزة استيعاب المصدر الدلالي",
            badge: "تحليل AST",
            telemetryTitle: "النظام::INGESTION_CONTROLLER",
            logs: [
                "$ yugnex core --parse-directory=./src",
                "مسح دليل قاعدة التعليمات البرمجية: 1420 ملفًا متطابقًا.",
                "إنشاء مراجع شجرة بناء الجملة المجردة (AST)...",
                "رسم خرائط الرسوم البيانية الدعوة والمتجهات العلائقية.",
                "النجاح: تم دمج 12,450 عقدة AST في الرسم البياني للركيزة السياقية.",
                "المستمعون النشطون المسجلون: مراقب نظام الملفات على --poll-interval=500ms",
            ],
        },
        {
            id: "solver",
            num: "LAYER_02",
            name: "الحل الثابت متعدد العوامل",
            badge: "منطق النقاش",
            telemetryTitle: "النظام::AGENT_CONSENSUS_SOLVER",
            logs: [
                "وكلاء yugnex $ --إجماع البداية --معرف الضعف = CVE-2026-SQL",
                "إطلاق غرفة مناقشة مع: [مهندس معماري، مطور، مدقق]",
                "[PO]: تم وضع علامة على الاستيفاء الأولي لاستعلام SQL داخل userController.ts:L24",
                "[المطور]: اقتراح استبدال التعبير العادي للتحقق من صحة الإدخال.",
                "[المهندس المعماري]: مرفوض. استبدال Regex يمكن تجاوزه. يجب إعادة الكتابة إلى استعلام ربط المعلمة.",
                "[المدقق]: التحقق من صحة مسار الاستعلام ذي المعلمات. اكتمال التحليل الثابت.",
                "تم التوصل إلى الإجماع. تم إنشاء الحل: حقن بيان ذو معلمات.",
            ],
        },
        {
            id: "sandbox",
            num: "LAYER_03",
            name: "محرك Sandbox للتحقق المعزول",
            badge: "تنفيذي الاختبار",
            telemetryTitle: "النظام::SANDBOX_VALIDATION_POOL",
            logs: [
                "$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992",
                "ولدت الحاوية. الصورة: عقدة جبال الألب-yugnex:الأحدث",
                "حقن الملفات المعاد تشكيلها في نظام ملفات الحاوية.",
                "جارٍ التحقق من صحة المترجم... النجاح: رمز الخروج 0.",
                "تنفيذ عملية مسح اختبار الوحدة... تم اجتياز 48/48 اختبارًا (240 مللي ثانية).",
                "مراقبة تسربات كومة الذاكرة... مستقرة عند 42.1 ميجابايت من عمليات المسح.",
                "اكتملت اختبارات وضع الحماية. حالة التحقق: تم التحقق من الأمان.",
            ],
        },
        {
            id: "sync",
            num: "LAYER_04",
            name: "المزامن VCS الدائم",
            badge: "الالتزام بالمزامنة",
            telemetryTitle: "النظام::VCS_INTEGRATION_GATE",
            logs: [
                "$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo",
                "إنشاء فرع محلي: yugnex/patch-secure-auth",
                "إجراء التغييرات: تم تعديل ملفين، بدون أي تحذيرات.",
                "التحقق من توقيعات الالتزام... تم التحقق من صحة توقيع GPG.",
                "دفع الفرع إلى المنبع VCS... تم ذلك.",
                "فتح طلب السحب: [عامل الأمان] معلمات استعلام SQL الآمنة.",
                "حالة خط أنابيب VCS: أخضر، في انتظار دمج المراجعين.",
            ],
        },
    ],
    awaitingPipeline: "في انتظار تنفيذ خط الأنابيب...",
    pipelineIntegrationFlow: "تدفق تكامل خطوط الأنابيب",
    triggerDiagnostic: "تشخيص الزناد",
    runningDiagnostic: "جري...",
    layerMetas: [
        "الركائز التأسيسية",
        "التطور الدائم",
        "السياق المعماري",
        "التحقق المعزز",
    ],
    pipelineMap: [
        {
            steps: [
                {
                    label: "تهيئة مخططات تحليل AST",
                },
                {
                    label: "خريطة العقد الدلالية السببية",
                },
                {
                    label: "إنشاء مثيل لأوقات تشغيل وضع الحماية لـ Docker",
                },
            ],
            logs: [
                "ast_parser: قراءة الرموز المميزة لقاعدة التعليمات البرمجية...",
                "Depenency_resolver: مطابقة قيود قائمة المعلمات",
                "sandbox_manager: تجميع تخطيط عقدة الحاوية...",
                "النجاح: طبقة الركيزة التأسيسية نشطة بالكامل.",
            ],
        },
        {
            steps: [
                {
                    label: "يقوم Hook Git بتنفيذ أحداث خط الأنابيب",
                },
                {
                    label: "تجميع الأشجار التفاضلية للمستودع",
                },
                {
                    label: "التحقق من الحدود المعمارية الثابتة",
                },
            ],
            logs: [
                "vcs_monitor: الاستماع إلى دفعات الفرع الرئيسي...",
                "diff_engine: تحليل 14 ملف AST تم تغييره",
                "invariant_runner: اختبار 8 عمليات تحقق من الصحة...",
                "النجاح: اكتملت حلقات المترجم التطورية. بناء متزامن.",
            ],
        },
        {
            steps: [
                {
                    label: "استخراج مسارات الاستيراد متعددة الوحدات",
                },
                {
                    label: "حدود نطاق السياق ديناميكيًا",
                },
                {
                    label: "تنسيق عمليات التحقق من الإجماع متعدد الوكلاء",
                },
            ],
            logs: [
                "context_engine: قراءة اتصالات التبعية بين الوحدات",
                "Agent_consensus: مطابقة عمليات التدقيق الأمني ​​مع تعديلات المطورين",
                "validation_agent: تحليل أشجار المنطق AST...",
                "النجاح: يتم دمج العلاقات السببية في خرائط السياق.",
            ],
        },
        {
            steps: [
                {
                    label: "مراقبة مساحات عمل IDE النشطة",
                },
                {
                    label: "تحليل معلمات المطور في الوقت الحقيقي",
                },
                {
                    label: "إخراج التقارير التشخيصية الهيكلية",
                },
            ],
            logs: [
                "Workspace_daemon: نشط عند تغيير نظام الملفات",
                "lint_check: اختبار المعلمات مقابل واجهات برمجة تطبيقات الإطار",
                "Audit_writer: تجميع ملاحظات سلامة الوثائق...",
                "النجاح: التحقق من الامتثال المعماري. تم تسجيل 0 عيوب.",
            ],
        },
    ],
}
