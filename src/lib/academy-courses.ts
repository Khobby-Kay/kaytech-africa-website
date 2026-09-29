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

const advancedFee = academyCourseFeesGhs["advanced-web-marketing"];
const saasFee = academyCourseFeesGhs["saas-development"];

export const advancedWebMarketingCourse: AcademyCourseDefinition = {
  key: "advanced-web-marketing",
  slug: "advanced-web-development-marketing-course",
  path: "/academy/advanced-web-development-marketing-course",
  title: "Advanced Web Development & Digital Marketing",
  shortTitle: "Advanced Web & Marketing",
  metaTitle: `Advanced Web Development & Marketing Course, Ghana | GHS ${advancedFee.from.toLocaleString("en-GH")} | KayTech Academy`,
  metaDescription: `A ${advancedFee.duration} KayTech Academy track for people who can already build a basic site: Next.js, CMS, MoMo checkout, technical SEO and paid campaigns. GHS ${advancedFee.from.toLocaleString("en-GH")}, Accra or online.`,
  duration: advancedFee.duration,
  feeGhs: advancedFee.from,
  delivery: ["online", "onsite"],
  level: "Intermediate (after Web Development 101 or equivalent)",
  quickAnswer: `The Advanced track runs ${advancedFee.duration} for students who can already ship an HTML and CSS site. You build a client-grade Next.js site with a CMS and MoMo checkout, then run its SEO and a small paid campaign. Fee GHS ${advancedFee.from.toLocaleString("en-GH")}, max 10 students.`,
  overview: [
    "This is the course for people who finished Web Development 101, or taught themselves, and now want to take paid client work without guessing. It covers the parts of a KayTech project that beginners skip: content models, payments, speed on mobile data, and getting the site found.",
    "Half the course is build, half is growth. You finish with one production site you can show a client and a written report on how it performed in search and ads.",
  ],
  outcomes: [
    "Build a Next.js site with a headless CMS a client can edit",
    "Add MoMo and card checkout through Paystack in test mode",
    "Pass Core Web Vitals on a mid-range Android phone",
    "Set up Search Console, GA4 events and a Google Business Profile",
    "Plan and report a small Meta or Google Ads test in GHS",
    "Write a scoped proposal with milestones and a fixed price",
  ],
  syllabus: [
    {
      module: "Weeks 1–3 · Production front-end",
      topics: ["Next.js App Router", "Components and layouts", "Images, fonts and caching", "Accessibility checks"],
    },
    {
      module: "Weeks 4–5 · Content and payments",
      topics: ["Headless CMS content models", "Forms that reach WhatsApp and email", "Paystack MoMo checkout in test mode", "Order and enquiry notifications"],
    },
    {
      module: "Weeks 6–8 · Search",
      topics: ["Technical SEO and structured data", "Local SEO for Accra and regional towns", "Search Console and indexing", "Writing pages that answer real queries"],
    },
    {
      module: "Weeks 9–10 · Paid growth",
      topics: ["Meta and Google Ads structure", "Landing page testing", "Budgeting in GHS", "Tracking leads, not clicks"],
    },
    {
      module: "Weeks 11–12 · Client project",
      topics: ["Brief, proposal and pricing", "Launch checklist", "Performance report", "Portfolio write-up"],
    },
  ],
  schedule: [
    { label: "Live sessions", detail: "Twice weekly · 2 hours (evening Accra time)" },
    { label: "Build lab", detail: "Saturday lab for code review and pairing" },
    { label: "Online cohort", detail: "Same schedule via Google Meet; recordings within 24 hours" },
    { label: "Office hours", detail: "WhatsApp group with instructors Mon–Fri" },
  ],
  cohorts: [
    {
      label: "January 2027 · Online & Accra",
      start: "12 Jan 2027",
      applyBy: "30 Dec 2026",
      status: "waitlist",
    },
  ],
  faqs: [
    {
      question: "Can I join without taking Web Development 101?",
      answer: "Yes, if you can already build a multi-page site with HTML, CSS and some JavaScript. Admissions asks for a link to something you have built.",
    },
    {
      question: "Do I need money for ads during the course?",
      answer: "No. You can simulate the campaign. If you want to run it live, instructors help you set a small test budget, often GHS 200–500.",
    },
    {
      question: "Can I pay in instalments?",
      answer: "Yes. Approved applicants can split the fee across 2–3 payments. See /academy/scholarships-payment-plans.",
    },
  ],
  image: contentImages.courseDev,
  applyLabel: "Advanced Web Development & Digital Marketing",
};

