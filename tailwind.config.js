/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"],
        lato: ["Lato", "serif"],
      },
      colors: {
        colorPrimary: "#FFC300",
        colorText: "#2C2E39",
      },
    },
  },
  plugins: [],
};
