import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#188ed7",
        "blue-dark": "#0f5d93",
        "blue-glow": "#38bdf8",
        "red-primary": "#df0a16",
        "red-dark": "#b80812",
        navy: {
          950: "#030816",
          900: "#070f26",
          850: "#0a1638",
          800: "#0d1d49",
          750: "#11265e",
          700: "#163175",
          600: "#1f439c",
        },
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 25px rgba(24, 142, 215, 0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(56, 189, 248, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

