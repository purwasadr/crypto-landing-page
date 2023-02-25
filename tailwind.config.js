const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'app-primary-main': colors.emerald[500],
        'app-primary-dark': colors.emerald[700],
        'app-primary-light': colors.emerald[300]
      },
      textColor: {
        primary: colors.gray[900],
        secondary: '#44495c',
        tertiary: '#9298ae'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
}
