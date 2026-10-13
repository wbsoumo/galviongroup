export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  businessOutcomes: string[];
  capabilities: string[];
}

export interface Division {
  id: string;
  number: string;
  name: string;
  slug: string;
  shortName: string;
  category: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  services: ServiceItem[];
  keyChallenges: {
    challenge: string;
    solution: string;
  }[];
  operatingPrinciples: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  statItems: {
    label: string;
    detail: string;
  }[];
}

export const DIVISIONS: Division[] = [
  {
    id: "software",
    number: "01",
    name: "Galvion Software Solutions",
    slug: "software",
    shortName: "Software Solutions",
    category: "Software Development and Digital Infrastructure",
    tagline: "Scalable Enterprise Engineering & Digital Systems",
    heroHeadline: "Architecting High-Performance Digital Infrastructure & Enterprise Systems",
    heroSubheadline: "We design and develop scalable software architectures, enterprise applications, and modern cloud infrastructure that empower organizations to modernize operations, eliminate complexity, and drive continuous digital innovation.",
    description: "We design and develop scalable software solutions, enterprise applications, and digital infrastructure that help businesses modernize operations, improve efficiency, and accelerate innovation.",
    accentColor: "#2458D3",
    accentBg: "bg-blue-50 text-blue-700 border-blue-200",
    accentBorder: "border-blue-500",
    accentText: "text-blue-600",
    statItems: [
      { label: "Engineering Scope", detail: "Full-Cycle Enterprise Architecture" },
      { label: "Deployment Standard", detail: "Multi-Cloud & Zero-Trust Readiness" },
      { label: "Delivery Focus", detail: "Mission-Critical Systems & Automation" },
    ],
    services: [
      {
        slug: "enterprise-software",
        title: "Enterprise Application Development",
        shortDesc: "Robust, scalable systems built to handle mission-critical corporate workflows with modular architectures.",
        fullDesc: "We build enterprise-grade platforms designed to unify business workflows, handle high transaction volumes, and operate with zero-downtime resiliency. Our architectures prioritize modular microservices, enterprise governance, and clean data integration.",
        iconName: "Server",
        businessOutcomes: [
          "Elimination of legacy application bottlenecks",
          "Automated cross-departmental data synchronization",
          "Enterprise-grade security and role-based access controls",
        ],
        capabilities: [
          "Custom ERP and CRM orchestration",
          "High-throughput transactional backends",
          "Enterprise service bus (ESB) integration",
          "Zero-trust security compliance",
        ],
      },
      {
        slug: "web-mobile-apps",
        title: "Website & Web Application Development",
        shortDesc: "High-performance web applications and responsive multi-platform digital products built for engagement.",
        fullDesc: "Delivering modern, responsive web experiences with lightning-fast load times, state-of-the-art frontend engineering, and seamless multi-device compatibility.",
        iconName: "Globe",
        businessOutcomes: [
          "Consistent digital experience across mobile and desktop",
          "Sub-second page speeds driving search and conversion",
          "Intuitive UI/UX minimizing user training overhead",
        ],
        capabilities: [
          "Next.js, React, and TypeScript engineering",
          "Progressive Web Apps (PWA) with offline support",
          "Cross-platform mobile frameworks",
          "Accessibility standards conforming to WCAG 2.2 AA",
        ],
      },
      {
        slug: "cloud-infrastructure",
        title: "Cloud Solutions & Infrastructure",
        shortDesc: "Scalable cloud orchestration, automated CI/CD pipelines, and robust database architecture.",
        fullDesc: "We design resilient multi-cloud architectures across AWS, Azure, and Google Cloud, ensuring elastic scalability, automated disaster recovery, and cost-efficient cloud economics.",
        iconName: "Cloud",
        businessOutcomes: [
          "High-availability architecture with 99.99% uptime objectives",
          "Predictable cloud cost governance and resource rightsizing",
          "Rapid deployment velocity via automated continuous delivery",
        ],
        capabilities: [
          "Infrastructure as Code (Terraform, CloudFormation)",
          "Container orchestration with Kubernetes and Docker",
          "Relational and distributed database architecture",
          "Automated cloud backup and failover design",
        ],
      },
      {
        slug: "api-automation",
        title: "API Development & Integration",
        shortDesc: "Secure API gateways, third-party system connections, and enterprise process automation.",
        fullDesc: "Seamlessly interconnect your software ecosystems with robust RESTful and GraphQL APIs, event-driven message queues, and automated data pipelines.",
        iconName: "Cpu",
        businessOutcomes: [
          "Unified data visibility across disparate software tools",
          "Automated manual tasks through background processing",
          "Secure partner integrations with standardized rate limits",
        ],
        capabilities: [
          "RESTful and GraphQL API architecture",
          "Webhook event streaming and message brokers (Kafka, RabbitMQ)",
          "Legacy system wrapper APIs",
          "Automated data migration and reconciliation pipelines",
        ],
      },
      {
        slug: "saas-engineering",
        title: "Product Engineering & SaaS Development",
        shortDesc: "End-to-end SaaS architecture, multi-tenant database modeling, and product strategy.",
        fullDesc: "From initial technical scoping to global product rollout, we engineer multi-tenant software-as-a-service platforms engineered for rapid scale, subscription billing, and enterprise compliance.",
        iconName: "Layers",
        businessOutcomes: [
          "Rapid time-to-market with secure multi-tenant foundation",
          "Scalable database isolation models ensuring customer privacy",
          "Frictionless billing, provisioning, and licensing workflows",
        ],
        capabilities: [
          "Multi-tenant database schema design",
          "Subscription licensing and metering gateways",
          "Automated user provisioning and onboarding workflows",
          "Continuous analytics and system telemetry integration",
        ],
      },
    ],
    keyChallenges: [
      {
        challenge: "Legacy System Fragility & Operational Silos",
        solution: "We implement modern microservices and API encapsulation layers, allowing corporate systems to modernize without disruptive operational shutdowns.",
      },
      {
        challenge: "Sprawling Cloud Costs & Unmonitored Infrastructure",
        solution: "Our infrastructure engineers apply declarative Infrastructure-as-Code and rigorous resource quotas, cutting cloud waste while hardening security.",
      },
      {
        challenge: "Fragmented Tech Stacks Hindering Scalability",
        solution: "We establish clean unified architectures with strict type safety, modular component libraries, and automated CI/CD testing suites.",
      },
    ],
    operatingPrinciples: [
      {
        title: "Architectural Rigor",
        description: "Every codebase is designed around clean architecture, clear domain boundaries, and explicit documentation.",
      },
      {
        title: "Security by Design",
        description: "Zero-trust access models, encrypted communications, and regular automated vulnerability auditing.",
      },
      {
        title: "Long-Term Maintainability",
        description: "We engineer systems that internal corporate teams can easily operate, maintain, and expand over time.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "Python", "Go", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Google Cloud", "Terraform", "Redis"],
    faqs: [
      {
        question: "How does Galvion Software Solutions handle legacy system modernization?",
        answer: "We employ the Strangler Fig pattern, systematically decoupling mission-critical workflows into modular APIs and microservices while legacy platforms continue operating without downtime.",
      },
      {
        question: "Do you provide technical consulting alongside software engineering?",
        answer: "Yes. Our senior architects provide technical discovery, architectural blueprints, database modeling, and cloud optimization roadmaps before and during development.",
      },
      {
        question: "How do you ensure code security and intellectual property rights?",
        answer: "All intellectual property and code repositories are fully owned by the client upon completion. We follow strict NDAs, zero-trust repository access, and OWASP Top 10 compliance audits.",
      },
    ],
  },
  {
    id: "marketing",
    number: "02",
    name: "Galvion Marketing",
    slug: "marketing",
    shortName: "Marketing & Growth",
    category: "Advertising, Branding and Digital Growth",
    tagline: "Strategic Brand Positioning & Performance-Driven Campaigns",
    heroHeadline: "Transforming Market Perception Through Strategic Branding & Performance Growth",
    heroSubheadline: "We combine analytical market intelligence, creative communication, and multi-channel acquisition strategies to help established and emerging businesses build lasting brand equity and drive measurable revenue growth.",
    description: "We combine creative thinking, market intelligence, and performance-driven strategies to help businesses build stronger brands, connect with audiences, and generate measurable growth.",
    accentColor: "#00A6A6",
    accentBg: "bg-teal-50 text-teal-800 border-teal-200",
    accentBorder: "border-teal-500",
    accentText: "text-teal-700",
    statItems: [
      { label: "Strategic Scope", detail: "Brand Identity & Full-Funnel Growth" },
      { label: "Methodology", detail: "Data-Informed Attribution & Creative" },
      { label: "Target Audience", detail: "B2B & High-Value Consumer Verticals" },
    ],
    services: [
      {
        slug: "digital-marketing",
        title: "Digital Marketing & Multichannel Strategy",
        shortDesc: "Holistic multi-channel campaigns connecting audience touchpoints across the entire customer journey.",
        fullDesc: "We build integrated digital marketing programs combining paid channels, owned media, and organic touchpoints into a unified corporate growth engine.",
        iconName: "Megaphone",
        businessOutcomes: [
          "Consistent brand voice across all digital channels",
          "Optimized customer acquisition cost (CAC) through attribution modeling",
          "Increased brand recall among target decision-makers",
        ],
        capabilities: [
          "Full-funnel campaign architecture",
          "Cross-platform audience segmentation",
          "Attribution modeling and marketing analytics",
          "Corporate marketing automation pipelines",
        ],
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing & Paid Advertising",
        shortDesc: "Disciplined paid acquisition across search, social, and programmatic media with strict ROI benchmarks.",
        fullDesc: "Strategic media buying with rigorous bid management, real-time attribution, and rapid creative testing to maximize conversion value while guarding budget efficiency.",
        iconName: "TrendingUp",
        businessOutcomes: [
          "Predictable lead generation volumes aligned with sales capacity",
          "Transparent ROAS reporting with multi-touch attribution",
          "Continuous testing cycles eliminating ad fatigue",
        ],
        capabilities: [
          "Google Ads (Search, Display, Performance Max)",
          "LinkedIn Ads for targeted B2B account acquisition",
          "Meta and programmatic ad networks",
          "Conversion tracking and server-side pixel integration",
        ],
      },
      {
        slug: "seo-content",
        title: "SEO & Content Strategy",
        shortDesc: "Editorial-grade content and search architecture engineered to dominate relevant organic search results.",
        fullDesc: "We combine deep technical SEO audits with high-authority editorial content creation, positioning your business as an established thought leader in competitive search landscapes.",
        iconName: "Search",
        businessOutcomes: [
          "Sustainable organic traffic compounding over time",
          "Top-ranking positions for high-intent commercial keywords",
          "Stronger domain authority and backlink equity",
        ],
        capabilities: [
          "Technical search engine optimization audits",
          "High-intent keyword taxonomy & topic clustering",
          "Editorial corporate content creation & whitepapers",
          "Core Web Vitals and site structure optimization",
        ],
      },
      {
        slug: "brand-strategy",
        title: "Brand Strategy & Positioning",
        shortDesc: "Distinct brand identities, narrative frameworks, and design systems that command industry authority.",
        fullDesc: "We craft cohesive brand positioning frameworks that differentiate your corporate identity, clarify core value propositions, and resonate with executive buyers.",
        iconName: "Award",
        businessOutcomes: [
          "Defensible market differentiation against competitors",
          "Clear brand guidelines unifying all internal and external communication",
          "Enhanced corporate credibility and stakeholder trust",
        ],
        capabilities: [
          "Corporate brand positioning & messaging hierarchies",
          "Visual identity systems (typography, color, iconography)",
          "Executive communication & editorial guidelines",
          "Brand asset governance and collateral toolkits",
        ],
      },
      {
        slug: "social-media-leadgen",
        title: "Social Media & Lead Generation",
        shortDesc: "Targeted executive thought leadership, community building, and outbound B2B lead generation.",
        fullDesc: "Engage decision-makers directly through curated social channels, structured lead generation funnels, and executive positioning programs.",
        iconName: "Share2",
        businessOutcomes: [
          "Direct pipeline contribution from corporate social channels",
          "Active engagement with key industry stakeholders",
          "Qualified meeting bookings for business development teams",
        ],
        capabilities: [
          "LinkedIn corporate presence & executive thought leadership",
          "Lead capture landing page optimization",
          "Email nurture sequences and CRM integration",
          "Audience retargeting and intent-based messaging",
        ],
      },
    ],
    keyChallenges: [
      {
        challenge: "Unfocused Ad Spend Without Clear Attribution",
        solution: "We implement server-side tracking and multi-touch attribution models so every marketing dollar is tied directly to pipeline outcomes.",
      },
      {
        challenge: "Generic Brand Image Lost in Market Noise",
        solution: "We build authoritative, editorial brand positions that elevate companies from vendors to trusted industry advisors.",
      },
      {
        challenge: "Low Lead-to-Opportunity Conversion Ratios",
        solution: "We design focused landing page experiences and high-value gated corporate assets that attract qualified enterprise decision-makers.",
      },
    ],
    operatingPrinciples: [
      {
        title: "Data-Informed Creativity",
        description: "Every campaign is rooted in competitive research, audience metrics, and quantitative validation.",
      },
      {
        title: "Commercial Alignment",
        description: "We measure success by qualified commercial pipeline and revenue impact, not vanity engagement metrics.",
      },
      {
        title: "Integrity in Messaging",
        description: "We communicate genuine value and clear facts without resorting to sensationalist claims or hype.",
      },
    ],
    techStack: ["Google Analytics 4", "Semrush", "HubSpot", "LinkedIn Campaign Manager", "Meta Ads Manager", "Figma", "Looker Studio", "BigQuery"],
    faqs: [
      {
        question: "How does Galvion Marketing collaborate with internal marketing teams?",
        answer: "We integrate smoothly as an extension of your internal marketing division, handling specialized areas such as performance campaigns, brand overhaul, or technical SEO.",
      },
      {
        question: "What reporting cadence do you provide?",
        answer: "Clients receive live dashboard access alongside bi-weekly executive performance reviews detailing spend, lead quality, CAC benchmarks, and pipeline contribution.",
      },
      {
        question: "Do you focus primarily on B2B or B2C organizations?",
        answer: "We support both B2B enterprises requiring long-cycle decision-maker engagement and high-value consumer brands seeking disciplined performance scale.",
      },
    ],
  },
  {
    id: "telecom",
    number: "03",
    name: "Galvion Telecom",
    slug: "telecom",
    shortName: "Telecom & Connectivity",
    category: "Telecommunications and Connectivity Solutions",
    tagline: "Resilient Communication Infrastructure & Network Consulting",
    heroHeadline: "Enabling Dependable Enterprise Communication & Network Infrastructure",
    heroSubheadline: "We advise on, integrate, and support high-availability business connectivity frameworks, enterprise communication platforms, and structured network architectures designed for continuous operational uptime.",
    description: "We focus on communication infrastructure, connectivity solutions, and technology-enabled telecommunications services designed to support reliable communication and connected business environments.",
    accentColor: "#14284B",
    accentBg: "bg-slate-100 text-slate-800 border-slate-300",
    accentBorder: "border-slate-600",
    accentText: "text-slate-800",
    statItems: [
      { label: "Focus Area", detail: "Enterprise Connectivity Architecture" },
      { label: "Systems Standard", detail: "Fault-Tolerant & Redundant Topologies" },
      { label: "Advisory Model", detail: "Carrier-Agnostic Infrastructure Consulting" },
    ],
    services: [
      {
        slug: "business-connectivity",
        title: "Business Connectivity Solutions",
        shortDesc: "High-bandwidth corporate connectivity planning, multi-site routing, and SD-WAN architectures.",
        fullDesc: "We design resilient corporate wide-area networks (WAN), branch office connectivity, and redundant link failovers to guarantee that enterprise locations remain perpetually connected.",
        iconName: "Radio",
        businessOutcomes: [
          "Elimination of single points of failure across enterprise locations",
          "Intelligent traffic shaping prioritizing critical VoIP and video data",
          "Carrier-neutral procurement maximizing link value and reliability",
        ],
        capabilities: [
          "SD-WAN architecture and deployment consulting",
          "Redundant dual-carrier link orchestration",
          "Site-to-site VPN and zero-trust remote branch access",
          "Bandwidth utilization analysis and link optimization",
        ],
      },
      {
        slug: "communication-systems",
        title: "Enterprise Communication Systems",
        shortDesc: "Unified communications, cloud PBX integration, and secure internal collaborative platforms.",
        fullDesc: "Modernize legacy telephony into unified communication suites combining voice, messaging, video collaboration, and CRM screen-pop integrations into a single operational interface.",
        iconName: "PhoneCall",
        businessOutcomes: [
          "Lower total cost of telephony ownership through SIP and cloud PBX",
          "Unified communication tools for remote and hybrid teams",
          "Automated call routing improving customer response speeds",
        ],
        capabilities: [
          "Cloud PBX and VoIP platform integration",
          "SIP trunking architecture and route redundancy",
          "Contact center infrastructure optimization",
          "Integration with enterprise CRM and collaboration tools",
        ],
      },
      {
        slug: "network-consulting",
        title: "Network Infrastructure Consulting",
        shortDesc: "Independent technical audits, campus topology design, and network security architecture.",
        fullDesc: "Our network engineers conduct rigorous infrastructure audits, assessing capacity limits, hardware lifecycle health, and security postures before designing scalable network upgrades.",
        iconName: "Network",
        businessOutcomes: [
          "Clear multi-year network lifecycle and hardware refresh roadmap",
          "Hardened perimeter defenses against unauthorized network intrusion",
          "Optimal switch and router configurations eliminating bottlenecks",
        ],
        capabilities: [
          "Campus and data center LAN/WAN audits",
          "VLAN segmentation and 802.1X access control planning",
          "Wireless survey, heat mapping, and coverage optimization",
          "Disaster recovery and network failover documentation",
        ],
      },
      {
        slug: "systems-integration",
        title: "Telecom Systems Integration",
        shortDesc: "Connecting telecommunications hardware, enterprise software, and cloud communications.",
        fullDesc: "We bridge communication platforms with operational backends, ensuring IoT devices, telemetric monitors, and customer service tools communicate through secure, structured protocols.",
        iconName: "Share2",
        businessOutcomes: [
          "Frictionless interoperability between legacy hardware and modern software",
          "Centralized network monitoring and incident alerting",
          "Structured deployment timelines minimizing operational disruption",
        ],
        capabilities: [
          "Hardware-to-cloud API gateway configuration",
          "SNMP and syslog centralized telemetry monitoring",
          "Emergency notification and broadcast system integration",
          "Regulatory compliance checks for telecom equipment",
        ],
      },
    ],
    keyChallenges: [
      {
        challenge: "Unplanned Network Outages Paralyzing Operations",
        solution: "We implement dynamic multi-carrier failover routing and automated link health monitors that switch traffic seamlessly in milliseconds.",
      },
      {
        challenge: "Fragmented Branch Office Communication Systems",
        solution: "We standardize corporate locations onto centralized cloud communications, giving leadership unified visibility and control.",
      },
      {
        challenge: "Carrier Vendor Lock-In & Rising Contract Fees",
        solution: "Our carrier-neutral consulting audits contracts and link utilization, securing optimal rates and flexible terms.",
      },
    ],
    operatingPrinciples: [
      {
        title: "Carrier Independence",
        description: "We provide objective, vendor-agnostic infrastructure recommendations focused solely on client reliability.",
      },
      {
        title: "Failover Redundancy",
        description: "Every mission-critical communication pathway is engineered with secondary backup routes.",
      },
      {
        title: "Transparent Scope",
        description: "We clearly articulate systems integration boundaries and operating standards without ambiguity.",
      },
    ],
    techStack: ["Cisco", "Fortinet", "Palo Alto", "Ubiquiti", "Asterisk", "FreePBX", "WireGuard", "Wireshark", "Zabbix", "Grafana"],
    faqs: [
      {
        question: "Does Galvion Telecom own physical cell towers or carrier spectrum?",
        answer: "No. Galvion Telecom provides specialized telecommunications consulting, network systems architecture, and communications systems integration. We work collaboratively with licensed carriers and equipment vendors to build optimal client networks.",
      },
      {
        question: "Can Galvion help optimize multi-branch connectivity across multiple cities?",
        answer: "Yes. We design and coordinate SD-WAN networks and secure site-to-site meshes connecting corporate headquarters, regional hubs, and remote facilities.",
      },
      {
        question: "How do you handle network maintenance and monitoring?",
        answer: "We configure centralized network telemetry dashboards and alerting frameworks, allowing client IT teams or managed service partners to monitor link health in real time.",
      },
    ],
  },
  {
    id: "research",
    number: "04",
    name: "Galvion Research & Growth",
    slug: "research",
    shortName: "Research & Growth",
    category: "Financial Research, Market Intelligence and Strategy",
    tagline: "Quantitative Analysis & Strategic Decision Intelligence",
    heroHeadline: "Empowering Strategic Decisions with Quantitative Intelligence & Market Research",
    heroSubheadline: "We deliver objective financial research, comprehensive industry intelligence, quantitative market modeling, and strategic data analytics to help corporate leaders evaluate opportunities and manage risk with confidence.",
    description: "We focus on financial research, market intelligence, quantitative analysis, and data-informed strategic insights to help organizations better understand markets, assess opportunities, and make informed decisions.",
    accentColor: "#101B35",
    accentBg: "bg-indigo-50 text-indigo-900 border-indigo-200",
    accentBorder: "border-indigo-600",
    accentText: "text-indigo-900",
    statItems: [
      { label: "Research Domain", detail: "Global Markets & Industry Verticals" },
      { label: "Analytical Approach", detail: "Quantitative Modeling & Data Synthesis" },
      { label: "Deliverable Standard", detail: "Executive Briefings & Scenario Models" },
    ],
    services: [
      {
        slug: "market-research",
        title: "Financial Market & Industry Research",
        shortDesc: "In-depth macroeconomic analysis, competitor benchmarking, and market sector evaluations.",
        fullDesc: "We produce institutional-quality research reports detailing market size, regulatory shifts, competitive dynamics, and capital flow trends across target industry sectors.",
        iconName: "BarChart3",
        businessOutcomes: [
          "Objective validation of potential market expansion strategies",
          "Comprehensive landscape mapping of direct and indirect competitors",
          "Timely identification of macro-economic tailwinds and headwinds",
        ],
        capabilities: [
          "Sector landscape mapping and TAM/SAM sizing",
          "Competitive pricing and margin benchmarking",
          "Macroeconomic trend analysis and geopolitical impact briefs",
          "Executive research briefs tailored for board presentations",
        ],
      },
      {
        slug: "quantitative-analysis",
        title: "Quantitative Market Analysis & Data Modeling",
        shortDesc: "Statistical modeling, time-series forecasting, and algorithmic valuation assessments.",
        fullDesc: "Leveraging empirical datasets and quantitative statistical models, we test hypotheses, analyze historical price movements, and build predictive risk matrices.",
        iconName: "LineChart",
        businessOutcomes: [
          "Empirical grounding for strategic business decisions",
          "Quantitative risk bounds for potential capital allocations",
          "Elimination of cognitive bias through data-driven methodologies",
        ],
        capabilities: [
          "Time-series econometric modeling and regression analysis",
          "Monte Carlo probability simulations",
          "Alternative data aggregation and signal extraction",
          "Risk-weighted scenario sensitivity assessments",
        ],
      },
      {
        slug: "business-intelligence",
        title: "Business Intelligence & Data Analytics",
        shortDesc: "Enterprise KPI dashboards, data pipeline harmonization, and automated reporting systems.",
        fullDesc: "We transform fragmented corporate data into clean, real-time executive dashboards that provide crystal-clear visibility into revenue, customer retention, and operational efficiency.",
        iconName: "PieChart",
        businessOutcomes: [
          "Single source of truth for corporate executive metrics",
          "Self-serve data exploration reducing ad-hoc IT queries",
          "Early detection of margin decay or inventory inefficiencies",
        ],
        capabilities: [
          "Data warehouse modeling (Snowflake, BigQuery, PostgreSQL)",
          "Automated ETL pipeline development and data cleaning",
          "Executive KPI dashboard design (Tableau, PowerBI, Looker)",
          "Cohort analysis and unit economics evaluation",
        ],
      },
      {
        slug: "financial-modeling",
        title: "Financial Modeling & Strategic Insights",
        shortDesc: "Scenario planning, dynamic three-statement models, and strategic capital expenditure analysis.",
        fullDesc: "We build transparent, audit-ready financial models that allow executives and investors to stress-test revenue drivers, operational costs, and capital expenditure scenarios under multiple market conditions.",
        iconName: "Calculator",
        businessOutcomes: [
          "Rigorous stress-testing of business plan assumptions",
          "Audit-ready financial projections for strategic planning",
          "Clarity on cash burn rate and break-even milestones",
        ],
        capabilities: [
          "Dynamic three-statement financial models",
          "Sensitivity and break-even scenario matrices",
          "Capital allocation and project ROI evaluations",
          "Merger and acquisition synergy modeling",
        ],
      },
    ],
    keyChallenges: [
      {
        challenge: "Decisions Based on Incomplete or Biased Market Data",
        solution: "We provide independent, third-party research that stress-tests assumptions and uncovers hidden market risks.",
      },
      {
        challenge: "Data Silos Preventing Real-Time Performance Visibility",
        solution: "We architect automated data pipelines that synthesize disparate operational metrics into unified executive dashboards.",
      },
      {
        challenge: "Inflexible Financial Models Failing in Volatile Markets",
        solution: "We build dynamic scenario models incorporating multi-variable stress tests, allowing leaders to prepare for volatile outcomes.",
      },
    ],
    operatingPrinciples: [
      {
        title: "Empirical Objectivity",
        description: "Our findings reflect verifiable data and sound methodology, never speculative hype or pre-determined outcomes.",
      },
      {
        title: "Regulatory Compliance",
        description: "We provide research and strategic analytics. We do not provide regulated individual financial advisory or manage public investment pools.",
      },
      {
        title: "Precision in Methodology",
        description: "All quantitative models include explicit documentation of assumptions, data sources, and margin-of-error bounds.",
      },
    ],
    techStack: ["Python", "Pandas", "NumPy", "R", "SQL", "Tableau", "PowerBI", "Looker", "Excel/VBA", "Snowflake", "dbt"],
    faqs: [
      {
        question: "Does Galvion Research & Growth offer regulated investment advice?",
        answer: "No. Galvion Research & Growth provides commercial market research, industry intelligence, data modeling, and strategic business consulting. We do not offer retail investment recommendations or execute securities transactions.",
      },
      {
        question: "Can your team build custom data dashboards for our proprietary internal metrics?",
        answer: "Yes. We design and deploy end-to-end business intelligence pipelines that integrate your internal ERP, CRM, and billing systems into intuitive, role-based executive dashboards.",
      },
      {
        question: "What is the typical turnaround for an in-depth sector research report?",
        answer: "Comprehensive sector studies typically take between 2 to 4 weeks, depending on data availability, depth of competitive benchmarking, and modeling complexity.",
      },
    ],
  },
  {
    id: "fintech",
    number: "05",
    name: "Galvion Fintech",
    slug: "fintech",
    shortName: "Fintech & Payments",
    category: "Digital Payments, Currency Exchange and Financial Technology",
    tagline: "Modern Transaction Infrastructure & Financial Systems",
    heroHeadline: "Building Secure Digital Payment Technologies & Financial Infrastructure",
    heroSubheadline: "We engineer secure payment gateway integrations, foreign exchange information engines, automated transaction reconciliation pipelines, and financial software systems that streamline modern commerce.",
    description: "We aim to simplify modern financial transactions through secure, efficient, technology-driven financial services and payment experiences.",
    accentColor: "#00A6A6",
    accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentBorder: "border-emerald-500",
    accentText: "text-emerald-700",
    statItems: [
      { label: "Focus Domain", detail: "Transaction Engineering & FX Technology" },
      { label: "Security Benchmark", detail: "PCI-DSS Architecture & End-to-End Encryption" },
      { label: "Integration Standard", detail: "RESTful Financial APIs & Webhooks" },
    ],
    services: [
      {
        slug: "currency-exchange",
        title: "Currency Exchange Solutions & FX Information",
        shortDesc: "Real-time foreign exchange rate feeds, currency conversion calculators, and rate analytics.",
        fullDesc: "We build real-time foreign exchange rate visualization engines, multi-currency conversion APIs, and algorithmic rate comparison tools for businesses operating across international borders.",
        iconName: "RefreshCw",
        businessOutcomes: [
          "Transparent, real-time access to interbank foreign exchange rates",
          "Automated currency conversion for international checkout workflows",
          "Historical FX rate analytics enabling smarter hedging decisions",
        ],
        capabilities: [
          "Real-time FX market data ingestion and caching",
          "Multi-currency conversion calculators and widgets",
          "Historical exchange rate trend visualization",
          "Currency risk simulation algorithms",
        ],
      },
      {
        slug: "cross-border-remittance",
        title: "Cross-Border Remittance Technology",
        shortDesc: "Software architectures for international money transfers, compliance checks, and transaction routing.",
        fullDesc: "We architect secure software platforms that power international remittance operations, featuring automated KYC/AML validation hooks, multi-corridor transaction routing, and recipient tracking.",
        iconName: "Send",
        businessOutcomes: [
          "Streamlined sender and beneficiary transaction workflows",
          "Automated compliance screening against international watchlists",
          "Real-time payment milestone tracking for cross-border transfers",
        ],
        capabilities: [
          "Remittance transaction orchestration engines",
          "Automated KYC/AML verification API integration",
          "Multi-corridor fee calculators and rate locks",
          "Beneficiary bank account validation workflows",
        ],
      },
      {
        slug: "payment-integration",
        title: "Digital Payment Integration",
        shortDesc: "Seamless checkout experiences with Stripe, Adyen, PayPal, and regional payment processors.",
        fullDesc: "We implement PCI-compliant payment integrations supporting credit cards, digital wallets (Apple Pay, Google Pay), and local payment methods across global markets.",
        iconName: "CreditCard",
        businessOutcomes: [
          "Frictionless checkout experience reducing cart abandonment",
          "Reduced PCI compliance scope via secure hosted tokenization",
          "Unified reporting across multiple acquiring banks and payment gateways",
        ],
        capabilities: [
          "Global payment gateway integration (Stripe, Adyen, Braintree)",
          "Digital wallet integration (Apple Pay, Google Pay, Alipay)",
          "Recurring subscription billing and automated dunning workflows",
          "3D Secure 2.0 (3DS) authentication implementation",
        ],
      },
      {
        slug: "financial-apis",
        title: "Financial APIs & Infrastructure",
        shortDesc: "Core banking connectivity, automated payment reconciliation, and ledger accounting software.",
        fullDesc: "We develop custom financial APIs, automated bank statement parsers, and double-entry ledger databases that automate manual accounting reconciliation for high-volume enterprises.",
        iconName: "Key",
        businessOutcomes: [
          "Automated daily reconciliation between bank feeds and internal books",
          "Elimination of manual spreadsheet transaction matching",
          "Audit-proof immutable double-entry ledger architectures",
        ],
        capabilities: [
          "Open Banking API connectivity (Plaid, Yapily, Tink)",
          "Automated bank feed parsing (MT940, CAMT.053, CSV)",
          "Double-entry bookkeeping database architecture",
          "Real-time webhook notifications for payment status updates",
        ],
      },
    ],
    keyChallenges: [
      {
        challenge: "Payment Fraud & Complex Compliance Regulations",
        solution: "We implement tokenized payment architectures, 3D Secure 2 authentication, and automated KYC/AML screening endpoints.",
      },
      {
        challenge: "Fragmented Multi-Currency Reconciliation",
        solution: "We engineer automated ledger engines that parse multiple payment gateway statements into a centralized double-entry database.",
      },
      {
        challenge: "High Cross-Border Transfer Friction & Opaque Fees",
        solution: "We build intuitive software interfaces with upfront fee disclosures, real-time tracking, and direct beneficiary routing.",
      },
    ],
    operatingPrinciples: [
      {
        title: "Security & Encryption",
        description: "All financial data is protected with end-to-end TLS 1.3 encryption, tokenization, and strict access controls.",
      },
      {
        title: "Clear Operational Scope",
        description: "We engineer software and technical infrastructure. We operate in partnership with licensed banking partners and payment institutions.",
      },
      {
        title: "Auditability",
        description: "Every transaction workflow features immutable logging and comprehensive audit trails.",
      },
    ],
    techStack: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Stripe API", "Plaid", "Adyen", "Kafka", "Docker", "AWS KMS"],
    faqs: [
      {
        question: "Is Galvion Group a licensed bank or money transmitter?",
        answer: "Galvion Fintech develops financial technology software, payment integrations, currency information systems, and transaction infrastructure. For remittance operations and money handling, we build software solutions that interface with licensed partner financial institutions and authorized money transfer operators.",
      },
      {
        question: "How do you ensure payment security and PCI-DSS compliance?",
        answer: "We utilize hosted tokenization and secure payment element iframes (such as Stripe Elements), ensuring cardholder data never touches your application servers and significantly reducing your PCI-DSS compliance burden.",
      },
      {
        question: "Can your team build automated reconciliation for our high-volume transactions?",
        answer: "Yes. We develop automated reconciliation software that matches payment gateway capture logs against bank settlement files, flagging discrepancies automatically.",
      },
    ],
  },
];
