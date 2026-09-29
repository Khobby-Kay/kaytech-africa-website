import { contentImages } from "@/lib/image-seo";

export const ecommerceSpotlight = {
  quote:
    "KayTech didn't just teach theory. within two months I built my first client store with MoMo checkout and started earning from it. The hands-on support made all the difference.",
  name: "Ama K.",
  role: "Online store builder · Tema",
} as const;

export const ecommerceWhyChoose = [
  {
    title: "Proven results that drive sales",
    body: "Clients report stronger conversion after launch. clearer product pages, faster checkout, and fewer abandoned carts on mobile.",
  },
  {
    title: "Ghana-specific optimization",
    body: "MoMo, Paystack, Flutterwave, and WhatsApp ordering. built for how Ghanaians browse, pay, and buy on everyday networks.",
  },
  {
    title: "Mobile-first design philosophy",
    body: "Most Ghanaian shoppers buy on a phone. We optimise for 3G/4G, small screens, and thumb-friendly navigation.",
  },
  {
    title: "Reliable hosting and security",
    body: "SSL, secure checkout, and dependable hosting so your store stays live when customers are ready to pay.",
  },
] as const;

export const ecommerceComprehensive = [
  {
    num: "01",
    title: "Custom e-commerce platforms for Ghanaian businesses",
    body: "Your store should stand out. not look like a generic template. We design catalogues, categories, and product pages that load fast and guide buyers to checkout.",
    bullets: [
      "Sleek, brand-aligned storefront design",
      "Intuitive navigation and search",
      "SEO-ready product and category pages",
      "Admin tools to manage products and orders",
    ],
  },
  {
    num: "02",
    title: "Payment gateway integration",
    body: "Online payments are the backbone of e-commerce in Ghana. We integrate the methods your customers already trust.",
    bullets: [
      "Mobile Money (MTN, Telecel, AT)",
      "Paystack and Flutterwave for cards and bank",
      "Secure checkout with clear order confirmations",
      "WhatsApp order alerts for your team",
    ],
  },
  {
    num: "03",
    title: "Operations that scale with you",
    body: "Selling online is more than a pretty homepage. We connect inventory, orders, and customer data so you stay organised as volume grows.",
    bullets: [
      "Inventory and stock status on product pages",
      "Order tracking and delivery zone setup",
      "Customer accounts and order history (optional)",
      "CRM-friendly exports and integrations where needed",
    ],
  },
  {
    num: "04",
    title: "AI, automation & next-level e-commerce",
    body: "Stay ahead with tools that capture leads and support customers around the clock. including Teedra-style assistants on your own site.",
    bullets: [
      "AI chatbots for product questions and lead capture",
      "WhatsApp automation for orders and support",
      "Smart product recommendations",
      "Analytics to see what sells and what to fix",
    ],
  },
] as const;

