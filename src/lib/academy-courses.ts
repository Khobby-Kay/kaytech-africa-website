import { academyCourseFeesGhs } from "@/lib/trust-metrics";
import { contentImages } from "@/lib/image-seo";

export type AcademyCourseKey =
  | "web-dev-101"
  | "digital-marketing-101"
  | "advanced-web-marketing"
  | "saas-development";

export type AcademyCourseDefinition = {
  key: AcademyCourseKey;
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  duration: string;
  feeGhs: number;
  delivery: ("online" | "onsite")[];
  level: string;
  quickAnswer: string;
  overview: string[];
  outcomes: string[];
  syllabus: { module: string; topics: string[] }[];
  schedule: { label: string; detail: string }[];
  cohorts: { label: string; start: string; applyBy: string; status: "open" | "waitlist" }[];
  faqs: { question: string; answer: string }[];
  image: { src: string; alt: string };
  applyLabel: string;
};

const webDevFee = academyCourseFeesGhs["web-dev-101"];
const dmFee = academyCourseFeesGhs["digital-marketing-101"];

export const webDevelopmentCourse: AcademyCourseDefinition = {
  key: "web-dev-101",
  slug: "web-development-course",
  path: "/academy/web-development-course",
  title: "Web Development 101",
  shortTitle: "Web Development 101",
  metaTitle: `Web Development Course in Ghana (2026) | GHS ${webDevFee.from.toLocaleString("en-GH")} | KayTech Academy`,
  metaDescription: `Web Development 101 at KayTech Academy: ${webDevFee.duration}, Accra or online, GHS ${webDevFee.from.toLocaleString("en-GH")}. Portfolio projects and studio-style reviews.`,
  duration: webDevFee.duration,
  feeGhs: webDevFee.from,
  delivery: ["online", "onsite"],
  level: "Beginner friendly",
  quickAnswer: `Web Development 101 runs ${webDevFee.duration} live in Accra or online. Cohort fee GHS ${webDevFee.from.toLocaleString("en-GH")}. Payment plans and limited scholarship seats. You ship portfolio sites with instructor code review.`,
  overview: [
    "HTML, CSS, JavaScript, and layouts matched to how KayTech builds client sites: mobile-first, fast on everyday data, WhatsApp CTAs included.",
    "Each cohort is capped at 10 students so instructors can review your code, not just lecture. Capstone: a multi-page business site you can show employers or freelance clients.",
  ],
  outcomes: [
    "Build and deploy responsive brochure and service websites",
    "Use Git basics, hosting, and domain connection confidently",
    "Integrate contact forms, WhatsApp CTAs, and simple SEO structure",
    "Present a portfolio with 2–3 shipped projects",
    "Price your first freelance website using KayTech studio benchmarks",
  ],
  syllabus: [
    {
      module: "Weeks 1–2 · Web foundations",
      topics: ["How the web works", "HTML semantics", "CSS layout (Flexbox & Grid)", "Mobile-first design"],
    },
    {
      module: "Weeks 3–4 · JavaScript essentials",
      topics: ["DOM & events", "Forms & validation", "Fetch & APIs intro", "Debugging in the browser"],
    },
    {
      module: "Weeks 5–6 · Modern front-end",
      topics: ["Component thinking", "Intro to React/Next patterns", "Performance & accessibility basics", "Image & font best practices"],
    },
    {
      module: "Weeks 7–8 · Ship like a studio",
      topics: ["Client-style briefs", "Git workflow", "Deploy to production", "Portfolio presentation & freelance pricing clinic"],
    },
    {
      module: "Weeks 9–12 · Capstone (extended track)",
      topics: ["E-commerce or booking-style capstone option", "MoMo/Paystack awareness (integration overview)", "Career coaching & KayTech network intros where fit"],
    },
  ],
  schedule: [
    { label: "Live sessions", detail: "Twice weekly · 2 hours (evening Accra time) + optional Saturday lab" },
    { label: "Online cohort", detail: "Same schedule via Google Meet; recordings within 24 hours" },
    { label: "On-site cohort", detail: "Accra studio classroom. address shared after admission" },
    { label: "Office hours", detail: "WhatsApp group with instructors Mon–Fri for blockers" },
  ],
  cohorts: [
    {
      label: "October 2026 · Online",
      start: "6 Oct 2026",
      applyBy: "4 Oct 2026",
      status: "open",
    },
    {
      label: "November 2026 · On-site Accra",
      start: "3 Nov 2026",
      applyBy: "20 Oct 2026",
      status: "open",
    },
    {
      label: "January 2027 · Online",
      start: "12 Jan 2027",
      applyBy: "30 Dec 2026",
      status: "waitlist",
    },
  ],
  faqs: [
    {
      question: "Do I need a laptop?",
      answer: "Yes. You need a laptop with VS Code (Windows or Mac). A phone helps test layouts but is not enough on its own.",
    },
    {
      question: "Is this the same as a computer science degree?",
      answer: "No. This is vocational, project-based training for Ghana’s job market, not academic CS theory.",
    },
    {
      question: "Can I pay in instalments?",
      answer: "Yes. Approved applicants can split the fee across 2–3 payments. See /academy/scholarships-payment-plans.",
    },
  ],
  image: contentImages.courseDev,
  applyLabel: "Web Development 101",
};

