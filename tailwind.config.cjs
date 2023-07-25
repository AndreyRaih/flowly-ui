const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        primary: '#EF4444',
        secondary: '#E7D0AF',
        accent: '#FFA230',
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
