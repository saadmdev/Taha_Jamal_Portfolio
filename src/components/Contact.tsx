"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";
import { Copy, Check, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(
      formState.subject
        ? `[Inquiry] ${formState.subject}`
        : `[Inquiry] From ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header with full-width supporting line directly beneath heading */}
        <SectionHeader
          number="07"
          label="CONTACT"
          title="Let's Start a Conversation."
          subtitle="Have a role, project, or collaboration in mind? I'd be happy to hear from you."
          className="mb-12 md:mb-14"
          subtitleClassName="max-w-4xl lg:max-w-5xl"
        />

        {/* Balanced Two-Column Layout (40% Left / 60% Right on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info (5 cols ~ 40%) */}
          <div className="reveal-item lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-6 sm:p-7 hover:border-[#111111] transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#55555F] block mb-1">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-[#111111] hover:underline break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-[#55555F] mt-1 font-mono">
                    Direct inbox · Inquiries answered promptly
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-2 text-[#55555F] hover:text-[#111111] hover:bg-[#F4F4F4] rounded transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-[#16A34A]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E2E5]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-mono uppercase text-[#111111] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open in default email app</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-6 sm:p-7 hover:border-[#111111] transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#55555F] block mb-1">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-base sm:text-lg font-bold text-[#111111] hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <p className="text-xs text-[#55555F] mt-1 font-mono">
                    Direct voice calls & WhatsApp messaging
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-2 text-[#55555F] hover:text-[#111111] hover:bg-[#F4F4F4] rounded transition-colors shrink-0"
                  title="Copy telephone number"
                  aria-label="Copy phone"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-[#16A34A]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E2E5] flex items-center justify-between text-xs font-mono uppercase">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[#E2E2E5]">·</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-[#55555F] hover:text-[#111111] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Call directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#55555F] block mb-1">
                Location Base
              </span>
              <p className="text-base sm:text-lg font-bold text-[#111111]">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-[#55555F] mt-1 font-mono">
                Open to on-site roles in Rawalpindi/Islamabad and remote positions
              </p>
            </div>

          </div>

          {/* Right Column: Direct Note Form (7 cols ~ 60%) */}
          <div className="reveal-item reveal-delay-1 lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="mb-6 pb-4 border-b border-[#E2E2E5]">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-[#55555F] mt-1 font-mono">
                  Generates a pre-filled email draft directly in your preferred email client.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded bg-[#F4F4F4] border border-[#E2E2E5] text-[#111111] text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Draft created in your email client. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-[#111111] mb-1.5 font-bold"
                    >
                      Your Name <span className="text-[#B42318]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="input-editorial"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-[#111111] mb-1.5 font-bold"
                    >
                      Your Email <span className="text-[#B42318]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="input-editorial"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-[#111111] mb-1.5 font-bold"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Business Development / Brand Design Project"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="input-editorial"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-[#111111] mb-1.5 font-bold"
                  >
                    Message <span className="text-[#B42318]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your inquiry, scope, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="input-editorial resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="ml-2 w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs text-[#55555F] hover:text-[#111111] font-mono"
                  >
                    Direct: {PERSONAL_INFO.email}
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
