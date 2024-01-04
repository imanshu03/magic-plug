import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-out": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "cursor-down": {
          "0%": {
            top: "25%",
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "80%": {
            top: "70%",
            opacity: "0",
          },
          "100%": {
            top: "80%",
            opacity: "0",
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
        "slide-in": "slide-in 750ms ease-out backwards",
        "slide-out": "slide-out 750ms ease-out forwards",
        "cursor-down": "cursor-down 1s ease-out infinite",
        scroll: "scroll-horizontal 14s linear infinite backwards",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        hurricane: "var(--font-hurricane)",
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
  plugins: [require("tailwind-scrollbar-hide")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
