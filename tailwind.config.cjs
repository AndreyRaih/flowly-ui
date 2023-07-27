const defaultTheme = require('tailwindcss/defaultTheme');

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
      },
      fontSize: {
        '2xl': [ '28px', '36px' ],
      },
      colors: {
        primary: '#EF4444',
        secondary: '#E7D0AF',
        accent: '#FFA230',
        gray: {
          500: '#8f8f8f',
          800: '#111111',
        },
        red: {
          400: '#f8545d',
        },
      },
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
