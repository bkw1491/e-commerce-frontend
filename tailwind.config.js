const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent_1: "#00aea5",
        accent_1_hover: "#a4fcf8",
        accent_2: "#eaade5",
        accent_2_hover: "#e6daef"
      },
    },
  },
}
