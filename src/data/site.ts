export const PLATFORM_URL = 'https://diagnostics.spinesight.health'
export const PLATFORM_LOGIN_URL = 'https://diagnostics.spinesight.health/login'
export const SITE_URL = 'https://spinesight.health'
export const CONTACT_EMAIL = 'hello@spinesight.health'
export const WHATSAPP_NUMBER = '00962799724298'
export const WHATSAPP_URL = 'https://wa.me/962799724298'
export const ADDRESS = '67 Abd Al-Rahim Al-Haj Mohammad St., Amman, Jordan'

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/science', label: 'Science & Research' },
  { to: '/accreditations', label: 'Accreditations' },
  { to: '/blog', label: 'Blog' },
  { to: '/pricing', label: 'Pricing' },
]

export const DISEASE_MODULES = [
  {
    id: '01',
    name: 'Spondylolisthesis',
    modality: 'Lateral Lumbar X-ray',
    description:
      'Automated vertebral localization and segmentation, slip measurement, Meyerding grading, and structured L1–S1 reporting on lateral lumbar X-rays.',
    status: 'Available now',
    available: true,
  },
  {
    id: '02',
    name: 'Scoliosis & Alignment',
    modality: 'AP / Frontal X-ray',
    description:
      'Frontal-plane assessment of spinal curvature and alignment, including Cobb angle measurement and curve classification.',
    status: 'In development',
    available: false,
  },
  {
    id: '03',
    name: 'Vertebral Fracture Detection',
    modality: 'Lateral X-ray',
    description:
      'Flags radiographic signs of vertebral fractures to support fast triage and timely referral decisions.',
    status: 'In development',
    available: false,
  },
  {
    id: '04',
    name: 'Degenerative Changes',
    modality: 'Lateral X-ray',
    description:
      'Assesses degenerative changes in vertebrae, disc spaces, and alignment to support long-term care planning.',
    status: 'In development',
    available: false,
  },
  {
    id: '05',
    name: 'MRI Disc Assessment',
    modality: 'MRI Support Layer',
    description:
      'A complementary layer under development for disc and neural assessment, activated when X-ray findings or symptoms raise suspicion of disc pathology.',
    status: 'In development',
    available: false,
  },
]

export const WORKFLOW_STEPS = [
  {
    step: '1',
    title: 'Case Input',
    description:
      'The physician uploads a lumbar X-ray study together with basic patient data and the clinical presentation.',
  },
  {
    step: '2',
    title: 'SpineSight Analysis',
    description:
      'The AI engine performs measurements, grading, and disease-module indicators — and flags cases that may need MRI or a deeper review.',
  },
  {
    step: '3',
    title: 'Doctor Review',
    description:
      'The treating physician reviews the draft report, validates it, and approves the rehabilitation plan or the referral decision — clinical responsibility remains with the treating institution.',
  },
]

export const VALIDATION_PIPELINE = [
  {
    step: '01',
    title: 'Image Acquisition',
    description: 'Imaging studies are collected for each in-scope spinal condition.',
  },
  {
    step: '02',
    title: 'Expert Medical Labeling',
    description: 'Specialist physicians annotate the images and establish the ground truth.',
  },
  {
    step: '03',
    title: 'AI Engine Training',
    description: 'Models are trained on the condition, its measurements, and its classification.',
  },
  {
    step: '04',
    title: 'Preliminary Results',
    description: 'The software produces a draft report that is reviewed and refined.',
  },
  {
    step: '05',
    title: 'Independent Medical Verification',
    description: 'Multiple physicians review outputs to measure accuracy and consistency.',
  },
  {
    step: '06',
    title: 'Research & Publication',
    description: 'Results are converted into scientific evidence before commercial scale-up.',
  },
]

