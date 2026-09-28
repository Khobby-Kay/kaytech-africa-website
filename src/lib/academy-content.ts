import { academyCourseFeesGhs, academyProofLine, studioProofLine } from "@/lib/trust-metrics";
import { academyGraduateTestimonials } from "@/lib/testimonials";

/** On-site application (primary). Legacy Google Form kept as optional backup. */
export const academyApplicationForm = {
  href: "/academy#apply",
  backupUrl: "https://forms.gle/EaJ4nwLX28AkPDkQ8",
  label: "Apply now",
  note: "Only 10 admissions per cohort. selected applicants receive a call from our admissions team.",
} as const;

export const academyApplyCourseOptions = [
  "Web Development 101",
  "Digital Marketing 101",
  "Advanced Web Development & Digital Marketing",
  "SaaS Development",
  "Not sure. help me choose",
] as const;

export const academyHubCohorts = [
  {
    course: "Web Development 101",
    label: "Oct 2026 · Online",
    start: "6 Oct 2026",
    href: "/academy/web-development-course",
  },
  {
    course: "Web Development 101",
    label: "Nov 2026 · On-site Accra",
    start: "3 Nov 2026",
    href: "/academy/web-development-course",
  },
  {
    course: "Digital Marketing 101",
    label: "Oct 2026 · Hybrid",
    start: "14 Oct 2026",
    href: "/academy/digital-marketing-course",
  },
] as const;

export const academyHubOutcomes = [
  {
    title: "Portfolio projects",
    body: "Graduate with 2–3 shipped sites or marketing capstones. see /academy/graduate-outcomes.",
    href: "/academy/graduate-outcomes",
  },
  {
    title: "Freelance & job readiness",
    body: "Pricing clinics, CV reviews, and studio-style feedback. not guaranteed placement.",
    href: "/blog/how-to-become-web-developer-ghana-2026",
  },
  {
    title: "Studio connection",
    body: `${studioProofLine} Curriculum updates from live client patterns.`,
    href: "/portfolio",
  },
] as const;

export const academyPageMeta = {
  title: "KayTech Academy | Web Design & Development Training from GHS 2,200 | Ghana",
  description:
    "KayTech Academy. Ghana's practical web design, development, digital marketing, and SaaS school in Accra. Job-ready training in 3 months. Online and on-site. Apply now.",
  heroSlides: [
    {
      title:
        "Start a high-paying career in 3 months. master web development & digital marketing in Ghana!",
      cta: "View all courses",
      href: "#courses",
    },
    {
      title:
        "Unlock your potential. build websites, create SaaS products, and dominate digital marketing!",
      cta: "View all courses",
      href: "#courses",
    },
  ],
} as const;

export const academyStats = [
  { value: "2020", suffix: "", label: "Studio founded · curriculum tied to live work" },
  { value: "6", suffix: "+", label: "Specialized learning tracks" },
  { value: "10", suffix: "", label: "Students per cohort (max)" },
  { value: "100", suffix: "%", label: "Portfolio-first, hands-on training" },
] as const;

export const academyPromise = {
  headline: "Become a job-ready web developer or digital marketer in just 3 months!",
  bullets: [
    "No tech experience? No problem. start from scratch and become job-ready.",
    "Build real-world projects and graduate with a portfolio that sets you apart.",
    "Choose your path: freelance, launch your own agency, or land a high-paying job.",
  ],
  urgency: "Applications open for the next cohort. limited seats available.",
  ctaLabel: "Apply now",
} as const;

export const academyWhyChoose = [
  {
    title: "Trusted by builders across Ghana",
    body: `KayTech Academy is an extension of KayTech Africa. ${studioProofLine}. You learn what we actually deliver for clients.`,
  },
  {
    title: "Outcomes that matter",
    body: "Graduate with a professional portfolio, client-ready skills, and career coaching. not theory-heavy slides. Our focus is jobs, freelance income, and real projects.",
  },
  {
    title: "Industry-leading instructors",
    body: "Learn from working practitioners. web developers, marketers, and product builders who earn from the same skills they teach you.",
  },
] as const;

export const academyDelivery = {
  headline: "Online and on-site. learn your way",
  online: {
    title: "Flexible online classes",
    body: "Study from home with live sessions, recorded lessons, and access to learning materials. Ideal for busy schedules or students outside Accra.",
  },
  onsite: {
    title: "Interactive on-site training",
    body: "Hands-on learning in a collaborative classroom with real-time support from instructors and peers. Perfect for immersive learning and networking in Accra.",
  },
  note: "Whether online or on-site, every cohort delivers the same industry-relevant skills, expert guidance, and practical projects.",
} as const;

