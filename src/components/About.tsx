"use client";

import React from "react";
import { Sparkles, Cpu, Palette, Users, BookOpen, Lightbulb, HeartHandshake } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const ICON_MAP = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  Palette: Palette,
  Users: Users,
};

const COLOR_CLASSES = {
  blue: {
    bgLight: "bg-blue-50/70 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-900/60 hover:border-[#4285F4]",
    accent: "text-[#4285F4]",
    badge: "bg-blue-100 dark:bg-blue-900/60 text-[#4285F4]",
    glow: "hover:shadow-card-blue",
  },
  red: {
    bgLight: "bg-red-50/70 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-900/60 hover:border-[#EA4335]",
    accent: "text-[#EA4335]",
    badge: "bg-red-100 dark:bg-red-900/60 text-[#EA4335]",
    glow: "hover:shadow-card-red",
  },
  yellow: {
    bgLight: "bg-amber-50/70 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-900/60 hover:border-[#FBBC04]",
    accent: "text-[#FBBC04] dark:text-[#FCD34D]",
    badge: "bg-amber-100 dark:bg-amber-900/60 text-[#B45309] dark:text-[#FCD34D]",
    glow: "hover:shadow-card-yellow",
  },
  green: {
    bgLight: "bg-emerald-50/70 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-900/60 hover:border-[#34A853]",
    accent: "text-[#34A853]",
    badge: "bg-emerald-100 dark:bg-emerald-900/60 text-[#34A853]",
    glow: "hover:shadow-card-green",
  },
};

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-[#0B1120]">
      {/* Playful background doodle circles */}
      <div className="absolute top-10 right-5 w-40 h-40 rounded-full border-2 border-dashed border-[#4285F4]/20 pointer-events-none animate-float" />
      <div className="absolute bottom-10 left-5 w-32 h-32 rounded-full border-2 border-dashed border-[#34A853]/20 pointer-events-none animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] text-xs font-semibold mb-3 border border-blue-200/50 dark:border-blue-800/50">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Discover My Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {about.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {about.subheading}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="mb-14 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle Google accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="h-full w-1/4 bg-[#4285F4]" />
            <div className="h-full w-1/4 bg-[#EA4335]" />
            <div className="h-full w-1/4 bg-[#FBBC04]" />
            <div className="h-full w-1/4 bg-[#34A853]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            <div className="md:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="md:col-span-4 flex flex-col space-y-3 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Lightbulb className="w-4 h-4 text-[#FBBC04]" />
                <span>Core Values as a Student</span>
              </div>
              <ul className="text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                  <span>Embrace mistakes as learning steps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                  <span>Build things people actually find useful</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
                  <span>Stay humble, curious, and persistent</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                  <span>Celebrate small wins with fellow peers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Animated Mini-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.miniCards.map((card) => {
            const styles = COLOR_CLASSES[card.color];
            const IconComponent = ICON_MAP[card.icon as keyof typeof ICON_MAP] || Sparkles;

            return (
              <div
                key={card.id}
                className={`group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 ${styles.border} ${styles.bgLight} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-playful ${styles.glow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center ${styles.accent} shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Student mindset</span>
                  <span className="font-mono text-xs">0{card.id.length % 4 + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

