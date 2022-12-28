/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      '2xl': { min: '1535px' },
      xl: { min: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      spacing: {
        39: '9.9rem',
        192: '34rem',
      },
      colors: {
        f8: '#f8f8f8',
        birux: '#23d1ae',
        biruz: '#00a88e',
        textBlack: '#1d1d1b',
        overPurple: '#432048',
        bgGray: '#fefefe',
        bgFooter: '#fcfcfc',
        bgSlide: '#f8fbfb',
        textSlide: '#444444',
        bgPurple: '#5e2d64',
      },
      backgroundImage: {
        map: "url('./data/map.png')",
      },
      borderWidth: {
        1: '1px',
      },
    },
    plugins: [],
  },
}
