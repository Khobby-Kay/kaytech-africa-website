import { siteConfig } from "@/lib/site";
import { studioProofLine } from "@/lib/trust-metrics";

export const aiAutomationExpandedMeta = {
  title: "AI Automation Ghana | WhatsApp AI Assistants from GHS 5,000 | KayTech Africa",
  description:
    "Accra studio. WhatsApp AI trained on your catalogue with human handoff. orders, FAQs, and bookings from GHS 5,000. You own the system. KayTech Africa.",
  heroTitle: "WhatsApp AI and chatbots in Ghana",
  heroDescription:
    `KayTech builds WhatsApp AI and web chatbots from GHS 5,000. ${studioProofLine}. Trained on your products and prices, with a clear handoff when a person should finish the sale.`,
};

export const aiProductSurfaces = [
  {
    id: "whatsapp",
    title: "WhatsApp assistant",
    subtitle: "After-hours on your number",
    body: "The line customers already save. Answers FAQs and captures orders when your shop is closed.",
    href: "#six-things",
  },
  {
    id: "web",
    title: "Web chatbot",
    subtitle: "On the site they already opened",
    body: "Same brain as WhatsApp, embedded on your website with Teedra-style greeting and lead capture.",
    href: "#six-things",
  },
  {
    id: "board",
    title: "Workflow board",
    subtitle: "Handoff a person can finish",
    body: "Inbox or simple dashboard so staff see escalations, orders, and missed questions in one place.",
    href: "#six-things",
  },
  {
    id: "portfolio",
    title: "See it on real builds",
    subtitle: "Proof before you buy",
    body: "We demo flows on discovery calls and show client sites where automation sits alongside web and e-commerce.",
    href: "/portfolio",
  },
] as const;

export const aiKeepVsLose = {
  headline: "A bot that cannot hand off is just a wall",
  keep: [
    "FAQs, orders, and bookings on WhatsApp from GHS 5,000.",
    "Human handoff. The chat does not die in a loop.",
    "Trained on your catalogue and prices, not a generic script.",
  ],
  lose: [
    "Customers who wrote you and got silence after hours.",
    "A widget that invents prices or stock you do not sell.",
    "A monthly foreign tool that cannot match how Ghana sells.",
  ],
} as const;

export const aiIndustryPatterns = [
  {
    title: "Retail and stores",
    body: "Product questions, delivery areas, and MoMo-ready order capture.",
    href: "/industry/restaurant-website-design-ghana",
  },
  {
    title: "Hotels and hospitality",
    body: "Availability, amenities, and booking requests routed to front desk.",
    href: "/industry/hotel-website-design-ghana",
  },
  {
    title: "Schools and training",
    body: "Admissions FAQs, fees, and campus info without overloading admin.",
    href: "/industry/school-website-design-ghana",
  },
  {
    title: "Churches and NGOs",
    body: "Events, giving links, and volunteer sign-ups with warm tone.",
    href: "/industry/church-website-design-ghana",
  },
  {
    title: "Real estate",
    body: "Budget, location, and viewing requests before an agent calls.",
    href: "/industry/real-estate-website-design-ghana",
  },
  {
    title: "Professional services",
    body: "Qualify leads from ads and SEO before your team picks up.",
    href: "/contact",
  },
] as const;

export const aiSixDeliverables = [
  {
    num: "01",
    title: "Lives on WhatsApp",
    body: "The number customers already save. Not a new app to download.",
    href: "#pricing",
  },
  {
    num: "02",
    title: "Knows your catalogue",
    body: "Prices and FAQs you approve. It does not invent stock.",
    href: "#pricing",
  },
  {
    num: "03",
    title: "Hands off to a person",
    body: "A board or inbox your staff can finish the same day.",
    href: "#product-surfaces",
  },
  {
    num: "04",
    title: "Can take the next step",
    body: "Order, booking, or a MoMo link when the brief needs it.",
    href: "/momo-paystack-integration-ghana",
  },
  {
    num: "05",
    title: "Gets retrained",
    body: "Missed questions become new answers. Not a one-week demo.",
    href: "/contact",
  },
  {
    num: "06",
    title: "You own the setup",
    body: "Written scope, your WhatsApp line, and integrations documented.",
    href: "/contact",
  },
] as const;

export const aiComparisonRows = [
  {
    label: "Upfront cost",
    custom: "From GHS 5,000 one-time",
    saas: "Low start, USD subscription ongoing",
    staff: "Salaries every month",
  },
  {
    label: "Trained on your business",
    custom: "Your products, prices, policies",
    saas: "Generic scripts and canned replies",
    staff: "Yes, but slow to train new hires",
  },
  {
    label: "After-hours coverage",
    custom: "Replies when the shop is closed",
    saas: "Limited answers on many plans",
    staff: "Shifts, leave, and sick days",
  },
  {
    label: "WhatsApp and MoMo ready",
    custom: "Native orders and payment links",
    saas: "Weak Ghana payment support",
    staff: "Manual payment screenshots",
  },
  {
    label: "Many chats at once",
    custom: "Parallel conversations",
    saas: "Plan limits apply",
    staff: "One thread at a time",
  },
  {
    label: "You own the system",
    custom: "Code, data, and integrations scoped to you",
    saas: "Cancel and it disappears",
    staff: "Knowledge leaves with resignations",
  },
] as const;

