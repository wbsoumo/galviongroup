"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface ContactFormProps {
  defaultDivision?: string;
}

export default function ContactForm({ defaultDivision }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: "",
    division: defaultDivision || "software",
    projectScope: "",
    budgetRange: "enterprise",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.projectScope.trim()) {
      setErrorMessage("Please complete all required fields marked with an asterisk (*).");
      return;
    }

    if (!formData.workEmail.includes("@") || !formData.workEmail.includes(".")) {
      setErrorMessage("Please enter a valid corporate email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate structured enterprise form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#0B0C17] rounded-2xl border border-[#202128] p-8 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#937AFF]/10 text-[#937AFF] flex items-center justify-center mx-auto border border-[#937AFF]/30 shadow-[0_0_20px_rgba(147,122,255,0.25)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-white">
          Corporate Inquiry Received
        </h3>
        <p className="text-[#DAD4DE] text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry regarding{" "}
          <strong className="text-[#937AFF] capitalize">{formData.division}</strong> has been logged with our corporate business development team.
        </p>
        <div className="bg-[#03010E] border border-[#202128] rounded-xl p-4 max-w-sm mx-auto text-xs text-[#817E84] space-y-1 text-left font-mono">
          <div><strong className="text-white">Confirmation ID:</strong> GLV-{Math.floor(100000 + Math.random() * 900000)}</div>
          <div><strong className="text-white">Corporate Email:</strong> {formData.workEmail}</div>
          <div><strong className="text-white">Response SLA:</strong> Within 1 business day</div>
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                workEmail: "",
                companyName: "",
                phone: "",
                division: defaultDivision || "software",
                projectScope: "",
                budgetRange: "enterprise",
              });
            }}
            className="text-xs font-semibold text-[#937AFF] hover:text-white underline font-mono"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0B0C17] rounded-2xl border border-[#202128] p-8 shadow-2xl space-y-6 relative group hover:border-[#937AFF]/30 transition-all"
      noValidate
    >
      <span className="absolute top-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute top-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute bottom-2 left-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>
      <span className="absolute bottom-2 right-2 text-[#817E84]/30 font-mono text-[10px] select-none">+</span>

      <div>
        <h3 className="text-xl font-bold text-white">
          Initiate a Project Conversation
        </h3>
        <p className="text-xs text-[#817E84] mt-1">
          Provide your project objectives and our specialized practice leaders will schedule a direct technical consultation.
        </p>
      </div>

      {errorMessage && (
        <div className="bg-[#FF5353]/10 border border-[#FF5353]/30 text-[#FF5353] px-4 py-3 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="workEmail" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Work Email *
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Company / Organization
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Enterprise Inc."
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Contact Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="division" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Target Business Division
          </label>
          <select
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] font-medium"
          >
            <option value="software">01. Galvion Software Solutions</option>
            <option value="marketing">02. Galvion Marketing</option>
            <option value="telecom">03. Galvion Telecom</option>
            <option value="research">04. Galvion Research & Growth</option>
            <option value="fintech">05. Galvion Fintech</option>
            <option value="cross-group">Cross-Group Multi-Practice Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
            Project Engagement Scope
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] font-medium"
          >
            <option value="pilot">Targeted Pilot / Assessment</option>
            <option value="growth">Mid-Scale Implementation / Growth</option>
            <option value="enterprise">Enterprise Modernization / Retainer</option>
            <option value="multi-vertical">Multi-Vertical Transformation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectScope" className="block text-xs font-bold text-[#DAD4DE] uppercase tracking-wider mb-1.5 font-mono">
          Executive Summary & Project Scope *
        </label>
        <textarea
          id="projectScope"
          name="projectScope"
          rows={4}
          required
          value={formData.projectScope}
          onChange={handleChange}
          placeholder="Describe your current business challenge, strategic objectives, timeline considerations, or specific architectural requirements..."
          className="w-full bg-[#03010E] border border-[#202128] rounded-xl px-4 py-3 text-sm text-white placeholder-[#817E84] focus:outline-none focus:border-[#937AFF] focus:ring-1 focus:ring-[#937AFF] transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-[#817E84] pt-1">
        <ShieldCheck className="w-4 h-4 text-[#937AFF] shrink-0" />
        <span>Strict enterprise confidentiality. Non-Disclosure Agreement (NDA) supported prior to technical review.</span>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all shadow-[0_0_25px_rgba(147,122,255,0.3)] hover:shadow-[0_0_35px_rgba(147,122,255,0.5)]"
        >
          {isSubmitting ? (
            <span>Processing Corporate Inquiry...</span>
          ) : (
            <>
              <span>Submit Enterprise Consultation Request</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
