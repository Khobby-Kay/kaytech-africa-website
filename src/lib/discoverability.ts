import { siteConfig } from "@/lib/site";

/** Paths Google often shows as brand sitelinks when structure + authority align. */
export type DiscoverLink = {
  name: string;
  path: string;
  description: string;
};

export function siteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return path === "" || path === "/" ? `${base}/` : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Primary nav targets. used in JSON-LD SiteNavigationElement + HTML site map. */
export const brandSitelinks: DiscoverLink[] = [
  {
    name: "Services",
    path: "/services",
    description: "Web design, e-commerce, SEO, marketing, and SaaS in Ghana",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    description: "Client projects and measurable case studies",
  },
  {
    name: "KayTech Academy",
    path: "/academy",
    description: "Web development and digital marketing courses in Accra",
  },
  {
    name: "Website cost guide",
    path: "/website-cost-ghana",
    description: "2026 GHS pricing ranges for Ghanaian businesses",
  },
  {
    name: "Pricing",
    path: "/pricing",
    description: "How KayTech scopes and quotes projects",
  },
  {
    name: "Blog",
    path: "/blog",
    description: "Guides on web design, SEO, and e-commerce in Ghana",
  },
  {
    name: "Contact",
    path: "/contact",
    description: "Free consultation and project quotes",
  },
  {
    name: "About",
    path: "/about",
    description: "Team, story, and studio in Accra",
  },
];

/** Newer landing pages worth pinging Search Console after deploy. */
export const indexPriorityPaths: string[] = [
  "/",
  "/services",
  "/services/mobile-app-development-ghana",
  "/services/erp-systems-ghana",
  "/services/crm-development-ghana",
  "/portfolio",
  "/academy",
  "/academy/apply",
  "/academy/web-development-course",
  "/academy/digital-marketing-course",
  "/academy/advanced-web-development-marketing-course",
  "/academy/saas-development-course",
  "/academy/online-courses",
  "/academy/graduate-outcomes",
  "/academy/scholarships-payment-plans",
  "/website-cost-ghana",
  "/website-cost-ghana/kumasi",
  "/website-cost-ghana/tema",
  "/website-cost-ghana/takoradi",
  "/whatsapp-ordering-website-ghana",
  "/website-hosting-maintenance-ghana",
  "/momo-paystack-integration-ghana",
  "/ai-automation",
  "/seo-packages-ghana",
  "/digital-growth-bundle",
  "/blog/web-development-course-fees-ghana-2026",
  "/blog/coding-bootcamps-accra-2026-comparison",
  "/blog/how-to-become-web-developer-ghana-2026",
  "/blog/top-web-design-companies-in-ghana-2026",
  "/blog/freelancer-vs-agency-web-design-ghana-2026",
  "/blog/how-to-choose-best-web-developer-ghana-2026",
  "/blog/wordpress-vs-custom-vs-shopify-ghana-2026",
];

export const agencyGrowthPaths: DiscoverLink[] = [
  {
    name: "WhatsApp ordering websites",
    path: "/whatsapp-ordering-website-ghana",
    description: "Catalogue and order flows on WhatsApp for Ghana retail",
  },
  {
    name: "Hosting & maintenance",
    path: "/website-hosting-maintenance-ghana",
    description: "Uptime, updates, and support retainers",
  },
  {
    name: "MoMo & Paystack integration",
    path: "/momo-paystack-integration-ghana",
    description: "Mobile Money and card payments on Ghanaian sites",
  },
  {
    name: "SEO packages",
    path: "/seo-packages-ghana",
    description: "Search optimisation scoped for Ghanaian markets",
  },
  {
    name: "Digital growth bundle",
    path: "/digital-growth-bundle",
    description: "Website, SEO, and automation combined",
  },
  {
    name: "AI automation",
    path: "/ai-automation",
    description: "Chatbots and workflow automation for Ghana businesses",
  },
];
