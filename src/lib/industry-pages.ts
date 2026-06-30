import { contentImages } from "@/lib/image-seo";

export type IndustryPage = {
  slug: string;
  industryName: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroDescription: string;
  intro: string;
  features: string[];
  pricingRange: string;
  whyChoose: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedBlogSlug?: string;
  image: { src: string; alt: string };
  imageCaption: string;
};

export const industryPages: IndustryPage[] = [
  {
    slug: "church-website-design-ghana",
    industryName: "Churches",
    title: "Church Website Design Company in Ghana | KayTech Africa",
    metaDescription:
      "Professional church website design in Ghana — sermons, events, online giving, and mobile-first layouts for ministries in Accra, Kumasi, and nationwide. KayTech Africa.",
    keywords: [
      "church website design Ghana",
      "church web design Accra",
      "Christian website developer Ghana",
      "church website with online giving Ghana",
      "ministry website design Ghana",
    ],
    heroTitle: "Church website design in Ghana that grows your ministry",
    heroDescription:
      "Reach more souls online — sermons, events, giving, and WhatsApp contact built for Ghanaian congregations on mobile data.",
    intro:
      "Ghanaian churches need more than a basic homepage. Members and visitors search on phones, expect WhatsApp contact, and want sermon archives, event calendars, and secure online giving. KayTech Africa builds church websites that look trustworthy, load fast on 3G, and help your ministry stay connected between Sundays.",
    features: [
      "Sermon audio/video archive & livestream embeds",
      "Event calendar & service times",
      "Online giving (MoMo, Paystack, card)",
      "WhatsApp & call-to-action for pastoral care",
      "Leadership & ministry team profiles",
      "Mobile-first design for Ghana networks",
      "SEO for “church near me” & local search",
    ],
    pricingRange: "Typically GHS 2,000 – GHS 6,000+ depending on features",
    whyChoose: [
      {
        title: "Built for Ghanaian congregations",
        body: "MoMo-friendly giving, WhatsApp enquiry buttons, and layouts that work on everyday smartphones — not desktop-only templates.",
      },
      {
        title: "Ministry-focused structure",
        body: "Clear navigation for sermons, branches, departments, and outreach — so visitors find what they need in seconds.",
      },
      {
        title: "1914+ project experience",
        body: "KayTech brings studio-grade design and SEO to churches of every size — from single assemblies to multi-branch ministries.",
      },
      {
        title: "Ongoing support",
        body: "We train your media team and provide updates after launch so your site stays current season after season.",
      },
    ],
    faqs: [
      {
        question: "How much does a church website cost in Ghana?",
        answer:
          "Most church websites range from GHS 2,000 to GHS 6,000+ depending on pages, sermon archive, online giving, and custom design. KayTech provides a clear quote after a free discovery call — no hidden fees.",
      },
      {
        question: "Can you integrate Mobile Money for tithes and offerings?",
        answer:
          "Yes. We integrate MoMo and card payments via Paystack or Flutterwave so members can give securely from any phone.",
      },
      {
        question: "Do you build websites for churches outside Accra?",
        answer:
          "Absolutely. We serve churches in Kumasi, Tema, Takoradi, Cape Coast, and nationwide — most projects run smoothly via WhatsApp and video calls.",
      },
    ],
    relatedBlogSlug: "church-website-design-ghana",
    image: contentImages.academyLearning,
    imageCaption: "Church websites built for Ghana ministries",
  },
  {
    slug: "school-website-design-ghana",
    industryName: "Schools",
    title: "School Website Design Company in Ghana | KayTech Africa",
    metaDescription:
      "School website design in Ghana — admissions, portals, news, and SEO for basic schools, SHS, and private academies in Accra, Kumasi, and nationwide.",
    keywords: [
      "school website design Ghana",
      "school website Accra",
      "education website developer Ghana",
      "private school website Ghana",
      "school admissions website Ghana",
    ],
    heroTitle: "School website design in Ghana that drives enrolment",
    heroDescription:
      "Professional school sites with admissions, news, galleries, and parent communication — built for Ghanaian institutions.",
    intro:
      "Parents compare schools online before they visit campus. A professional school website with clear admissions info, academic programmes, and contact options builds trust and fills seats. KayTech Africa designs school websites for basic schools, SHS, private academies, and training centres across Ghana.",
    features: [
      "Online admissions & enquiry forms",
      "Academic programmes & curriculum pages",
      "News, events & term calendars",
      "Photo galleries & virtual tours",
      "Staff & leadership profiles",
      "Parent portal / student resources (scoped)",
      "SEO for “school in Accra/Kumasi” searches",
    ],
    pricingRange: "Typically GHS 2,500 – GHS 8,000+ depending on scope",
    whyChoose: [
      {
        title: "Enrolment-focused design",
        body: "Clear CTAs for admissions, campus tours, and WhatsApp enquiries — so interested parents convert while motivation is high.",
      },
      {
        title: "Mobile-first for Ghana parents",
        body: "Most parents browse on phones. Our sites load fast and read clearly on mobile data.",
      },
      {
        title: "Secure & maintainable",
        body: "Easy content updates for news and events — your admin team stays in control after launch.",
      },
      {
        title: "Nationwide delivery",
        body: "Accra, Kumasi, Tema, and regional schools — same quality from our studio-backed team.",
      },
    ],
    faqs: [
      {
        question: "How much does a school website cost in Ghana?",
        answer:
          "School websites typically range from GHS 2,500 to GHS 8,000+ based on pages, portals, and custom features. Request a free quote for your institution's exact scope.",
      },
      {
        question: "Can parents apply online through the website?",
        answer:
          "Yes. We build admission enquiry forms and can integrate application workflows scoped to your process.",
      },
      {
        question: "Do you work with international schools in Ghana?",
        answer:
          "Yes — we design for private academies, international curricula, and multi-campus institutions.",
      },
    ],
    relatedBlogSlug: "school-website-design-ghana",
    image: contentImages.courseDesign,
    imageCaption: "School websites that build trust with parents",
  },
  {
    slug: "restaurant-website-design-ghana",
    industryName: "Restaurants",
    title: "Restaurant Website Design in Ghana | KayTech Africa",
    metaDescription:
      "Restaurant website design in Ghana — menus, online ordering, MoMo payments, and WhatsApp ordering for Accra, Kumasi, and nationwide food brands.",
    keywords: [
      "restaurant website design Ghana",
      "food website Accra",
      "restaurant online ordering Ghana",
      "restaurant menu website Ghana",
      "catering website Ghana",
    ],
    heroTitle: "Restaurant website design in Ghana that fills tables",
    heroDescription:
      "Appetising menus, online ordering, MoMo checkout, and WhatsApp — built for Ghana's food businesses.",
    intro:
      "Hungry customers search on Google and order via WhatsApp. A restaurant website with mouth-watering visuals, clear menus, and one-tap ordering turns browsers into diners. KayTech builds restaurant and catering sites optimised for mobile, local SEO, and Ghana payment methods.",
    features: [
      "Digital menus with categories & pricing",
      "Online ordering & WhatsApp order links",
      "MoMo & Paystack checkout",
      "Delivery zone & hours display",
      "Google Maps & directions",
      "Reviews & social proof sections",
      "SEO for “restaurant near me” Accra/Kumasi",
    ],
    pricingRange: "Typically GHS 2,000 – GHS 10,000+ with e-commerce",
    whyChoose: [
      {
        title: "Built for Ghana ordering habits",
        body: "WhatsApp-first ordering, MoMo payments, and fast mobile pages — how Ghanaian customers actually order food.",
      },
      {
        title: "Visual storytelling",
        body: "Photography-led layouts that showcase your dishes and atmosphere — because food sells with images.",
      },
      {
        title: "Local SEO",
        body: "Rank when people search your cuisine + Accra, Osu, East Legon, or Kumasi.",
      },
      {
        title: "Scalable for chains",
        body: "Multi-location menus and branch pages for growing restaurant brands.",
      },
    ],
    faqs: [
      {
        question: "Can customers order and pay online?",
        answer:
          "Yes. We integrate MoMo, Paystack, and WhatsApp ordering flows scoped to how your kitchen operates.",
      },
      {
        question: "How much does a restaurant website cost?",
        answer:
          "Brochure-style restaurant sites start around GHS 2,000–4,000. Full online ordering with payments typically ranges GHS 5,000–10,000+. We quote after understanding your menu and operations.",
      },
    ],
    relatedBlogSlug: "restaurant-website-design-ghana",
    image: contentImages.serviceGrowth,
    imageCaption: "Restaurant websites that drive orders",
  },
  {
    slug: "real-estate-website-design-ghana",
    industryName: "Real Estate",
    title: "Real Estate Website Design in Ghana | KayTech Africa",
    metaDescription:
      "Real estate website design in Ghana — searchable property listings, lead capture, and SEO for agencies in Accra, Kumasi, and nationwide.",
    keywords: [
      "real estate website design Ghana",
      "property website Accra",
      "real estate listings website Ghana",
      "estate agent website Ghana",
      "property developer website Ghana",
    ],
    heroTitle: "Real estate website design in Ghana that generates leads",
    heroDescription:
      "Searchable listings, strong visuals, WhatsApp enquiries — for agencies and developers across Ghana.",
    intro:
      "Property buyers and diaspora investors start online. A real estate website with filterable listings, high-quality galleries, and instant enquiry capture positions your agency as professional and trustworthy. KayTech builds property sites for agencies, developers, and brokers in Accra, Kumasi, and nationwide.",
    features: [
      "Searchable & filterable property listings",
      "High-resolution galleries & virtual tours",
      "Enquiry forms & WhatsApp on every listing",
      "Agent profiles & branch pages",
      "Mortgage / payment calculator (optional)",
      "SEO for location + property type keywords",
      "Mobile-first for on-the-go buyers",
    ],
    pricingRange: "Typically GHS 4,000 – GHS 15,000+ with listing systems",
    whyChoose: [
      {
        title: "Lead capture built in",
        body: "Every listing drives calls, WhatsApp messages, and viewing requests — not just pretty photos.",
      },
      {
        title: "Diaspora-ready",
        body: "Fast, credible sites for overseas buyers who cannot visit in person before enquiring.",
      },
      {
        title: "Local market SEO",
        body: "Rank for “apartments East Legon”, “land Kumasi”, and your agency name across Ghana.",
      },
      {
        title: "Easy inventory updates",
        body: "Your team can add, mark sold, and refresh listings without developer dependency.",
      },
    ],
    faqs: [
      {
        question: "Can you build a property listing system?",
        answer:
          "Yes. We scope listing management, filters, and admin workflows based on your inventory size and team.",
      },
      {
        question: "How much does a real estate website cost in Ghana?",
        answer:
          "Agency brochure sites start around GHS 4,000. Full listing platforms with search and admin typically range GHS 8,000–15,000+. Request a tailored quote.",
      },
    ],
    relatedBlogSlug: "real-estate-website-design-ghana",
    image: contentImages.principleConvert,
    imageCaption: "Property websites that convert browsers into buyers",
  },
  {
    slug: "hotel-website-design-ghana",
    industryName: "Hotels & Hospitality",
    title: "Hotel Website Design in Ghana | KayTech Africa",
    metaDescription:
      "Hotel and hospitality website design in Ghana — booking enquiry, galleries, SEO for Accra, Kumasi, Cape Coast, and tourist destinations nationwide.",
    keywords: [
      "hotel website design Ghana",
      "guest house website Ghana",
      "hospitality website Accra",
      "hotel booking website Ghana",
      "resort website design Ghana",
    ],
    heroTitle: "Hotel website design in Ghana for hospitality brands",
    heroDescription:
      "Room galleries, booking enquiries, MoMo-ready payments, and SEO for Ghana's hospitality sector.",
    intro:
      "Travellers and event planners compare hotels online before they book. A hospitality website with stunning room galleries, clear rates, and instant WhatsApp or booking enquiry puts your property ahead of OTAs and competitors. KayTech serves hotels, guest houses, and resorts across Ghana.",
    features: [
      "Room & suite galleries with amenities",
      "Booking enquiry & availability requests",
      "Events, conferences & banquet pages",
      "MoMo / card deposit options (scoped)",
      "Google Maps, directions & contact",
      "Multilingual-ready structure",
      "SEO for “hotel Accra/Kumasi/Cape Coast”",
    ],
    pricingRange: "Typically GHS 3,500 – GHS 12,000+",
    whyChoose: [
      {
        title: "Direct bookings focus",
        body: "Reduce OTA commission dependency with a site that drives direct enquiries and reservations.",
      },
      {
        title: "Tourism & events ready",
        body: "Showcase conferences, weddings, and tour packages — key revenue for Ghana hospitality.",
      },
      {
        title: "Mobile-first travellers",
        body: "Most travel research happens on phones. Our sites load fast on mobile networks.",
      },
      {
        title: "Brand elevation",
        body: "Premium visuals and copy that match the experience you deliver on property.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate online booking?",
        answer:
          "We build enquiry-first booking flows and can integrate third-party booking engines scoped to your property management setup.",
      },
      {
        question: "Do you design for guest houses and B&Bs?",
        answer:
          "Yes — from boutique guest houses to full-service hotels and resorts.",
      },
    ],
    image: contentImages.serviceWeb,
    imageCaption: "Hospitality websites for Ghana hotels & resorts",
  },
  {
    slug: "ngo-website-design-ghana",
    industryName: "NGOs & Non-profits",
    title: "NGO Website Design in Ghana | KayTech Africa",
    metaDescription:
      "NGO and non-profit website design in Ghana — donations, impact stories, volunteer sign-up, and grant-ready credibility for organisations nationwide.",
    keywords: [
      "NGO website design Ghana",
      "nonprofit website Ghana",
      "charity website Accra",
      "donation website Ghana",
      "CSO website design Ghana",
    ],
    heroTitle: "NGO website design in Ghana that builds trust & donations",
    heroDescription:
      "Impact stories, transparent reporting, donation flows, and volunteer sign-up — for Ghanaian NGOs and CSOs.",
    intro:
      "Donors, partners, and grant makers evaluate your organisation online before they fund you. An NGO website with clear mission, impact metrics, donation options, and downloadable reports builds credibility. KayTech Africa designs sites for NGOs, foundations, and social enterprises across Ghana.",
    features: [
      "Mission, vision & impact storytelling",
      "Donation flows (MoMo, Paystack, international)",
      "Project & programme pages",
      "Volunteer & partner sign-up forms",
      "Annual reports & document downloads",
      "News & blog for updates",
      "Accessibility & mobile-first design",
    ],
    pricingRange: "Typically GHS 2,500 – GHS 8,000+ (NGO-friendly scoping)",
    whyChoose: [
      {
        title: "Grant-ready credibility",
        body: "Professional structure that partners and funders expect — clear governance, contact, and impact evidence.",
      },
      {
        title: "Donation-ready",
        body: "MoMo and card donations integrated for Ghanaian and diaspora supporters.",
      },
      {
        title: "Story-driven design",
        body: "Showcase beneficiaries and outcomes without clutter — empathy and clarity combined.",
      },
      {
        title: "Affordable scoping",
        body: "We work with NGO budgets and phase projects when needed.",
      },
    ],
    faqs: [
      {
        question: "Can you accept donations via Mobile Money?",
        answer:
          "Yes. We integrate MoMo and international card payments so supporters can give from anywhere.",
      },
      {
        question: "Do you offer discounted rates for NGOs?",
        answer:
          "We scope NGO projects individually and can phase delivery to match funding cycles. Contact us for a conversation.",
      },
    ],
    image: contentImages.whyStudio,
    imageCaption: "NGO websites that inspire action & trust",
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}

export function getAllIndustries(): IndustryPage[] {
  return industryPages;
}

export function getIndustryPath(slug: string): string {
  return `/industry/${slug}`;
}

export function getIndustryFlatPath(slug: string): string {
  return `/${slug}`;
}
