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
        150: '29rem',
      },
      colors: {
        f8: '#f8f8f8',
        birux: '#23d1ae',
        biruz: '#00a88e',
        textBlack: '#1d1d1b',
        overPurple: '#432048',
        bgGray: '#fefefe',
        bgGray2: '#f2f2f2',
        bgFooter: '#fcfcfc',
        bgSlide: '#f8fbfb',
        textSlide: '#444444',
        bgPurple: '#b09d64',
        bgPlag: '#bcbcb6',
        bgYellow: '#3f1b00',
        bgBiruz: '#65bab3',
        bgFeatOne: '#fbf9fd',
        bgFeatOTwo: '#f5fbfe',
        bgFeatThree: '#f5fcfa',
      },
      backgroundImage: {
        map: "url('./data/map.png')",
        login: "url('./data/login.jpg')",
      },
      borderWidth: {
        1: '1px',
      },
    },
    plugins: [],
  },
}
