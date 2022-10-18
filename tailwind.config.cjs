/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#4020A1",
        "secondary" : "#24323F",
        "text-input" : "#373737",
        "background-color" : "#070F4E"
      },
      backgroundImage: {
        "searchimage": "url('src/assets/icons8-search.svg')",
        "background-image" : "url('src/assets/background.svg')"
      },
      fontFamily: {
        "inter" : "inter"
      },
      keyframes: {
        fadeinbottom : {
          "0%" : {
            "opacity" : "0",
            "transform" : "translateY(20%)"
          },
          "100%" : {
            "opacity" : "1"
          }
        }
      },
      animation : {
        fadeinbottom : "fadeinbottom .4s ease-in"
      }
    },
  },
  plugins: [],
}
