/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "home-chip": "15px"
      },
      colors: {
        "app-mint-green": "#9CD9A5",
        "chip-default": "#ADADAD"
      }
    },
  },
  plugins: [],
}

