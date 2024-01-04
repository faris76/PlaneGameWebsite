/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: " #1D2B53", //60%
        primary: " #FF004D", // 30%
        secondary: "#FAEF5D", // 10%
        hover: "#7E2553",
        fontColor: "#FFF", //font color
      },
    },
  },
  plugins: [],
};
