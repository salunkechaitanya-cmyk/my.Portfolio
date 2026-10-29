"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Github, Code2, Edit3, CheckCircle2, AlertCircle } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

const ACCENT_COLORS = {
  blue: {
    border: "border-blue-200 dark:border-blue-900/60 hover:border-[#4285F4]",
    tagBg: "bg-blue-50 dark:bg-blue-950/60 text-[#4285F4] border-blue-200 dark:border-blue-800/60",
    glow: "hover:shadow-card-blue",
    btnPrimary: "bg-[#4285F4] hover:bg-[#3367D6] text-white",
  },
  green: {
    border: "border-emerald-200 dark:border-emerald-900/60 hover:border-[#34A853]",
    tagBg: "bg-emerald-50 dark:bg-emerald-950/60 text-[#34A853] border-emerald-200 dark:border-emerald-800/60",
    glow: "hover:shadow-card-green",
    btnPrimary: "bg-[#34A853] hover:bg-[#1E8E3E] text-white",
  },
  yellow: {
    border: "border-amber-200 dark:border-amber-900/60 hover:border-[#FBBC04]",
    tagBg: "bg-amber-50 dark:bg-amber-950/60 text-[#B45309] dark:text-[#FCD34D] border-amber-200 dark:border-amber-800/60",
    glow: "hover:shadow-card-yellow",
    btnPrimary: "bg-[#FBBC04] hover:bg-[#F29900] text-slate-900 font-bold",
  },
  red: {
    border: "border-red-200 dark:border-red-900/60 hover:border-[#EA4335]",
    tagBg: "bg-red-50 dark:bg-red-950/60 text-[#EA4335] border-red-200 dark:border-red-800/60",
    glow: "hover:shadow-card-red",
    btnPrimary: "bg-[#EA4335] hover:bg-[#D93025] text-white",
  },
};

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const handleLinkClick = (e: React.MouseEvent, project: ProjectItem, linkType: "github" | "demo") => {
    e.preventDefault();
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-[#D97706] dark:text-[#FCD34D] text-xs font-semibold mb-3 border border-amber-200/50 dark:border-amber-800/50">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Digital Workshop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {projects.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {projects.subheading}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, idx) => {
            const colors = ACCENT_COLORS[project.color];

            return (
              <div
                key={project.id}
                className={`group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border-2 ${colors.border} p-6 sm:p-7 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-playful ${colors.glow} relative overflow-hidden`}
              >
                {/* Editable Placeholder Indicator Ribbon */}
                {project.isPlaceholder && (
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <Edit3 className="w-3 h-3 text-[#4285F4]" />
                      <span>Editable Placeholder #{idx + 1}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      src/data
                    </span>
                  </div>
                )}

                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#4285F4] transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 italic">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-xl font-medium border ${colors.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (GitHub & Live Demo) */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <button
                    onClick={(e) => handleLinkClick(e, project, "github")}
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick(e, project, "demo")}
                    className={`flex-1 inline-flex items-center justify-center space-x-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${colors.btnPrimary}`}
                    title="View Live Demo"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tip for easy editing */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl py-3 px-6 inline-block">
            💡 <strong>How to customize projects:</strong> Update the placeholder items in{" "}
            <code className="text-[#4285F4] font-mono bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
              src/data/portfolioData.ts
            </code>{" "}
            with your own project titles, descriptions, and repository URLs!
          </p>
        </div>
      </div>

      {/* Placeholder Modal / Alert Dialog */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-[#4285F4] flex items-center justify-center mb-4">
              <Edit3 className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Editable Project Placeholder
            </h4>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              This card represents <strong>&ldquo;{activeModalProject.title}&rdquo;</strong> as an
              editable placeholder. In accordance with guidelines, no fictional repository URLs are
              invented.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-500 dark:text-slate-400 font-mono mb-6 border border-slate-200 dark:border-slate-700">
              Edit in: src/data/portfolioData.ts
              <br />
              Replace: {activeModalProject.githubUrl}
            </div>

            <button
              onClick={() => setActiveModalProject(null)}
              className="w-full py-2.5 rounded-full font-semibold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

