import { contentImages } from "@/lib/image-seo";
import { leadership, siteConfig } from "@/lib/site";

export type TeamMemberPage = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: { src: string; alt: string };
  linkedin?: string;
  email?: string;
};

const teamPages: TeamMemberPage[] = [
  {
    slug: "aikins-armstrong",
    name: leadership.ceo.name,
    title: leadership.ceo.title,
    bio: leadership.ceo.bio,
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
    bio: "Leads engineering at KayTech Africa — shipping reliable web platforms, e-commerce systems, and automations for clients across Ghana.",
    image: {
      src: leadership.team[0].image,
      alt: contentImages.teamEngineering.alt,
    },
    email: siteConfig.contact.email,
  },
  {
    slug: "kwame-ante",
    name: leadership.team[1].name,
    title: leadership.team[1].title,
    bio: "Directs KayTech Academy — practical cohorts in web design, development, and digital skills for Ghana's next generation of builders.",
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
