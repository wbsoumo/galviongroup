import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement | WCAG 2.2 AA Conformance",
  description: "Galvion Group's corporate commitment to digital accessibility, inclusive design, and WCAG 2.2 AA conformance.",
};

export default function AccessibilityPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Accessibility Statement" }]} />

        <div className="space-y-2 border-b border-[#202128] pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#937AFF] block">
            Digital Inclusion Standards
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accessibility <strong>Statement</strong>
          </h1>
          <p className="text-xs text-[#817E84] font-mono">
            Benchmark Standard: WCAG 2.2 Level AA Conformance
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#DAD4DE] leading-relaxed">
          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">Our Corporate Commitment</h2>
            <p className="text-[#817E84]">
              Galvion Group is committed to ensuring digital accessibility for people of all abilities. We continually apply relevant accessibility standards to improve user experience across all devices and assistive technology suites.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white">Technical Accessibility Measures Implemented</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-[#03010E] rounded-xl border border-[#202128] space-y-1">
                <span className="font-bold text-white block">Keyboard Navigability</span>
                <span className="text-xs text-[#817E84]">All interactive navigation, dropdowns, forms, and accordions are 100% operable via keyboard controls.</span>
              </div>

              <div className="p-4 bg-[#03010E] rounded-xl border border-[#202128] space-y-1">
                <span className="font-bold text-white block">Visible Focus States</span>
                <span className="text-xs text-[#817E84]">Strict 2px high-contrast purple focus rings ensure clear visual indicators for keyboard and screen-reader users.</span>
              </div>

              <div className="p-4 bg-[#03010E] rounded-xl border border-[#202128] space-y-1">
                <span className="font-bold text-white block">Contrast Ratios</span>
                <span className="text-xs text-[#817E84]">Typography meets or exceeds the 4.5:1 minimum contrast ratio requirement against background surfaces.</span>
              </div>

              <div className="p-4 bg-[#03010E] rounded-xl border border-[#202128] space-y-1">
                <span className="font-bold text-white block">Reduced Motion Support</span>
                <span className="text-xs text-[#817E84]">We respect the user&apos;s OS preference for prefers-reduced-motion, eliminating jarring transitions.</span>
              </div>
            </div>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">Feedback & Contact</h2>
            <p className="text-[#817E84]">
              If you experience accessibility barriers while browsing our site, please notify our team at{" "}
              <a href="mailto:accessibility@galviongroup.com" className="text-[#937AFF] underline font-mono">
                accessibility@galviongroup.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
