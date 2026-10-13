import React from "react";
import Link from "next/link";
import { Code2, Megaphone, Radio, TrendingUp, RefreshCw, ArrowRight } from "lucide-react";

export const CAPABILITIES_DATA = [
  {
    title: "Digital Engineering & Infrastructure",
    division: "Galvion Software Solutions",
    href: "/software",
    icon: Code2,
    badge: "Technology Core",
    description: "Designing resilient cloud-native architectures, enterprise web applications, and modular backend APIs that form the foundational operational backbone of modern enterprises.",
    keyDomains: ["Enterprise Web & Mobile", "Cloud Architecture & DevOps", "API Orchestration & Microservices"],
  },
  {
    title: "Strategic Marketing & Acquisition",
    division: "Galvion Marketing",
    href: "/marketing",
    icon: Megaphone,
    badge: "Growth Engine",
    description: "Aligning corporate brand narrative with disciplined multi-channel performance advertising to position companies as industry authorities and drive sustainable commercial pipeline.",
    keyDomains: ["Brand Architecture & Positioning", "Performance Paid Acquisition", "Technical SEO & Thought Leadership"],
  },
  {
    title: "Communication & Connectivity",
    division: "Galvion Telecom",
    href: "/telecom",
    icon: Radio,
    badge: "Infrastructure Uptime",
    description: "Advising on and engineering enterprise SD-WAN meshes, high-availability multi-site network topologies, and unified communication systems ensuring zero operational interruption.",
    keyDomains: ["SD-WAN & Routing Resilience", "Carrier-Agnostic Consulting", "Unified Cloud Telephony"],
  },
  {
    title: "Financial Intelligence & Modeling",
    division: "Galvion Research & Growth",
    href: "/research",
    icon: TrendingUp,
    badge: "Decision Intelligence",
    description: "Empowering board-level and executive decisions with rigorous quantitative research, econometric scenario modeling, and unified business intelligence telemetry.",
    keyDomains: ["Quantitative Market Modeling", "Macro & Sector Intelligence", "Dynamic Three-Statement Scenarios"],
  },
  {
    title: "Financial Technology & Rails",
    division: "Galvion Fintech",
    href: "/fintech",
    icon: RefreshCw,
    badge: "Transaction Systems",
    description: "Developing PCI-compliant transaction software, automated double-entry ledger databases, real-time FX rate data visualization, and payment gateway connectivity.",
    keyDomains: ["Payment Gateway Orchestration", "Real-Time FX Information Feeds", "Automated Reconciliation Systems"],
  },
];

export default function CapabilitiesMatrix() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES_DATA.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative bg-[#0B0C17] rounded-2xl border border-[#202128] p-6 sm:p-7 hover:border-[#937AFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(147,122,255,0.12)]"
            >
              <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
              <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#03010E] border border-[#202128] flex items-center justify-center text-[#937AFF] group-hover:border-[#937AFF]/40 group-hover:shadow-[0_0_15px_rgba(147,122,255,0.2)] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#937AFF] bg-[#937AFF]/10 border border-[#937AFF]/25 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#937AFF] transition-colors">
                  {item.title}
                </h4>

                <span className="text-xs font-semibold text-[#817E84] block mb-3 font-mono">
                  Practiced by {item.division}
                </span>

                <p className="text-[#DAD4DE] text-xs leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-1.5 border-t border-[#202128] pt-4 mb-4">
                  {item.keyDomains.map((domain, dIdx) => (
                    <div key={dIdx} className="text-xs text-[#817E84] flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#937AFF] shrink-0" />
                      <span>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#202128]">
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-[#937AFF] hover:text-white flex items-center gap-1.5 group/link"
                >
                  <span>Explore Practice & Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
