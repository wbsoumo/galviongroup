export interface NavLink {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface MegaMenuDivision {
  number: string;
  name: string;
  href: string;
  category: string;
  description: string;
  services: {
    title: string;
    href: string;
  }[];
}

export const MEGA_MENU_DIVISIONS: MegaMenuDivision[] = [
  {
    number: "01",
    name: "Galvion Software Solutions",
    href: "/software",
    category: "Software Development & Infrastructure",
    description: "Scalable software systems, enterprise applications, and modern cloud infrastructure.",
    services: [
      { title: "Enterprise Applications", href: "/software/enterprise-software" },
      { title: "Web & Mobile Development", href: "/software/web-mobile-apps" },
      { title: "Cloud Solutions & Infrastructure", href: "/software/cloud-infrastructure" },
      { title: "API Integration & Automation", href: "/software/api-automation" },
      { title: "Product Engineering & SaaS", href: "/software/saas-engineering" },
    ],
  },
  {
    number: "02",
    name: "Galvion Marketing",
    href: "/marketing",
    category: "Advertising & Digital Growth",
    description: "Strategic branding, performance marketing, and data-informed digital acquisition.",
    services: [
      { title: "Digital Marketing Strategy", href: "/marketing/digital-marketing" },
      { title: "Performance Paid Acquisition", href: "/marketing/performance-marketing" },
      { title: "SEO & High-Authority Content", href: "/marketing/seo-content" },
      { title: "Corporate Brand Positioning", href: "/marketing/brand-strategy" },
      { title: "Social Media & B2B Lead Gen", href: "/marketing/social-media-leadgen" },
    ],
  },
  {
    number: "03",
    name: "Galvion Telecom",
    href: "/telecom",
    category: "Telecommunications & Connectivity",
    description: "Enterprise communication platforms, network architecture, and systems integration.",
    services: [
      { title: "Business Connectivity", href: "/telecom/business-connectivity" },
      { title: "Enterprise Communication", href: "/telecom/communication-systems" },
      { title: "Network Infrastructure Consulting", href: "/telecom/network-consulting" },
      { title: "Telecom Systems Integration", href: "/telecom/systems-integration" },
    ],
  },
  {
    number: "04",
    name: "Galvion Research & Growth",
    href: "/research",
    category: "Financial Research & Strategy",
    description: "Quantitative analysis, financial market research, and executive decision intelligence.",
    services: [
      { title: "Financial Market Research", href: "/research/market-research" },
      { title: "Quantitative Market Analysis", href: "/research/quantitative-analysis" },
      { title: "Business Intelligence & KPIs", href: "/research/business-intelligence" },
      { title: "Financial Modeling & Scenarios", href: "/research/financial-modeling" },
    ],
  },
  {
    number: "05",
    name: "Galvion Fintech",
    href: "/fintech",
    category: "Payments & Financial Technology",
    description: "Secure payment technologies, currency rate engines, and remittance platforms.",
    services: [
      { title: "Currency Exchange Solutions", href: "/fintech/currency-exchange" },
      { title: "Remittance Software Technology", href: "/fintech/cross-border-remittance" },
      { title: "Digital Payment Gateways", href: "/fintech/payment-integration" },
      { title: "Financial APIs & Reconciliation", href: "/fintech/financial-apis" },
    ],
  },
];

export const PRIMARY_NAVIGATION = [
  { title: "Home", href: "/" },
  {
    title: "About",
    href: "/about",
    subLinks: [
      { title: "About Galvion Group", href: "/about", description: "Our diversified structure and corporate heritage" },
      { title: "Vision & Mission", href: "/vision-mission", description: "Long-term principles guiding our business divisions" },
      { title: "Our Approach", href: "/approach", description: "How we engage, strategize, and execute with precision" },
    ],
  },
  {
    title: "Our Businesses",
    href: "/businesses",
    hasMegaMenu: true,
  },
  { title: "Insights", href: "/insights" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export const LEGAL_NAVIGATION = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Use", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "Accessibility Statement", href: "/accessibility" },
];
