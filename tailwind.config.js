/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,ts}",
  ],
  theme: { extend: {} },
  plugins: [],
};
