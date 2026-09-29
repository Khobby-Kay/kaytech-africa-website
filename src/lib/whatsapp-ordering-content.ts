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
    name: "WhatsApp + MoMo payments",
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
    name: "WhatsApp + full checkout",
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

export const whatsappOrderingFit = {
  suits: [
    "You already take most orders in WhatsApp chats and want fewer back-and-forth messages",
    "Prices change often, or buyers negotiate, so a fixed cart total does not fit",
    "You deliver yourself or by dispatch rider and confirm the fee per order",
    "Most first-time buyers want to talk to a person before they pay",
  ],
  cartBetter: [
    "You get more orders a day than your team can confirm by chat",
    "Buyers are mostly repeat customers who already trust you",
    "You sell digital products, tickets or fixed-price items with no delivery step",
    "You run paid ads and need to track purchases, not just chats",
  ],
} as const;

export const whatsappOrderingSetup = [
  {
    title: "Pre-filled order messages",
    body: "Each product has an Order on WhatsApp button. The chat opens with the product name, size or variant, price and a link back to the page, so your team never asks \u201cwhich one?\u201d.",
  },
  {
    title: "WhatsApp Business profile and quick replies",
    body: "We set up your business profile, opening hours, catalogue labels and saved replies for delivery fees, MoMo number and pickup directions.",
  },
  {
    title: "MoMo payment step",
    body: "Your team sends a Paystack payment link or your merchant MoMo number. With the payments package the link is generated from the order, so totals always match.",
  },
  {
    title: "Product pages Google can find",
    body: "Every product gets its own page with a proper title, price and photo, so people searching \u201cbuy [product] Accra\u201d land on it instead of a closed Instagram post.",
  },
  {
    title: "A catalogue your staff can update",
    body: "Change prices, mark items out of stock or add new products from a phone. No developer needed for day-to-day changes.",
  },
  {
    title: "Order tracking you can see",
    body: "WhatsApp button taps are tracked in Google Analytics, so you can see which products and which ads start conversations.",
  },
] as const;

export const whatsappOrderingNeeds = [
  "Product list with names, prices and variants (a spreadsheet is fine)",
  "Clear photos, ideally on a plain background",
  "The WhatsApp Business number orders should go to",
  "Delivery areas and fees, or pickup locations",
  "A MoMo merchant number or Paystack account (we help you open one)",
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
    question: "Do I need the WhatsApp Business API?",
    answer:
      "No. The free WhatsApp Business app works for most shops. The API only makes sense when several staff answer from one number or you want automated replies. We add it later if volume grows; see /ai-automation.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Catalogue + WhatsApp usually takes 3–5 weeks once we have your product list and photos. Adding MoMo payments adds 1–2 weeks for Paystack approval and testing.",
  },
  {
    question: "Can more than one staff member receive orders?",
    answer:
      "Yes. Orders can go to one number that several people use on linked devices, or be split by product category or branch to different numbers.",
  },
  {
    question: "Does it work with my Instagram or TikTok?",
    answer:
      "Yes. Put the catalogue link in your bio and in posts. Buyers land on the product page and tap through to WhatsApp, instead of sending \u201chow much?\u201d in your DMs.",
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
