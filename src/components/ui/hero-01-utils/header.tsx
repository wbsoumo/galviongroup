"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
            G
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Galvion<span className="text-indigo-400">Group</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800">
          {navigationData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                item.isActive
                  ? "bg-neutral-800 text-white shadow-sm"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white hover:bg-neutral-200 text-neutral-950 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-md group"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {navigationData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  item.isActive
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/50"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-white text-neutral-950 px-5 py-3 rounded-xl font-medium text-base text-center"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
