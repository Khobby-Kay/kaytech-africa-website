export const momoPaystackQuickAnswer =
  "MoMo and Paystack integration on a Ghana site is usually GHS 3,000–8,000 for setup, plus gateway fees per sale. KayTech wires MTN MoMo, Telecel Cash, AirtelTigo Money, and cards into your store or donation flow.";

export const momoPaystackPricing = [
  {
    name: "Checkout on existing site",
    range: "GHS 3,000 – 5,500",
    includes: ["Paystack/Flutterwave setup", "MoMo + cards", "Test & live keys", "Receipt emails"],
  },
  {
    name: "E-commerce + payments",
    range: "GHS 8,000 – 18,000+",
    includes: ["Storefront", "Product checkout", "MoMo-first UX", "Admin order view"],
  },
  {
    name: "Donations / fees / bookings",
    range: "GHS 3,500 – 7,000",
    includes: ["Fixed-amount flows", "Church/school use cases", "MoMo prompts", "Reporting"],
  },
] as const;

export const momoPaystackSteps = [
  "Discovery: pick gateway for your volume and industry",
  "Merchant account setup guidance (Paystack / Flutterwave)",
  "Checkout UI on mobile with MoMo prominent",
  "Test transactions on real phones before go-live",
  "Handover docs for refunds, payouts, and support contacts",
] as const;

export const momoPaystackWallets = [
  { name: "MTN Mobile Money", note: "Most common retail MoMo rail in Ghana" },
  { name: "Telecel Cash", note: "Supported via Paystack mobile money channels" },
  { name: "AirtelTigo Money", note: "Where enabled on your gateway merchant account" },
  { name: "Visa & Mastercard", note: "Cards and bank channels for diaspora buyers" },
] as const;

export const momoPaystackFaqs = [
  {
    question: "How much does MoMo integration cost in Ghana?",
    answer:
      "Standalone integration on an existing site often falls in the GHS 3,000–5,500 range; full stores cost more. Gateway transaction fees are separate and set by Paystack or Flutterwave.",
  },
  {
    question: "Which payment gateway do you recommend?",
    answer:
      "Paystack and Flutterwave are both widely used. We recommend based on your volume, industry, and whether you need MoMo, cards, or both.",
  },
  {
    question: "Can customers pay with Mobile Money only?",
    answer:
      "Yes. We can configure MoMo-first checkout while keeping card options for other buyers.",
  },
  {
    question: "Does KayTech handle merchant KYC?",
    answer:
      "You complete gateway KYC as the business owner; we integrate technically once your account is approved and provide test/live checklist support.",
  },
  {
    question: "Related services?",
    answer:
      "See /whatsapp-ordering-website-ghana for chat-led shops and /services/best-ecommerce-development-accra-ghana for full stores.",
  },
] as const;
