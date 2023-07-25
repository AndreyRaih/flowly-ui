const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '32px',
      },
      fontSize: {
        '2xl': [ '28px', '36px' ],
      },
      colors: {
        primary: '#EF4444',
        secondary: '#E7D0AF',
        accent: '#FFA230',
        gray: {
          800: '#111111',
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
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-safe-area'),
  ],
};
