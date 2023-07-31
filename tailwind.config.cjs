const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./src/common/colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      opacity: {
        8: '.08',
      },
      borderRadius: {
        'lg': '32px',
        'md': '16px',
        'sm': '12px',
        'xs': '8px',
      },
      fontSize: {
        '2xl': [ '28px', '36px' ],
      },
      colors: colors,
      fontFamily: {
        sans: [ '"SF Pro Display"', ...defaultTheme.fontFamily.sans ],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
};
