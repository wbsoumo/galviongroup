import React from "react";
import { Metadata } from "next";
import { Mail, Clock, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Corporate Inquiries & Project Consultation",
  description:
    "Connect with Galvion Group practice leads across Software Solutions, Marketing, Telecom, Research, and Fintech for enterprise project consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#03010E] text-[#DAD4DE]">
      {/* Header */}
      <div className="border-b border-[#202128] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#937AFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block">
            Corporate Inquiries
          </span>
          <h1 className="hasHighlight text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our Specialized <strong>Practice Leads.</strong>
          </h1>
          <p className="text-[#DAD4DE] text-base sm:text-lg max-w-3xl leading-relaxed">
            Whether you are evaluating a targeted software engagement, exploring a multi-division transformation, or seeking strategic consultation, our practice directors are available to discuss your requirements.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Corporate Details & Response Guidelines */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0B0C17] border border-[#202128] rounded-3xl p-8 space-y-6 relative group hover:border-[#937AFF]/40 transition-colors shadow-xl">
                <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
                <h3 className="text-xl font-bold text-white">
                  Corporate Communication Channels
                </h3>

                <div className="space-y-4 text-sm text-[#DAD4DE]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#817E84] uppercase tracking-wider font-mono">
                        General Corporate Inquiries
                      </span>
                      <a
                        href="mailto:contact@galviongroup.com"
                        className="font-bold text-white hover:text-[#937AFF] transition-colors"
                      >
                        contact@galviongroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#817E84] uppercase tracking-wider font-mono">
                        Response Timeline
                      </span>
                      <span className="font-semibold text-white">
                        Within 1 business day for all qualified inquiries
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#03010E] border border-[#202128] text-[#937AFF] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#817E84] uppercase tracking-wider font-mono">
                        Confidentiality Guarantee
                      </span>
                      <span className="text-[#817E84] text-xs">
                        All technical discovery inquiries are treated with strict confidentiality under corporate non-disclosure terms.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Consultation Flow */}
              <div className="bg-[#0B0C17] border border-[#202128] text-white rounded-3xl p-8 shadow-2xl space-y-4 relative overflow-hidden group hover:border-[#937AFF]/40 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#937AFF]/15 blur-[80px] pointer-events-none rounded-full" />
                <span className="text-xs uppercase tracking-widest font-mono text-[#937AFF] font-bold block relative z-10">
                  Next Steps
                </span>
                <h4 className="text-xl font-bold text-white relative z-10">
                  What Happens After You Submit
                </h4>
                <ol className="space-y-3 text-xs text-[#DAD4DE] list-decimal list-inside leading-relaxed relative z-10">
                  <li>
                    <strong className="text-white">Technical Review:</strong> Your submission is routed to the corresponding division practice director.
                  </li>
                  <li>
                    <strong className="text-white">Preliminary Scope:</strong> We evaluate requirements and prepare targeted clarifying questions.
                  </li>
                  <li>
                    <strong className="text-white">Discovery Call:</strong> A 30-minute structured technical consultation is scheduled at your convenience.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
