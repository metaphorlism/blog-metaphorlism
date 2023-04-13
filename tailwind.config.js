/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: "60rem",
      },
      maxWidth: {
        360: "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
