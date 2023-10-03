/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ssm: "425px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        baimj: ["Bai Jamjuree"],
        baumans: ["Baumans"],
        roboto: ["Roboto"],
        popp: ["Poppins"],
      },
      colors: {
        primary: "#5CFF4D",
        secondary: "#023535",
        gray: "#D9D9D9",
        darkGray: "#0C0C0F",
        lblue: "#A1FFD0",
      },
      backgroundImage: {
        site: "url('./src/assets/img/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
