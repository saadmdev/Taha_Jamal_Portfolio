"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mouseX: -100, mouseY: -100, ringX: -100, ringY: -100 });
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on desktop with fine pointer and no reduced-motion preference
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!isFinePointer || prefersReducedMotion || !isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current.mouseX = e.clientX;
      pos.current.mouseY = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        pos.current.ringX = e.clientX;
        pos.current.ringY = e.clientY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [data-cursor-hover]");
        isHovering.current = !!interactive;
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const render = () => {
      // Smooth linear interpolation for trailing ring
      pos.current.ringX += (pos.current.mouseX - pos.current.ringX) * 0.18;
      pos.current.ringY += (pos.current.mouseY - pos.current.ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.mouseX - 3}px, ${pos.current.mouseY - 3}px, 0)`;
      }

      if (ringRef.current) {
        const size = isHovering.current ? 42 : 28;
        ringRef.current.style.transform = `translate3d(${pos.current.ringX - size / 2}px, ${pos.current.ringY - size / 2}px, 0) scale(${isHovering.current ? 1.15 : 1})`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = isHovering.current ? "rgba(17, 17, 17, 0.45)" : "rgba(17, 17, 17, 0.22)";
        ringRef.current.style.backgroundColor = isHovering.current ? "rgba(17, 17, 17, 0.04)" : "transparent";
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Precision center dot - hidden on mobile / touch */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block w-1.5 h-1.5 rounded-full bg-[#111111] opacity-0 transition-opacity duration-200"
      />
      {/* Refined trailing ring - hidden on mobile / touch */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden lg:block rounded-full border border-[#111111]/25 opacity-0 transition-[opacity,border-color,background-color] duration-200 ease-out"
        style={{ width: "28px", height: "28px" }}
      />
    </>
  );
}