export const digitalMarketingCourse: AcademyCourseDefinition = {
  key: "digital-marketing-101",
  slug: "digital-marketing-course",
  path: "/academy/digital-marketing-course",
  title: "Digital Marketing 101",
  shortTitle: "Digital Marketing 101",
  metaTitle: `Digital Marketing Course Accra & Online (2026) | GHS ${dmFee.from.toLocaleString("en-GH")} | KayTech Academy`,
  metaDescription: `Digital Marketing 101 at KayTech Academy. ${dmFee.duration}, SEO, social, content & paid ads for Ghanaian businesses. GHS ${dmFee.from.toLocaleString("en-GH")}. Online or on-site. Apply on-site.`,
  duration: dmFee.duration,
  feeGhs: dmFee.from,
  delivery: ["online", "onsite"],
  level: "Beginner friendly",
  quickAnswer: `KayTech Academy Digital Marketing 101 runs ${dmFee.duration} with Ghana-specific SEO, social content, and paid ads fundamentals. Cohort fee GHS ${dmFee.from.toLocaleString("en-GH")}. Classes are live online or on-site in Accra; max 10 students per cohort.`,
  overview: [
    "Learn how KayTech runs campaigns for local clients. search visibility, social proof, WhatsApp-friendly funnels, and measurable leads on realistic budgets.",
    "You will run a practice campaign for a Ghana SME scenario and leave with templates you can reuse for freelance clients or in-house roles.",
  ],
  outcomes: [
    "Audit a Ghana business website for SEO and conversion basics",
    "Plan content calendars for Facebook, Instagram, and LinkedIn",
    "Set up conversion tracking concepts (GA4, Meta pixel overview)",
    "Write ad copy and landing page outlines for local services",
    "Report results in language owners understand (leads, not vanity metrics)",
  ],
  syllabus: [
    {
      module: "Weeks 1–2 · Strategy & SEO",
      topics: ["Buyer journeys in Ghana", "Keyword research (Accra + regions)", "On-page SEO", "Google Business Profile"],
    },
    {
      module: "Weeks 3–4 · Content & social",
      topics: ["Brand voice", "Short-form video hooks", "Community management", "WhatsApp as a sales channel"],
    },
    {
      module: "Weeks 5–6 · Paid media & analytics",
      topics: ["Meta ads structure", "Budgeting in GHS", "Landing pages", "Monthly reporting dashboards"],
    },
    {
      module: "Week 7–8 · Capstone",
      topics: ["Live client-style brief", "Present strategy deck", "Freelance pricing for retainers vs projects"],
    },
  ],
  schedule: [
    { label: "Live sessions", detail: "Twice weekly · 90 minutes + weekly assignment review" },
    { label: "Tools", detail: "Free tiers where possible; paid tool trials optional" },
    { label: "Group work", detail: "Small teams mimic agency sprints" },
  ],
  cohorts: [
    {
      label: "October 2026 · Hybrid",
      start: "14 Oct 2026",
      applyBy: "1 Oct 2026",
      status: "open",
    },
    {
      label: "December 2026 · Online",
      start: "2 Dec 2026",
      applyBy: "18 Nov 2026",
      status: "open",
    },
  ],
  faqs: [
    {
      question: "Do I need ad spend during the course?",
      answer: "Not required. we simulate campaigns. If you want to run live ads on your own business, instructors guide minimum test budgets (often GHS 200–500).",
    },
    {
      question: "Is Meta the only platform covered?",
      answer: "Meta is primary for Ghana SME reach; we also cover Google Search basics and organic TikTok/Instagram patterns.",
    },
  ],
  image: contentImages.courseMarketing,
  applyLabel: "Digital Marketing 101",
};

export function buildCourseJsonLd(course: AcademyCourseDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.shortTitle,
    description: course.metaDescription,
    provider: {
      "@type": "Organization",
      name: "KayTech Academy",
      sameAs: "https://kaytechafrica.com/academy",
    },
    offers: {
      "@type": "Offer",
      price: course.feeGhs,
      priceCurrency: "GHS",
      category: "Paid",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: course.cohorts.map((c) => ({
      "@type": "CourseInstance",
      name: c.label,
      courseMode: c.label.toLowerCase().includes("online") ? "online" : "blended",
      startDate: c.start,
    })),
    timeRequired: course.duration,
    educationalLevel: course.level,
  };
}

export const academyOnlineHub = {
  path: "/academy/online-courses",
  title: "Online Web & Digital Marketing Courses (Live + Recorded)",
  metaDescription:
    "Live online cohorts with recordings for students outside Accra. same KayTech Academy curriculum, max 10 seats, Ghana-time evening classes.",
  quickAnswer:
    "KayTech Academy online cohorts mirror on-site classes: live twice-weekly sessions, WhatsApp support, recordings within 24 hours, and the same GHS cohort fees. Ideal for Kumasi, Tamale, Takoradi, and diaspora students who want studio-backed training without relocating to Accra.",
  highlights: [
    "Same syllabus and instructors as Accra on-site where schedules align",
    "Recordings + assignment feedback. not pre-recorded-only MOOCs",
    "Portfolio reviews and career coaching included",
    "Apply once. admissions helps you pick online vs on-site",
  ],
  courses: [webDevelopmentCourse.path, digitalMarketingCourse.path],
} as const;
