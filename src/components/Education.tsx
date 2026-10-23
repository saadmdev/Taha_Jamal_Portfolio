"use client";

import React from "react";
import { EDUCATION_DATA } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header with top-right description removed */}
        <SectionHeader
          number="04"
          label="EDUCATION"
          title="Education"
        />

        {/* Compact Editorial Rows with Hairline Dividers */}
        <div className="border-t border-[#111111] divide-y divide-[#E2E2E5]">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="reveal-item py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            >
              {/* Column 1: Dates & Status (3 cols) */}
              <div className="md:col-span-3">
                <span className="font-mono text-sm font-bold text-[#111111] block mb-0.5">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-[#55555F]">
                  {item.status}
                </span>
              </div>

              {/* Column 2: Degree & Institution (5 cols) */}
              <div className="md:col-span-5">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
                  {item.degree}
                </h3>
                <p className="text-sm text-[#55555F] mt-1 font-semibold">
                  {item.institution}
                </p>
                {item.location && (
                  <p className="text-xs text-[#55555F] mt-0.5 font-mono">
                    {item.location}
                  </p>
                )}
              </div>

              {/* Column 3: Curriculum Overview (4 cols) */}
              <div className="md:col-span-4">
                <p className="text-xs text-[#55555F] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
