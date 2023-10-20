/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
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
        site: "url('/img/herobg.jpg')",
      },
    },
    tabsHeader: {
      defaultProps: {
        className: "",
      },
      styles: {
        base: {
          display: "flex",
          position: "relative",
          bg: "bg-primary",
          bgOpacity: "bg-opacity-60",
          borderRadius: "rounded-lg",
          p: "p-1",
        },
        horizontal: {
          flexDirection: "flex-row",
        },
        vertical: {
          flexDirection: "flex-col",
        },
      },
    },
  },
  plugins: [],
});
