import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Globe, Shield } from "lucide-react";
import { MEGA_MENU_DIVISIONS, LEGAL_NAVIGATION } from "@/lib/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03010E] text-[#DAD4DE] border-t border-[#202128] relative" aria-label="Corporate Footer">
      {/* Top Pre-Footer Corporate Banner with Ambient Glow */}
      <div className="border-b border-[#202128] bg-[#0B0C17] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#937AFF]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block mb-2">
                One Group. Multiple Capabilities. A Shared Vision for Growth.
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Partner with an enterprise group engineered for your next phase of growth.
              </h3>
              <p className="text-[#817E84] text-sm mt-2 max-w-2xl leading-relaxed">
                Connect with our cross-disciplinary corporate team to discover how our software engineering, marketing intelligence, connectivity, research, and financial technologies align with your strategic roadmap.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold group shadow-[0_0_20px_rgba(147,122,255,0.3)]"
              >
                <span>Initiate Corporate Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/businesses"
                className="btn-outline inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold"
              >
                <span>Explore Verticals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Enterprise Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Executive Summary */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#0B0C17] border border-[#202128] p-1 flex items-center justify-center shadow-lg group-hover:border-[#937AFF]/50 group-hover:shadow-[0_0_20px_rgba(147,122,255,0.3)] transition-all">
                <Image
                  src="/images/galvion-emblem.png"
                  alt="Galvion Group Logo"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white leading-none">
                  Galvion<span className="text-[#937AFF] font-bold">Group</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#817E84] mt-1 font-mono">
                  Diversified Business Group
                </span>
              </div>
            </Link>

            <p className="text-[#817E84] text-sm leading-relaxed max-w-sm">
              Galvion Group brings together digital innovation, strategic marketing, communication infrastructure, financial intelligence, and modern financial services to help businesses operate more efficiently and grow with confidence.
            </p>

            <div className="pt-2 text-xs text-[#817E84] space-y-2 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#937AFF] shrink-0" />
                <a href="mailto:contact@galviongroup.com" className="hover:text-white transition-colors">
                  contact@galviongroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#937AFF] shrink-0" />
                <span>www.galviongroup.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: The Five Business Divisions */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Business Divisions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {MEGA_MENU_DIVISIONS.map((div) => (
                <div key={div.number} className="space-y-1">
                  <Link
                    href={div.href}
                    className="text-sm font-semibold text-[#DAD4DE] hover:text-[#937AFF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-xs text-[#937AFF]">{div.number}</span>
                    <span className="truncate">{div.name}</span>
                  </Link>
                  <p className="text-[11px] text-[#817E84] leading-tight line-clamp-2">
                    {div.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Corporate & Governance Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Corporate & Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-[#817E84]">
              <li>
                <Link href="/about" className="hover:text-[#937AFF] transition-colors">
                  About Galvion Group
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-[#937AFF] transition-colors">
                  Vision, Mission & Values
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-[#937AFF] transition-colors">
                  Our Structured Approach
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#937AFF] transition-colors">
                  Careers & Practice Teams
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#937AFF] transition-colors">
                  Research & Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#937AFF] transition-colors">
                  Contact Corporate Office
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-[#0B0C17] border border-[#202128] text-[11px] text-[#817E84] space-y-1">
                <span className="font-bold text-white block flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#937AFF]" />
                  Corporate Integrity
                </span>
                <p>Parent group governance adhering strictly to factual domain disclosures.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Domain Independence Disclaimers */}
        <div className="mt-12 pt-8 border-t border-[#202128] space-y-4 text-[11px] text-[#817E84] leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-3 bg-[#0B0C17] border border-[#202128] rounded-xl space-y-1">
              <strong className="text-white block font-mono">Telecom Operational Scope:</strong>
              <p>Galvion Telecom operates as an advisory and managed connectivity engineering practice. Services utilize underlying licensed third-party carrier infrastructure.</p>
            </div>
            <div className="p-3 bg-[#0B0C17] border border-[#202128] rounded-xl space-y-1">
              <strong className="text-white block font-mono">Research Disclosures:</strong>
              <p>Galvion Research & Growth delivers analytical reports, market studies, and quantitative modeling tools for strategic planning. Not licensed investment advice.</p>
            </div>
            <div className="p-3 bg-[#0B0C17] border border-[#202128] rounded-xl space-y-1">
              <strong className="text-white block font-mono">Fintech Scope:</strong>
              <p>Galvion Fintech provides software platforms, ledger tooling, and gateway connectivity. Regulated banking or payment processing runs via certified sponsor institutions.</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-8 pt-6 border-t border-[#202128] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#817E84]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Galvion Group. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#937AFF] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
