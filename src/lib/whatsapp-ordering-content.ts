import { siteConfig } from "@/lib/site";

export const whatsappOrderingMeta = {
  title: "WhatsApp Ordering Website for Ghana Shops | Catalogue + MoMo | KayTech",
  description:
    "WhatsApp ordering websites for Ghana retailers. product catalogue, one-tap chat checkout, MTN MoMo & Paystack. From GHS 6,000. KayTech Africa, Accra.",
  heroTitle: "WhatsApp ordering websites for Ghana shops",
  heroDescription:
    "Let customers browse your catalogue on mobile, order in WhatsApp, and pay with MoMo. without forcing a complex checkout your buyers will abandon.",
  priceFrom: 6000,
};

export const whatsappOrderingPackages = [
  {
    name: "Catalogue + WhatsApp",
    price: "GHS 6,000 – 9,500",
    includes: [
      "Up to 50 products",
      "WhatsApp pre-filled order messages",
      "Mobile-first design",
      "Basic SEO",
    ],
  },
  {
    name: "Catalogue + MoMo",
    price: "GHS 9,500 – 14,000",
    featured: true,
    includes: [
      "Everything in Catalogue + WhatsApp",
      "Paystack MoMo & card checkout",
      "Order notifications to your team",
      "Admin product updates",
    ],
  },
  {
    name: "Growth store",
    price: "GHS 14,000+",
    includes: [
      "Larger catalogues & categories",
      "Delivery zones",
      "Inventory flags",
      "Analytics & SEO product templates",
    ],
  },
] as const;

export const whatsappOrderingFlow = [
  "Customer finds you on Google or social → opens your mobile site",
  "Browses products with photos, prices, and stock notes",
  "Taps Order on WhatsApp. message opens with product details pre-filled",
  "Your team confirms total; customer pays via MoMo link or in-chat instructions",
  "Optional: automated Paystack checkout for self-service buyers",
] as const;

export const whatsappOrderingWallets = [
  "MTN Mobile Money (MoMo)",
  "Telecel Cash",
  "AirtelTigo Money",
  "Visa & Mastercard via Paystack",
] as const;

export const whatsappOrderingFaqs = [
  {
    question: "Why WhatsApp ordering instead of only a shopping cart?",
    answer:
      "Many Ghanaian buyers trust chat before they pay. especially for first orders. A catalogue + WhatsApp flow matches how Voltic-style stores grow: browse on mobile, confirm in chat, pay with MoMo.",
  },
  {
    question: "Can I still use full e-commerce checkout?",
    answer:
      "Yes. We often combine WhatsApp for high-touch sales and Paystack checkout for repeat buyers. See /services/best-ecommerce-development-accra-ghana.",
  },
  {
    question: "How much does a WhatsApp shop website cost?",
    answer:
      "Most projects start around GHS 6,000 for catalogue + WhatsApp and GHS 9,500+ when MoMo checkout is included. See /website-cost-ghana for the full 2026 table.",
  },
  {
    question: "Do you have an example?",
    answer:
      "See our Voltic case study. regional orders via WhatsApp commerce: /portfolio/voltic.",
  },
  {
    question: "How do I start?",
    answer: `Contact KayTech on WhatsApp ${siteConfig.contact.whatsappDisplay} with your product count and how you deliver today.`,
  },
] as const;
