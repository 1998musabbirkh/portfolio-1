/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["Playfair Display", "serif"],
        fontSecondary: ["Roboto", "serif"],
      },
      colors: {
        colorPrimary: "#FFC300",
        colorText: "#2C2E39",
      },
    },
  },
  plugins: [],
};
