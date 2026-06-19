/**
 * Portfolio / case studies.
 *
 * These are structured templates — replace the copy, client names, images, and
 * result metrics with real KayTech projects (with client permission) as they
 * become available. The structure is what makes them convert and what AI
 * engines and Google can cite.
 */
export type CaseStudy = {
  client: string;
  sector: string;
  location: string;
  summary: string;
  result: string;
  tags: string[];
  image: { src: string; alt: string };
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Accra retail brand",
    sector: "E-commerce",
    location: "Accra, Ghana",
    summary:
      "Built a fast, mobile-first online store with Paystack and Mobile Money checkout so customers can buy in a few taps.",
    result: "Faster checkout and more completed orders on mobile data",
    tags: ["E-commerce", "Payments", "Mobile-first"],
    image: {
      src: "/images/sections/why-payments.jpg",
      alt: "E-commerce website with Mobile Money checkout built by KayTech Africa for an Accra retail brand",
    },
  },
  {
    client: "Professional services firm",
    sector: "Web design + SEO",
    location: "Kumasi, Ghana",
    summary:
      "Redesigned a dated website into a conversion-focused site and optimised it to rank for local service searches.",
    result: "Higher local search visibility and more qualified enquiries",
    tags: ["Web design", "SEO", "Local search"],
    image: {
      src: "/images/sections/service-growth.jpg",
      alt: "SEO and web design project for a professional services firm in Kumasi by KayTech Africa",
    },
  },
  {
    client: "Service business",
    sector: "AI automation",
    location: "Tema, Ghana",
    summary:
      "Deployed an AI assistant and WhatsApp automation to answer customers instantly and capture leads around the clock.",
    result: "24/7 lead capture without adding headcount",
    tags: ["AI automation", "WhatsApp", "Lead capture"],
    image: {
      src: "/images/sections/service-ai.jpg",
      alt: "AI automation and WhatsApp chatbot built by KayTech Africa for a service business in Tema",
    },
  },
];
