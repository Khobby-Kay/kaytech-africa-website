import { contentImages } from "@/lib/image-seo";
import { clientTestimonials } from "@/lib/testimonials";
import { formatPriceFromGhs, studioProofLine } from "@/lib/trust-metrics";

export const webDevPageMeta = {
  title: "Web Development & Design in Ghana | KayTech Africa",
  metaDescription:
    `KayTech Africa. ${formatPriceFromGhs(3500, "project")}. Custom websites for growth, sales, and conversions. mobile-first, SEO-ready. ${studioProofLine}.`,
  heroTitle:
    "Web design services in Ghana. custom solutions for growth, sales, and conversions",
  heroDescription:
    "More than developers. we are your growth partners. KayTech Africa builds websites that look great, load fast on mobile data, and turn visitors into calls, WhatsApp chats, and paying customers.",
  image: contentImages.serviceWeb,
} as const;

export const webDevGrowth = {
  headline: "Grow your business and get visibility in just 1 month",
  body: "KayTech Africa is recognised among the best web development companies in Ghana. We design platforms that do not just look professional. they deliver measurable results. Whether you need more traffic, qualified leads, higher conversions, or direct sales, our web design services are built for startups, SMEs, and established organisations nationwide.",
} as const;

export const webDevWhyChooseShort = [
  "Results-driven web development",
  "Cutting-edge technology and SEO best practices",
  "Published case studies with measurable results",
  "Custom solutions tailored to your needs",
] as const;

export const webDevWhyChooseDetailed = [
  {
    title: "Results-driven web development",
    body: "We do not just build websites. we create platforms that generate leads, drive traffic, and convert visitors into customers. Every site is optimised for performance so your business thrives online.",
  },
  {
    title: "Custom solutions tailored to your needs",
    body: "Whether you are a startup, SME, or corporate brand, we design around your goals. from responsive marketing sites to e-commerce, dashboards, and SEO integration.",
  },
  {
    title: "Trusted by leading Ghanaian brands",
    body: "KayTech has delivered websites and digital systems across finance, retail, education, real estate, and more. see Melcom, Voltic, and The Alfred case studies for documented outcomes.",
  },
  {
    title: "Cutting-edge technology and SEO best practices",
    body: "Our Accra-based developers use modern frameworks and SEO fundamentals from day one. fast load times, clean structure, and mobile-first layouts that rank and convert.",
  },
] as const;

export const webDevResults = [
  {
    title: "Increased website traffic",
    body: "SEO-ready structure and content help your site rank for the searches Ghanaians use. driving more qualified visitors to your business.",
  },
  {
    title: "Boost in sales and conversions",
    body: "Conversion-focused layouts, clear CTAs, and WhatsApp or call paths turn traffic into tangible enquiries and revenue.",
  },
  {
    title: "Enhanced brand authority",
    body: "A professional, high-performing website positions your business as credible and industry-ready. online and offline.",
  },
] as const;

export const webDevComprehensive = [
  {
    num: "01",
    title: "Custom website design and development",
    body: "Your website is your digital storefront. KayTech crafts fully customised sites that reflect your brand, engage your audience, and guide visitors toward action.",
    bullets: [
      "Mobile-friendly, responsive designs for Ghanaian audiences",
      "UI/UX focused on engagement and clear navigation",
      "Fast loading speeds and SEO-ready page structure",
      "CMS integrations including WordPress where appropriate",
      "Built to convert visitors into leads, sales, and loyal customers",
    ],
  },
  {
    num: "02",
    title: "Corporate website development",
    body: "Establish authority and professionalism with corporate websites built for finance, healthcare, education, real estate, and multi-location businesses.",
    bullets: [
      "Professional layouts tailored to your industry",
      "Dashboards and client portals where needed",
      "Conversion-focused design for lead generation",
      "Case studies, testimonials, and portfolio integration",
      "Fully optimised for mobile, tablet, and desktop",
    ],
  },
  {
    num: "03",
    title: "E-commerce web development",
    body: "Sell online with scalable stores designed for Ghana. MoMo, Paystack, mobile checkout, and SEO product pages that turn browsers into buyers.",
    bullets: [
      "Mobile Money and card payment integrations",
      "Shopping cart flows optimised for conversions",
      "Fast product pages with rich SEO content",
      "Inventory, reviews, and wishlist features",
      "Platforms built to grow with your catalogue",
    ],
  },
  {
    num: "04",
    title: "Website redesign services",
    body: "Outdated site holding you back? We modernise design, improve UX, and rebuild for SEO so your online presence matches where your business is heading.",
    bullets: [
      "Modernised design aligned with your brand",
      "Improved navigation and user experience",
      "Full SEO and performance optimisation",
      "Chatbots, analytics, and CTA integrations",
      "Responsive rebuilds tested on real mobile networks",
    ],
  },
] as const;

export const webDevTestimonials = clientTestimonials;

export const webDevFaqs = [
  {
    question: "What web development services does KayTech Africa offer?",
    answer:
      "KayTech offers custom website design and development, corporate websites, e-commerce builds, website redesigns, SEO integration, and performance optimisation. all focused on sites that convert visitors into customers in Ghana.",
  },
  {
    question: "How long does it take to build a website in Ghana?",
    answer:
      "A focused business website typically takes 4–6 weeks. More complex builds. e-commerce, portals, or multi-section corporate sites. often take 8–12 weeks. We agree milestones upfront so you know what ships each week.",
  },
  {
    question: "How can I improve my website's ranking with SEO?",
    answer:
      "Start with mobile responsiveness, fast load times, clear headings, and local keywords. KayTech builds SEO into every project. on-page optimisation, technical fixes, and content structure for Accra, Kumasi, and nationwide searches.",
  },
  {
    question: "What is website maintenance and why is it necessary?",
    answer:
      "Maintenance keeps your site secure, up to date, and performing well. content updates, bug fixes, and SEO adjustments. KayTech offers post-launch support via WhatsApp, phone, and email so your site keeps delivering results.",
  },
  {
    question: "How can a professional website help my business in Ghana?",
    answer:
      "A credible, fast, mobile-friendly site builds trust instantly. especially when customers compare you on Google. KayTech designs conversion-focused websites so visitors know what you offer and how to reach you within seconds.",
  },
] as const;
