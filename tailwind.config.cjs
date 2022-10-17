/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#090F15",
        "text-input" : "#373737",
      },
      backgroundImage: {
        "searchimage": "url('src/assets/icons8-search.svg')"
      },
      fontFamily: {
        "inter" : "inter"
      }
    },
  },
  plugins: [],
}
