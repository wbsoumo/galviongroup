import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy | Corporate Governance",
  description: "Cookie policy and digital telemetry transparency statement for Galvion Group.",
};

export default function CookiesPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

        <div className="space-y-2 border-b border-[#202128] pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#937AFF] block">
            Corporate Governance & Legal
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galvion Group <strong>Cookie Policy</strong>
          </h1>
          <p className="text-xs text-[#817E84] font-mono">
            Last Updated: Continuous Governance // Enterprise Telemetry Standards
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#DAD4DE] leading-relaxed">
          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">1. What Are Cookies</h2>
            <p className="text-[#817E84]">
              Cookies are small data files placed on your browser or device when visiting websites. They serve essential operational functions, such as remembering navigation states, improving site performance, and analyzing anonymous aggregated usage patterns.
            </p>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">2. How Galvion Group Uses Cookies</h2>
            <p className="text-[#817E84]">
              Our corporate website uses minimal, strictly essential and aggregated analytics cookies:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DAD4DE]">
              <li><strong>Strictly Necessary Cookies:</strong> Required to enable core security, navigation routing, and form interaction.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Anonymized telemetry to measure page response times, error rates, and Core Web Vitals metrics.</li>
              <li><strong>Functionality Cookies:</strong> Remembering user interface preferences, such as reduced motion settings.</li>
            </ul>
          </section>

          <section className="bg-[#0B0C17] border border-[#202128] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Managing Cookie Preferences</h2>
            <p className="text-[#817E84]">
              You can control and disable non-essential cookies through your browser settings. Please note that disabling essential cookies may impact certain interactive functionalities, such as project inquiry submissions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
