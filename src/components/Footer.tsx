"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-slate-50 dark:bg-[#070D18] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Student signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Chaitanya Salunke
              </span>
              <div className="flex space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <span className="w-2 h-2 rounded-full bg-[#FBBC04]" />
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Student at Newton School of Technology • Technology &amp; Computer Science
            </p>
          </div>

          {/* Center message */}
          <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400">
            <span>Built with curiosity, React, Next.js &amp; Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-[#4285F4] hover:text-[#4285F4] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Chaitanya Salunke. All personal content is editable.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#about" className="hover:text-[#4285F4] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#EA4335] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#FBBC04] transition-colors">Projects</a>
            <a href="#education" className="hover:text-[#34A853] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#4285F4] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

