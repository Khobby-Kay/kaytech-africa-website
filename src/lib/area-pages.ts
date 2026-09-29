import { contentImages } from "@/lib/image-seo";
import type { CityPage } from "@/lib/city-pages";

/** Accra neighbourhood & high-intent area landing pages */
export const areaPages: CityPage[] = [
  {
    slug: "east-legon-ghana",
    cityName: "East Legon",
    region: "Greater Accra",
    title: "Web Design in East Legon, Accra | From GHS 3,500 | KayTech Africa",
    metaDescription:
      "Websites for East Legon restaurants, clinics, salons, schools and property firms. Google Maps, WhatsApp booking and MoMo payments. Custom sites from GHS 3,500. KayTech Africa, Accra.",
    keywords: [
      "web design East Legon",
      "website designer East Legon Accra",
      "web developer East Legon",
      "website design East Legon",
      "restaurant website East Legon",
    ],
    heroTitle: "Web design in East Legon, Accra",
    heroDescription:
      "Websites for East Legon restaurants, clinics, salons and property firms, built so people nearby find you on Google Maps and book on WhatsApp.",
    intro:
      "Most East Legon customers find a business the same way: a search like \u201cdentist East Legon\u201d or \u201cbrunch near A&C Mall\u201d, a look at the Google Maps listing, then a tap to call or WhatsApp. The website's job is to win that moment. It needs your exact location and parking notes, opening hours, prices or a menu that loads on mobile data, and one button that starts a booking. We build East Legon sites around that path, link them to your Google Business Profile, and add MoMo deposits for bookings where no-shows cost you money. East Legon businesses often serve diaspora buyers and expatriate residents, so we write pages that make sense to someone searching from London or Houston as well as from Lagos Avenue.",
    areas: [
      "East Legon",
      "American House",
      "Lagos Avenue",
      "Boundary Road",
      "Adjiringanor",
      "Trasacco",
      "East Legon Hills",
      "Shiashie",
    ],
    whyChoose: [
      {
        title: "Restaurants and cafés",
        body: "Menu pages that load fast, table booking on WhatsApp, delivery links and a Google Maps listing with photos that match the site.",
      },
      {
        title: "Clinics, dentists and salons",
        body: "Service lists with prices, online booking with MoMo deposits to cut no-shows, and pages for each treatment so people searching for it land on the right one.",
      },
      {
        title: "Property and real estate",
        body: "Listing pages with photos, floor plans and WhatsApp enquiry per unit, written for diaspora buyers who view online before they fly in.",
      },
      {
        title: "Schools and daycares",
        body: "Admissions pages, fee schedules, term dates and an enquiry form that reaches the front office, not a shared inbox no one checks.",
      },
    ],
    faqs: [
      {
        question: "How much does a website cost for an East Legon business?",
        answer:
          "A starter site is GHS 1,800–3,500, a custom business site GHS 3,500–8,000, and an online store with MoMo checkout GHS 8,000–25,000+. East Legon projects cost the same as anywhere else in Accra. The full table is at /website-cost-ghana.",
      },
      {
        question: "Will the website help me show up on Google Maps in East Legon?",
        answer:
          "It helps, but the map ranking mostly comes from your Google Business Profile. We set up or clean up the profile, match the name, address and phone on the site exactly, add opening hours and photos, and link the two.",
      },
      {
        question: "Can customers book and pay a deposit online?",
        answer:
          "Yes. We add booking on WhatsApp or a calendar, with an optional MoMo or card deposit through Paystack. Clinics and salons use this to reduce missed appointments.",
      },
      {
        question: "Do you meet East Legon clients in person?",
        answer:
          "Most projects run on WhatsApp, phone and video calls. We can meet in person in Accra for the discovery session or the content shoot when that helps.",
      },
      {
        question: "How long does it take?",
        answer:
          "A starter site takes 2–4 weeks and a custom business site 4–8 weeks, once we have your photos, prices and text. Stores take 6–12 weeks.",
      },
    ],
    image: contentImages.serviceWeb,
    imageCaption: "Web design for East Legon businesses",
  },
  // Osu, Spintex, Adenta, Labone folded into /web-design/accra-ghana (301). CONS-05
];

export const retiredAreaSlugs = [
  "osu-accra-ghana",
  "spintex-accra-ghana",
  "adenta-accra-ghana",
  "labone-accra-ghana",
] as const;

export function getAreaBySlug(slug: string): CityPage | undefined {
  return areaPages.find((p) => p.slug === slug);
}

export function getAllAreas(): CityPage[] {
  return areaPages;
}

export function getAreaPath(slug: string): string {
  return `/web-design/areas/${slug}`;
}

export function getAreaFlatPath(slug: string): string {
  return `/web-design-${slug.replace("-accra-ghana", "").replace("-ghana", "")}-accra`;
}