export const academySuccessStory = {
  quote:
    "Akosua joined KayTech Academy with no prior tech experience while looking for a side income. In three months she mastered web development fundamentals, built client websites, and launched her freelance career. She now earns consistently from web design projects while growing her own small agency in Kumasi.",
  label: "Success stories from KayTech Academy",
} as const;

export const academyTransform = {
  headline: "Transform your future with KayTech Academy",
  body: "We are not just teaching skills. we are building careers. Our courses in Web Development, Digital Marketing, Advanced Web & Marketing, and SaaS Development equip you with in-demand skills employers and clients across Ghana and beyond are looking for.",
  subhead: "Alumni-ready skills. Courses built for immediate, actionable results.",
} as const;

export const academyFeaturedCourses = [
  {
    slug: "web-development-101",
    title: "Web Development (101)",
    excerpt:
      "Your gateway to web development. No experience? No problem. Learn to build and host functional, mobile-friendly websites. from layout to launch.",
    href: "/academy/web-development-course",
    feeLabel: `GHS ${academyCourseFeesGhs["web-dev-101"].from.toLocaleString("en-GH")} · ${academyCourseFeesGhs["web-dev-101"].duration}`,
  },
  {
    slug: "digital-marketing-101",
    title: "Digital Marketing (101)",
    excerpt:
      "Break into digital marketing with SEO, social media, content, and paid ads fundamentals. built for Ghanaian businesses and freelancers.",
    href: "/academy/digital-marketing-course",
    feeLabel: `GHS ${academyCourseFeesGhs["digital-marketing-101"].from.toLocaleString("en-GH")} · ${academyCourseFeesGhs["digital-marketing-101"].duration}`,
  },
  {
    slug: "advanced-web-digital-marketing",
    title: "Advanced Web Development & Digital Marketing",
    excerpt:
      "Take your skills further with advanced website builds, conversion optimization, and growth marketing. job-ready or agency-ready.",
    href: "#pricing",
    feeLabel: `GHS ${academyCourseFeesGhs["advanced-web-marketing"].from.toLocaleString("en-GH")} · ${academyCourseFeesGhs["advanced-web-marketing"].duration}`,
  },
  {
    slug: "saas-development",
    title: "SaaS (Software As A Service)",
    excerpt:
      "Learn to develop scalable cloud-based applications. dashboards, subscriptions, and products that solve real business problems.",
    href: "#pricing",
    feeLabel: `GHS ${academyCourseFeesGhs["saas-development"].from.toLocaleString("en-GH")} · ${academyCourseFeesGhs["saas-development"].duration}`,
  },
] as const;

export const academyWelcome = {
  headline: "Job-ready training within 3 months of graduating",
  quote:
    "Picture yourself leading Ghana's digital transformation. Imagine clients or employers reaching out because of the in-demand skills you have mastered. This is not just a course. it is your gateway to freedom, success, and impact.",
  highlights: [
    "No prior experience required. start from scratch and become job-ready.",
    "Learn from industry experts with hands-on guidance every step of the way.",
    "Build a portfolio that impresses employers and freelance clients.",
  ],
  stats: [
    {
      title: "Studio-backed learning",
      body: `${academyProofLine}. Curriculum is updated from live studio projects. including published case studies on the KayTech site.`,
    },
    {
      title: "No prior experience required",
      body: "Complete beginners welcome. Our facilitators break complex topics into practical steps until you can build and ship confidently.",
    },
  ],
} as const;

export const academyGains = [
  {
    title: "Practical, in-demand skills",
    body: "Build websites, run digital campaigns, and create SaaS-style products. skills you can monetize immediately.",
  },
  {
    title: "Job placement support",
    body: "Career coaching, portfolio reviews, and KayTech's client network help graduates land freelance work or employment faster.",
  },
] as const;

