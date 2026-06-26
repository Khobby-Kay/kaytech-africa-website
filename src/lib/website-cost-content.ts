import { siteConfig } from "@/lib/site";

export const websiteCostFaqs = [
  {
    question: "How much does a website cost in Ghana?",
    answer:
      "Most business websites in Ghana are scoped individually — not sold as one fixed price. A simple starter site for a new brand typically costs less than a full e-commerce store with MoMo, Paystack, and custom features. KayTech sends a clear, itemised quote after a free discovery call so you know exactly what you are paying for.",
  },
  {
    question: "What affects website price in Ghana?",
    answer:
      "Key factors: number of pages, custom design vs template, e-commerce or payments, SEO depth, copywriting, integrations (WhatsApp, CRM, booking), and timeline. We scope every project to your goals and budget — no hidden add-ons.",
  },
  {
    question: "Are there cheap website options in Ghana?",
    answer:
      "Very cheap templates can work for some brands, but they often lack SEO, speed, and local payment integration — which costs you leads. KayTech focuses on affordable, professional builds that rank on Google and convert visitors into calls and WhatsApp messages.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Most projects use milestones — deposit, design approval, development, and launch. We agree terms upfront in your proposal.",
  },
  {
    question: "Is SEO included in the price?",
    answer:
      "Every KayTech site includes basic on-page SEO. Dedicated SEO campaigns and ongoing optimisation are scoped separately if you want to dominate search in Accra, Kumasi, or nationwide.",
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
    body: "Custom brand-aligned design takes more time than adapting a proven layout — but converts better for serious businesses.",
  },
  {
    title: "E-commerce & payments",
    body: "MoMo, Paystack, product catalogues, and order management add scope — essential if you sell online in Ghana.",
  },
  {
    title: "SEO & content",
    body: "Keyword research, copywriting, and technical SEO increase visibility — and project investment.",
  },
  {
    title: "Integrations",
    body: "WhatsApp automation, booking systems, CRM, and AI chatbots (like Teedra) are scoped based on what you need.",
  },
] as const;

export const websiteCostTiers = [
  {
    name: "Starter presence",
    range: "Scoped affordably",
    bestFor: "New businesses, personal brands, simple service pages.",
    includes: ["Mobile-first design", "Core pages", "Contact & WhatsApp", "Basic SEO", "Launch support"],
  },
  {
    name: "Business website",
    range: "Mid-range investment",
    bestFor: "Established companies that need leads and local Google visibility.",
    includes: ["Custom design", "Service/portfolio sections", "Stronger SEO", "Analytics", "Blog option"],
    featured: true,
  },
  {
    name: "E-commerce store",
    range: "Higher investment",
    bestFor: "Brands selling products online with MoMo and card payments.",
    includes: ["Product catalogue", "MoMo & Paystack checkout", "Order management", "WhatsApp alerts"],
  },
] as const;
