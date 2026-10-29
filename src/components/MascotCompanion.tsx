"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

const PHRASES = [
  "Hi! I'm Pixel, Chaitanya's coding buddy! 👾",
  "Newton School of Tech represents! 🚀",
  "Learning, breaking, and building every day! 💡",
  "Click me for a burst of inspiration! ✨",
  "Curiosity fuels the best code! ☕",
  "Scroll down to see what we're building! 💻",
];

export default function MascotCompanion() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isWinking, setIsWinking] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [bubbleVisible, setBubbleVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsWinking(true);
    setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    setBubbleVisible(true);

    try {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 22,
        spread: 60,
        origin: { x, y },
        colors: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
        disableForReducedMotion: true,
      });
    } catch (_) {}

    setTimeout(() => {
      setIsWinking(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none">
      {/* Speech Bubble */}
      {bubbleVisible && isOpen && (
        <div className="mb-2 max-w-[210px] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-medium py-2 px-3 rounded-2xl shadow-xl border-2 border-slate-100 dark:border-slate-700 relative animate-bounce-subtle">
          <p>{PHRASES[phraseIndex]}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setBubbleVisible(false);
            }}
            aria-label="Close message"
            className="absolute -top-1.5 -right-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-red-400 hover:text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center transition-colors"
          >
            ×
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-slate-800 border-b-2 border-r-2 border-slate-100 dark:border-slate-700 transform rotate-45" />
        </div>
      )}

      {/* Mascot Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setBubbleVisible(true)}
        aria-label="Interactive portfolio mascot"
        className="group relative flex items-center justify-center p-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700 shadow-playful hover:shadow-playful-hover transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
      >
        <span className="sr-only">Interactive mascot</span>
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4285F4]/20 via-[#EA4335]/20 to-[#34A853]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />

        {/* SVG Mascot Character */}
        <svg
          width="44"
          height="44"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
        >
          {/* Antenna */}
          <line
            x1="24"
            y1="8"
            x2="24"
            y2="3"
            stroke="#4285F4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="24" cy="3" r="3" fill="#EA4335" className="animate-pulse" />

          {/* Head / Body */}
          <rect
            x="8"
            y="8"
            width="32"
            height="28"
            rx="8"
            fill="#4285F4"
            className="transition-colors duration-300 group-hover:fill-[#3367D6]"
          />

          {/* Face Screen */}
          <rect x="12" y="12" width="24" height="20" rx="5" fill="#FFFFFF" />

          {/* Eyes */}
          {isWinking ? (
            <>
              {/* Left Eye: Wink arc */}
              <path
                d="M17 21C18.5 19 20.5 19 22 21"
                stroke="#1E293B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Right Eye: Open happy circle */}
              <circle cx="28" cy="20" r="2.5" fill="#1E293B" />
            </>
          ) : (
            <>
              <circle
                cx="19"
                cy="20"
                r="2.5"
                fill="#1E293B"
                className="transition-all duration-200 group-hover:scale-125"
              />
              <circle
                cx="29"
                cy="20"
                r="2.5"
                fill="#1E293B"
                className="transition-all duration-200 group-hover:scale-125"
              />
            </>
          )}

          {/* Cheeks */}
          <circle cx="16" cy="24" r="1.5" fill="#EA4335" opacity="0.6" />
          <circle cx="32" cy="24" r="1.5" fill="#EA4335" opacity="0.6" />

          {/* Smile */}
          <path
            d="M21 25C22.5 27 25.5 27 27 25"
            stroke="#1E293B"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Mini Laptop Base */}
          <rect x="14" y="38" width="20" height="4" rx="2" fill="#34A853" />
          <path d="M18 38L20 34H28L30 38" stroke="#FBBC04" strokeWidth="2" />
        </svg>

        {/* Status dot */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#34A853] border-2 border-white dark:border-slate-800 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
      </button>
    </div>
  );
}

