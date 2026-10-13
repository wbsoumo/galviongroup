"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { MEGA_MENU_DIVISIONS } from "@/lib/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileDivisionsExpanded, setMobileDivisionsExpanded] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const pathname = usePathname();
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMegaMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const handleAboutEnter = () => {
    if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
    setAboutDropdownOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeout.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Floating Pill Nav Container */}
          <div className="w-full bg-[#0B0C17]/85 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl flex items-center justify-between transition-all duration-300 hover:border-white/20">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#937AFF] rounded-full p-1"
              aria-label="Galvion Group Homepage"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-tr from-[#937AFF] to-[#4D36D0] p-1 flex items-center justify-center shadow-lg shadow-[#937AFF]/25 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/galvion-emblem.png"
                  alt="Galvion Group Emblem"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  Galvion<span className="text-[#937AFF] font-bold">Group</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#817E84]">
                  Enterprise
                </span>
              </div>
            </Link>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <Link
                href="/"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  pathname === "/"
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                <button
                  type="button"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    pathname.startsWith("/about") || pathname.startsWith("/vision-mission") || pathname.startsWith("/approach")
                      ? "text-white bg-white/10"
                      : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={aboutDropdownOpen}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#817E84] transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180 text-[#937AFF]" : ""
                    }`}
                  />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-3 z-50">
                    <div className="bg-[#0B0C17]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-[#202128] p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                      <Link
                        href="/about"
                        className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-[#937AFF]">
                          About Galvion Group
                        </div>
                        <p className="text-[11px] text-[#817E84] mt-0.5">
                          Multi-industry corporate heritage and governance
                        </p>
                      </Link>
                      <Link
                        href="/vision-mission"
                        className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-[#937AFF]">
                          Vision & Mission
                        </div>
                        <p className="text-[11px] text-[#817E84] mt-0.5">
                          Strategic commitments and core operating principles
                        </p>
                      </Link>
                      <Link
                        href="/approach"
                        className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-[#937AFF]">
                          Our Approach
                        </div>
                        <p className="text-[11px] text-[#817E84] mt-0.5">
                          4-stage execution framework (Discover to Improve)
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mega Menu Trigger: Our Businesses */}
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    pathname.startsWith("/software") ||
                    pathname.startsWith("/marketing") ||
                    pathname.startsWith("/telecom") ||
                    pathname.startsWith("/research") ||
                    pathname.startsWith("/fintech") ||
                    pathname === "/businesses"
                      ? "text-white bg-white/10"
                      : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  <span>Our Businesses</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#817E84] transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-[#937AFF]" : ""
                    }`}
                  />
                </button>

                {/* Dark Mega Menu Dropdown */}
                {megaMenuOpen && (
                  <div className="fixed left-0 right-0 top-[75px] pt-2 px-4 sm:px-6 lg:px-8 z-50 pointer-events-auto">
                    <div className="max-w-7xl mx-auto bg-[#0B0C17]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#202128] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                      {/* Top Bar of Mega Menu */}
                      <div className="bg-[#03010E]/80 border-b border-[#202128] px-8 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#937AFF] animate-pulse" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#DAD4DE]">
                            Five Operating Divisions Under One Parent Group
                          </span>
                        </div>
                        <Link
                          href="/businesses"
                          className="text-xs font-semibold text-[#937AFF] hover:text-white flex items-center gap-1 group"
                        >
                          View Full Group Portfolio
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* 5 Column Grid */}
                      <div className="grid grid-cols-5 divide-x divide-[#202128] p-6">
                        {MEGA_MENU_DIVISIONS.map((div) => (
                          <div key={div.number} className="px-4 first:pl-2 last:pr-2 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-mono font-bold text-[#937AFF] px-2 py-0.5 rounded bg-[#937AFF]/10 border border-[#937AFF]/20">
                                  {div.number}
                                </span>
                                <span className="text-[10px] font-semibold text-[#817E84] uppercase tracking-wider line-clamp-1">
                                  {div.category.split(" ")[0]}
                                </span>
                              </div>
                              <Link
                                href={div.href}
                                className="font-bold text-sm text-white hover:text-[#937AFF] transition-colors line-clamp-2 block mb-2"
                              >
                                {div.name}
                              </Link>
                              <p className="text-xs text-[#817E84] mb-4 line-clamp-2 leading-relaxed">
                                {div.description}
                              </p>

                              <div className="space-y-1.5 border-t border-[#202128] pt-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#817E84] block mb-1">
                                  Key Offerings
                                </span>
                                {div.services.slice(0, 4).map((service, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={service.href}
                                    className="block text-xs text-[#DAD4DE]/80 hover:text-[#937AFF] hover:translate-x-0.5 transition-all truncate"
                                  >
                                    • {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-[#202128]">
                              <Link
                                href={div.href}
                                className="text-xs font-semibold text-[#937AFF] hover:text-white flex items-center gap-1 group"
                              >
                                Explore Division
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  pathname.startsWith("/insights")
                    ? "text-white bg-white/10"
                    : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Insights
              </Link>

              <Link
                href="/careers"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  pathname === "/careers"
                    ? "text-white bg-white/10"
                    : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  pathname === "/contact"
                    ? "text-white bg-white/10"
                    : "text-[#DAD4DE]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button (Automark btn-primary) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary py-2 px-5 text-xs"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-1.5 rounded-full text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#937AFF]"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setIsMobileOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0B0C17] border-l border-[#202128] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between pt-24">
            <div className="space-y-4">
              <div className="pb-3 border-b border-[#202128] flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#817E84]">
                  Navigation Menu
                </span>
                <span className="text-xs text-[#937AFF] font-bold">Galvion Group</span>
              </div>

              <div className="space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5"
                >
                  Home
                </Link>

                {/* Mobile About Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5 text-left"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAboutExpanded ? "rotate-180 text-[#937AFF]" : "text-[#817E84]"
                      }`}
                    />
                  </button>
                  {mobileAboutExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#937AFF]/30 ml-3 mt-1">
                      <Link
                        href="/about"
                        className="block py-1 text-xs text-[#DAD4DE]/80 hover:text-[#937AFF]"
                      >
                        About Galvion Group
                      </Link>
                      <Link
                        href="/vision-mission"
                        className="block py-1 text-xs text-[#DAD4DE]/80 hover:text-[#937AFF]"
                      >
                        Our Vision & Mission
                      </Link>
                      <Link
                        href="/approach"
                        className="block py-1 text-xs text-[#DAD4DE]/80 hover:text-[#937AFF]"
                      >
                        Our Approach & Framework
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Divisions Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileDivisionsExpanded(!mobileDivisionsExpanded)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5 text-left"
                  >
                    <span>Our Businesses (5 Divisions)</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileDivisionsExpanded ? "rotate-180 text-[#937AFF]" : "text-[#817E84]"
                      }`}
                    />
                  </button>
                  {mobileDivisionsExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-2 border-l-2 border-[#937AFF]/30 ml-3 mt-2">
                      <Link
                        href="/businesses"
                        className="block py-1 text-xs font-bold uppercase tracking-wider text-[#937AFF]"
                      >
                        → View Complete Portfolio
                      </Link>
                      {MEGA_MENU_DIVISIONS.map((div) => (
                        <div key={div.number} className="pb-1.5 border-b border-[#202128] last:border-none">
                          <Link
                            href={div.href}
                            className="text-xs font-semibold text-white hover:text-[#937AFF] block"
                          >
                            <span className="text-[#937AFF] mr-1 font-mono">{div.number}.</span> {div.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/insights"
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5"
                >
                  Insights & Perspectives
                </Link>

                <Link
                  href="/careers"
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5"
                >
                  Careers
                </Link>

                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#202128] space-y-3">
              <Link
                href="/contact"
                className="w-full btn-primary text-center justify-center text-xs py-3"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
