"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 border-b border-[#E2E2E5]"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        
        {/* Main Hero Composition: 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Giant Name, Intro & Actions */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow & Status */}
            <div className="reveal-item flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#55555F] font-bold">
                {PERSONAL_INFO.eyebrow}
              </span>
              <span className="text-[#E2E2E5] hidden sm:inline">|</span>
              <div className="inline-flex items-center gap-2 text-xs text-[#111111] font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Giant Name Headline */}
            <h1 className="reveal-item reveal-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-black uppercase tracking-tight leading-[0.98] text-[#111111] mb-8">
              MUHAMMAD<br />
              TAHA<br />
              <span className="text-[#111111]">JAMAL MALIK</span>
            </h1>

            {/* Comfortable Reading Column for Intro (45-65 chars per line) */}
            <div className="reveal-item reveal-delay-2 max-w-[620px] space-y-3 mb-10">
              <p className="text-xl sm:text-2xl text-[#111111] font-normal leading-relaxed">
                {PERSONAL_INFO.heroIntro}
              </p>
              <p className="text-base text-[#55555F] font-normal leading-relaxed">
                {PERSONAL_INFO.heroSupporting}
              </p>
            </div>

            {/* Clear Calls to Action (Pill-shaped Monochrome) + LinkedIn */}
            <div className="reveal-item reveal-delay-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#work"
                id="hero-explore-work"
                className="btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                id="hero-get-in-touch"
                className="btn-secondary"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                aria-label="Visit my LinkedIn profile"
                title="Visit my LinkedIn profile"
                className="w-11 h-11 rounded-full border border-[#E2E2E5] bg-[#FFFFFF] hover:border-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] text-[#111111] inline-flex items-center justify-center transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Portrait Image with 8-10px radius frame */}
          <div className="reveal-item reveal-delay-2 lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              
              {/* Image Frame with 8-10px border radius and thin border */}
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#E2E2E5] border border-[#E2E2E5] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <Image
                  src={PERSONAL_INFO.portraitPath}
                  alt={PERSONAL_INFO.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                  className="object-cover object-top"
                />
              </div>

              {/* Caption plate */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#55555F] font-mono tracking-wider px-1">
                <span className="font-semibold text-[#111111]">MUHAMMAD TAHA JAMAL MALIK</span>
                <span>BBA · CLASS OF 2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Information Strip Below Main Hero (Higher Contrast) */}
        <div className="reveal-item reveal-delay-3 mt-16 pt-8 border-t border-[#E2E2E5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#55555F] block mb-1">
              Location
            </span>
            <span className="text-sm font-semibold text-[#111111]">
              Rawalpindi, Pakistan
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#55555F] block mb-1">
              Education
            </span>
            <span className="text-sm font-semibold text-[#111111]">
              BBA Graduate · Class of 2026
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#55555F] block mb-1">
              Experience
            </span>
            <span className="text-sm font-semibold text-[#111111]">
              Business Dev & Graphic Design
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#55555F] block mb-1">
              Status
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              Available for Opportunities
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
