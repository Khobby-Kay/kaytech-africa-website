import { siteConfig } from "@/lib/site";

/** 40–60 word SERP quick answer (AGENCY-01) */
export const websiteCostQuickAnswer =
  "In Ghana in 2026, most business websites run GHS 800–6,000 for brochure sites, GHS 5,000–15,000+ for e-commerce with MoMo or Paystack, and GHS 15,000+ for custom apps. Timelines are usually 2–12 weeks. KayTech sends a written GHS quote after discovery; the table below shows typical ranges.";

export const websiteCostVsPricing = {
  body:
    "This page lists 2026 GHS market ranges, timelines, recurring costs, and sample quotes. /pricing explains how KayTech scopes proposals without repeating every cedi figure. Use /contact for your exact quote.",
} as const;

export const websiteCostPriceTable = [
  {
    type: "Landing / one-page",
    range: "GHS 800 – 1,800",
    timeline: "1–2 weeks",
    bestFor: "Campaigns, events, simple offers",
  },
  {
    type: "Starter business site (3–5 pages)",
    range: "GHS 1,800 – 3,500",
    timeline: "2–4 weeks",
    bestFor: "New SMEs, personal brands, services",
  },
  {
    type: "Growth business site (custom UI, blog, SEO)",
    range: "GHS 3,500 – 8,000",
    timeline: "4–8 weeks",
    bestFor: "Established brands competing on Google",
  },
  {
    type: "Corporate / multi-section",
    range: "GHS 8,000 – 18,000",
    timeline: "6–12 weeks",
    bestFor: "Multi-service firms, portals, teams",
  },
  {
    type: "WhatsApp catalogue store",
    range: "GHS 6,000 – 12,000",
    timeline: "3–6 weeks",
    bestFor: "Shops selling via chat + MoMo",
  },
  {
    type: "E-commerce (MoMo + Paystack checkout)",
    range: "GHS 8,000 – 25,000+",
    timeline: "6–12 weeks",
    bestFor: "Product brands, nationwide delivery",
  },
  {
    type: "Custom web app / SaaS MVP",
    range: "GHS 18,000 – 80,000+",
    timeline: "8–20+ weeks",
    bestFor: "Dashboards, subscriptions, internal tools",
  },
  {
    type: "Payment integration only",
    range: "GHS 3,000 – 8,000",
    timeline: "1–3 weeks",
    bestFor: "Adding MoMo/Paystack to existing site",
  },
] as const;

export const websiteCostTimelines = [
  {
    phase: "Discovery & quote",
    duration: "1–3 days",
    note: "Call or WhatsApp → scope document with GHS line items",
  },
  {
    phase: "Design approval",
    duration: "1–2 weeks",
    note: "Homepage + key page layouts before build",
  },
  {
    phase: "Development & content",
    duration: "2–8 weeks",
    note: "Depends on pages, shop, integrations",
  },
  {
    phase: "QA, training, launch",
    duration: "3–7 days",
    note: "Mobile testing, SSL, handover",
  },
] as const;

export const websiteCostRecurring = [
  {
    item: ".com domain",
    range: "GHS 100 – 150 / year",
    note: "International domains via registrars",
  },
  {
    item: ".com.gh domain",
    range: "GHS 200 – 350 / year",
    note: "Ghana ccTLD; registration rules apply",
  },
  {
    item: "Hosting (business site)",
    range: "GHS 500 – 1,200 / year",
    note: "Shared or managed hosting for SME sites",
  },
  {
    item: "Hosting (e-commerce)",
    range: "GHS 1,200 – 3,600 / year",
    note: "Higher traffic, backups, SSL",
  },
  {
    item: "Maintenance retainer",
    range: "GHS 350 – 1,500 / month",
    note: "Updates, security, small content changes",
  },
  {
    item: "SEO retainer",
    range: "GHS 800 – 5,000+ / month",
    note: "See /seo-packages-ghana",
  },
  {
    item: "Paystack / MoMo fees",
    range: "Per transaction",
    note: "Set by gateway (% + fixed fee per charge)",
  },
] as const;

