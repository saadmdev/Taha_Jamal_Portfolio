"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolioData";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setCurrentYear(new Date().getFullYear());
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#292929] text-[#FFFFFF] pt-20 md:pt-28 pb-12 overflow-hidden border-t border-[#383838]">
      
      {/* Foreground Content (relative z-10) */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Upper Footer Row: Left (Identity), Middle (Nav), Right (Direct Contact & Action) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 md:pb-16 border-b border-[#3E3E3E]">
          
          {/* LEFT: Candidate Identity & Descriptor (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl font-black uppercase tracking-tight text-[#FFFFFF]">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#FFFFFF]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[#C7C7C7] font-mono">
                BBA Graduate · Class of 2026 · Foundation University
              </p>
            </div>

            <p className="text-xs text-[#C7C7C7] leading-relaxed max-w-sm">
              Business graduate bridging business development, institutional networking, and digital brand design with dependable commercial execution.
            </p>
          </div>

          {/* MIDDLE: Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#C7C7C7] font-bold mb-4">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs font-mono uppercase tracking-wider" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#C7C7C7] hover:text-[#FFFFFF] transition-colors py-0.5 inline-flex items-center gap-1.5"
                >
                  <span className="text-[#55555F]">/</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: Direct Outreach & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <div className="w-full md:text-right space-y-2">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#C7C7C7] font-bold mb-2">
                Connect Directly
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono text-[#FFFFFF] hover:text-[#C7C7C7] hover:underline block break-all font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="text-xs text-[#C7C7C7] hover:text-[#FFFFFF] font-mono block"
              >
                {PERSONAL_INFO.phone}
              </a>
              <p className="text-xs text-[#8E8E93] font-mono">
                {PERSONAL_INFO.location}
              </p>

              {/* Professional Social Links Area */}
              <div className="pt-3 border-t border-[#3E3E3E]/60 mt-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8E8E93] font-semibold block mb-1.5 md:text-right">
                  Connect With Me
                </span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Muhammad Taha Jamal Malik on LinkedIn"
                  className="group inline-flex items-center gap-2 text-xs font-mono text-[#FFFFFF] hover:text-[#C7C7C7] transition-all duration-200 py-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 text-[#FFFFFF]" />
                  <span className="font-semibold underline-offset-4 group-hover:underline">LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8E8E93] group-hover:text-[#FFFFFF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="flex items-center gap-2 text-xs font-mono uppercase text-[#FFFFFF] bg-[#333333] hover:bg-[#FFFFFF] hover:text-[#111111] py-2 px-4 border border-[#444444] rounded-full transition-all duration-200 shrink-0"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C7C7C7] font-mono">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#FFFFFF] hover:underline inline-flex items-center gap-1"
            >
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#55555F]">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C7C7C7] hover:text-[#FFFFFF] hover:underline inline-flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3 h-3 text-[#FFFFFF]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#55555F]">·</span>
            <span>Rawalpindi & Islamabad, Pakistan</span>
          </div>
        </div>

        {/* Decorative Brand Wordmark - Fully Visible Across All Screen Sizes Without Clipping */}
        <div
          className="w-full max-w-full overflow-hidden flex justify-center items-center pointer-events-none select-none pt-8 sm:pt-14 pb-2 px-3 sm:px-6 leading-none"
          aria-hidden="true"
        >
          <span className="text-[clamp(1.75rem,8.5vw,3.5rem)] sm:text-[clamp(3.5rem,9.5vw,6.5rem)] lg:text-[clamp(6.5rem,10vw,10.75rem)] font-black uppercase tracking-tight leading-none text-[#FFFFFF]/[0.08] sm:text-[#FFFFFF]/[0.06] text-center whitespace-nowrap inline-block">
            TAHA MALIK
          </span>
        </div>

      </div>

    </footer>
  );
}
