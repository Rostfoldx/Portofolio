/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./public/**/*.{html,js}", "./*.{html,js}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      cursor: {
        default: "url('../cursor/cursor-black-1.png'), default",
        pointer: "url('../cursor/pointer-black-1.png'), pointer",
      },
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
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
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
