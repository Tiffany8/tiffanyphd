/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export const content = ['./src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  fontFamily: {
    satisfy: ['Satisfy', 'cursive'],
    roborto: ['Roboto', 'sans-serif']
  },

  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    white: colors.white,
    fuschia: {
      DEFAULT: '#f72585',
      darker: '#b5179e'
    },
    violet: {
      lighter: '#7209b7',
      DEFAULT: '#560bad',
      darker: '#480ca8',
      darkest: '#3a0ca3'
    },
    bluepurple: { lightest: '#4895ef', light: '#4361EE', dark: '#3f37c9' },
    seagreen: '#4cc9f0'
  }
}
