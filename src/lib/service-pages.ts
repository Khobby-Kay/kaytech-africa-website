import { contentImages } from "@/lib/image-seo";
import { formatPriceFromGhs, servicePriceFromGhs, studioProofLine } from "@/lib/trust-metrics";

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  sections: ServiceSection[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
  image: { src: string; alt: string };
};

export const servicePages: ServicePage[] = [
  {
    slug: "best-ecommerce-development-accra-ghana",
    title: "E-Commerce Development in Ghana from GHS 8,000 | KayTech Africa",
    metaDescription:
      "Online stores from GHS 8,000: mobile-first e-commerce in Accra and Ghana with MoMo, Paystack, WhatsApp orders, and SEO product pages.",
    keywords: [
      "e-commerce website developer Ghana",
      "online store development Accra",
      "online store developer Ghana",
      "e-commerce development Accra",
      "Mobile Money checkout website Ghana",
      "affordable e-commerce Ghana",
    ],
    eyebrow: "E-Commerce · Ghana",
    heroTitle: "Helping you sell more online in Ghana",
    heroDescription:
      "Custom online store development with MoMo, Paystack, and mobile-first checkout. built for Ghanaian buyers.",
    intro:
      "KayTech Africa develops e-commerce websites and custom online stores for brands in Accra, Kumasi, Tema, and nationwide.",
    image: contentImages.whyPayments,
    benefits: [],
    sections: [],
  },
  {
    slug: "best-web-development-design-ghana",
    title: `Web Development & Design in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["best-web-development-design-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-web-development-design-ghana"].from, "project")}: custom websites across Ghana, mobile-first and SEO-ready. ${studioProofLine}.`,
    keywords: [
      "web development company Ghana",
      "hire web developer Ghana",
      "custom web development Ghana",
      "web app developer Ghana",
      "web design services Ghana",
    ],
    eyebrow: "Web design & development · Ghana",
    heroTitle: "Web design & development built for Ghanaian customers",
    heroDescription:
      "More than developers. we are your growth partners. KayTech Africa builds websites that look great, load fast on mobile data, and turn visitors into calls, WhatsApp chats, and paying customers.",
    intro:
      `${studioProofLine}. See published case studies for Melcom, Voltic, and The Alfred.`,
    image: contentImages.serviceWeb,
    benefits: [],
    sections: [],
  },
  {
    slug: "best-digital-marketing-accra-ghana",
    title: `Digital Marketing in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["best-digital-marketing-accra-ghana"].from, "month")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-digital-marketing-accra-ghana"].from, "month")}: SEO, paid media, content, and growth funnels for Ghanaian businesses.`,
    keywords: [
      "digital marketing agency Accra",
      "digital marketing Ghana",
      "PPC ads Ghana",
      "online marketing company Ghana",
      "growth marketing Accra",
    ],
    eyebrow: "Digital marketing · Ghana",
    heroTitle: "Digital marketing that delivers measurable leads and sales",
    heroDescription:
      "Performance marketing, content systems, and funnels for Accra, Kumasi, Tema, and nationwide. tied to leads and revenue, not vanity metrics.",
    intro:
      "Digital marketing in Ghana works when it respects how people discover, trust, and buy. search, social, WhatsApp, and mobile. KayTech Africa helps businesses grow visibility and turn attention into enquiries through SEO, paid campaigns, landing pages, and analytics you can act on.",
    image: contentImages.serviceGrowth,
    benefits: [
      "Campaigns aligned to Ghanaian audiences",
      "Landing pages built to convert",
      "SEO + paid media under one team",
      "WhatsApp and call tracking",
      "Monthly reporting you can understand",
    ],
    sections: [
      {
        heading: "Growth systems, not one-off posts",
        paragraphs: [
          "We connect your website, ads, and follow-up paths so a click can become a conversation on WhatsApp or a booked call. the way many Ghanaian businesses actually close sales.",
        ],
      },
      {
        heading: "Paid media and PPC",
        paragraphs: [
          "Google and social ads need landing pages that match the promise in the ad. We build both. so spend goes toward qualified leads, not bounced traffic.",
        ],
      },
      {
        heading: "Content and SEO as long-term assets",
        paragraphs: [
          "Blog posts, service pages, and FAQs compound over time. ranking for searches your customers type month after month without paying per click.",
        ],
      },
      {
        heading: "Reporting you can act on",
        paragraphs: [
          "We tie campaigns to calls, form fills, and WhatsApp starts. not vanity impressions. Monthly summaries show what worked, what we are testing next, and how spend maps to leads in Accra, Kumasi, and your target cities.",
        ],
      },
      {
        heading: "Channels that fit Ghana",
        paragraphs: [
          "Search, Meta, and YouTube behave differently here than in US playbooks. KayTech adjusts creative, language, and landing pages for mobile data, local trust signals, and the follow-up paths Ghanaians actually use after they click.",
        ],
      },
      {
        heading: "What the first 90 days look like",
        paragraphs: [
          "Month one is audit and setup: Search Console, analytics events, conversion tracking on forms and WhatsApp clicks, and a baseline report. Month two launches campaigns or content sprints with weekly tweaks. Month three compares lead volume and cost per enquiry to the baseline and decides what to scale.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does digital marketing cost in Ghana?",
        answer:
          "KayTech retainers start at GHS 2,000 a month for SEO and content, or ads management with a separate ad budget you control. One-off landing pages and audits are scoped separately. See /seo-packages-ghana for SEO tiers.",
      },
      {
        question: "Do you guarantee first page on Google?",
        answer:
          "No honest agency guarantees rankings. We improve technical SEO, content, and local signals so you compete for the searches that matter to your business.",
      },
      {
        question: "Can you work with our existing website?",
        answer:
          "Yes. We often start with a site KayTech did not build, fixing tracking, page speed, and landing pages before spending on ads.",
      },
      {
        question: "How do you report results?",
        answer:
          "Monthly summaries in plain language: enquiries, calls, WhatsApp starts, ad spend, and what we are testing next. Not screenshot dumps of vanity metrics.",
      },
    ],
  },
  {
    slug: "mobile-app-development-ghana",
    title: `Mobile App Development in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["mobile-app-development-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `Android and iOS apps ${formatPriceFromGhs(servicePriceFromGhs["mobile-app-development-ghana"].from, "project")}: customer apps, field tools, and APIs linked to your website and MoMo payments. KayTech Africa, Accra.`,
    keywords: [
      "mobile app developer Ghana",
      "Android app development Accra",
      "iOS app Ghana",
      "hire app developer Ghana",
    ],
    eyebrow: "Mobile apps · Ghana",
    heroTitle: "Mobile apps for customers and teams in Ghana",
    heroDescription:
      "Native and cross-platform apps with secure APIs, push notifications, and payment hooks where you need them.",
    intro:
      "When your audience lives on phones, a website alone is not enough. KayTech builds Android and iOS apps for retail, logistics, services, and internal teams across Ghana.",
    image: contentImages.serviceWeb,
    benefits: [
      "Product scoping and UX for Ghanaian users",
      "Android and iOS builds from one codebase when it fits",
      "APIs tied to your website, CRM, or ERP",
      "App store submission support",
      "Post-launch fixes and feature sprints",
    ],
    sections: [
      {
        heading: "Customer-facing apps",
        paragraphs: [
          "Ordering, bookings, loyalty, and account portals that feel fast on everyday Android devices and common mobile data speeds.",
        ],
      },
      {
        heading: "Field and operations apps",
        paragraphs: [
          "Capture sales, deliveries, or inspections offline-friendly, then sync when connectivity returns.",
        ],
      },
      {
        heading: "Integrated with your stack",
        paragraphs: [
          "Apps share login, payments, and data with the websites and dashboards we already build for you.",
        ],
      },
      {
        heading: "How we scope an app MVP",
        paragraphs: [
          "We start with one job the app must do well: place an order, book a slot, or submit a field report. Everything else waits for version two. That keeps the first build inside budget and gets something in the Play Store or App Store in weeks, not a year.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a mobile app cost in Ghana?",
        answer:
          "A focused Android or iOS MVP typically starts around GHS 15,000. Apps with offline sync, admin dashboards, or payment integrations cost more. We send a written quote after discovery.",
      },
      {
        question: "Do you build for both Android and iPhone?",
        answer:
          "Yes. We use cross-platform tools when one codebase fits, or native builds when performance or store rules require it.",
      },
      {
        question: "Can the app connect to our website or ERP?",
        answer:
          "Yes. We design APIs so the app reads the same products, prices, and customer records as your site or internal tools.",
      },
      {
        question: "Do you help with Play Store and App Store submission?",
        answer:
          "Yes. We prepare store listings, screenshots, privacy notes, and handle the first submission. You keep the developer accounts in your business name.",
      },
    ],
  },
  {
    slug: "erp-systems-ghana",
    title: `ERP Systems in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["erp-systems-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `Custom ERP systems ${formatPriceFromGhs(servicePriceFromGhs["erp-systems-ghana"].from, "project")}: inventory, finance, HR and operations dashboards built around how your business runs. KayTech Africa, Accra.`,
    keywords: [
      "ERP development Ghana",
      "ERP software Accra",
      "inventory system Ghana",
      "business management software Ghana",
    ],
    eyebrow: "ERP systems · Ghana",
    heroTitle: "ERP systems that match how your business actually runs",
    heroDescription:
      "Replace scattered spreadsheets with role-based dashboards for stock, finance, and operations.",
    intro:
      "Off-the-shelf ERP rarely fits Ghanaian SMEs. KayTech designs modular systems around your branches, currencies, and approval flows.",
    image: contentImages.serviceAi,
    benefits: [
      "Inventory and procurement tracking",
      "Sales and invoicing in GHS",
      "Role-based access for branches",
      "Reports your accountant can use",
      "Phased rollout so teams adopt gradually",
    ],
    sections: [
      {
        heading: "Start with the pain point",
        paragraphs: [
          "We usually begin with the module that saves the most time today. stock, invoicing, or payroll. then expand.",
        ],
      },
      {
        heading: "Cloud-ready and mobile-friendly",
        paragraphs: [
          "Managers approve purchases from their phone. staff update stock from the warehouse. data stays in sync.",
        ],
      },
      {
        heading: "Modules we often ship first",
        paragraphs: ["Most Ghanaian ERP rollouts start with one or two of these, then add the rest:"],
        bullets: [
          "Stock in and out with low-stock alerts",
          "Quotes and invoices in GHS with PDF export",
          "Purchase approvals by WhatsApp or email",
          "Basic payroll or commission tracking",
          "Branch-level dashboards for owners",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does custom ERP cost in Ghana?",
        answer:
          "Modular ERP projects typically start around GHS 25,000 for one core module plus admin access. Full multi-branch rollouts are scoped in phases after discovery.",
      },
      {
        question: "Can we keep using Excel during rollout?",
        answer:
          "Yes. We migrate one process at a time so teams are not forced to change everything on day one.",
      },
      {
        question: "Is training included?",
        answer:
          "Yes. Each phase includes hands-on training for the roles that use that module, plus short video notes your team can replay.",
      },
    ],
  },
  {
    slug: "crm-development-ghana",
    title: `CRM Development in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["crm-development-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `Custom CRM ${formatPriceFromGhs(servicePriceFromGhs["crm-development-ghana"].from, "project")}: lead tracking, WhatsApp follow-ups, sales pipelines and support tickets for teams in Ghana. KayTech Africa, Accra.`,
    keywords: [
      "CRM development Ghana",
      "custom CRM Accra",
      "sales pipeline software Ghana",
      "WhatsApp CRM Ghana",
    ],
    eyebrow: "CRM development · Ghana",
    heroTitle: "CRM development with WhatsApp-aware follow-up",
    heroDescription:
      "Track every lead from first click to closed deal, with assignments, reminders, and history your team trusts.",
    intro:
      "Generic CRMs force Ghanaian sales teams into awkward workflows. We build pipelines around how you actually close. calls, WhatsApp, and site forms in one place.",
    image: contentImages.serviceGrowth,
    benefits: [
      "Lead capture from web, ads, and WhatsApp",
      "Pipeline stages you define",
      "Task reminders and ownership",
      "Simple reports for managers",
      "Integrations with email and SMS",
    ],
    sections: [
      {
        heading: "Built for local sales motion",
        paragraphs: [
          "Most deals still move on WhatsApp. Your CRM should log those conversations without copy-paste.",
        ],
      },
      {
        heading: "Grows with your team",
        paragraphs: [
          "Add branches, products, or support queues without migrating to a new tool every year.",
        ],
      },
      {
        heading: "What a KayTech CRM includes",
        paragraphs: ["A typical build covers:"],
        bullets: [
          "Lead forms and WhatsApp click tracking into one inbox",
          "Pipeline stages you name (new, quoted, won, lost)",
          "Tasks and reminders assigned to sales reps",
          "Notes and file uploads per deal",
          "Manager view of team activity and conversion rates",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a custom CRM cost in Ghana?",
        answer:
          "CRM builds start around GHS 12,000 for a single-team pipeline with web leads and WhatsApp logging. Multi-branch or ERP integrations cost more.",
      },
      {
        question: "Can it replace our WhatsApp group?",
        answer:
          "It complements the group: reps still chat customers on WhatsApp, but outcomes and follow-up dates live in the CRM so managers see pipeline health.",
      },
      {
        question: "Do you integrate with email and SMS?",
        answer:
          "Yes. Outbound email and SMS reminders can be added when your team needs automated follow-up, not only manual chats.",
      },
    ],
  },
  {
    slug: "best-software-as-a-services-saas-accra-ghana",
    title: `SaaS Development in Ghana, ${formatPriceFromGhs(servicePriceFromGhs["best-software-as-a-services-saas-accra-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-software-as-a-services-saas-accra-ghana"].from, "project")}: SaaS MVP builds in Accra and Ghana: product strategy, subscriptions, dashboards, and cloud deployment.`,
    keywords: [
      "SaaS development Ghana",
      "software as a service Accra",
      "SaaS developer Ghana",
      "subscription software Ghana",
      "web app SaaS development Accra",
    ],
    eyebrow: "Software As A Services (SAAS)",
    heroTitle: "SaaS development in Ghana for scalable digital products",
    heroDescription:
      "From MVP to production SaaS platforms. subscription billing, dashboards, and cloud-ready web apps built for growth.",
    intro:
      "Software as a Service is one of the fastest ways to build recurring digital revenue. KayTech Africa helps founders and businesses in Accra and across Ghana design, build, and launch SaaS products that are secure, scalable, and easy for users to adopt.",
    image: contentImages.serviceAi,
    benefits: [
      "MVP planning and product architecture",
      "Modern web app development",
      "Role-based dashboards and admin panels",
      "Subscription billing-ready flows",
      "Cloud deployment and post-launch support",
    ],
    sections: [
      {
        heading: "From idea to launch-ready SaaS",
        paragraphs: [
          "We translate your product idea into a clear build roadmap. user roles, key workflows, monetization, and milestones. then ship in iterative phases so you validate with real users quickly.",
        ],
      },
      {
        heading: "Core features we build",
        paragraphs: ["Typical SaaS builds can include:"],
        bullets: [
          "User signup, onboarding, and authentication",
          "Subscription plans and billing integrations",
          "Customer and admin dashboards",
          "Team roles, permissions, and audit trails",
          "Analytics events and retention hooks",
        ],
      },
      {
        heading: "Built to scale",
        paragraphs: [
          "Performance, security, and maintainability are designed in from day one. We deploy to reliable cloud environments and provide ongoing support so your platform grows without constant rewrites.",
        ],
      },
      {
        heading: "Monetization and billing",
        paragraphs: [
          "Subscription tiers, trials, and MoMo or card billing can be wired into your MVP when revenue validation matters. We document plan logic and admin tools so your team can adjust pricing without rebuilding the core app.",
        ],
      },
      {
        heading: "Post-launch iteration",
        paragraphs: [
          "SaaS products evolve after real users arrive. KayTech ships in phases. auth and core workflow first, then analytics, notifications, and integrations. so you learn quickly without overbuilding v1.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does SaaS development cost in Ghana?",
        answer:
          "An MVP with auth, one core workflow, admin dashboard, and deployment typically starts around GHS 18,000. Subscription billing and multi-tenant data add scope.",
      },
      {
        question: "How long until we can charge customers?",
        answer:
          "Many MVPs reach a private beta in 8–12 weeks. Paystack subscriptions can go live in the same phase if your business documents are ready.",
      },
      {
        question: "Do you help with product strategy?",
        answer:
          "Yes. Discovery includes user roles, pricing tiers in GHS, and a phased roadmap before code starts.",
      },
    ],
  },
];

export function getAllServicePages(): ServicePage[] {
  return servicePages;
}

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export function getServicePath(slug: string): string {
  return `/services/${slug}`;
}
