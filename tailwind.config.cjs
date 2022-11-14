/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        secondary: "#012238",
        "text-input": "#373737",
        "background-color": "#111112",
        "button-background-color": "#303033",
        cardcolor: "#07090a",
      },
      fontFamily: {
        inter: "inter",
      },
      backgroundImage: {
        searchImage: "url('assets/icons8-search.svg')",
      },
      keyframes: {
        fadeinbottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(20%)",
          },
          "100%": {
            opacity: "1",
          },
        },
        emptyanim: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
        },
      },
      animation: {
        fadeinbottom: "fadeinbottom .4s ease-in",
        emptyanim: "emptyanim 3s infinite",
        emptyanimfast: "emptyanim 2s infinite",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
