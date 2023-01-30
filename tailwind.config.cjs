const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0F1932',
        'dark-secondary': '#0B1125',
        'orange-primary': '#f05b16',
        'yellow-primary': '#FBD155'
      },
      fontFamily: {
        marker: ['var(--font-marker)', ...fontFamily.sans],
        mono: ['var(--font-fira-mono)', ...fontFamily.mono],
      }
    },
  },
  plugins: [],
};
