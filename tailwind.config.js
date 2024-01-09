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
      backgroundImage: {
        watchTrailer: "url(./src/assets/watchTrailer.jpg)",
        gallery1: "url(./src/assets/gallery1.jpg)",
        gallery2: "url(./src/assets/gallery2.jpg)",
        gallery3: "url(./src/assets/gallery3.jpg)",
      },
    },
  },
  plugins: [],
};