export const academyPricingPlans = [
  {
    id: "web-dev-101",
    title: "Web Development 101",
    priceLabel: `GHS ${academyCourseFeesGhs["web-dev-101"].from.toLocaleString("en-GH")} cohort fee`,
    priceNote: `${academyCourseFeesGhs["web-dev-101"].duration} · scholarship seats when listed on application`,
    description:
      "Perfect for beginners breaking into web development. Learn to create and host functional, visually appealing websites. mobile-first and client-ready.",
    features: [
      "Online or on-site class",
      "Hands-on learning",
      "Expert-led training",
      "Job-ready skills",
      "Course materials and tools",
      "Lifetime access to resources",
      "Free access to LMS",
      "Certifications",
      "Community support",
      "24/7 support",
      "Career services",
      "Personalized mentorship",
    ],
    featured: false,
    courseHref: "/academy/web-development-course",
  },
  {
    id: "digital-marketing-101",
    title: "Digital Marketing 101",
    priceLabel: `GHS ${academyCourseFeesGhs["digital-marketing-101"].from.toLocaleString("en-GH")} cohort fee`,
    priceNote: `${academyCourseFeesGhs["digital-marketing-101"].duration} · online or on-site`,
    description:
      "SEO, social, content, and paid ads for Ghanaian SMEs. graduate with a strategy capstone and reporting templates.",
    features: [
      "Online or on-site class",
      "Hands-on campaigns (simulated + optional live)",
      "Expert-led training",
      "Job-ready skills",
      "Course materials",
      "Career services",
      "Certifications",
      "Community support",
    ],
    featured: false,
    courseHref: "/academy/digital-marketing-course",
  },
  {
    id: "advanced-web-marketing",
    title: "Advanced Web Development & Digital Marketing",
    priceLabel: `GHS ${academyCourseFeesGhs["advanced-web-marketing"].from.toLocaleString("en-GH")} cohort fee`,
    priceNote: `${academyCourseFeesGhs["advanced-web-marketing"].duration} · payment plans on approval`,
    description:
      "Master advanced website builds and digital marketing strategy. From conversion-focused design to SEO and paid campaigns. built for freelancers and job seekers.",
    features: [
      "Online or on-site class",
      "Hands-on learning",
      "Expert-led training",
      "Course materials",
      "Job-ready skills",
      "Lifetime access",
      "Certifications",
      "24/7 support",
      "Personalized mentorship",
      "Career services",
      "Free access to LMS",
    ],
    featured: true,
    courseHref: "#apply",
  },
  {
    id: "saas-development",
    title: "SaaS Development (Software As A Service)",
    priceLabel: `GHS ${academyCourseFeesGhs["saas-development"].from.toLocaleString("en-GH")} cohort fee`,
    priceNote: `${academyCourseFeesGhs["saas-development"].duration} · builder & entrepreneur track`,
    description:
      "Learn to develop cloud-based applications for education, healthcare, retail, and more. from school management tools to CRM-style platforms.",
    features: [
      "Online or on-site class",
      "Hands-on learning",
      "Expert-led training",
      "Course materials",
      "Job-ready skills",
      "Lifetime access",
      "Certifications",
      "24/7 support",
      "Personalized mentorship",
      "Career services",
      "Free access to LMS",
    ],
    featured: false,
    courseHref: "#apply",
  },
] as const;

export const academyTestimonials = academyGraduateTestimonials;

export const academyFaqs = [
  {
    question: "Do I need prior experience to join KayTech Academy?",
    answer:
      "No. Web Development 101 and Digital Marketing 101 are designed for complete beginners. Advanced and SaaS tracks may recommend finishing fundamentals first. we guide you to the right cohort during application.",
  },
  {
    question: "Are classes online, on-site, or both?",
    answer:
      "Both. Choose flexible online cohorts with live sessions and recordings, or join on-site training in Accra for hands-on, in-person learning. Skills and outcomes are the same either way.",
  },
  {
    question: "How long does it take to become job-ready?",
    answer:
      "Most foundational tracks run 8–12 weeks with intensive project work. Graduates leave with portfolio pieces, practical skills, and career support. many start freelancing or applying for roles within the first three months after completion.",
  },
  {
    question: "How do I apply?",
    answer:
      "Use the on-site application form at /academy#apply (or on each course page). We admit only 10 students per cohort; selected applicants receive a call from admissions. WhatsApp or call 024 840 8154 for questions before applying.",
  },
  {
    question: "What are the course fees in GHS?",
    answer: `Web Development 101 is GHS ${academyCourseFeesGhs["web-dev-101"].from.toLocaleString("en-GH")}; Digital Marketing 101 is GHS ${academyCourseFeesGhs["digital-marketing-101"].from.toLocaleString("en-GH")}. Advanced and SaaS tracks are listed on /academy#pricing. See /blog/web-development-course-fees-ghana-2026 for a neutral comparison with other providers.`,
  },
  {
    question: "Are scholarship seats available?",
    answer:
      "Yes. a limited number of partial scholarship seats open each cohort. Details, payment plans, and free alternatives are on /academy/scholarships-payment-plans.",
  },
  {
    question: "Can I study online if I am not in Accra?",
    answer:
      "Yes. Live online cohorts include recordings and the same syllabus. Read /academy/online-courses for how online delivery works.",
  },
] as const;
