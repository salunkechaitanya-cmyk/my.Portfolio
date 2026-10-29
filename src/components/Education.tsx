"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, Sparkles, School, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 sm:py-28 relative bg-slate-50/60 dark:bg-[#0E1626] border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-[#EA4335] text-xs font-semibold mb-3 border border-red-200/50 dark:border-red-800/50">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {education.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {education.subheading}
          </p>
        </div>

        {/* Playful Education Card */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-playful hover:shadow-card-blue transition-all duration-300 p-7 sm:p-10 overflow-hidden">
          {/* Top Google Colors Decorative Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 flex">
            <div className="h-full w-1/4 bg-[#4285F4]" />
            <div className="h-full w-1/4 bg-[#EA4335]" />
            <div className="h-full w-1/4 bg-[#FBBC04]" />
            <div className="h-full w-1/4 bg-[#34A853]" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-4">
              {/* Institution Avatar / Icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border-2 border-[#4285F4]/30 flex items-center justify-center text-[#4285F4] shadow-sm">
                <School className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                  Undergraduate Studies
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  {education.institution}
                </h3>
              </div>
            </div>

            {/* Student Role Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#34A853] border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <span>{education.role}</span>
            </div>
          </div>

          {/* Major / Focus Area */}
          <div className="mt-6 mb-4">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Department &amp; Focus:
            </p>
            <p className="text-lg sm:text-xl font-display font-semibold text-slate-800 dark:text-slate-100">
              {education.focusArea}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {education.description}
          </p>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            {education.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#34A853] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Verified Academic Status Footer */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Status: Currently enrolled</span>
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBC04]" />
              <span>Continuous Growth</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

