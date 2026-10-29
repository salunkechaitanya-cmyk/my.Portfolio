import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        google: {
          blue: {
            DEFAULT: "#4285F4",
            hover: "#3367D6",
            light: "#E8F0FE",
            dark: "#174EA6",
            surface: "#F4F8FE",
            darkSurface: "#1a2538",
          },
          red: {
            DEFAULT: "#EA4335",
            hover: "#D93025",
            light: "#FCE8E6",
            dark: "#A50E0E",
            surface: "#FEF2F2",
            darkSurface: "#381c1c",
          },
          yellow: {
            DEFAULT: "#FBBC04",
            hover: "#F29900",
            light: "#FEF7E0",
            dark: "#B06000",
            surface: "#FFFDF0",
            darkSurface: "#383115",
          },
          green: {
            DEFAULT: "#34A853",
            hover: "#1E8E3E",
            light: "#E6F4EA",
            dark: "#0D652D",
            surface: "#F0FAF2",
            darkSurface: "#163421",
          },
        },
      },
      fontFamily: {
        sans: [
          "Outfit",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Fredoka",
          "Outfit",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-2deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.2s ease-out forwards",
      },
      boxShadow: {
        'playful': '0 8px 30px -4px rgba(66, 133, 244, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'playful-hover': '0 16px 40px -6px rgba(66, 133, 244, 0.2), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'card-blue': '0 8px 24px -4px rgba(66, 133, 244, 0.18)',
        'card-red': '0 8px 24px -4px rgba(234, 67, 53, 0.18)',
        'card-yellow': '0 8px 24px -4px rgba(251, 188, 5, 0.18)',
        'card-green': '0 8px 24px -4px rgba(52, 168, 83, 0.18)',
      },
    },
  },
  plugins: [],
};
export default config;
