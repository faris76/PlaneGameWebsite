/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: " #282828", //60%
        primary: " #D9D9D9", // 30%
        secondary: "#FAEF5D", // 10%
        hover: "#7E2553",
        background: "#FFF", // Background Color
        fontColor: "#FFF", //font color
      },
    },
  },
  plugins: [],
};
