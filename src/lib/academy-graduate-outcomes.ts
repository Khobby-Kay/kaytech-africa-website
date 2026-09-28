import { academyGraduateTestimonials } from "@/lib/testimonials";

/** Capstone-style projects graduates build. URLs only when shareable with permission. */
export const academyGraduateProjects = [
  {
    graduate: "Emmanuel Acheampong",
    role: "Freelance web developer · Accra",
    projectTitle: "Multi-page service business site (capstone)",
    description:
      "Mobile-first brochure site with WhatsApp lead CTAs, service pages, and basic SEO. typical first freelance deliverable after Web Development 101.",
    stack: ["HTML", "CSS", "JavaScript", "Static hosting"],
    portfolioUrl: null as string | null,
    permissionNote: "Live client URL shared on portfolio review calls when graduate approves.",
  },
  {
    graduate: "Esther Kwarteng",
    role: "Junior web developer · Kumasi",
    projectTitle: "Local retail landing + product grid",
    description:
      "Campaign landing page with product highlights and MoMo-ready checkout handoff to WhatsApp. aligned with how Ghana SMEs sell online.",
    stack: ["Responsive layout", "Image optimization", "WhatsApp deep links"],
    portfolioUrl: null,
    permissionNote: "Screenshots available in admissions portfolio showcase.",
  },
  {
    graduate: "Jonathan Kumi",
    role: "Digital strategist · Tema",
    projectTitle: "Digital marketing strategy deck + SEO audit",
    description:
      "Capstone from Digital Marketing 101: keyword map, content calendar, and Meta ads structure for a Ghana SME scenario.",
    stack: ["SEO audit", "Content plan", "Paid social outline"],
    portfolioUrl: null,
    permissionNote: "PDF sample available on request for employers.",
  },
] as const;

export const academyGraduateOutcomesPage = {
  path: "/academy/graduate-outcomes",
  title: "Student Projects & Graduate Outcomes | KayTech Academy",
  metaDescription:
    "See what KayTech Academy graduates build. portfolio projects, career paths, and testimonials with full names. Studio-backed training outcomes in Ghana.",
  intro:
    "Prospective students ask the same question ALX and Generation applicants ask on Reddit: “Will I have proof?” This page collects graduate project types, named testimonials, and how KayTech supports first freelance clients. without inventing salary figures or fake live URLs.",
  studioAlignment: {
    headline: "Learn on the same patterns as KayTech client work",
    body: "Capstone briefs mirror studio deliverables. mobile speed, WhatsApp CTAs, and Ghana payment awareness. For published studio case studies graduates study as benchmarks, see /portfolio (Melcom, Voltic, The Alfred).",
  },
  outcomes: [
    { label: "Freelance web design", detail: "Many Web Dev 101 graduates start with GHS 1,500–4,000 brochure sites. see /website-cost-ghana for market ranges, not guaranteed income." },
    { label: "Junior dev or marketing roles", detail: "Some graduates join agencies or in-house teams; we coach CVs and portfolios, not job placement guarantees." },
    { label: "Studio pipeline", detail: "When skills match live KayTech needs, graduates may assist on client work. selective, not automatic." },
  ],
  testimonials: academyGraduateTestimonials,
  faqs: [
    {
      question: "Why aren’t all graduate sites linked here?",
      answer: "We only link live client URLs when graduates give written permission. Contact admissions for portfolio review samples.",
    },
  ],
} as const;