export const PUBLICATIONS = [
  {
    status: 'Published',
    title: 'Prevalence of Lumbar Spondylolisthesis in Jordanian Low-Back-Pain Patients',
    description:
      'Establishes the clinical need and guides the labeling protocol and dataset design behind the first disease module.',
    productPath: 'Clinical evidence base + labeling protocol',
  },
  {
    status: 'Under review',
    title:
      'Machine Learning-Based Clinical Decision Support for Conservative Rehabilitation Planning in Lumbar Spondylolisthesis',
    description:
      'Turns the rehabilitation planning methodology into a peer-reviewed clinical decision-support framework.',
    productPath: 'Rehab Plan Engine',
  },
  {
    status: 'Under review',
    title:
      'SHAPER-Net: Spatially Heterogeneous Attention and Pyramid Encoding with Recalibrated Decoding Network for Lateral Lumbar Vertebrae Segmentation',
    description:
      'The segmentation core behind automated vertebral measurement on lateral lumbar X-rays.',
    productPath: 'Segmentation core',
  },
]

export const EXTERNAL_STUDIES = [
  {
    authors: 'Lim et al.',
    journal: 'Radiology',
    year: '2022',
    title: 'Improved Productivity Using Deep Learning–assisted Reporting for Lumbar Spine MRI',
    findings:
      'Deep-learning assistance reduced interpretation time from 124–274 seconds to 47–71 seconds per examination (P < 0.001), with interobserver agreement equal to or better than unassisted reads for spinal canal, lateral recess, and neural foraminal stenosis assessment.',
    relevance:
      'Direct evidence that physician-supervised AI can reduce reading time while maintaining or improving agreement between physicians in spine imaging.',
    doi: '10.1148/radiol.220076',
    pmid: '35699577',
  },
  {
    authors: 'Hoppe et al.',
    journal: 'La Radiologia Medica',
    year: '2025',
    title:
      'Automated Spinopelvic Measurements on Radiographs with Artificial Intelligence: A Multi-reader Study',
    findings:
      'No significant difference between AI measurement errors and those of experienced readers on spine radiographs, while manual measurement averaged 139 seconds per case (86–231 s). The study concludes AI can save time and increase reproducibility.',
    relevance:
      'Closest to SpineSight\u2019s model: automated measurement from radiographs that reduces repetitive manual work.',
    doi: '10.1007/s11547-025-01957-5',
    pmid: '39864034',
  },
  {
    authors: 'Lee et al.',
    journal: 'The Spine Journal',
    year: '2025',
    title:
      'Using Deep Learning to Enhance Reporting Efficiency and Accuracy in Degenerative Cervical Spine MRI',
    findings:
      'Across 50 MRI examinations and 10 radiologists of varying experience, model assistance improved interpretation time and inter-reader agreement; in one neural foraminal stenosis assessment, agreement among musculoskeletal radiologists rose from κ=0.60 to κ=0.72 (P < 0.001).',
    relevance:
      'Shows AI can improve consistency and efficiency across experience levels — not only for junior readers.',
    doi: '10.1016/j.spinee.2025.03.009',
    pmid: '40154625',
  },
  {
    authors: 'Compte et al.',
    journal: 'European Spine Journal',
    year: '2023',
    title:
      'Are Current Machine Learning Applications Comparable to Radiologist Classification of Degenerate and Herniated Discs and Modic Change? A Systematic Review and Meta-analysis',
    findings:
      'Across 27 studies on disc degeneration, herniation, bulge, and Modic changes, algorithm performance was comparable to radiologists in the included studies — while performance often dropped in replication or external validation compared with development studies.',
    relevance:
      'Broad support for AI potential — and a clear justification for SpineSight\u2019s emphasis on external validation rather than internal development results alone.',
    doi: '10.1007/s00586-023-07718-0',
    pmid: '37150769',
  },
]

export const RESEARCH_ROADMAP = [
  { area: 'AP / Frontal X-ray', focus: 'Scoliosis and alignment measurement' },
  { area: 'Lateral X-ray', focus: 'Degeneration, fractures, and grading' },
  { area: 'MRI', focus: 'Disc confirmation and symptom correlation' },
  { area: 'Multi-Site Expansion', focus: 'Prospective validation across additional centers and populations' },
]

