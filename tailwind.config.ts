import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-out": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.1)",
            filter: "blur(10px)",
          },
        },
        "slide-in": {
          "0%": {
            "clip-path": "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
          },
          "100%": {
            "clip-path": "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          },
        },
        "scroll-horizontal": {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 500ms ease-out forwards",
        "slide-out": "slide-out 300ms ease-out forwards",
        scroll: "scroll-horizontal 14s linear infinite backwards",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
      },
      colors: {
        ...defaultTheme.colors,
        theme: "#7743DB",
        light: {
          primary: "#FFFFFF",
          secondary: "#f1f1ef",
        },
        dark: {
          primary: "#0F0F0F",
          secondary: "#202020",
        },
        "app-bg": "#F5F5F5",
      },
      screens: {
        ...defaultTheme.screens,
        xs: "340px",
        sm: "420px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