export const ecommerceFaqs = [
  {
    question: "What is an e-commerce solution?",
    answer:
      "An e-commerce solution is a platform that lets you sell products or services online. typically including a storefront, payment integration, product management, and tools to track orders. KayTech builds custom stores tailored to Ghanaian businesses, not one-size-fits-all templates.",
  },
  {
    question: "Why do I need an online store in Ghana?",
    answer:
      "More customers search and buy on mobile every year. A professional store with MoMo and card payments lets you sell 24/7, reach buyers outside your physical location, and compete with brands already selling online in Accra, Kumasi, and nationwide.",
  },
  {
    question: "How can KayTech Africa help my business grow online?",
    answer:
      "We design and develop mobile-first stores with local payments, SEO-friendly product pages, WhatsApp flows, and optional AI assistants. so more visitors become paying customers. We scope every project to your products, delivery model, and budget.",
  },
  {
    question: "How much does an e-commerce site cost in Ghana?",
    answer:
      "Online stores with MoMo and Paystack checkout start at GHS 8,000 for up to about 50 products, GHS 12,000 for a growth store with order admin, and GHS 18,000 for large catalogues and delivery zones. If you only need a catalogue that sends orders to WhatsApp, that starts at GHS 6,000 (see /whatsapp-ordering-website-ghana). The full table is at /website-cost-ghana.",
  },
  {
    question: "Which mobile wallets do you support?",
    answer:
      "MTN MoMo, Telecel Cash, and AirtelTigo Money through Paystack or Flutterwave, plus cards. We design checkout so MoMo appears first for Ghanaian buyers.",
  },
  {
    question: "Can customers order on WhatsApp instead of cart checkout?",
    answer:
      "Yes. many Ghana shops use catalogue + WhatsApp first. See /whatsapp-ordering-website-ghana and our Voltic case study at /portfolio/voltic.",
  },
  {
    question: "Can you integrate Mobile Money and Paystack?",
    answer:
      "Yes. Mobile Money, Paystack, Flutterwave, and Hubtel are standard in our Ghana e-commerce builds. We configure checkout so customers see familiar payment options first.",
  },
  {
    question: "Will my store work on mobile phones?",
    answer:
      "Absolutely. We design mobile-first because most Ghanaian shoppers browse and pay on their phones. Every store is tested on real mobile devices and typical network conditions.",
  },
  {
    question: "How long does it take to launch an e-commerce website?",
    answer:
      "A focused starter store often launches in 4–8 weeks; larger catalogues or custom features may take 8–12 weeks. We agree milestones upfront so you know exactly what happens each week.",
  },
  {
    question: "Do you help market my online store?",
    answer:
      "Yes. We offer SEO, digital marketing, and landing pages as part of our growth services. so your store can rank on Google and convert paid traffic, not just sit online.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. KayTech provides post-launch support via WhatsApp, phone, and email. training your team, fixing issues, and helping you add products or features as you grow.",
  },
  {
    question: "How do I get started with KayTech Africa?",
    answer:
      "Call 024 840 8154, WhatsApp 055 992 1979, or use our contact form at /contact. Tell us what you sell, how you deliver, and how you want customers to pay. we'll reply with a clear next step.",
  },
] as const;

export const ecommercePackages = [
  {
    name: "Starter store",
    price: "From GHS 8,000",
    timeline: "4–6 weeks",
    includes: [
      "Paystack MoMo + cards",
      "Up to ~50 products",
      "WhatsApp order button",
      "Basic product SEO",
    ],
  },
  {
    name: "Growth store",
    price: "From GHS 12,000",
    timeline: "6–9 weeks",
    featured: true,
    includes: [
      "MTN · Telecel · AT wallets",
      "Order admin & SMS/WhatsApp alerts",
      "Discount codes & stock levels",
      "Product SEO templates",
    ],
  },
  {
    name: "Custom growth store",
    price: "From GHS 18,000",
    timeline: "8–12 weeks",
    includes: [
      "Larger catalogues",
      "Delivery zones & B2B enquiry",
      "Inventory & analytics",
      "AI / automation add-ons",
    ],
  },
] as const;

export const ecommerceWallets = [
  "MTN Mobile Money (MoMo)",
  "Telecel Cash",
  "AirtelTigo Money",
  "Visa & Mastercard via Paystack / Flutterwave",
] as const;

export const ecommerceWhatsAppFlow = [
  "Shopper browses products on mobile data",
  "Taps Buy on WhatsApp. chat opens with item details",
  "Your team confirms total & delivery",
  "Customer pays MoMo link or in-store pickup",
  "Optional instant Paystack checkout for repeat buyers",
] as const;

export const ecommerceDemoLink = {
  label: "See Voltic case study (WhatsApp + MoMo commerce)",
  href: "/portfolio/voltic",
} as const;

export const ecommercePageMeta = {
  title:
    "E-Commerce Development in Ghana from GHS 8,000 | KayTech Africa",
  metaDescription:
    "Online stores from GHS 8,000. MoMo, Telecel Cash, AirtelTigo, Paystack, WhatsApp orders. Packages, demo case study, and FAQs. KayTech Africa, Accra.",
  heroTitle: "Helping you sell more online in Ghana",
  heroDescription:
    "Custom online store development in Accra. Mobile Money checkout, Paystack, fast mobile UX, and platforms built for Ghanaian buyers on 3G and 4G.",
  image: contentImages.whyPayments,
};
