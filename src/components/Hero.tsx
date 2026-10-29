"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles, Code, Compass } from "lucide-react";
import MascotHeroIllustration from "./MascotHeroIllustration";
import confetti from "canvas-confetti";

export default function Hero() {
  const fireConfetti = (e: React.MouseEvent) => {
    try {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { x, y },
        colors: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
        disableForReducedMotion: true,
      });
    } catch (_) {}
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-doodle-grid"
    >
      {/* Decorative Floating Colorful Blobs */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#4285F4]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#EA4335]/10 blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-[#FBBC04]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-28 h-28 rounded-full bg-[#34A853]/10 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Animated Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm mb-6 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 animate-bounce-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34A853]"></span>
              </span>
              <span>Currently learning, building &amp; experimenting.</span>
            </div>

            {/* Main Bold Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
              Hey, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="text-[#4285F4]">Chai</span>
                <span className="text-[#EA4335]">tan</span>
                <span className="text-[#FBBC04]">ya</span>
                <span className="text-[#34A853]">!</span>
                {/* Playful hand-drawn underline doodle */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FBBC04] opacity-80"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 9 C 25 2, 60 12, 98 4"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <span className="inline-block animate-wiggle origin-bottom-right">👋</span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 mb-5">
              <span className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#4285F4] border border-blue-200/50 dark:border-blue-800/50">
                Newton School of Technology
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#EA4335] border border-red-200/50 dark:border-red-800/50">
                Aspiring Developer
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#34A853] border border-emerald-200/50 dark:border-emerald-800/50">
                Curious Mind
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              I love exploring technology, solving problems, building cool things, and
              turning ideas into reality.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-[#4285F4] hover:bg-[#3367D6] shadow-playful hover:shadow-card-blue transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={fireConfetti}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-[#EA4335] dark:hover:border-[#EA4335] shadow-sm hover:shadow-card-red transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#EA4335]" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Quick mini stats / highlights */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                <span>Always Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <span>Problem Solving Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#FBBC04]" />
                <span>Creative Building</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                <span>Hackathons &amp; Collabs</span>
              </div>
            </div>
          </div>

          {/* Cartoon Character / Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <MascotHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

