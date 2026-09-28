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
  image: { src: string; alt: string };
};

export const servicePages: ServicePage[] = [
  {
    slug: "best-ecommerce-development-accra-ghana",
    title: "E-Commerce Development in Ghana. From GHS 8,000 | KayTech Africa",
    metaDescription:
      "From GHS 8,000. mobile-first e-commerce in Accra and Ghana with MoMo, Paystack, WhatsApp orders, and SEO product pages.",
    keywords: [
      "e-commerce website developer Ghana",
      "online store development Accra",
      "online store developer Ghana",
      "e-commerce development Accra",
      "Mobile Money checkout website Ghana",
      "affordable e-commerce Ghana",
    ],
    eyebrow: "E-commerce · Accra, Ghana",
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
    title: `Web Development & Design in Ghana. ${formatPriceFromGhs(servicePriceFromGhs["best-web-development-design-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-web-development-design-ghana"].from, "project")}. custom websites nationwide, mobile-first and SEO-ready. ${studioProofLine}.`,
    keywords: [
      "web development company Ghana",
      "hire web developer Ghana",
      "custom web development Ghana",
      "web app developer Ghana",
      "web design services Ghana",
    ],
    eyebrow: "Web development & design Ghana",
    heroTitle:
      "Web design services in Ghana. custom solutions for growth, sales, and conversions",
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
    title: `Digital Marketing in Ghana. ${formatPriceFromGhs(servicePriceFromGhs["best-digital-marketing-accra-ghana"].from, "month")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-digital-marketing-accra-ghana"].from, "month")}. SEO, paid media, content, and growth funnels for Ghanaian businesses.`,
    keywords: [
      "digital marketing agency Accra",
      "digital marketing Ghana",
      "PPC ads Ghana",
      "online marketing company Ghana",
      "growth marketing Accra",
    ],
    eyebrow: "Digital marketing & PPC Ghana",
    heroTitle: "Digital marketing & PPC ads that deliver measurable results",
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
    ],
  },
  {
    slug: "best-software-as-a-services-saas-accra-ghana",
    title: `SaaS Development in Ghana. ${formatPriceFromGhs(servicePriceFromGhs["best-software-as-a-services-saas-accra-ghana"].from, "project")} | KayTech`,
    metaDescription:
      `${formatPriceFromGhs(servicePriceFromGhs["best-software-as-a-services-saas-accra-ghana"].from, "project")}. SaaS MVP builds in Accra and Ghana: product strategy, subscriptions, dashboards, and cloud deployment.`,
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
