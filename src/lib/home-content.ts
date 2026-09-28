import { coreServices } from "@/lib/core-services";

export const leadingCompany = {
  title: "A web studio in Accra that builds for how Ghana buys",
  intro:
    "We design and build websites, online stores and search campaigns for businesses in Accra, Kumasi, Tema and beyond. Every build is set up for mobile data, WhatsApp enquiries and Mobile Money from day one.",
  secondary:
    "Startups, schools, churches and established brands work with us because we publish our results and quote in cedis. You talk to the people who build your site.",
} as const;

export const numberedServices = coreServices.map((service, index) => ({
  num: String(index + 1).padStart(2, "0"),
  title: service.title,
  body: service.description,
  href: service.href,
})) as readonly {
  num: string;
  title: string;
  body: string;
  href: string;
}[];

export const whyPartner = [
  {
    title: "Layouts that sell",
    body: "Every page has one job. We design around the action you want visitors to take and test it on real phones.",
  },
  {
    title: "Search built in",
    body: "Pages are structured for the terms your customers type, so Google traffic turns into calls and WhatsApp messages.",
  },
  {
    title: "High-impact conversions",
    body: "From clear CTAs to mobile-friendly flows, we help you increase sales, leads, and engagement rates.",
  },
  {
    title: "Custom solutions for every industry",
    body: "Startup or established brand, we tailor every build to your goals, your market, and your growth timeline.",
  },
] as const;

export const workingHours = {
  days: "Mon – Sat",
  hours: "9:00am – 6:00pm",
} as const;

export const whyKayTechHighlights = [
  {
    icon: "Layers",
    title: "One team, end to end",
    body: "Strategy, design, development, and launch under one roof. no agency handoffs or lost context.",
  },
  {
    icon: "Users",
    title: "Built for real businesses",
    body: "Studio-backed delivery for startups, SMEs, and growing brands across Ghana. from landing pages to full platforms.",
  },
  {
    icon: "Headphones",
    title: "Support you can reach",
    body: "WhatsApp, phone, and email access to humans who know your project. before launch and long after.",
  },
  {
    icon: "GraduationCap",
    title: "Academy-backed talent",
    body: "Our in-house Academy trains designers and developers who work on live client builds, not theory alone.",
  },
] as const;
