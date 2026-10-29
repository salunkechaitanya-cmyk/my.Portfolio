"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:border-[#4285F4] dark:hover:border-[#FBBC04] transition-all duration-300 hover:scale-105 active:scale-95"
      title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-[#FBBC04] transition-transform duration-500 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-[#4285F4] transition-transform duration-500 rotate-0 hover:-rotate-12" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

