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
        darkest: "#16202a",
        darker: "#182734",
        midtone: "#22303b",
        contrast: "#eff5f7",
        accent: "#cf667a",
      },
    },
  },
}
