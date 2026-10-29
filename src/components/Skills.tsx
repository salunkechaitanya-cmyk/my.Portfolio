"use client";

import React, { useState } from "react";
import {
  Terminal,
  BrainCircuit,
  Layout,
  Code2,
  GitBranch,
  Bot,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolioData";

const ICON_MAP = {
  Terminal: Terminal,
  BrainCircuit: BrainCircuit,
  Layout: Layout,
  Code2: Code2,
  GitBranch: GitBranch,
  Bot: Bot,
};

const COLOR_CONFIG = {
  blue: {
    bg: "bg-blue-50/80 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800/80 hover:border-[#4285F4]",
    text: "text-[#4285F4]",
    badgeBg: "bg-blue-100 dark:bg-blue-900/60 text-[#4285F4]",
    dot: "bg-[#4285F4]",
    glow: "hover:shadow-card-blue",
  },
  red: {
    bg: "bg-red-50/80 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800/80 hover:border-[#EA4335]",
    text: "text-[#EA4335]",
    badgeBg: "bg-red-100 dark:bg-red-900/60 text-[#EA4335]",
    dot: "bg-[#EA4335]",
    glow: "hover:shadow-card-red",
  },
  yellow: {
    bg: "bg-amber-50/80 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800/80 hover:border-[#FBBC04]",
    text: "text-[#D97706] dark:text-[#FCD34D]",
    badgeBg: "bg-amber-100 dark:bg-amber-900/60 text-[#B45309] dark:text-[#FCD34D]",
    dot: "bg-[#FBBC04]",
    glow: "hover:shadow-card-yellow",
  },
  green: {
    bg: "bg-emerald-50/80 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800/80 hover:border-[#34A853]",
    text: "text-[#34A853]",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900/60 text-[#34A853]",
    dot: "bg-[#34A853]",
    glow: "hover:shadow-card-green",
  },
};

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-50/60 dark:bg-[#0E1626] border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-[#34A853] text-xs font-semibold mb-3 border border-emerald-200/50 dark:border-emerald-800/50">
            <Layers className="w-3.5 h-3.5" />
            <span>Learning Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {skills.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {skills.subheading}
          </p>
          <div className="mt-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>{skills.note}</span>
          </div>
        </div>

        {/* Colorful Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.items.map((skill) => {
            const cfg = COLOR_CONFIG[skill.color];
            const Icon = ICON_MAP[skill.iconName as keyof typeof ICON_MAP] || Code2;
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`cursor-pointer group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 ${cfg.border} ${cfg.bg} transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-playful ${cfg.glow} ${
                  isSelected ? "ring-2 ring-offset-2 ring-[#4285F4] dark:ring-offset-slate-900" : ""
                }`}
              >
                {/* Top Row: Icon + Status */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center ${cfg.text} shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${cfg.badgeBg} flex items-center space-x-1.5`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
                    <span>{skill.status}</span>
                  </span>
                </div>

                {/* Skill Title & Category */}
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {skill.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Progress / Learning Note Tag */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Status:
                  </span>
                  <span className={`font-semibold ${cfg.text}`}>
                    {skill.levelNote}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Learning Motto Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-amber-500/10 to-emerald-500/10 border border-slate-200/80 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#4285F4] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ✨
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                “Every expert was once a beginner who refused to quit.”
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Consistently practicing algorithms, writing clean scripts, and learning by building.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-[#4285F4] shadow-sm transition-colors whitespace-nowrap"
          >
            See What I&apos;m Building →
          </a>
        </div>
      </div>
    </section>
  );
}

