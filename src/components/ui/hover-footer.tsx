"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function HoverFooter() {
  const mainLinks = [
    { title: "Home", href: "#" },
    { title: "About us", href: "#" },
    { title: "Services", href: "#" },
    { title: "Team", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Awards", href: "#" },
  ];

  const services = [
    "Software Solutions",
    "Ad Agency",
    "Telecom Communication",
    "Stock / Finance",
    "Money Exchange",
  ];

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden pt-20 pb-12 border-t border-neutral-900">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-t from-indigo-600/20 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Brand Info & Newsletter */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                G
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Galvion<span className="text-indigo-400">Group</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Empowering global enterprises with cutting-edge software solutions, financial strategies, telecom networks, and high-impact digital marketing.
            </p>

            <div className="flex items-center space-x-3 text-neutral-400">
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Navigation</h4>
            <ul className="space-y-3">
              {mainLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / Services */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Solutions</h4>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-neutral-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Hover Big Text Footer Effect */}
        <div className="py-12 flex flex-col items-center justify-center group cursor-pointer border-b border-neutral-900 overflow-hidden">
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-500 transition-all duration-700 select-none text-center leading-none">
            GALVION
          </h2>
          <div className="flex items-center space-x-2 mt-4 text-neutral-500 group-hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Ready to transform your vision?</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Galvion Group. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
