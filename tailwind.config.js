/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./index.html"],
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        IBM: ["IBM Plex Mono", "monospace"],
        Rubik: ["Rubik", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Noto: ["Noto Serif Tibetan", "serif"],
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