export const websiteCostExampleQuotes = [
  {
    title: "Accra clinic, 5-page site",
    total: "GHS 4,200",
    breakdown: [
      "Custom mobile design: GHS 2,800",
      "Booking + WhatsApp CTAs: GHS 600",
      "On-page SEO & launch: GHS 800",
    ],
    timeline: "4 weeks",
  },
  {
    title: "Kumasi retailer, WhatsApp catalogue",
    total: "GHS 9,500",
    breakdown: [
      "Product catalogue (40 SKUs): GHS 4,500",
      "WhatsApp order flow: GHS 2,000",
      "MoMo via Paystack: GHS 1,500",
      "Training & launch: GHS 1,500",
    ],
    timeline: "5 weeks",
  },
  {
    title: "Tema wholesaler, full checkout store",
    total: "GHS 16,800",
    breakdown: [
      "Custom storefront: GHS 7,000",
      "MoMo + card checkout: GHS 3,800",
      "Delivery zones & admin: GHS 4,000",
      "SEO product templates: GHS 2,000",
    ],
    timeline: "9 weeks",
  },
] as const;

export const websiteCostFaqs = [
  {
    question: "How much does a website cost in Ghana in 2026?",
    answer:
      "Most SMEs pay GHS 1,800–6,000 for a professional business site, GHS 8,000–25,000+ for e-commerce with MoMo or Paystack, and GHS 800–1,800 for a simple landing page. Custom apps cost more. KayTech sends an itemised GHS quote after a free discovery call.",
  },
  {
    question: "What affects website price in Ghana?",
    answer:
      "Pages, design depth, e-commerce, SEO, copy, integrations (WhatsApp, CRM, booking), and timeline all move the number. We scope to your budget with no hidden add-ons.",
  },
  {
    question: "Are there cheap website options in Ghana?",
    answer:
      "Cheap templates can work for some brands but often lack SEO, speed, and local payments. KayTech builds affordable sites that load on mobile data and convert to calls and WhatsApp.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Most projects use milestone billing: deposit, design approval, development, and launch. Terms are in your proposal.",
  },
  {
    question: "Is SEO included in the price?",
    answer:
      "Every KayTech site includes basic on-page SEO. Ongoing SEO campaigns are scoped separately; see /seo-packages-ghana.",
  },
  {
    question: "What are ongoing costs after launch?",
    answer:
      "Budget for domain renewal, hosting, and optional maintenance (often GHS 350–1,500/month). E-commerce may need higher hosting. Gateway fees apply per sale. See our hosting & maintenance guide at /website-hosting-maintenance-ghana.",
  },
  {
    question: "How is this different from the /pricing page?",
    answer:
      "This page lists 2026 GHS ranges and examples. /pricing explains how KayTech quotes. Use both, then contact us for your exact figure.",
  },
  {
    question: "How do I get an exact quote?",
    answer:
      `Call ${siteConfig.contact.phoneDisplay}, WhatsApp ${siteConfig.contact.whatsappDisplay}, or use our contact form. Tell us what you need and we reply within one business day with a tailored proposal.`,
  },
] as const;

export const websiteCostFactors = [
  {
    title: "Number of pages & sections",
    body: "A 4-page business site costs less than a 20-page corporate site with case studies, team profiles, and blog.",
  },
  {
    title: "Design depth",
    body: "Custom design takes longer than a proven layout but usually converts better for serious businesses.",
  },
  {
    title: "E-commerce & payments",
    body: "MoMo, Paystack, catalogues, and order management add scope if you sell online in Ghana.",
  },
  {
    title: "SEO & content",
    body: "Keyword research, copy, and technical SEO increase visibility and project cost.",
  },
  {
    title: "Integrations",
    body: "WhatsApp automation, booking systems, CRM, and AI chatbots are scoped based on what you need.",
  },
  {
    title: "City & delivery",
    body: "Remote delivery is standard nationwide. On-site work in Greater Accra may add travel. See city notes under /website-cost-ghana/kumasi and related pages.",
  },
] as const;

export const websiteCostTiers = [
  {
    name: "Starter presence",
    range: "GHS 800 – 2,500",
    timeline: "2–4 weeks",
    bestFor: "New businesses, personal brands, simple service pages.",
    includes: ["Mobile-first design", "Core pages", "Contact & WhatsApp", "Basic SEO", "Launch support"],
  },
  {
    name: "Business website",
    range: "GHS 2,500 – 6,000",
    timeline: "4–8 weeks",
    bestFor: "Established companies that need leads and local Google visibility.",
    includes: ["Custom design", "Service/portfolio sections", "Stronger SEO", "Analytics", "Blog option"],
    featured: true,
  },
  {
    name: "E-commerce store",
    range: "GHS 5,000 – 15,000+",
    timeline: "6–12 weeks",
    bestFor: "Brands selling products online with MoMo and card payments.",
    includes: ["Product catalogue", "MoMo & Paystack checkout", "Order management", "WhatsApp alerts"],
  },
] as const;
