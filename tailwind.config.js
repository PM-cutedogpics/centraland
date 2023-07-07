/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        sidebar: "300px auto", // for sidebar layout, adds grid-cols-sidebar class
      },
      gridTemplateRows:{
        header: "64px auto", // for navbar layout, adds grid-rows-sidebar class
      },
      borderRadius: {
        
      }
    },
  },
  plugins: [],
}