export const TEAM = [
  {
    name: 'Tasneem N. Alhosanie',
    role: 'Founder & CEO · Clinical AI Lead',
    bio: 'Researcher at Jordan University Hospital specializing in health informatics, with 5+ years of experience and two medical-AI innovations under patent registration.',
  },
  {
    name: 'Dr. Heba Abdel Nabi',
    role: 'Co-Founder · AI Lead',
    bio: 'Assistant Professor of Computer Engineering at Princess Sumaya University for Technology, specializing in AI, medical image analysis, and deep learning.',
  },
  {
    name: 'Dr. Suhaib Al-Khawaldeh',
    role: 'Co-Founder · Growth & Business Development',
    bio: 'PhD in Digital Economy from Aston University, UK. Leads market entry, hospital relationships, and regional expansion across Saudi Arabia and the Gulf.',
  },
]

export const CLINICAL_ADVISORS = [
  {
    name: 'Dr. Tareq Kanaan',
    detail: 'Neurosurgery & Minimally Invasive Spine Surgery — German Board Mainz, University of Jordan',
  },
  {
    name: 'Dr. Ali Al-Otoum',
    detail: 'Spinal Cord Injury & Rehabilitation Medicine — RCP London, European & Jordanian Boards',
  },
  {
    name: 'Dr. Ziad Al-Jawamaa',
    detail: 'Physical Medicine & Rehabilitation — University of Jordan, University of Florence',
  },
  {
    name: 'Dr. Fadi Al-Hadidi',
    detail: 'Adult Orthopedic & Spine Surgery — Spine Fellowship, Heidelberg-affiliated Center, Germany',
  },
]

export const COMPLIANCE_UPDATED = 'August 2026'

export const REGULATORY_ROADMAP = [
  {
    name: 'ISO 13485',
    detail: 'Quality management system for medical devices',
    status: 'Under review',
  },
  {
    name: 'JFDA',
    detail: 'Jordan Food and Drug Administration registration',
    status: 'Under review',
  },
  {
    name: 'SFDA',
    detail: 'Saudi Food and Drug Authority clearance for Gulf expansion',
    status: 'Planned',
  },
  {
    name: 'CE / EU MDR',
    detail: 'European conformity under the Medical Device Regulation',
    status: 'Planned',
  },
  {
    name: 'FDA Readiness',
    detail: 'Technical file and risk management aligned with US requirements',
    status: 'Planned',
  },
]

export const PRICING_TIERS = [
  {
    name: 'Clinic & Rehab',
    audience: 'Medical clinics and rehabilitation centers',
    features: [
      'Rapid case confirmation workflow',
      'AI-assisted X-ray analysis',
      'Rehabilitation plan generation',
      'Lightweight onboarding, no new hardware',
    ],
  },
  {
    name: 'Imaging Center',
    audience: 'Radiology and diagnostic imaging centers',
    features: [
      'Everything in Clinic & Rehab',
      'High-volume case throughput',
      'Structured radiology reporting',
      'PACS / DICOM integration',
    ],
    highlighted: true,
  },
  {
    name: 'Hospital & Network',
    audience: 'Hospitals and multi-site healthcare groups',
    features: [
      'Everything in Imaging Center',
      'Enterprise platform subscription',
      'Multi-department workflows',
      'Dedicated support and integration services',
    ],
  },
]

