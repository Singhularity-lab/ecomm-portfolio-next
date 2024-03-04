/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '376px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      grotesk: ['var(--font-space-grotesk)'],
    },
    extend: {
      colors: {
        primaryBlack: '#000000',
        secondaryBlue: '#377DFF',
        secondaryGreen: '#38CB89',
        secondaryOrange: '#FFAB00',
        secondaryRed: '#FF5630',
        neutral1: '#141718',
        neutral2: '#232627',
        neutral3: '#343839',
        neutralDark: '#6C7275',
        neutralLight: '#E8ECEF',
        neutralLight2: '#F3F5F7',
        neutralWhite: '#FEFEFE',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
