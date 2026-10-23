"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";
import Card3D from "@/components/Card3D";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <span id="certifications" className="sr-only" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header with full-width single-line description directly below heading */}
        <SectionHeader
          number="06"
          label="RECOGNITION"
          title="Achievements & Certifications"
          subtitle="Selected academic recognition and professional training."
          className="mb-10 md:mb-12"
          subtitleClassName="max-w-4xl lg:max-w-5xl"
        />

        {/* 2x2 Grid of Tactile 3D Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((item, idx) => (
            <Card3D
              key={idx}
              className={`reveal-item reveal-delay-${(idx % 2) + 1} bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-8 flex flex-col justify-between hover:border-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#55555F] pb-4 border-b border-[#E2E2E5] mb-6">
                  <span className="font-semibold">CREDENTIAL 0{idx + 1}</span>
                  <span className="text-[#111111] font-bold">{item.date}</span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#111111] mb-2 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm font-semibold text-[#55555F] mb-3">
                  {item.organization}
                </p>

                <p className="text-xs text-[#55555F] leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E2E5] flex items-center justify-between text-[11px] font-mono text-[#55555F]">
                <span>OFFICIAL RECORD</span>
                <span>AUTHENTIC CV ITEM</span>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
