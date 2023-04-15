/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
      },
      spacing: {
        15: "60rem",
      },
      maxWidth: {
        360: "90rem",
      },
      gridTemplateRows: {
        defaultLayout: "5.125rem 1fr 4.5rem",
      },
      fontFamily: {
        convergence: ["Convergence", "san-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
