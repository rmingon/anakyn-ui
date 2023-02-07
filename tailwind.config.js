const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      'primary-red': '#D92525',
      'secondary-red': '#8C1F28',
      'tertiary-red': '#591C21',
      'white': '#F2F2F2',
      'primary-gray': '#044040',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      red: colors.red
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}