export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  body: { heading?: string; paragraphs: string[] }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-two-xray-views-matter',
    title: 'Why Two X-Ray Views Matter in Spine Assessment',
    category: 'Clinical Education',
    date: 'July 20, 2026',
    readTime: '5 min read',
    excerpt:
      'Lateral and frontal views reveal entirely different pathologies. Understanding what each view shows is the first step toward an accurate reading.',
    body: [
      {
        paragraphs: [
          'A spine X-ray is not a single picture — it is a set of projections, and each projection carries its own diagnostic value. The information visible in a lateral view is fundamentally different from what appears in an anteroposterior (AP) or frontal view, and confusing the two is one of the most common sources of reading error among non-specialist physicians.',
        ],
      },
      {
        heading: 'The lateral view: slippage, fractures, and degeneration',
        paragraphs: [
          'The lateral projection is used to measure spondylolisthesis and determine its grade, detect vertebral fractures and degenerative changes, and evaluate intervertebral spacing and overall sagittal alignment. It is also the view that raises the earliest signs that may call for an additional MRI assessment.',
          'Because slippage is measured as a percentage of vertebral displacement, small differences in landmark placement can change the assigned grade — which is why automated, reproducible measurement adds real clinical value.',
        ],
      },
      {
        heading: 'The frontal view: scoliosis and lateral deviation',
        paragraphs: [
          'The AP or frontal projection is used to assess scoliosis, lateral deviations, and spinal curvature. Cobb angle measurement and curve classification happen in this plane — measurements that are invisible in the lateral view.',
        ],
      },
      {
        heading: 'Why this matters for decision support',
        paragraphs: [
          'Each view demands different measurements and different disease modules. A decision-support system must therefore be view-aware: it must know which projection it is looking at, apply the correct measurement protocol, and present results in a way that matches how physicians actually read studies. This principle sits at the core of how SpineSight structures its disease modules.',
        ],
      },
    ],
  },
  {
    slug: 'from-scan-to-plan-clinical-decision-support',
    title: 'From Scan to Plan: What Clinical Decision Support Really Means',
    category: 'Product',
    date: 'July 6, 2026',
    readTime: '4 min read',
    excerpt:
      'Decision support is not about replacing the physician. It is about giving every physician a reliable second reader — and turning that reading into an actionable plan.',
    body: [
      {
        paragraphs: [
          'The phrase "clinical decision support" is used loosely in healthcare technology. At its best, it describes software that strengthens the physician\u2019s own judgment: confirming a reading, reducing uncertainty, and making the next clinical step clearer. At its worst, it describes a black box that issues conclusions nobody can verify.',
        ],
      },
      {
        heading: 'A second reader, not a replacement',
        paragraphs: [
          'SpineSight is designed around doctor verification. The AI engine produces measurements, grading, and a draft report — but the physician reviews, validates, and approves every output before it becomes part of the patient record. The system supports the decision; it never makes it alone.',
        ],
      },
      {
        heading: 'From detection to action',
        paragraphs: [
          'A reading that ends at detection still leaves the physician with the hardest question: what now? That is why SpineSight connects image analysis to a structured rehabilitation pathway or a referral recommendation. The output is not only a report — it is a plan the care team can act on immediately.',
        ],
      },
      {
        heading: 'Built for the physicians who need it most',
        paragraphs: [
          'Emergency, family, and rehabilitation physicians read spine studies every day without a radiologist looking over their shoulder. A fast, reliable preliminary reading helps them decide confidently: manage conservatively, refer to orthopedics or neurosurgery, or request an MRI. That is the gap decision support should fill.',
        ],
      },
    ],
  },
  {
    slug: 'spondylolisthesis-grading-primer',
    title: 'Spondylolisthesis Grading: A Primer for Primary Care',
    category: 'Clinical Education',
    date: 'June 18, 2026',
    readTime: '6 min read',
    excerpt:
      'Meyerding grading turns a subtle slippage into a structured decision. Here is what every primary care physician should know about reading it.',
    body: [
      {
        paragraphs: [
          'Spondylolisthesis — the forward displacement of one vertebra over another — is among the most common significant findings on lumbar X-rays in patients with low back pain. Its management depends heavily on grade, which makes accurate measurement more than an academic exercise.',
        ],
      },
      {
        heading: 'The Meyerding system',
        paragraphs: [
          'The Meyerding classification divides slippage into four grades based on the percentage of vertebral body displacement: Grade I (0–25%), Grade II (25–50%), Grade III (50–75%), and Grade IV (75–100%). Low-grade slips are frequently managed conservatively, while higher grades may require surgical consultation.',
        ],
      },
      {
        heading: 'Where readings diverge',
        paragraphs: [
          'Inter-reader variability in slip measurement is well documented. Two physicians looking at the same film can assign different grades — particularly near grade boundaries — which can send a patient down an entirely different care pathway. Standardized, automated measurement reduces this variability and gives non-specialists a dependable reference point.',
        ],
      },
      {
        heading: 'Connecting the grade to the plan',
        paragraphs: [
          'A grade on its own is not a treatment. Effective care links the measurement to symptoms, red flags, and functional status — then translates the result into either a structured conservative rehabilitation program or a timely specialist referral. This connection between measurement and management is exactly what research-backed decision support aims to deliver.',
        ],
      },
    ],
  },
  {
    slug: 'when-xray-raises-suspicion-role-of-mri',
    title: 'When X-Ray Raises Suspicion: The Role of MRI',
    category: 'Clinical Education',
    date: 'May 30, 2026',
    readTime: '4 min read',
    excerpt:
      'X-ray cannot show discs and nerves. Knowing when a study should escalate to MRI is one of the highest-value decisions in spine care.',
    body: [
      {
        paragraphs: [
          'Plain radiography is the workhorse of spinal imaging — fast, affordable, and available nearly everywhere. But it has a fundamental limitation: it shows bone well and soft tissue poorly. Discs, nerves, and the spinal cord remain largely invisible.',
        ],
      },
      {
        heading: 'The cost of a delayed MRI',
        paragraphs: [
          'When imaging is not connected to symptoms, the decision to request an MRI can be delayed — and with it, the correct diagnosis. For patients with disc pathology or neurological involvement, that delay can allow symptoms to progress, in some cases toward damage that cannot be fully reversed.',
        ],
      },
      {
        heading: 'Linking image and symptoms',
        paragraphs: [
          'The right trigger for escalation is rarely the image alone. It is the combination of radiographic signs with the clinical picture: motor weakness, neurogenic claudication, sciatica, or red-flag findings. Decision support that reads both the study and the structured symptom assessment can flag cases that warrant MRI earlier — before the window for conservative management closes.',
        ],
      },
      {
        heading: 'A layered approach',
        paragraphs: [
          'This is why SpineSight treats MRI as a support layer rather than a separate product. When X-ray findings or symptoms raise suspicion of disc involvement, the platform surfaces that recommendation inside the same workflow — helping physicians reach the right diagnosis with fewer detours.',
        ],
      },
    ],
  },
]

