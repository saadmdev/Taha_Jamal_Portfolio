"use client";

import React from "react";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
  className = "mb-10 md:mb-12",
  subtitleClassName = "max-w-4xl",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {/* Breadcrumb with fine horizontal accent line */}
      <div className="reveal-item flex items-center gap-3 mb-3">
        <span className="w-6 h-[1px] bg-[#111111]" />
        <span className="text-[12px] font-mono uppercase tracking-[0.15em] text-[#55555F] font-bold">
          {`${number} / ${label}`}
        </span>
      </div>

      {/* Large Authoritative Section Title */}
      <h2 className="reveal-item reveal-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#111111] leading-[1.05]">
        {title}
      </h2>

      {/* Clean supporting line positioned directly below heading with comfortable horizontal width */}
      {subtitle && (
        <p className={`reveal-item reveal-delay-2 mt-3.5 sm:mt-4 text-base sm:text-lg text-[#55555F] leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
