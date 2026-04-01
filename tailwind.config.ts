import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#eef4fb",
          100: "#d6e4f7",
          300: "#8db1df",
          500: "#4d77aa",
          700: "#2f4f78",
          900: "#1c3048"
        },
        sky: {
          100: "#e7f5ff",
          300: "#b9dcff",
          500: "#74b6f2"
        },
        beige: {
          50: "#fefcf7",
          100: "#f8f0df",
          300: "#ead7b5"
        },
        cocoa: {
          500: "#7a5a44",
          700: "#5f4331",
          900: "#3d2a1e"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(28, 48, 72, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
