import { contentImages } from "@/lib/image-seo";

export type CityPage = {
  slug: string;
  cityName: string;
  region: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroDescription: string;
  intro: string;
  areas: string[];
  whyChoose: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  image: { src: string; alt: string };
  imageCaption: string;
};

export const cityPages: CityPage[] = [
  {
    slug: "accra-ghana",
    cityName: "Accra",
    region: "Greater Accra Region",
    title: "Best Web Design & Website Developer in Accra, Ghana | KayTech Africa",
    metaDescription:
      "KayTech Africa is Accra's trusted web design company — custom websites, e-commerce, SEO, and AI automation for businesses in East Legon, Tema, Osu, and Greater Accra. Call 024 840 8154.",
    keywords: [
      "web design Accra",
      "web designer Accra Ghana",
      "best web developer Accra",
      "website design company Accra",
      "affordable web design Accra",
      "website designer East Legon",
      "web design Osu Accra",
      "web design Tema Ghana",
    ],
    heroTitle: "Top web design company in Accra, Ghana",
    heroDescription:
      "Custom websites that rank on Google, load fast on mobile data, and turn visitors into calls and WhatsApp enquiries — built for Accra businesses.",
    intro:
      "Accra is Ghana's most competitive digital market. Whether you run a shop in Osu, a clinic in East Legon, or a corporate brand in Airport City, your website must look professional, work on every phone, and make it easy to contact you. KayTech Africa is an Accra-based web design and development studio serving Greater Accra and nationwide — 250+ projects delivered since 2020.",
    areas: [
      "East Legon",
      "Osu",
      "Cantonments",
      "Airport City",
      "Spintex",
      "Adenta",
      "Madina",
      "Tema (Greater Accra)",
      "Labone",
      "Achimota",
    ],
    whyChoose: [
      {
        title: "Accra-based, Accra-focused",
        body: "We understand how Accra customers search, browse on mobile, and pay — MoMo, Paystack, and WhatsApp built in from day one.",
      },
      {
        title: "SEO that ranks locally",
        body: "We optimize for searches like “web designer Accra”, your industry + Accra, and neighbourhood terms so the right customers find you.",
      },
      {
        title: "Conversion-first design",
        body: "Clear calls to action, click-to-call, WhatsApp buttons, and fast checkout — not brochure sites that look pretty but never generate leads.",
      },
      {
        title: "Fast delivery",
        body: "Most marketing sites launch in 2–4 weeks with milestones agreed upfront — so you start getting enquiries sooner.",
      },
    ],
    faqs: [
      {
        question: "How much does a website cost in Accra?",
        answer:
          "Cost depends on pages, features, and design depth. KayTech sends a clear proposal after a free discovery call — see our pricing approach or request a quote. Most Accra business sites are scoped affordably with no hidden fees.",
      },
      {
        question: "Do you meet clients in Accra?",
        answer:
          "Yes. We're Accra-based and can meet in person or work remotely via WhatsApp and video call — whichever suits your schedule.",
      },
      {
        question: "Can you integrate Mobile Money for my Accra business?",
        answer:
          "Absolutely. MoMo, Paystack, and Flutterwave are standard in our Accra e-commerce and payment integrations.",
      },
      {
        question: "How long until my Accra website goes live?",
        answer:
          "Typical marketing sites: 2–4 weeks. E-commerce or custom builds: 4–12 weeks depending on scope.",
      },
    ],
    image: contentImages.serviceWeb,
    imageCaption: "Websites that rank higher and sell more in Accra",
  },
  {
    slug: "kumasi-ghana",
    cityName: "Kumasi",
    region: "Ashanti Region",
    title: "Best Web Design & Website Developer in Kumasi, Ghana | KayTech Africa",
    metaDescription:
      "Affordable web design in Kumasi, Ghana. KayTech Africa builds mobile-first business websites, online stores, and SEO for Ashanti Region brands. WhatsApp 055 992 1979.",
    keywords: [
      "web design Kumasi",
      "website design Kumasi Ghana",
      "web developer Kumasi",
      "affordable website Kumasi",
      "website designer Ashanti Region",
      "e-commerce Kumasi Ghana",
      "SEO Kumasi",
    ],
    heroTitle: "Professional web design in Kumasi, Ghana",
    heroDescription:
      "Mobile-first websites and online stores for Kumasi and Ashanti Region businesses — built to rank on Google and convert on everyday Ghanaian networks.",
    intro:
      "Kumasi's economy runs on trade, services, and growing digital adoption. From Kejetia market traders going online to professional firms in Ahodwo and Asokwa, businesses need websites that work on mobile and reflect real trust. KayTech Africa serves Kumasi and the Ashanti Region remotely and on-site — with the same quality we deliver for Accra clients.",
    areas: [
      "Ahodwo",
      "Asokwa",
      "Suame",
      "Kejetia area",
      "Bantama",
      "Tafo",
      "Ayeduase",
      "KNUST area",
      "Santasi",
      "Ashanti Region nationwide",
    ],
    whyChoose: [
      {
        title: "Built for Kumasi buyers",
        body: "Fast-loading pages on 3G/4G, MoMo checkout, and WhatsApp ordering — how Ashanti Region customers actually buy online.",
      },
      {
        title: "Affordable, transparent pricing",
        body: "Clear proposals with no surprise add-ons. We scope to your budget and growth stage.",
      },
      {
        title: "SEO for Kumasi searches",
        body: "Rank for “web design Kumasi”, your service + Kumasi, and local terms that bring qualified enquiries.",
      },
      {
        title: "Remote + responsive support",
        body: "WhatsApp, phone, and video support from our Accra studio — serving Kumasi clients daily.",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses in Kumasi?",
        answer:
          "Yes. We serve Kumasi, Ahodwo, Asokwa, and all of Ashanti Region — with the same web design, e-commerce, and SEO services we offer in Accra.",
      },
      {
        question: "Can I pay in instalments?",
        answer:
          "We agree payment milestones per project — typically deposit, design approval, and launch. Discuss options on your free consultation call.",
      },
      {
        question: "Will my site work on cheap Android phones?",
        answer:
          "Yes. Every KayTech site is mobile-first and tested on typical Ghanaian devices and network speeds.",
      },
    ],
    image: contentImages.whyMobile,
    imageCaption: "Mobile-first websites for Kumasi businesses",
  },
  {
    slug: "tema-ghana",
    cityName: "Tema",
    region: "Greater Accra Region",
    title: "Best Web Design & Website Developer in Tema, Ghana | KayTech Africa",
    metaDescription:
      "Web design company serving Tema, Community 25, Harbour City & Tema New Town. Business websites, e-commerce & SEO from KayTech Africa. Call 024 840 8154.",
    keywords: [
      "web design Tema",
      "website designer Tema Ghana",
      "web developer Tema",
      "website design Community 25",
      "web design Tema New Town",
      "business website Tema",
    ],
    heroTitle: "Web design & development in Tema, Ghana",
    heroDescription:
      "Industrial, logistics, retail, and service businesses in Tema get modern websites with local payments, SEO, and lead capture — from Ghana's trusted studio.",
    intro:
      "Tema powers Ghana's port, logistics, and a fast-growing residential and retail corridor. Businesses in Community 25, Tema New Town, and Harbour City need websites that look credible to corporate clients and simple enough for local customers to use on a phone. KayTech Africa builds conversion-focused sites for Tema brands — with MoMo, Paystack, and WhatsApp built in.",
    areas: [
      "Community 25",
      "Tema New Town",
      "Harbour City",
      "Tema Community 1–12",
      "Ashaiman",
      "Michel Camp",
      "Spintex corridor",
      "Industrial Area",
      "Sakumono",
      "Greater Accra port zone",
    ],
    whyChoose: [
      {
        title: "Tema business expertise",
        body: "From logistics and import/export to retail and services — we design sites that speak to B2B and B2C buyers in the Tema corridor.",
      },
      {
        title: "Lead generation built in",
        body: "Quote forms, WhatsApp, click-to-call, and Teedra-style AI assistants so you capture enquiries 24/7.",
      },
      {
        title: "E-commerce ready",
        body: "Online catalogues, MoMo checkout, and order notifications for Tema retailers going digital.",
      },
      {
        title: "Close to Tema",
        body: "Accra-based studio — quick to meet, fast to respond, serving Tema clients every week.",
      },
    ],
    faqs: [
      {
        question: "Do you serve Tema and Community 25?",
        answer:
          "Yes. We build websites for businesses across Tema, Community 25, Ashaiman, and the wider port and industrial zone.",
      },
      {
        question: "Can you help my Tema business rank on Google?",
        answer:
          "Yes. We integrate SEO into every build and offer dedicated SEO services so you rank for Tema and industry-specific searches.",
      },
      {
        question: "How do I get started?",
        answer:
          "Call 024 840 8154, WhatsApp 055 992 1979, or use our contact form. Tell us what you sell and we'll reply with a clear next step.",
      },
    ],
    image: contentImages.principleLocal,
    imageCaption: "Digital growth for Tema & port corridor businesses",
  },
  {
    slug: "takoradi-ghana",
    cityName: "Takoradi",
    region: "Western Region",
    title: "Best Web Design & Website Developer in Takoradi, Ghana | KayTech Africa",
    metaDescription:
      "Web design in Takoradi and Sekondi-Takoradi, Ghana. KayTech Africa builds mobile-first business websites, e-commerce, and SEO for Western Region brands. Call 024 840 8154.",
    keywords: [
      "web design Takoradi",
      "website designer Takoradi Ghana",
      "web developer Sekondi-Takoradi",
      "website design Western Region Ghana",
      "affordable web design Takoradi",
    ],
    heroTitle: "Web design company serving Takoradi, Ghana",
    heroDescription:
      "Professional websites for Takoradi, Sekondi, and Western Region businesses — mobile-first, MoMo-ready, and built to rank on Google.",
    intro:
      "Takoradi and the wider Western Region are hubs for oil, gas, logistics, retail, and services. Businesses here need websites that look credible to corporate partners and work flawlessly on mobile for everyday customers. KayTech Africa serves Takoradi remotely from our Accra studio with the same quality we deliver nationwide — 250+ projects since 2020.",
    areas: [
      "Sekondi-Takoradi",
      "Takoradi Central",
      "Effia",
      "Kwesimintsim",
      "Shama",
      "Tarkwa corridor",
      "Axim",
      "Western Region",
    ],
    whyChoose: [
      {
        title: "Western Region expertise",
        body: "Sites for logistics, energy, hospitality, and retail — scoped for how Takoradi businesses sell and serve clients.",
      },
      {
        title: "Remote-first, responsive support",
        body: "WhatsApp, phone, and video calls — we serve Takoradi clients daily without you needing to travel to Accra.",
      },
      {
        title: "Mobile & MoMo ready",
        body: "Fast pages on 3G/4G with Mobile Money and Paystack checkout for Western Region buyers.",
      },
      {
        title: "SEO for local search",
        body: "Rank for “web design Takoradi”, your industry + Western Region, and city-specific terms.",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses in Takoradi?",
        answer:
          "Yes. We build websites for Takoradi, Sekondi-Takoradi, and the Western Region — with full web design, e-commerce, and SEO services.",
      },
      {
        question: "Can we meet in person?",
        answer:
          "We're Accra-based but can arrange video calls and occasional Western Region visits for larger projects. Most clients work with us via WhatsApp.",
      },
      {
        question: "How much does a website cost in Takoradi?",
        answer:
          "Pricing is scoped per project. See our website cost guide or request a free quote — we send clear proposals with no hidden fees.",
      },
    ],
    image: contentImages.serviceGrowth,
    imageCaption: "Trusted web design for Takoradi & Western Region",
  },
  {
    slug: "cape-coast-ghana",
    cityName: "Cape Coast",
    region: "Central Region",
    title: "Best Web Design & Website Developer in Cape Coast, Ghana | KayTech Africa",
    metaDescription:
      "Affordable web design in Cape Coast, Ghana. Business websites, e-commerce & SEO for Central Region tourism, education, and retail. WhatsApp 055 992 1979.",
    keywords: [
      "web design Cape Coast",
      "website designer Cape Coast Ghana",
      "web developer Central Region",
      "website design Cape Coast Central Region",
      "affordable website Cape Coast",
    ],
    heroTitle: "Web design in Cape Coast, Ghana",
    heroDescription:
      "Websites for Cape Coast tourism, education, retail, and services — built to attract visitors, capture leads, and work on every phone.",
    intro:
      "Cape Coast blends tourism, universities, fishing, and a growing SME sector. Hotels, schools, restaurants, and local brands need websites that inspire trust and make booking or contacting you effortless. KayTech Africa builds conversion-focused sites for Cape Coast and Central Region businesses — with SEO, WhatsApp, and MoMo built in.",
    areas: [
      "Cape Coast Central",
      "University of Cape Coast area",
      "Elmina",
      "Kakum corridor",
      "Mfantsiman",
      "Kasoa link road",
      "Central Region",
      "Winneba",
    ],
    whyChoose: [
      {
        title: "Tourism & hospitality ready",
        body: "Booking flows, galleries, and mobile-friendly layouts for hotels, guesthouses, and tour operators in Cape Coast.",
      },
      {
        title: "Education & institutions",
        body: "School and academy sites with clear programmes, admissions info, and parent-friendly navigation.",
      },
      {
        title: "Affordable for SMEs",
        body: "Transparent, scoped pricing — starter sites to full e-commerce without surprise add-ons.",
      },
      {
        title: "Central Region SEO",
        body: "Rank for Cape Coast and Central Region searches so local and visiting customers find you on Google.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for Cape Coast hotels and tourism?",
        answer:
          "Yes. We design hospitality sites with galleries, booking CTAs, WhatsApp integration, and mobile-first layouts ideal for tourists searching on their phones.",
      },
      {
        question: "Can you help schools in Cape Coast?",
        answer:
          "Absolutely. School websites with programmes, news, contact forms, and easy admin updates are a common KayTech project type.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Call 024 840 8154, WhatsApp 055 992 1979, or use our contact form. We'll reply with a clear scope and timeline.",
      },
    ],
    image: contentImages.principleConvert,
    imageCaption: "Websites that convert for Cape Coast businesses",
  },
  {
    slug: "volta-ho-hohoe-ghana",
    cityName: "Ho & Hohoe",
    region: "Volta Region",
    title:
      "Best Web Design in Ho, Hohoe & Volta Region, Ghana | KayTech Africa",
    metaDescription:
      "Web design in Ho, Hohoe, and Volta Region, Ghana. KayTech Africa builds mobile-first business websites, e-commerce, and SEO for Volta brands. Call 024 840 8154.",
    keywords: [
      "web design Ho Ghana",
      "web design Hohoe Ghana",
      "website designer Volta Region",
      "web developer Ho Volta",
      "website design Hohoe Volta Region",
      "affordable web design Ho",
    ],
    heroTitle: "Web design in Ho, Hohoe & Volta Region",
    heroDescription:
      "Professional websites for Ho, Hohoe, and businesses across Volta Region — mobile-first, MoMo-ready, and built to rank on Google.",
    intro:
      "The Volta Region — from Ho municipal capital to Hohoe and surrounding districts — is home to agriculture, trade, education, hospitality, and a growing SME sector. Businesses in Ho and Hohoe need websites that work on mobile, accept MoMo, and make it easy for customers to call or WhatsApp. KayTech Africa serves Volta Region clients remotely from our Accra studio with the same quality we deliver nationwide.",
    areas: [
      "Ho",
      "Hohoe",
      "Kpando",
      "Keta",
      "Aflao",
      "Sogakope",
      "Jasikan",
      "Kadjebi",
      "Volta Region",
    ],
    whyChoose: [
      {
        title: "Ho & Hohoe coverage",
        body: "One trusted studio for Ho municipal, Hohoe, and Volta districts — web design, e-commerce, and SEO without travelling to Accra.",
      },
      {
        title: "Built for Volta buyers",
        body: "Fast pages on everyday networks, WhatsApp ordering, and MoMo checkout — how Volta Region customers browse and pay.",
      },
      {
        title: "Agriculture & local trade",
        body: "Catalogues, wholesale listings, and lead capture for agribusiness, retail, and services across the region.",
      },
      {
        title: "Volta Region SEO",
        body: "Rank for “web design Ho”, “website Hohoe”, and your industry + Volta Region on Google.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses in Ho and Hohoe?",
        answer:
          "Yes. KayTech serves Ho, Hohoe, and all of Volta Region — with web design, e-commerce, SEO, and AI automation. Most projects run smoothly via WhatsApp and phone from our Accra studio.",
      },
      {
        question: "Can you help Volta Region businesses sell online?",
        answer:
          "Absolutely. We build online stores with Mobile Money, Paystack, product catalogues, and WhatsApp order alerts — ideal for retailers and traders in Ho, Hohoe, and beyond.",
      },
      {
        question: "How much does a website cost in Volta Region?",
        answer:
          "Pricing is scoped per project. See our website cost guide at /website-cost-ghana or request a free quote — we send clear proposals with no hidden fees.",
      },
      {
        question: "How do I get started?",
        answer:
          "Call 024 840 8154, WhatsApp 055 992 1979, or use our contact form. Tell us what you sell and where you operate in Volta Region — we'll reply with a clear next step.",
      },
    ],
    image: contentImages.whyStudio,
    imageCaption: "Web design for Ho, Hohoe & Volta Region businesses",
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((p) => p.slug === slug);
}

export function getAllCityPages(): CityPage[] {
  return cityPages;
}

export function getCityPath(slug: string): string {
  return `/web-design/${slug}`;
}

/** Flat SEO URLs — redirects to canonical /web-design/[slug] */
export function getCityFlatPath(slug: string): string {
  return `/web-design-${slug}`;
}
