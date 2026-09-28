import { contentImages } from "@/lib/image-seo";
import { leadership, siteConfig } from "@/lib/site";

export type TeamMemberPage = {
  slug: string;
  name: string;
  title: string;
  /** One or more paragraphs. rendered on /team/[slug] (TRUST-05) */
  bioParagraphs: string[];
  image: { src: string; alt: string };
  linkedin?: string;
  email?: string;
  credentials?: string[];
};

const teamPages: TeamMemberPage[] = [
  {
    slug: "aikins-armstrong",
    name: leadership.ceo.name,
    title: leadership.ceo.title,
    bioParagraphs: [
      "Aikins Armstrong founded KayTech Africa in Accra to build digital infrastructure that works on everyday Ghanaian networks. mobile-first websites, local payments, and practical automation for SMEs and growing brands.",
      "He leads studio strategy, client delivery, and the KayTech Academy vision: training builders with the same standards used on live client work. His focus is outcomes clients can measure. enquiries, conversions, and operational time saved. not brochure sites that never generate leads.",
      "Aikins speaks publicly on Africa's digital economy and works with teams across Greater Accra and nationwide remotely via WhatsApp, phone, and structured project milestones.",
    ],
    credentials: [
      "Founder, KayTech Africa (since 2020)",
      "Keynote speaker · digital transformation in Africa",
    ],
    image: {
      src: leadership.ceo.image,
      alt: contentImages.teamCeo.alt,
    },
    linkedin: leadership.ceo.linkedin,
    email: siteConfig.contact.email,
  },
  {
    slug: "amara-okonkwo",
    name: leadership.team[0].name,
    title: leadership.team[0].title,
    bioParagraphs: [
      "Amara Okonkwo leads engineering at KayTech Africa. from marketing sites and e-commerce stores to dashboards, APIs, and automation that must stay fast on mobile data.",
      "She sets technical standards for the studio: accessible markup, performance budgets, secure payment integrations (MoMo, Paystack, Flutterwave), and deploy pipelines that keep client sites stable after launch.",
      "Amara mentors academy developers on production practices. Git workflows, code review, and shipping iteratively so junior engineers learn how client projects actually run in Ghana.",
    ],
    credentials: [
      "Head of Engineering · KayTech Africa",
      "E-commerce & payments integration lead",
    ],
    image: {
      src: leadership.team[0].image,
      alt: contentImages.teamEngineering.alt,
    },
    email: siteConfig.contact.email,
  },
  {
    slug: "kwame-asante",
    name: leadership.team[1].name,
    title: leadership.team[1].title,
    bioParagraphs: [
      "Kwame Asante directs KayTech Academy. the studio's training arm for web design, web development, digital marketing, and SaaS fundamentals in Accra and online nationwide.",
      "He designs cohort curricula around portfolio outcomes: every learner ships real pages, completes client-style briefs, and receives mentorship from practitioners who deliver paid studio work. Beginners start from zero; advanced tracks deepen SEO, conversion design, and product thinking.",
      "Kwame coordinates admissions, instructor schedules, and graduate career support. portfolio reviews, freelance pricing guidance, and introductions to KayTech client opportunities when skills match live project needs.",
      "Before leading the academy full time, Kwame delivered web projects across retail, education, and professional services in Greater Accra. experience he folds into lesson plans so students learn what Ghanaian clients actually ask for on discovery calls.",
    ],
    credentials: [
      "Academy Director · KayTech Africa",
      "Curriculum lead · web development & digital marketing tracks",
      "On-site cohorts · Accra · plus live online cohorts",
    ],
    image: {
      src: leadership.team[1].image,
      alt: contentImages.teamAcademy.alt,
    },
    email: siteConfig.contact.email,
  },
];

export function getAllTeamMembers(): TeamMemberPage[] {
  return teamPages;
}

export function getTeamMemberBySlug(slug: string): TeamMemberPage | undefined {
  return teamPages.find((member) => member.slug === slug);
}

export function getTeamPath(slug: string): string {
  return `/team/${slug}`;
}
