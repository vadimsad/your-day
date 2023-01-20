/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#E78795',
        vanilla: '#F5E9B9',
        ghosty: '#F5F5F5;'
      },
      content: {
        curvedLine: 'url("./src/assets/curved-line.svg")',
        heroDecor: 'url("./src/assets/hero-decor.svg")'
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      screens: {
        zero: "0px",
        xs: "481px",
        ss: "621px",
        sm: "769px",
        md: "1061px",
        lg: "1201px",
        mlg: "1441px",
        xl: "1701px",
      }
    },
  },
  plugins: [],
}
