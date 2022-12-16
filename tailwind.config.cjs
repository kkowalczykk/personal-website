/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0F1932',
        'teal-primary': '#00E8B7',
        'yellow-primary': '#FBD155'
      }
    },
  },
  plugins: [],
};
