"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header with redundant right-side description completely removed */}
        <SectionHeader
          number="02"
          label="EXPERIENCE"
          title="Professional Experience"
        />

        {/* Consistent 3-Column Desktop Timeline with Fine Horizontal Dividers */}
        <div className="border-t border-[#111111] divide-y divide-[#E2E2E5]">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="reveal-item py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Column 1: Sequence Number, Dates & Location (3 cols) */}
              <div className="lg:col-span-3">
                <span className="text-xs font-mono text-[#55555F] block mb-1 font-semibold">
                  [{exp.seq}]
                </span>
                <span className="text-sm font-bold text-[#111111] block mb-1">
                  {exp.period}
                </span>
                <p className="text-xs text-[#55555F] font-mono">
                  {exp.location} · {exp.type}
                </p>
              </div>

              {/* Column 2: Role Title, Company Name & Summary (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111111] mb-1">
                  {exp.role}
                </h3>
                <p className="text-base font-semibold text-[#55555F] mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-[#55555F] leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Column 3: Concise Responsibilities Supported by CV (5 cols) */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#55555F] block mb-3 font-bold">
                  Core Responsibilities
                </span>
                <ul className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="text-sm text-[#111111] flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Applied skills */}
                <div className="pt-4 border-t border-[#E2E2E5] flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono text-[#55555F] bg-[#FFFFFF] border border-[#E2E2E5] px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
