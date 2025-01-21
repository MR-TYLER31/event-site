/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          600: "#1D4ED8",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
