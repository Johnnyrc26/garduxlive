import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: "#0c0c0e",
            foreground: "#ffffff",
            primary: {
              50: "#e6f9ff",
              100: "#ccf3ff",
              200: "#99e7ff",
              300: "#66dbff",
              400: "#33cfff",
              500: "#00c3ff",
              600: "#009ccc",
              700: "#007599",
              800: "#004e66",
              900: "#002733",
              DEFAULT: "#00c3ff",
              foreground: "#000000"
            },
            secondary: {
              50: "#fff2e6",
              100: "#ffe6cc",
              200: "#ffcc99",
              300: "#ffb366",
              400: "#ff9933",
              500: "#ff8000",
              600: "#cc6600",
              700: "#994c00",
              800: "#663300",
              900: "#331900",
              DEFAULT: "#ff8000",
              foreground: "#000000"
            },
            content1: {
              DEFAULT: "#18181b",
              foreground: "#ffffff"
            },
            content2: {
              DEFAULT: "#27272a",
              foreground: "#ffffff"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#ffffff"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#ffffff"
            },
          }
        }
      }
    })
  ]
}
