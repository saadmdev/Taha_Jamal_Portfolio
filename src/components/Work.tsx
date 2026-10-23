"use client";

import React, { useState } from "react";
import { SELECTED_WORK } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";
import Card3D from "@/components/Card3D";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWork =
    activeFilter === "all"
      ? SELECTED_WORK
      : SELECTED_WORK.filter((item) =>
          activeFilter === "branding"
            ? item.category.toLowerCase().includes("branding")
            : item.category.toLowerCase().includes("marketing") || item.category.toLowerCase().includes("corporate")
        );

  return (
    <section id="work" className="py-28 md:py-36 border-b border-[#E2E2E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            number="03"
            label="SELECTED WORK"
            title="Selected Work"
            className="mb-0"
          />

          {/* Monochrome Filter Pills */}
          <div className="reveal-item flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors font-mono ${
                activeFilter === "all"
                  ? "bg-[#111111] text-[#FFFFFF] font-semibold"
                  : "bg-[#FFFFFF] text-[#55555F] border border-[#E2E2E5] hover:text-[#111111] hover:border-[#111111]"
              }`}
            >
              All (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("branding")}
              className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors font-mono ${
                activeFilter === "branding"
                  ? "bg-[#111111] text-[#FFFFFF] font-semibold"
                  : "bg-[#FFFFFF] text-[#55555F] border border-[#E2E2E5] hover:text-[#111111] hover:border-[#111111]"
              }`}
            >
              Catalog & Branding
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("marketing")}
              className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors font-mono ${
                activeFilter === "marketing"
                  ? "bg-[#111111] text-[#FFFFFF] font-semibold"
                  : "bg-[#FFFFFF] text-[#55555F] border border-[#E2E2E5] hover:text-[#111111] hover:border-[#111111]"
              }`}
            >
              Marketing & Corporate
            </button>
          </div>
        </div>

        {/* Varied Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          {filteredWork.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div key={project.id} className={`${colSpan} reveal-item reveal-delay-${(idx % 2) + 1}`}>
                <Card3D
                  maxTilt={3.5}
                  elevation={6}
                  className="h-full group flex flex-col justify-between bg-[#FFFFFF] border border-[#E2E2E5] rounded-lg p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                >
                <div>
                  {/* Large Typographic Artwork Thumbnail Plate */}
                  <div className="bg-[#F4F4F4] border border-[#E2E2E5] rounded-md p-8 sm:p-12 mb-6 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] relative overflow-hidden group-hover:bg-[#EAEAEA] transition-colors">
                    
                    {/* Top Row: Ref & Documented Status */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#55555F]">
                      <span className="font-semibold">REF / 0{idx + 1}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase bg-[#FFFFFF] border border-[#E2E2E5] px-2.5 py-0.5 rounded-full font-medium">
                          {project.badge}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#55555F] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* Brand Typography Centerpiece */}
                    <div className="my-6">
                      <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] block mb-2">
                        {project.title}
                      </span>
                      <p className="text-xs text-[#55555F] font-mono uppercase tracking-wide">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="flex items-center justify-between text-xs text-[#55555F] pt-3 border-t border-[#E2E2E5] font-mono">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                  </div>

                  {/* Project Details */}
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#111111] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#55555F] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#55555F] block mb-2 font-bold">
                      Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs text-[#111111] bg-[#F4F4F4] border border-[#E2E2E5] px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-[#E2E2E5] flex items-center justify-between text-xs text-[#55555F] font-mono">
                  <span>{project.role}</span>
                  <div className="flex items-center gap-1.5">
                    {project.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[#111111] font-semibold">
                        {tool}
                        {tIdx < project.tools.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                </div>

                </Card3D>
              </div>
            );
          })}
        </div>

        {/* Verification Disclosure Box */}
        <div className="p-6 rounded-lg border border-[#E2E2E5] bg-[#FFFFFF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#55555F] font-mono">
          <div>
            <strong className="text-[#111111] font-bold uppercase">Documented E-Commerce Client Work:</strong> Projects reflect verified accounts managed during employment at Al Fateen E-Commerce.
          </div>
          <span className="shrink-0 text-[#111111] font-bold">
            4 VERIFIED ACCOUNTS
          </span>
        </div>

      </div>
    </section>
  );
}
