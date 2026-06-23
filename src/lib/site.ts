import { contentImages } from "@/lib/image-seo";

export const siteConfig = {
  name: "KayTech Africa",
  shortName: "KayTech",
  tagline: "African Digital Infrastructure. Built Different.",
  description:
    "KayTech Africa is the best web design company in Ghana — AI automation, web development, SEO, e-commerce, and an academy training Africa's next generation of digital talent. Accra-based, serving Kumasi, Tema, and nationwide.",
  url: "https://www.kaytechafrica.com",
  founded: 2020,
  location: {
    line1: "Accra",
    line2: "Greater Accra Region, Ghana",
    /** Public listings (LinkedIn / Google) — remote-first, Accra-based */
    mapsUrl: "https://www.google.com/maps/search/KayTech+Africa+Accra+Ghana",
    coordinates: { lat: 5.6037, lng: -0.187 },
  },
  contact: {
    phone: "+233248408154",
    phoneDisplay: "024 840 8154",
    whatsapp: "https://wa.me/233559921979",
    whatsappDisplay: "055 992 1979",
    email: "info@kaytechafrica.com",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/kaytech-africa",
    instagram: "https://www.instagram.com/kaytech_africa",
  },
} as const;

export const services = [
  {
    icon: "Bot",
    title: "AI Automation",
    description:
      "Workflow bots, intelligent assistants, and business process automation that save hours every week.",
    tags: ["Chatbots", "RPA", "LLM Integrations"],
  },
  {
    icon: "Code2",
    title: "Web Development",
    description:
      "Blazing-fast, conversion-first websites and web apps engineered for African networks and mobile-first users.",
    tags: ["Modern Web", "E-commerce", "SaaS"],
  },
  {
    icon: "Blocks",
    title: "Web3 & Blockchain",
    description:
      "Smart contracts, tokenized systems, and decentralized apps built with security and real utility in mind.",
    tags: ["Smart Contracts", "dApps", "Wallets"],
  },
  {
    icon: "Brain",
    title: "Artificial Intelligence",
    description:
      "Custom AI models, predictive analytics, and data pipelines that turn information into competitive advantage.",
    tags: ["ML Pipelines", "Computer Vision", "NLP"],
  },
  {
    icon: "Cpu",
    title: "Robotics & IoT",
    description:
      "Connected hardware, sensor networks, and automation systems for industry, agriculture, and smart spaces.",
    tags: ["Embedded", "IoT", "Automation"],
  },
  {
    icon: "LineChart",
    title: "Digital Marketing",
    description:
      "Performance campaigns, brand strategy, and growth funnels that turn attention into measurable revenue.",
    tags: ["SEO", "Paid Media", "Analytics"],
  },
] as const;

export const academyCourses = [
  {
    slug: "web-design",
    title: "Web Design",
    duration: "8 weeks",
    level: "Beginner",
    description:
      "Master layout, typography, colour theory, and Figma — design interfaces that convert on any screen.",
    outcomes: ["UI systems", "Responsive layouts", "Design handoff"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    duration: "12 weeks",
    level: "Beginner → Intermediate",
    description:
      "HTML, CSS, JavaScript, React, and modern web frameworks — build production-ready sites from scratch to deployment.",
    outcomes: ["Full-stack basics", "APIs", "Deploy to cloud"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    duration: "6 weeks",
    level: "All levels",
    description:
      "SEO, social media, paid ads, and analytics — grow brands and businesses across African markets.",
    outcomes: ["Campaign strategy", "Content systems", "ROI tracking"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Prompt engineering, no-code automation, and AI toolchains for freelancers and business operators.",
    outcomes: ["Workflow design", "AI assistants", "Client delivery"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Fundamentals",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "User research, wireframing, prototyping, and usability testing for products people love to use.",
    outcomes: ["User flows", "Prototypes", "Usability audits"],
  },
  {
    slug: "freelance-business",
    title: "Freelance & Tech Business",
    duration: "4 weeks",
    level: "All levels",
    description:
      "Pricing, proposals, client management, and personal branding — turn skills into sustainable income.",
    outcomes: ["Portfolio", "Pricing models", "Client systems"],
  },
] as const;

export const leadership = {
  ceo: {
    name: "Aikins Armstrong",
    title: "Founder & CEO",
    bio: "Certified futurist and keynote speaker architecting African digital infrastructure — from AI middleware to the studio and academy.",
    image: contentImages.teamCeo.src,
    linkedin: "https://www.linkedin.com/in/aikins-armstrong",
  },
  team: [
    {
      name: "Amara Okonkwo",
      title: "Head of Engineering",
      image: contentImages.teamEngineering.src,
    },
    {
      name: "Kwame Asante",
      title: "Academy Director",
      image: contentImages.teamAcademy.src,
    },
  ],
} as const;

export const faqs = [
  {
    question: "What does KayTech Africa do?",
    answer:
      "We build AI automation, websites, Web3 systems, robotics, and growth infrastructure for African businesses — and run an academy training the next generation of digital talent.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Startups, SMEs, and ambitious brands across Ghana and Africa who need technology that works on mobile networks, local payment rails, and real market conditions.",
  },
  {
    question: "How do projects start?",
    answer:
      "Reach out on WhatsApp or email. We run a discovery call, scope your goals, and deliver a clear proposal — no cookie-cutter packages.",
  },
  {
    question: "Do you support MoMo and local payments?",
    answer:
      "Yes. Paystack, Flutterwave, Mobile Money, and WhatsApp commerce flows are core to how we build for African customers.",
  },
  {
    question: "What academy programs are available?",
    answer:
      "Web design, web development, digital marketing, AI automation, UI/UX, and freelance business tracks — practical cohorts taught by working practitioners.",
  },
  {
    question: "Where are you based?",
    answer:
      "Accra, Ghana. Remote-first with in-person workshops and client sessions available across Greater Accra.",
  },
] as const;

export const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "2020", label: "Founded in Accra" },
  { value: "6+", label: "Academy tracks" },
  { value: "100%", label: "Afrocentric build ethos" },
] as const;

export const principles = [
  {
    title: "Speed as a Feature",
    body: "Sites that load instantly on 3G — because slow pages kill sales in Africa.",
  },
  {
    title: "Frictionless Payments",
    body: "MoMo, Paystack, Flutterwave — built for how Africa actually pays.",
  },
  {
    title: "Conversion-First",
    body: "Pretty is nice. Profitable is better. Every pixel earns its place.",
  },
  {
    title: "Local Context",
    body: "Western templates break here. We build for Ghanaian and African realities.",
  },
] as const;
