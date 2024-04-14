/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      "Lexend-Deca": ["Lexend Deca", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
