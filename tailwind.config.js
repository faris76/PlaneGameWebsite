/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#2b2e4a", //60%
        primary: "#903749", // 30%
        secondary: "#e84545", // 10%
        fontColor: "#ffffff", //font color
      },
    },
  },
  plugins: [],
};
