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
    extend: {
      keyframes: {
        show: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},

        },
        hide: {
          opacity: 0,
        },

          rollDown: {
            '0%': {top: "-540px"},
            '25%': {top: 0},
            '50%': {top: "-20px"},
            '100%': {top: 0},
          },
        fillBoxBackGround: {
          '0%': {
            width: 0,
            height: 0
          },
          '100%': {
            width: "100%",
            height: "100%",
          },

        }
      },
      animation: {
        show: 'show 4s ease-in-out forwards',
        rollDown: 'rollDown 1.5s ease-in-out forwards',
        fillBoxBackGround: 'fillBoxBackGround 2s ease-in-out forwards'
      }
    },
  },
  plugins: [
  ],
}