export const aiProcessSteps = [
  {
    title: "Free automation audit",
    body: "We map where time and leads leak. WhatsApp, web, and admin. No obligation.",
  },
  {
    title: "Design and blueprint",
    body: "Conversation flows and handoff rules in plain language. Fixed quote in writing.",
  },
  {
    title: "Build and train",
    body: "We train on your real catalogue, tone, and edge cases. Test with scenarios you choose.",
  },
  {
    title: "Launch and handover",
    body: "Go live on WhatsApp and web in typical 4 to 12 weeks. Your team gets a walkthrough.",
  },
  {
    title: "Monitor and improve",
    body: "Retrain on missed questions. Add channels or CRM hooks as volume grows.",
  },
] as const;

export const aiPricingTiers = [
  {
    id: "whatsapp",
    name: "WhatsApp AI assistant",
    price: "GHS 5,000",
    popular: false,
    summary: "WhatsApp AI on your number. FAQs, orders, and human handoff.",
    features: [
      "AI on your business WhatsApp number",
      "Trained on products, prices, and policies",
      "Answers FAQs, takes orders and bookings",
      "MoMo payment link when needed",
      "English plus Ghanaian phrasing you approve",
      "Human handoff for complex chats",
      "Order log or Google Sheets sync",
      "Training plus 2 months support",
    ],
  },
  {
    id: "suite",
    name: "Business automation suite",
    price: "GHS 18,000",
    popular: true,
    summary: "AI across channels plus back-office automation.",
    features: [
      "Everything in WhatsApp AI assistant",
      "Website and social DM chat where APIs allow",
      "Appointment reminders and follow-ups",
      "Invoice and payment nudges",
      "CRM or store integration",
      "Lead routing to the right person",
      "Simple analytics on conversations",
      "3 months priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise AI agents",
    price: "Custom quote",
    popular: false,
    summary: "Custom agents for complex operations and branches.",
    features: [
      "Everything in automation suite",
      "Document processing and data extraction",
      "ERP, POS, and accounting hooks",
      "Multi-branch routing",
      "Dedicated account contact",
      "Extended support window",
    ],
  },
] as const;

export const aiAutomationFaqs = [
  {
    question: "How much does AI automation cost in Ghana?",
    answer:
      "WhatsApp AI assistants typically start at GHS 5,000 one-time setup. Multi-channel suites and CRM integrations from GHS 18,000. We quote in writing before build starts.",
  },
  {
    question: "What is a WhatsApp AI assistant?",
    answer:
      "Software that replies on your WhatsApp business line using answers you approve. It captures orders and FAQs, then hands off to a person when the chat needs judgment or payment confirmation.",
  },
  {
    question: "Can it really take orders for my business?",
    answer:
      "Yes, when we scope order flows with your catalogue, delivery rules, and MoMo or Paystack links. Complex negotiations still go to your team.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Most WhatsApp-first projects launch in 4 to 12 weeks depending on integrations, languages, and approval cycles.",
  },
  {
    question: "Is customer data safe?",
    answer:
      "We host on secure infrastructure, follow your privacy policy, and avoid sending card or PIN data through chat. Scope is documented before launch.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "No. It handles repeat questions and after-hours capture so staff focus on closing, delivery, and relationships on WhatsApp.",
  },
  {
    question: "Can it connect to my CRM or store?",
    answer:
      "Yes. We integrate with custom CRM builds, sheets, e-commerce, and payment tools KayTech already ships for Ghana clients.",
  },
  {
    question: "Do you support Twi or local languages?",
    answer:
      "We can scope bilingual flows where you provide approved phrases. Most clients start in English with Ghanaian tone, then expand.",
  },
  {
    question: "Who builds WhatsApp AI in Ghana?",
    answer:
      "KayTech Africa is an Accra-based studio building WhatsApp AI, web chat, and workflow automation for businesses nationwide. Call 024 840 8154 or WhatsApp 055 992 1979.",
  },
] as const;

export const aiAutomationDemo = {
  headline: "Proof first",
  body: "See a sample flow on a discovery call before you commit. We walk through WhatsApp handoff, FAQ grounding, and what your team will use day to day.",
  ctaHref: siteConfig.contact.whatsapp,
  ctaLabel: "WhatsApp this brief",
} as const;
