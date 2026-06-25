export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/features", label: "All capabilities" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/academy", label: "Academy" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerNav = {
  product: [
    { href: "/services", label: "All Services" },
    { href: "/services/best-web-development-design-accra-ghana", label: "Web Development" },
    { href: "/ai-automation", label: "AI Automation" },
    { href: "/services/best-digital-marketing-accra-ghana", label: "Digital Marketing" },
    { href: "/services/best-seo-services-accra-ghana", label: "SEO Services" },
    { href: "/services/best-ecommerce-development-accra-ghana", label: "E-Commerce" },
    { href: "/pricing", label: "Pricing" },
    { href: "/support", label: "Support" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/academy", label: "Academy" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
} as const;
