/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Source Code Pro']
    },
    colors: {
      black: "#171717",
      'black-dark': "#141414",
      yellow: "#DD9F00",
      white:"#FFFFFF",
      gray: '#E5E5E5',
      'border-gray': 'rgba(255, 255, 255, 0.3)'
    },
    extend: {},
  },
  plugins: [
  ],
}