/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake']
  },
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
        roborto: ['Roboto', 'sans-serif']
      }
    }
  }
}