export const saasDevelopmentCourse: AcademyCourseDefinition = {
  key: "saas-development",
  slug: "saas-development-course",
  path: "/academy/saas-development-course",
  title: "SaaS Product Development",
  shortTitle: "SaaS Product Development",
  metaTitle: `SaaS Development Course in Ghana | GHS ${saasFee.from.toLocaleString("en-GH")} | KayTech Academy`,
  metaDescription: `Build and launch a subscription web app in ${saasFee.duration}: accounts, database, Paystack recurring billing, dashboards and deployment. KayTech Academy, Accra or online, GHS ${saasFee.from.toLocaleString("en-GH")}.`,
  duration: saasFee.duration,
  feeGhs: saasFee.from,
  delivery: ["online", "onsite"],
  level: "Intermediate (JavaScript required)",
  quickAnswer: `The SaaS course runs ${saasFee.duration}. You build one working subscription product with sign-in, a database, Paystack recurring billing and an admin dashboard, then deploy it. Fee GHS ${saasFee.from.toLocaleString("en-GH")}. You need working JavaScript before you start.`,
  overview: [
    "Most courses stop at a website. This one covers what a paid product needs: user accounts, data that belongs to each customer, billing that renews every month, and a dashboard the owner can run the business from.",
    "You pick a small product idea for a Ghanaian market, such as school fee reminders or a salon booking tool, and ship it by week 12. The code is yours to keep building.",
  ],
  outcomes: [
    "Design a database for multi-customer (multi-tenant) data",
    "Add sign-in, roles and password reset",
    "Charge monthly subscriptions through Paystack, including MoMo",
    "Build an admin dashboard with usage and revenue numbers",
    "Deploy with environment secrets, backups and error logging",
    "Write a one-page pricing and launch plan for the product",
  ],
  syllabus: [
    {
      module: "Weeks 1–2 · Product and data",
      topics: ["Choosing a narrow problem", "Data modelling", "PostgreSQL basics", "Multi-tenant patterns"],
    },
    {
      module: "Weeks 3–5 · Accounts and core features",
      topics: ["Authentication and roles", "Server actions and APIs", "Validation and error handling", "Email and WhatsApp notifications"],
    },
    {
      module: "Weeks 6–8 · Billing",
      topics: ["Paystack plans and subscriptions", "MoMo recurring payment limits", "Webhooks and failed payments", "Invoices and receipts"],
    },
    {
      module: "Weeks 9–10 · Dashboards",
      topics: ["Usage and revenue metrics", "Admin tools", "Exports and reports", "Performance on slow networks"],
    },
    {
      module: "Weeks 11–12 · Launch",
      topics: ["Deployment and secrets", "Backups and monitoring", "Pricing your plans in GHS", "Demo day"],
    },
  ],
  schedule: [
    { label: "Live sessions", detail: "Twice weekly · 2 hours (evening Accra time)" },
    { label: "Build lab", detail: "Saturday lab for code review and pairing" },
    { label: "Online cohort", detail: "Same schedule via Google Meet; recordings within 24 hours" },
    { label: "Office hours", detail: "WhatsApp group with instructors Mon–Fri" },
  ],
  cohorts: [
    {
      label: "January 2027 · Online & Accra",
      start: "12 Jan 2027",
      applyBy: "30 Dec 2026",
      status: "waitlist",
    },
  ],
  faqs: [
    {
      question: "What do I need to know before I join?",
      answer: "Comfortable JavaScript: functions, arrays, objects and fetching data. If you have finished Web Development 101 or the Advanced track, you are ready.",
    },
    {
      question: "Will I own the product I build?",
      answer: "Yes. The code and the idea are yours to keep building or sell after the course.",
    },
    {
      question: "Can I pay in instalments?",
      answer: "Yes. Approved applicants can split the fee across 2–3 payments. See /academy/scholarships-payment-plans.",
    },
  ],
  image: contentImages.courseDev,
  applyLabel: "SaaS Development",
};

export const academyCourses = [
  webDevelopmentCourse,
  digitalMarketingCourse,
  advancedWebMarketingCourse,
  saasDevelopmentCourse,
] as const;

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
  title: "Online Web Development & Digital Marketing Courses | KayTech Academy",
  heroTitle: "Learn live from anywhere in Ghana",
  metaDescription:
    "Live online cohorts from KayTech Academy for students outside Accra: web development, digital marketing, advanced and SaaS tracks. Evening classes, recordings, max 10 seats, fees from GHS 2,200.",
  quickAnswer:
    "KayTech Academy online cohorts mirror on-site classes: live twice-weekly sessions, WhatsApp support, recordings within 24 hours, and the same GHS cohort fees. Ideal for Kumasi, Tamale, Takoradi, and diaspora students who want studio-backed training without relocating to Accra.",
  highlights: [
    "Same syllabus and instructors as Accra on-site where schedules align",
    "Recordings + assignment feedback. not pre-recorded-only MOOCs",
    "Portfolio reviews and career coaching included",
    "Apply once. admissions helps you pick online vs on-site",
  ],
  courses: [
    webDevelopmentCourse,
    digitalMarketingCourse,
    advancedWebMarketingCourse,
    saasDevelopmentCourse,
  ],
  howItWorks: [
    {
      title: "Live classes, evening Accra time",
      body: "Two sessions a week on Google Meet in the evening, Ghana time, so working students can attend. Cameras on for code reviews.",
    },
    {
      title: "Recordings within 24 hours",
      body: "Miss a class because of work or a power cut and the recording is in the cohort folder the next day, with the slides and starter files.",
    },
    {
      title: "Assignments reviewed by an instructor",
      body: "Each week you submit a link. An instructor reviews the code or campaign and replies with written notes, not a score.",
    },
    {
      title: "WhatsApp group for blockers",
      body: "Stuck on a bug at 10pm? Post it in the cohort group. Instructors answer Monday to Friday, and classmates usually get there first.",
    },
  ],
  requirements: [
    "A laptop (Windows or Mac) that can run VS Code and a browser",
    "Enough data for two 2-hour video calls a week, roughly 1–2GB per session",
    "Six to eight hours a week for classes and assignments",
    "A Gmail account for Google Meet and shared folders",
  ],
  faqs: [
    {
      question: "Is the online course the same as the on-site course in Accra?",
      answer: "Yes. Same syllabus, same assignments and the same fee. The only difference is where you sit during the live session.",
    },
    {
      question: "Can I join from outside Ghana?",
      answer: "Yes. Classes run on Ghana time (GMT), so check the session times work where you are. Fees are in GHS and can be paid by MoMo or card.",
    },
    {
      question: "What happens if my connection drops during class?",
      answer: "Rejoin when you can and watch the recording for the part you missed. Slides and starter files are shared before each session, so you can keep working offline.",
    },
    {
      question: "Can I switch from online to on-site?",
      answer: "Yes, if there is a seat in the on-site cohort for the same course. Tell admissions before week three.",
    },
  ],
};
