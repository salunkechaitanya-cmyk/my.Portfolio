"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Send } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import confetti from "canvas-confetti";

const NAV_LINKS = [
  { name: "About", href: "#about", color: "#4285F4" },
  { name: "Skills", href: "#skills", color: "#EA4335" },
  { name: "Projects", href: "#projects", color: "#FBBC04" },
  { name: "Education", href: "#education", color: "#34A853" },
  { name: "Contact", href: "#contact", color: "#4285F4" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConfetti = (e: React.MouseEvent) => {
    try {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
        disableForReducedMotion: true,
      });
    } catch (_) {}
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 dark:bg-[#0B1120]/85 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800/80"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center space-x-2.5 text-slate-900 dark:text-white font-display font-bold text-lg sm:text-xl tracking-tight"
          aria-label="Chaitanya Salunke - Back to top"
        >
          {/* Google 4-Color Mini Dots in playful avatar */}
          <div className="relative w-9 h-9 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="font-bold text-[#4285F4] text-base font-display">C</span>
            <div className="absolute -bottom-1 -right-1 flex space-x-0.5 bg-white dark:bg-slate-800 px-1 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="leading-tight group-hover:text-[#4285F4] transition-colors">
              Chaitanya
            </span>
            <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 font-sans tracking-normal">
              NST Student
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#4285F4] dark:text-[#4285F4] font-semibold bg-blue-50/80 dark:bg-blue-950/50 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#4285F4] rounded-full" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={handleConfetti}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#3367D6] shadow-sm hover:shadow-card-blue transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Say Hi!</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/60 text-[#4285F4] font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: link.color }}
                  />
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleConfetti(e);
              }}
              className="mt-2 w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#3367D6]"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

