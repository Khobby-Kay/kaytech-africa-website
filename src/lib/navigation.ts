export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services/best-web-development-design-accra-ghana",
    label: "Service",
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
  { href: "/academy", label: "Academy" },
] as const;

/** Pages kept off the main nav but linked from footer, mobile menu, and homepage. */
export const secondaryNav = [
  { href: "/services", label: "All Services" },
  { href: "/web-design/accra-ghana", label: "Web Design Accra" },
  { href: "/web-design/kumasi-ghana", label: "Web Design Kumasi" },
  { href: "/web-design/tema-ghana", label: "Web Design Tema" },
  { href: "/web-design/takoradi-ghana", label: "Web Design Takoradi" },
  { href: "/web-design/cape-coast-ghana", label: "Web Design Cape Coast" },
  { href: "/web-design/volta-ho-hohoe-ghana", label: "Web Design Ho & Hohoe" },
  { href: "/web-design/tamale-ghana", label: "Web Design Tamale" },
  { href: "/web-design/sunyani-ghana", label: "Web Design Sunyani" },
  { href: "/industry", label: "Industry Websites" },
  { href: "/website-cost-ghana", label: "Website Cost Ghana" },
  { href: "/digital-growth-bundle", label: "Digital Growth Bundle" },
  { href: "/seo-packages-ghana", label: "SEO Packages Ghana" },
  { href: "/momo-paystack-integration-ghana", label: "MoMo & Paystack" },
  { href: "/features", label: "All Capabilities" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
] as const;

export const footerNav = {
  services: [
    { href: "/services", label: "All Services" },
    {
      href: "/services/best-web-development-design-accra-ghana",
      label: "Web Development",
    },
    {
      href: "/services/best-digital-marketing-accra-ghana",
      label: "Digital Marketing & PPC Ads",
    },
    {
      href: "/services/best-software-as-a-services-saas-accra-ghana",
      label: "Software As A Services (SAAS)",
    },
    { href: "/ai-automation", label: "AI Automation" },
    {
      href: "/services/best-seo-services-accra-ghana",
      label: "SEO Services",
    },
    {
      href: "/services/best-ecommerce-development-accra-ghana",
      label: "E-Commerce",
    },
    { href: "/features", label: "All Capabilities" },
    { href: "/pricing", label: "Pricing" },
    { href: "/seo-packages-ghana", label: "SEO Packages" },
    { href: "/digital-growth-bundle", label: "Digital Growth Bundle" },
    { href: "/momo-paystack-integration-ghana", label: "MoMo & Paystack" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/academy", label: "Academy" },
    { href: "/faq", label: "FAQ" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact Us" },
  ],
  locations: [
    { href: "/web-design/accra-ghana", label: "Accra" },
    { href: "/web-design/kumasi-ghana", label: "Kumasi" },
    { href: "/web-design/tema-ghana", label: "Tema" },
    { href: "/web-design/takoradi-ghana", label: "Takoradi" },
    { href: "/web-design/cape-coast-ghana", label: "Cape Coast" },
    { href: "/web-design/volta-ho-hohoe-ghana", label: "Ho & Hohoe" },
    { href: "/web-design/tamale-ghana", label: "Tamale" },
    { href: "/web-design/sunyani-ghana", label: "Sunyani" },
    { href: "/web-design/areas/east-legon-ghana", label: "East Legon" },
    { href: "/web-design/areas/osu-accra-ghana", label: "Osu" },
  ],
  industries: [
    { href: "/industry/church-website-design-ghana", label: "Churches" },
    { href: "/industry/school-website-design-ghana", label: "Schools" },
    { href: "/industry/restaurant-website-design-ghana", label: "Restaurants" },
    { href: "/industry/real-estate-website-design-ghana", label: "Real Estate" },
    { href: "/industry/hotel-website-design-ghana", label: "Hotels" },
    { href: "/industry/ngo-website-design-ghana", label: "NGOs" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
} as const;
