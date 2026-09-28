/** Canonical KayTech service lineup (site-wide). */
export type CoreService = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon:
    | "Code2"
    | "Bot"
    | "ShoppingBag"
    | "LineChart"
    | "Smartphone"
    | "Database"
    | "Users"
    | "CreditCard";
  tags: readonly string[];
  /** When set, detail page lives at /services/{slug} */
  serviceSlug?: string;
};

export const coreServices: readonly CoreService[] = [
  {
    id: "web",
    title: "Web Design & Development",
    description:
      "Mobile-first websites and web apps built for speed, SEO, and conversions across Ghana.",
    href: "/services/best-web-development-design-ghana",
    serviceSlug: "best-web-development-design-ghana",
    icon: "Code2",
    tags: ["Business sites", "Web apps", "SEO-ready"],
  },
  {
    id: "ai",
    title: "AI Automation",
    description:
      "Chatbots, workflow automation, and AI assistants that capture leads and cut manual work.",
    href: "/ai-automation",
    icon: "Bot",
    tags: ["Chatbots", "Workflows", "LLM tools"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Online stores with MoMo and card checkout, WhatsApp orders, and product SEO.",
    href: "/services/best-ecommerce-development-accra-ghana",
    serviceSlug: "best-ecommerce-development-accra-ghana",
    icon: "ShoppingBag",
    tags: ["Online stores", "MoMo checkout", "Catalogues"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "SEO, paid ads, content, and landing pages tied to calls, forms, and WhatsApp leads.",
    href: "/services/best-digital-marketing-accra-ghana",
    serviceSlug: "best-digital-marketing-accra-ghana",
    icon: "LineChart",
    tags: ["SEO", "PPC", "Content"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Android and iOS apps for customers and field teams, integrated with your website and payments.",
    href: "/services/mobile-app-development-ghana",
    serviceSlug: "mobile-app-development-ghana",
    icon: "Smartphone",
    tags: ["Android", "iOS", "APIs"],
  },
  {
    id: "erp",
    title: "ERP Systems",
    description:
      "Inventory, finance, HR, and operations dashboards tailored to how your business runs in Ghana.",
    href: "/services/erp-systems-ghana",
    serviceSlug: "erp-systems-ghana",
    icon: "Database",
    tags: ["Inventory", "Finance", "Operations"],
  },
  {
    id: "crm",
    title: "CRM Development",
    description:
      "Track leads, follow-ups, and sales pipelines with WhatsApp-aware CRMs built for your team.",
    href: "/services/crm-development-ghana",
    serviceSlug: "crm-development-ghana",
    icon: "Users",
    tags: ["Leads", "Pipelines", "Support"],
  },
  {
    id: "payments",
    title: "Payment Integration",
    description:
      "Paystack, Mobile Money, and checkout flows wired into websites, apps, and internal tools.",
    href: "/momo-paystack-integration-ghana",
    icon: "CreditCard",
    tags: ["MoMo", "Paystack", "Checkout"],
  },
] as const;

export function getCoreServiceBySlug(slug: string): CoreService | undefined {
  return coreServices.find((s) => s.serviceSlug === slug);
}
