"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <SectionHeader
          number="01"
          label="ABOUT"
          title="About Me"
        />

        {/* Strong Introductory Paragraph (Comfortable reading width) */}
        <div className="reveal-item max-w-[980px] mb-16">
          <p className="text-2xl sm:text-3xl md:text-[34px] font-normal text-[#111111] leading-[1.35] tracking-tight">
            {PERSONAL_INFO.aboutLead}
          </p>
        </div>

        <div className="divider-hairline mb-16" />

        {/* 3 Structured Supporting Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-20">
          {PERSONAL_INFO.pillars.map((pillar, pIdx) => (
            <div key={pIdx} className={`reveal-item reveal-delay-${pIdx + 1} flex flex-col justify-between`}>
              <div>
                <span className="text-xs font-mono text-[#55555F] block mb-2 font-semibold">
                  [ 0{pIdx + 1} ]
                </span>
                <h3 className="text-xl font-bold uppercase text-[#111111] mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#55555F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E2E2E5]">
                <span className="text-xs font-mono text-[#111111] font-semibold tracking-wider uppercase">
                  Core Discipline
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Narrative Row with Generous Bottom Padding */}
        <div className="reveal-item pt-12 pb-4 border-t border-[#E2E2E5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#55555F] font-bold block">
              Academic & Professional Base
            </span>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-[#55555F] leading-relaxed max-w-[780px]">
              {PERSONAL_INFO.aboutExtended}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
