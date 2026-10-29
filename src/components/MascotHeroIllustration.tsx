"use client";

import React, { useState } from "react";

export default function MascotHeroIllustration() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[500px] mx-auto select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Soft Glow Circles in Google Colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#4285F4]/15 via-[#FBBC04]/10 to-[#34A853]/15 blur-3xl -z-10" />

      {/* Floating Interactive Doodle Card 1 - Python / Code */}
      <div
        className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 z-20 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-playful rounded-2xl p-2.5 sm:p-3 flex items-center space-x-2 animate-float"
        style={{ animationDuration: "5s" }}
      >
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#4285F4] flex items-center justify-center font-mono font-bold text-xs sm:text-sm">
          &lt;/&gt;
        </span>
        <div className="text-left">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100">
            def build_future():
          </p>
          <p className="text-[9px] text-[#34A853] font-mono">return &quot;clean code&quot;</p>
        </div>
      </div>

      {/* Floating Interactive Doodle Card 2 - Coffee Cup */}
      <div
        className="absolute top-12 -right-3 sm:top-8 sm:-right-6 z-20 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-playful rounded-2xl p-2.5 sm:p-3 flex items-center space-x-2 animate-float-reverse"
        style={{ animationDuration: "6s" }}
      >
        <span className="text-xl sm:text-2xl animate-bounce-subtle" role="img" aria-label="Coffee cup">
          ☕
        </span>
        <div className="text-left">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100">
            Fuel = Curiosity
          </p>
          <span className="inline-block text-[9px] bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium px-1.5 py-0.5 rounded-full">
            Full Cup
          </span>
        </div>
      </div>

      {/* Floating Badge 3 - Newton School of Tech Student */}
      <div
        className="absolute -bottom-3 left-6 sm:bottom-0 sm:left-4 z-20 bg-white dark:bg-slate-800 border-2 border-[#34A853]/30 shadow-card-green rounded-full px-3 py-1.5 flex items-center space-x-2 animate-float"
        style={{ animationDuration: "7s" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#34A853] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200">
          Newton School of Tech 🎓
        </span>
      </div>

      {/* Main SVG Cartoon Character Illustration */}
      <svg
        viewBox="0 0 520 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
      >
        <defs>
          <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#1A73E8" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="hoodieGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#1967D2" />
          </linearGradient>
        </defs>

        {/* Ambient Doodles & Floating Sparkles */}
        {/* Yellow Star 1 */}
        <g className="animate-pulse-glow">
          <path
            d="M90 120 L95 135 L110 140 L95 145 L90 160 L85 145 L70 140 L85 135 Z"
            fill="#FBBC04"
          />
        </g>
        {/* Red Sparkle 2 */}
        <g className="animate-float" style={{ animationDuration: "4s" }}>
          <circle cx="430" cy="180" r="10" fill="#EA4335" />
          <circle cx="430" cy="180" r="5" fill="#FFFFFF" />
        </g>
        {/* Green Squiggle */}
        <path
          d="M60 280 Q75 260 90 280 T120 280"
          stroke="#34A853"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="animate-wiggle"
        />
        {/* Blue Cross / Plus */}
        <g transform="translate(410, 80) rotate(15)">
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" />
        </g>
        {/* Yellow Tiny Circles */}
        <circle cx="130" cy="90" r="4" fill="#FBBC04" />
        <circle cx="440" cy="300" r="6" fill="#FBBC04" />
        <circle cx="100" cy="370" r="5" fill="#EA4335" />

        {/* Floating Code Bracket Symbol { } */}
        <text
          x="385"
          y="255"
          fill="#34A853"
          fontSize="34"
          fontWeight="bold"
          fontFamily="monospace"
          className="animate-bounce-subtle"
        >
          &#123;&#125;
        </text>

        {/* Modern Rounded Desk Surface */}
        <ellipse cx="260" cy="395" rx="190" ry="24" fill="#E2E8F0" opacity="0.6" />
        <rect x="90" y="340" width="340" height="20" rx="10" fill="url(#deskGrad)" />
        <rect x="100" y="360" width="14" height="60" rx="7" fill="#CBD5E1" />
        <rect x="406" y="360" width="14" height="60" rx="7" fill="#CBD5E1" />

        {/* Cute Desk Plant (Google Green pot) */}
        <g transform="translate(130, 275)">
          {/* Pot */}
          <path d="M10 40 L16 65 L44 65 L50 40 Z" fill="#34A853" />
          {/* Leaves */}
          <path
            d="M30 40 Q20 20 5 25 Q15 40 30 40"
            fill="#4ADE80"
          />
          <path
            d="M30 40 Q35 15 50 20 Q42 38 30 40"
            fill="#22C55E"
          />
          <path
            d="M30 40 Q30 8 38 12 Q34 32 30 40"
            fill="#15803D"
          />
        </g>

        {/* Desk Books Stack */}
        <g transform="translate(370, 290)">
          {/* Bottom Book (Red) */}
          <rect x="0" y="35" width="55" height="15" rx="4" fill="#EA4335" />
          <rect x="6" y="38" width="45" height="9" rx="2" fill="#FFFFFF" opacity="0.7" />
          {/* Middle Book (Yellow) */}
          <rect x="5" y="20" width="48" height="15" rx="4" fill="#FBBC04" />
          {/* Top Notebook (Blue) */}
          <rect x="10" y="6" width="40" height="14" rx="4" fill="#4285F4" />
        </g>

        {/* Character Body / Torso (Student in cool Hoodie) */}
        <g transform="translate(260, 200)">
          {/* Hoodie Body */}
          <path
            d="M-45 80 C-45 50 -25 35 0 35 C25 35 45 50 45 80 L52 145 L-52 145 Z"
            fill="url(#hoodieGrad)"
          />
          {/* Hoodie Pocket */}
          <path
            d="M-22 105 C-10 115 10 115 22 105 L20 135 L-20 135 Z"
            fill="#3367D6"
            opacity="0.8"
          />
          {/* Hoodie Strings */}
          <line x1="-8" y1="50" x2="-8" y2="75" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="50" x2="8" y2="75" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="-8" cy="76" r="2.5" fill="#FBBC04" />
          <circle cx="8" cy="76" r="2.5" fill="#FBBC04" />

          {/* Arms typing on keyboard */}
          {/* Left Arm */}
          <path
            d="M-42 60 C-60 85 -50 115 -18 128"
            stroke="#4285F4"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Hand */}
          <circle cx="-16" cy="128" r="7" fill="#FBBF24" />

          {/* Right Arm */}
          <path
            d="M42 60 C60 85 50 115 18 128"
            stroke="#4285F4"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Hand */}
          <circle cx="16" cy="128" r="7" fill="#FBBF24" />
        </g>

        {/* Student Head, Face & Hair */}
        <g transform="translate(260, 150)">
          {/* Neck */}
          <rect x="-10" y="25" width="20" height="24" rx="4" fill="#FBBF24" />

          {/* Head */}
          <ellipse cx="0" cy="10" rx="36" ry="40" fill="#FBBF24" />

          {/* Ears */}
          <circle cx="-36" cy="12" r="7" fill="#FBBF24" />
          <circle cx="36" cy="12" r="7" fill="#FBBF24" />

          {/* Stylish Hair */}
          <path
            d="M-38 6 C-40 -25 -15 -42 0 -42 C18 -42 42 -22 38 6 C35 -15 20 -28 0 -28 C-20 -28 -32 -10 -38 6 Z"
            fill="#1E293B"
          />
          {/* Hair Tufts / Quiff */}
          <path
            d="M-20 -38 C-5 -52 15 -45 25 -32 C12 -42 -5 -38 -20 -38 Z"
            fill="#334155"
          />

          {/* Modern Round Developer Glasses */}
          <circle
            cx="-15"
            cy="12"
            r="12"
            fill="#FFFFFF"
            fillOpacity="0.3"
            stroke="#1E293B"
            strokeWidth="3"
          />
          <circle
            cx="15"
            cy="12"
            r="12"
            fill="#FFFFFF"
            fillOpacity="0.3"
            stroke="#1E293B"
            strokeWidth="3"
          />
          <line x1="-3" y1="12" x2="3" y2="12" stroke="#1E293B" strokeWidth="3" />

          {/* Eyes (Friendly & focused) */}
          <circle cx="-14" cy="12" r="3.5" fill="#1E293B" />
          <circle cx="-12.5" cy="10.5" r="1.2" fill="#FFFFFF" />

          <circle cx="16" cy="12" r="3.5" fill="#1E293B" />
          <circle cx="17.5" cy="10.5" r="1.2" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M-24 0 Q-15 -4 -6 0" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M6 0 Q15 -4 24 0" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Friendly Smile */}
          <path
            d="M-7 27 Q0 35 7 27"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Subtle Rosy Cheeks */}
          <circle cx="-25" cy="22" r="4.5" fill="#EA4335" opacity="0.3" />
          <circle cx="25" cy="22" r="4.5" fill="#EA4335" opacity="0.3" />
        </g>

        {/* Laptop on Desk (Open facing user/front view with glowing logo) */}
        <g transform="translate(260, 310)">
          {/* Screen Outer Lid */}
          <rect
            x="-65"
            y="-55"
            width="130"
            height="85"
            rx="8"
            fill="#1E293B"
            stroke="#CBD5E1"
            strokeWidth="3"
          />

          {/* Glowing Code Screen */}
          <rect x="-58" y="-48" width="116" height="71" rx="4" fill="url(#screenGrad)" />

          {/* Code Lines on Screen in Google Colors */}
          <rect x="-48" y="-38" width="28" height="5" rx="2.5" fill="#EA4335" />
          <rect x="-16" y="-38" width="40" height="5" rx="2.5" fill="#4285F4" />

          <rect x="-42" y="-27" width="48" height="4.5" rx="2" fill="#34A853" />
          <rect x="10" y="-27" width="24" height="4.5" rx="2" fill="#FBBC04" />

          <rect x="-42" y="-16" width="36" height="4.5" rx="2" fill="#94A3B8" />
          <rect x="-2" y="-16" width="32" height="4.5" rx="2" fill="#4285F4" />

          <rect x="-48" y="-5" width="20" height="4.5" rx="2" fill="#EA4335" />
          <rect x="-24" y="-5" width="55" height="4.5" rx="2" fill="#34A853" />

          {/* Blinking Cursor on Screen */}
          <rect
            x="35"
            y="-5"
            width="3"
            height="5"
            fill="#FBBC04"
            className="animate-pulse"
          />

          {/* Laptop Keyboard Base */}
          <polygon
            points="-85,30 -65,30 65,30 85,30 75,40 -75,40"
            fill="#94A3B8"
          />
          <rect x="-85" y="30" width="170" height="8" rx="4" fill="#64748B" />
          {/* Trackpad */}
          <rect x="-20" y="32" width="40" height="4" rx="1.5" fill="#CBD5E1" />
        </g>
      </svg>
    </div>
  );
}

