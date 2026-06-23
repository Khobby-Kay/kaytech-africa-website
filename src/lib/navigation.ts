export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/features", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/academy", label: "Academy" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerNav = {
  product: [
    { href: "/features", label: "Web Development" },
    { href: "/ai-automation", label: "AI Automation" },
    { href: "/features", label: "Digital Marketing" },
    { href: "/features", label: "SEO Services" },
    { href: "/features", label: "E-Commerce" },
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
