"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";
import Card3D from "@/components/Card3D";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header with full-width supporting line directly beneath heading */}
        <SectionHeader
          number="05"
          label="SKILLS"
          title="Skills & Disciplines"
          subtitle="Business, design, and productivity skills developed through study and practical experience."
          className="mb-10 md:mb-12"
          subtitleClassName="max-w-4xl lg:max-w-5xl"
        />

        {/* 4 Interactive 3D Tactile Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SKILL_GROUPS.map((group, gIdx) => (
            <Card3D
              key={gIdx}
              className={`reveal-item reveal-delay-${(gIdx % 2) + 1} bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-8 flex flex-col justify-between hover:border-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E2E5] mb-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
                    {group.title}
                  </h3>
                  <span className="text-xs font-mono text-[#55555F] font-semibold">
                    GROUP 0{gIdx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs text-[#111111] bg-[#F4F4F4] border border-[#E2E2E5] px-3.5 py-1.5 rounded-md hover:border-[#111111] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E2E5] flex items-center justify-between text-[11px] font-mono text-[#55555F]">
                <span>VERIFIED SKILLS</span>
                <span>{group.skills.length} COMPETENCIES</span>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
