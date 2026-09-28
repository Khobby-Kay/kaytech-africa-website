import type { TestimonialItem } from "@/components/ui/TestimonialCarousel";

/** Full-name client quotes. update only with written permission (TRUST-04). */
export const clientTestimonials: readonly TestimonialItem[] = [
  {
    quote:
      "KayTech built us a stunning website and SEO foundation that changed how customers find us. Within three months, enquiries increased sharply and we started receiving bulk orders from corporate clients across Ghana.",
    name: "Ama Osei",
    role: "Founder · Accra",
  },
  {
    quote:
      "They developed a sleek, responsive site that showcased our operations professionally. Their SEO work improved visibility for industry keywords. within six months we secured major contracts we would not have reached before.",
    name: "Dr. Kwame Mensah",
    role: "CEO · Kumasi",
  },
  {
    quote:
      "KayTech redesigned our customer portal and digital strategy. User satisfaction rose, self-service transactions increased, and our team spends less time on repetitive support calls.",
    name: "Angela Boadu",
    role: "Head of Digital Strategy · Accra",
  },
  {
    quote:
      "Our collaboration streamlined online operations. secure, user-friendly, and fast on mobile. SEO campaigns brought in new sign-ups and digital transactions grew significantly within the first year.",
    name: "Samuel Upton",
    role: "CTO · Tema",
  },
] as const;

export const academyGraduateTestimonials: readonly TestimonialItem[] = [
  {
    quote:
      "I joined KayTech Academy with zero web development experience. Within three months I built a functional e-commerce site and landed my first freelance client. The practical assignments and studio feedback were a game changer.",
    name: "Emmanuel Acheampong",
    role: "Freelance web developer · Accra",
  },
  {
    quote:
      "I never thought I could build a career in tech, but KayTech Academy proved me wrong. The courses are clear, the mentorship is strong, and I now work with confidence on digital projects.",
    name: "Jonathan Kumi",
    role: "Digital strategist · Tema",
  },
  {
    quote:
      "Before KayTech I struggled to find consistent work. Within weeks of finishing the web development track I had a portfolio and started receiving enquiries. The instructor support was invaluable.",
    name: "Esther Kwarteng",
    role: "Junior web developer · Kumasi",
  },
] as const;

export const homepageTestimonials: readonly TestimonialItem[] = [
  {
    quote:
      "KayTech did not just build us a website. they built a system that converts on everyday mobile data and WhatsApp.",
    name: "Ama Osei",
    role: "Retail founder · Accra",
  },
  {
    quote:
      "The academy gave me skills I could monetize within weeks. Practical projects, not theory-only slides.",
    name: "Emmanuel Acheampong",
    role: "Academy graduate · Accra",
  },
  {
    quote:
      "Finally, a tech partner that understands MoMo, Paystack, and how Ghana actually closes sales.",
    name: "Angela Boadu",
    role: "Professional services · Accra",
  },
] as const;
