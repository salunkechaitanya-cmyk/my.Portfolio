"use client";

import React, { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

export default function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced-motion is not requested
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    setEnabled(true);

    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle sparkle creation for high performance
      if (now - lastTime < 55) return;
      lastTime = now;

      const newSparkle: Sparkle = {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 8) + 6,
        color: GOOGLE_COLORS[Math.floor(Math.random() * GOOGLE_COLORS.length)],
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 550));
    }, 120);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (!enabled || sparkles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute rounded-full transition-opacity duration-500 animate-ping"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            transform: "translate(-50%, -50%)",
            opacity: 0.75,
            boxShadow: `0 0 8px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
}