export const SERVICE_COMPARISON = [
  {
    label: 'Designed for',
    rapid: 'Physicians needing fast case confirmation',
    integrated: 'Specialists and multidisciplinary teams',
  },
  {
    label: 'Required inputs',
    rapid: 'Core patient data + lumbar X-ray',
    integrated: 'Full clinical assessment + imaging',
  },
  {
    label: 'Output',
    rapid: 'Preliminary structured result with rehab-support output',
    integrated: 'Detailed report, clinical correlation, referral/rehab support, review workflow',
  },
  {
    label: 'Typical setting',
    rapid: 'Clinics, emergency, and rehabilitation centers',
    integrated: 'Hospitals and imaging centers',
  },
  {
    label: 'Integration',
    rapid: 'Web platform — no new hardware',
    integrated: 'PACS/DICOM within institutional deployment',
  },
]

export const PILOT_POINTS = [
  'Defined case volume agreed with your team',
  'Clinical-user onboarding and training',
  'Accuracy and report-turnaround assessment',
  'Physician-acceptance survey',
  'Final deployment report with recommendations',
]

export const BUYER_FAQ = [
  {
    q: 'Which modalities and views are supported?',
    a: 'Lateral lumbar X-ray assessment is available today. Frontal (AP) X-ray modules and the MRI disc-assessment layer are in development on our public roadmap.',
  },
  {
    q: 'How is SpineSight deployed?',
    a: 'As a secure web platform — no new hardware. PACS/DICOM integration is available as part of institutional deployment and is configured to your hospital\u2019s technical environment.',
  },
  {
    q: 'Where is our data hosted, and how is it protected?',
    a: 'SpineSight is designed with encrypted data transfer, role-based access, and configurable de-identification. Hosting region, retention, and access controls are documented for each institutional implementation — request our compliance brief for details.',
  },
  {
    q: 'Who is responsible for the clinical decision?',
    a: 'The treating institution, always. SpineSight generates decision support; every output is designed for review and approval by the treating physician before clinical use.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'A structured pilot typically starts within days, not months. Onboarding covers account setup, clinical-user training, and — for integrated deployments — PACS/DICOM configuration.',
  },
  {
    q: 'How is pricing determined?',
    a: 'By case volume, service depth (Rapid vs Integrated), and integration scope. Most institutions start with a pilot, then receive a quote based on measured impact.',
  },
  {
    q: 'What is your regulatory status?',
    a: 'ISO 13485 and JFDA processes are currently under review, with SFDA, CE/MDR, and FDA readiness sequenced next. Current statuses are published on our Accreditations page.',
  },
]
