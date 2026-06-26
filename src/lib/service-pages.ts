import { contentImages } from "@/lib/image-seo";

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
    slug: "best-seo-services-accra-ghana",
    title: "Best SEO Services in Accra, Ghana | KayTech Africa",
    metaDescription:
      "KayTech Africa delivers SEO services in Accra and across Ghana — keyword research, on-page SEO, technical optimization, and local search visibility for Ghanaian businesses.",
    keywords: [
      "SEO company in Ghana",
      "SEO services Accra",
      "best SEO Accra Ghana",
      "search engine optimization Ghana",
      "local SEO Accra",
    ],
    eyebrow: "SEO Ghana",
    heroTitle: "SEO services in Ghana that bring qualified leads",
    heroDescription:
      "Rank when customers search for your service in Accra, Kumasi, and nationwide. KayTech integrates SEO into every build — and offers dedicated search optimization for businesses ready to grow organic traffic.",
    intro:
      "Search engine optimization in Ghana is not about stuffing keywords into a template. It is about showing up when someone types “best web designer in Accra”, “plumber Kumasi”, or your industry plus Ghana — and earning the click with a fast, trustworthy site. KayTech Africa is an Accra-based SEO company helping businesses across Ghana rank higher and convert that visibility into enquiries.",
    image: contentImages.serviceGrowth,
    benefits: [
      "Keyword research for how Ghanaians actually search",
      "On-page SEO on every page we ship",
      "Technical SEO — speed, structure, crawlability",
      "Local SEO for Accra, Kumasi, Tema & beyond",
      "Analytics so you see what ranks and converts",
    ],
    sections: [
      {
        heading: "SEO built into web development",
        paragraphs: [
          "Every KayTech website includes SEO fundamentals: clean headings, meta titles, internal links, and mobile performance. Dedicated SEO projects go further — auditing your current site, fixing technical issues, and building content around the terms your customers use.",
        ],
      },
      {
        heading: "Local search across Ghana",
        paragraphs: [
          "We optimize for city and service combinations — web design Accra, your trade + Kumasi, affordable website Ghana — so you appear when buyers search locally, not only for generic national terms.",
        ],
      },
      {
        heading: "What our SEO work includes",
        paragraphs: ["Typical SEO engagements cover:"],
        bullets: [
          "Site audit and competitor review",
          "On-page optimization (titles, headings, content)",
          "Technical fixes (speed, indexing, schema)",
          "Google Business Profile alignment guidance",
          "Content recommendations and landing pages",
        ],
      },
    ],
  },
  {
    slug: "best-ecommerce-development-accra-ghana",
    title:
      "Top E-Commerce & Online Store Development in Accra, Ghana | KayTech Africa",
    metaDescription:
      "KayTech Africa builds affordable, mobile-first e-commerce stores in Accra and Ghana — MoMo, Paystack, WhatsApp orders, SEO product pages, and secure checkout.",
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
      "Custom online store development with MoMo, Paystack, and mobile-first checkout — built for Ghanaian buyers.",
    intro:
      "KayTech Africa develops e-commerce websites and custom online stores for brands in Accra, Kumasi, Tema, and nationwide.",
    image: contentImages.whyPayments,
    benefits: [],
    sections: [],
  },
  {
    slug: "best-web-development-design-accra-ghana",
    title: "Best Web Development & Design in Accra, Ghana | KayTech Africa",
    metaDescription:
      "KayTech Africa — top web development company in Accra. Custom business websites and web apps: mobile-first, fast on 3G, conversion-focused. 250+ projects in Ghana.",
    keywords: [
      "best web developer in Ghana",
      "web development company Accra",
      "hire web developer Ghana",
      "custom web development Ghana",
      "web app developer Ghana",
    ],
    eyebrow: "Web development Ghana",
    heroTitle: "Web development in Ghana that drives growth",
    heroDescription:
      "Custom websites and web apps — fast on mobile data, built for conversion, and scoped for startups and established brands in Accra and across Ghana.",
    intro:
      "The best web developer in Ghana builds more than pages — they build systems that load quickly, guide visitors to act, and hold up on the networks your customers actually use. KayTech Africa is an Accra-based web development studio with 250+ projects delivered for businesses nationwide, from landing pages to full platforms.",
    image: contentImages.serviceWeb,
    benefits: [
      "Mobile-first, 3G-optimised performance",
      "Custom design — not generic templates",
      "SEO-ready structure from day one",
      "Clear scope and transparent proposals",
      "Post-launch support via WhatsApp and phone",
    ],
    sections: [
      {
        heading: "Business websites that convert",
        paragraphs: [
          "We engineer each page around a job: inform, reassure, and push toward a call, form, or WhatsApp message. Layouts, CTAs, and copy structure are built for Ghanaian buyers — not copied from Western themes that break on local networks.",
        ],
      },
      {
        heading: "Web apps and custom platforms",
        paragraphs: [
          "Need dashboards, client portals, booking systems, or internal tools? We develop on modern stacks with security, maintainability, and mobile use in mind.",
        ],
      },
      {
        heading: "Our development process",
        paragraphs: ["Every project moves through:"],
        bullets: [
          "Discovery and goals alignment",
          "UX and design approval",
          "Development with regular check-ins",
          "Testing on real mobile devices and networks",
          "Launch, training, and handover",
        ],
      },
    ],
  },
  {
    slug: "best-digital-marketing-accra-ghana",
    title: "Best Digital Marketing & PPC in Accra, Ghana | KayTech Africa",
    metaDescription:
      "Digital marketing agency in Accra, Ghana — SEO, paid media, content, and growth funnels that generate leads and sales for Ghanaian businesses.",
    keywords: [
      "digital marketing agency Accra",
      "digital marketing Ghana",
      "PPC ads Ghana",
      "online marketing company Ghana",
      "growth marketing Accra",
    ],
    eyebrow: "Digital marketing Ghana",
    heroTitle: "Digital marketing that delivers measurable results",
    heroDescription:
      "Performance marketing, content systems, and funnels for Accra, Kumasi, Tema, and nationwide — tied to leads and revenue, not vanity metrics.",
    intro:
      "Digital marketing in Ghana works when it respects how people discover, trust, and buy — search, social, WhatsApp, and mobile. KayTech Africa helps businesses grow visibility and turn attention into enquiries through SEO, paid campaigns, landing pages, and analytics you can act on.",
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
          "We connect your website, ads, and follow-up paths so a click can become a conversation on WhatsApp or a booked call — the way many Ghanaian businesses actually close sales.",
        ],
      },
      {
        heading: "Paid media and PPC",
        paragraphs: [
          "Google and social ads need landing pages that match the promise in the ad. We build both — so spend goes toward qualified leads, not bounced traffic.",
        ],
      },
      {
        heading: "Content and SEO as long-term assets",
        paragraphs: [
          "Blog posts, service pages, and FAQs compound over time — ranking for searches your customers type month after month without paying per click.",
        ],
      },
    ],
  },
  {
    slug: "best-web-design-company-accra-ghana",
    title: "Best Web Design Company in Accra, Ghana | KayTech Africa",
    metaDescription:
      "KayTech Africa — best web design company in Accra and Ghana. Conversion-first UI, mobile-first layouts, and brand-aligned websites for businesses nationwide.",
    keywords: [
      "best web designer in Accra",
      "best web design company in Ghana",
      "website designer Accra",
      "affordable web design Ghana",
      "professional website design Ghana",
    ],
    eyebrow: "Web design Accra",
    heroTitle: "Web design in Accra that turns visitors into customers",
    heroDescription:
      "The best web designer in Accra builds for mobile, trust, and conversion — not just aesthetics. KayTech delivers brand-aligned sites for Ghanaian businesses.",
    intro:
      "When business owners search for the best web designer in Accra or the best web design company in Ghana, they need a partner who understands local buyers: mobile-first, impatient on slow data, and ready to WhatsApp or call when convinced. KayTech Africa designs websites that look credible, load fast, and guide visitors toward action.",
    image: contentImages.courseDesign,
    benefits: [
      "Custom UI aligned to your brand",
      "Mobile-first responsive layouts",
      "Clear visual hierarchy and CTAs",
      "Accessible, readable typography",
      "Design handoff ready for development",
    ],
    sections: [
      {
        heading: "Design for conversion, not portfolios alone",
        paragraphs: [
          "Pretty homepages that never generate leads are expensive decorations. We design around your offer, proof, and next step — so visitors know what you do and how to reach you within seconds.",
        ],
      },
      {
        heading: "Built for Ghanaian screens",
        paragraphs: [
          "Large tap targets, compressed imagery, and layouts that work on common phone sizes and network conditions — because that is how your customers will experience your brand.",
        ],
      },
      {
        heading: "From logo to full site",
        paragraphs: ["Design engagements can include:"],
        bullets: [
          "Homepage and core page layouts",
          "Service and about page systems",
          "E-commerce product and catalogue UI",
          "Brand colour and type direction",
          "Developer-ready assets and specs",
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
