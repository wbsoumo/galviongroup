"use client";

import React from "react";

export interface EnterprisePartner {
  name: string;
  country: string;
  countryCode: "IN" | "VN" | "TH" | "UAE" | "QA";
  countryFlag: string;
  category: string;
  logo: React.ReactNode;
}

export const ENTERPRISE_PARTNERS: EnterprisePartner[] = [
  // --- INDIA ---
  {
    name: "Tata (TCS)",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "IT & Digital Systems",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#005A9C" />
        <path d="M7 8.5h10v2.2H13.2v6.8h-2.4v-6.8H7V8.5z" fill="#FFFFFF" />
        <path d="M8 8c1.5-.6 3.2-.8 4-.8s2.5.2 4 .8" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
  // --- VIETNAM ---
  {
    name: "Viettel Group",
    country: "Vietnam",
    countryCode: "VN",
    countryFlag: "🇻🇳",
    category: "Telecom & Cloud",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#EE0033" />
        <path d="M7.5 13.2c0-2.3 1.7-4.2 4.2-4.2 1.4 0 2.4.5 3.3 1.4v-1.8c-1-.6-2.1-.9-3.3-.9-3.3 0-5.6 2.5-5.6 5.5s2.3 5.5 5.6 5.5c1.2 0 2.3-.3 3.3-.9v-1.8c-.9.9-1.9 1.4-3.3 1.4-2.5 0-4.2-1.9-4.2-4.2z" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- THAILAND ---
  {
    name: "PTT Group",
    country: "Thailand",
    countryCode: "TH",
    countryFlag: "🇹🇭",
    category: "Energy & Infrastructure",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0054A6" />
        <path d="M12 5.5c0 2.8-2.8 4.2-2.8 7 0 1.8 1.2 3.2 2.8 3.2s2.8-1.4 2.8-3.2c0-2.8-2.8-4.2-2.8-7z" fill="#00A3E0" />
        <path d="M12 8.2c0 1.8-1.4 2.8-1.4 4.5 0 1 .6 1.8 1.4 1.8s1.4-.8 1.4-1.8c0-1.7-1.4-2.7-1.4-4.5z" fill="#ED1C24" />
        <circle cx="12" cy="13.8" r="0.9" fill="#FFD100" />
      </svg>
    ),
  },
  // --- DUBAI / UAE ---
  {
    name: "Emirates",
    country: "Dubai",
    countryCode: "UAE",
    countryFlag: "🇦🇪",
    category: "Aviation & Logistics",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <rect x="2.5" y="3" width="19" height="18" rx="4" fill="#D71921" />
        <path d="M6 14.5c1-2.5 2-5 5-5 1.8 0 2.8.8 2.8 2.5v3.5m-2.8-3.5c1-1.8 2.5-2.5 4.5-2.5v5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7.5" r="1" fill="#FFFFFF" />
        <circle cx="15.5" cy="7.5" r="1" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- QATAR ---
  {
    name: "Qatar Airways",
    country: "Qatar",
    countryCode: "QA",
    countryFlag: "🇶🇦",
    category: "Aviation & Global Cargo",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#5C0632" />
        <path d="M9.5 6.5l2.5 5 2.5-5M12 11.5v5.5l-2-2m2 2l2-2" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 7.5l2.5 4 2.5-4" fill="#FFFFFF" fillOpacity="0.25" />
      </svg>
    ),
  },
  // --- INDIA ---
  {
    name: "Reliance Jio",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "5G & Telecom Mesh",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#E31837" />
        <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif">Jio</text>
      </svg>
    ),
  },
  // --- VIETNAM ---
  {
    name: "VinFast",
    country: "Vietnam",
    countryCode: "VN",
    countryFlag: "🇻🇳",
    category: "Smart Mobility & Tech",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#181A26" stroke="#2E3245" strokeWidth="0.8" />
        <path d="M6 8.5l6 7.5 6-7.5-2.2-.4L12 12.8 8.2 8.1 6 8.5z" fill="#E02424" />
        <path d="M7.5 9.8l4.5 5.5 4.5-5.5-1.5-.3L12 12.6l-3-3.1-1.5.3z" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- THAILAND ---
  {
    name: "True Corporation",
    country: "Thailand",
    countryCode: "TH",
    countryFlag: "🇹🇭",
    category: "Digital Telecom & Media",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0C0E1A" />
        <circle cx="9.5" cy="12" r="4.2" stroke="#EE3124" strokeWidth="1.6" />
        <circle cx="14.5" cy="12" r="4.2" stroke="#00A3E0" strokeWidth="1.6" />
        <circle cx="12" cy="9.8" r="3.2" stroke="#F7941D" strokeWidth="1.3" />
      </svg>
    ),
  },
  // --- DUBAI / UAE ---
  {
    name: "e& (Etisalat)",
    country: "Dubai",
    countryCode: "UAE",
    countryFlag: "🇦🇪",
    category: "Global Telecom & FinTech",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="#EE1C25" />
        <text x="12" y="15.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">e&amp;</text>
      </svg>
    ),
  },
  // --- QATAR ---
  {
    name: "Ooredoo",
    country: "Qatar",
    countryCode: "QA",
    countryFlag: "🇶🇦",
    category: "International Telecom",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#ED1C24" />
        <circle cx="7.5" cy="12" r="1.4" fill="#FFFFFF" />
        <circle cx="10.5" cy="12" r="1.4" fill="#FFFFFF" />
        <circle cx="13.5" cy="12" r="1.4" fill="#FFFFFF" />
        <circle cx="16.5" cy="12" r="1.4" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- INDIA ---
  {
    name: "Infosys",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "Cloud Consulting & AI",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <rect x="2.5" y="3" width="19" height="18" rx="4" fill="#007CC3" />
        <path d="M7 8.5h2v7H7V8.5zm5 0h2v7h-2V8.5zm-1-3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm5 0a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- VIETNAM ---
  {
    name: "FPT Corporation",
    country: "Vietnam",
    countryCode: "VN",
    countryFlag: "🇻🇳",
    category: "IT & Global Software",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0E1020" />
        <path d="M7 16l3-8h2.3l-3 8H7z" fill="#F37021" />
        <path d="M11 16l3-8h2.3l-3 8H11z" fill="#0054A6" />
        <path d="M15 16l3-8h2.3l-3 8H15z" fill="#00A850" />
      </svg>
    ),
  },
  // --- THAILAND ---
  {
    name: "SCBX / SCB",
    country: "Thailand",
    countryCode: "TH",
    countryFlag: "🇹🇭",
    category: "Financial Rails & Banking",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#4E2A84" />
        <path d="M12 5.5l2 3.8h-4l2-3.8zm-3 4.5h6l1.3 2.8h-8.6L9 10zm-2 3.8h10l1.3 2.8H5.7L7 13.8z" fill="#FFC72C" />
      </svg>
    ),
  },
  // --- DUBAI / UAE ---
  {
    name: "DP World",
    country: "Dubai",
    countryCode: "UAE",
    countryFlag: "🇦🇪",
    category: "Smart Trade & Logistics",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#00205B" />
        <circle cx="12" cy="12" r="5" stroke="#00A3E0" strokeWidth="1.4" strokeDasharray="3 2" />
        <circle cx="12" cy="12" r="2.2" fill="#00A3E0" />
      </svg>
    ),
  },
  // --- QATAR ---
  {
    name: "QNB Group",
    country: "Qatar",
    countryCode: "QA",
    countryFlag: "🇶🇦",
    category: "Commercial Banking & Assets",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#8A1538" />
        <path d="M12 5.5l5.5 6.5-5.5 6.5-5.5-6.5 5.5-6.5z" stroke="#D4AF37" strokeWidth="1.4" />
        <path d="M12 8.5l2.8 3.5-2.8 3.5-2.8-3.5 2.8-3.5z" fill="#D4AF37" />
      </svg>
    ),
  },
  // --- INDIA ---
  {
    name: "Razorpay",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "Fintech Payments & APIs",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0C2340" />
        <path d="M15 5.5l-6.5 8h4.5l-2.8 5 7.5-7.5h-4.5l1.8-5.5z" fill="#3395FF" />
      </svg>
    ),
  },
  // --- VIETNAM ---
  {
    name: "MoMo",
    country: "Vietnam",
    countryCode: "VN",
    countryFlag: "🇻🇳",
    category: "Digital Wallet & Payments",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#A50064" />
        <path d="M7 14V10l2.5 3L12 10v4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V10l2.5 3 2.5-3v4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  // --- THAILAND ---
  {
    name: "AIS",
    country: "Thailand",
    countryCode: "TH",
    countryFlag: "🇹🇭",
    category: "Mobile & Broadband Mesh",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#8CC63F" />
        <circle cx="12" cy="8.2" r="1.5" fill="#FFFFFF" />
        <path d="M7.5 12.8c1.5 2.2 4.2 3.2 6.5 2.3 1.4-.5 2.3-1.3 2.8-2.3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  // --- DUBAI / UAE ---
  {
    name: "Careem",
    country: "Dubai",
    countryCode: "UAE",
    countryFlag: "🇦🇪",
    category: "Super-App & Mobility Rails",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#00A859" />
        <circle cx="9" cy="10" r="1.2" fill="#FFFFFF" />
        <path d="M13.2 10.5l2-1.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8.5 14.2c1.4 1.4 4.2 1.4 5.6 0" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  // --- QATAR ---
  {
    name: "Commercial Bank (CBQ)",
    country: "Qatar",
    countryCode: "QA",
    countryFlag: "🇶🇦",
    category: "Institutional Finance",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#004D40" />
        <path d="M6 12c3-3.8 6-4.8 12-4.8-3 3.8-6 4.8-12 4.8zm0 2.8c3-2.8 6-3.8 12-3.8-3 2.8-6 3.8-12 3.8z" fill="#80CBC4" />
      </svg>
    ),
  },
  // --- INDIA ---
  {
    name: "Wipro",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "Enterprise Cloud & AI",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0B0C17" stroke="#2A2D3D" strokeWidth="0.8" />
        <circle cx="12" cy="7.2" r="1.4" fill="#E81123" />
        <circle cx="15.8" cy="10" r="1.4" fill="#FFB900" />
        <circle cx="14.8" cy="14.8" r="1.4" fill="#107C41" />
        <circle cx="9.2" cy="14.8" r="1.4" fill="#0078D7" />
        <circle cx="8.2" cy="10" r="1.4" fill="#B4009E" />
        <circle cx="12" cy="12" r="1.1" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- VIETNAM ---
  {
    name: "VNPT",
    country: "Vietnam",
    countryCode: "VN",
    countryFlag: "🇻🇳",
    category: "National Communications",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#0072BC" />
        <ellipse cx="12" cy="12" rx="3.8" ry="6.8" stroke="#FFFFFF" strokeWidth="1.1" />
        <line x1="5.2" y1="12" x2="18.8" y2="12" stroke="#FFFFFF" strokeWidth="1.1" />
      </svg>
    ),
  },
  // --- THAILAND ---
  {
    name: "Kasikornbank",
    country: "Thailand",
    countryCode: "TH",
    countryFlag: "🇹🇭",
    category: "Digital Financial Rails",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#138F2D" />
        <path d="M12 6.2v11.6M9.2 9c1.4.9 2.8 0 2.8 0M9.2 12c1.4.9 2.8 0 2.8 0M14.8 9c-1.4.9-2.8 0-2.8 0M14.8 12c-1.4.9-2.8 0-2.8 0" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  // --- DUBAI / UAE ---
  {
    name: "FAB Bank",
    country: "UAE",
    countryCode: "UAE",
    countryFlag: "🇦🇪",
    category: "Corporate & Wholesale Banking",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#002D72" />
        <path d="M12 6.2l1.8 3.8 3.8-1.8-1.8 3.8 3.8 1.8-3.8 1.8 1.8 3.8-3.8-1.8-1.8 3.8-1.8-3.8-3.8 1.8 1.8-3.8-3.8-1.8 3.8-1.8-1.8-3.8 3.8 1.8 1.8-3.8z" fill="#ED1C24" />
        <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- QATAR ---
  {
    name: "QatarEnergy",
    country: "Qatar",
    countryCode: "QA",
    countryFlag: "🇶🇦",
    category: "Energy & Infrastructure",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#8A1538" />
        <path d="M12 5.5c1.8 2.8 4.6 4.6 4.6 7.4a4.6 4.6 0 01-9.2 0c0-2.8 2.8-4.6 4.6-7.4z" fill="#FF6F00" />
        <circle cx="12" cy="13.8" r="1.8" fill="#FFFFFF" />
      </svg>
    ),
  },
  // --- INDIA ---
  {
    name: "HDFC Bank",
    country: "India",
    countryCode: "IN",
    countryFlag: "🇮🇳",
    category: "Commercial Banking & Credit",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#004C8F" />
        <rect x="7" y="7" width="10" height="10" fill="#ED232A" />
        <rect x="9.5" y="9.5" width="5" height="5" fill="#FFFFFF" />
      </svg>
    ),
  },
];

export default function EnterpriseMarquee() {
  // Duplicate array once for seamless infinite -50% CSS loop
  const marqueeItems = [...ENTERPRISE_PARTNERS, ...ENTERPRISE_PARTNERS];

  return (
    <div className="w-full pt-4 pb-2">
      {/* Marquee Ticker Track with Soft Radial Fading Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#03010E] via-[#03010E]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#03010E] via-[#03010E]/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Loop */}
        <div className="flex animate-marquee gap-4 sm:gap-5 whitespace-nowrap items-center will-change-transform">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              title={`${partner.name} (${partner.country})`}
              className="h-14 sm:h-16 px-7 sm:px-8 rounded-full bg-[#0B0C17] border border-[#202128] hover:border-[#937AFF]/60 flex items-center justify-center shrink-0 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(147,122,255,0.3)] hover:bg-[#101222] hover:scale-105 cursor-pointer select-none"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
