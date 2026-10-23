"use client";

import React, { useState, useEffect, useRef } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility (Escape key closes overlay)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling while mobile overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      window.history.pushState(null, "", href);
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Pill Navbar - Unified, Centered Surface for Desktop and Mobile */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3.5 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-[1200px] h-[54px] sm:h-[60px] px-4 sm:px-6 md:px-8 flex items-center justify-between rounded-full bg-[#292929]/90 backdrop-blur-md border border-[#3E3E3E]/90 transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_12px_36px_rgba(0,0,0,0.30)] border-[#4A4A4F]/90 bg-[#292929]/95"
              : "shadow-[0_8px_24px_rgba(0,0,0,0.20)]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Wordmark (Left) */}
          <a
            href="#"
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF] rounded shrink-0"
            aria-label={`${PERSONAL_INFO.shortName} - Back to top`}
          >
            <span className="font-sans text-[15px] sm:text-[17px] font-black tracking-tight text-[#FFFFFF] uppercase">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          </a>

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] lg:text-[13px] tracking-wider uppercase font-mono transition-colors ${
                    isActive
                      ? "text-[#FFFFFF] font-bold border-b-2 border-[#FFFFFF] pb-0.5"
                      : "text-[#C7C7C7] hover:text-[#FFFFFF]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right CTA - Desktop High Contrast White Pill Button */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              id="nav-contact-button"
              className="bg-[#FFFFFF] text-[#111111] hover:bg-[#E5E5E5] px-4 sm:px-5 py-1.5 h-8 sm:h-9 rounded-full font-semibold text-[12px] sm:text-[13px] inline-flex items-center gap-1.5 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (Inside the unified pill container) */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-overlay"
            aria-label="Open navigation menu"
            id="mobile-menu-toggle"
            className="md:hidden p-1.5 text-[#FFFFFF] hover:bg-[#383838] rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF] transition-colors shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (Enters Smoothly from Right to Left) */}
      <div
        id="mobile-navigation-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-[100] bg-[#292929] text-[#FFFFFF] transition-transform duration-400 ease-out md:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full min-h-screen px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
          
          {/* Top Bar: Wordmark on Left, Clear Close Pill on Right */}
          <div className="flex items-center justify-between pb-6 border-b border-[#383838] shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xl font-black uppercase tracking-tight text-[#FFFFFF]">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                hamburgerRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              id="mobile-menu-close"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#444444] bg-[#333333] hover:bg-[#FFFFFF] hover:text-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main Navigation: Large, Bold Editorial Labels with Small Monospace Indices */}
          <nav className="my-auto py-8 sm:py-10 flex flex-col space-y-4 sm:space-y-5" aria-label="Mobile Links">
            {NAV_LINKS.map((link, idx) => {
              const num = `0${idx + 1}`;
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group flex items-baseline justify-between py-1 border-b border-[#383838]/40 hover:border-[#FFFFFF]/20 transition-all duration-200"
                >
                  <span
                    className={`text-3xl sm:text-4xl font-black uppercase tracking-tight transition-transform duration-200 group-hover:translate-x-2 ${
                      isActive ? "text-[#FFFFFF]" : "text-[#D1D1D6] group-hover:text-[#FFFFFF]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#8E8E93] group-hover:text-[#FFFFFF] transition-colors font-bold ml-4">
                    {num}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Footer Area: Socials & Direct Contact */}
          <div className="pt-6 border-t border-[#383838] shrink-0 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#8E8E93] font-bold block">
                Socials & Connect
              </span>

              {/* LinkedIn Link with Brand Icon & Touch Target */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Muhammad Taha Jamal Malik on LinkedIn"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#FFFFFF] bg-[#333333] hover:bg-[#FFFFFF] hover:text-[#111111] px-3.5 py-1.5 rounded-full border border-[#444444] transition-all duration-200"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs font-mono text-[#C7C7C7]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#FFFFFF] hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="text-[#55555F]">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="hover:text-[#FFFFFF]"
              >
                {PERSONAL_INFO.phone}
              </a>
              <span className="text-[#55555F]">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
