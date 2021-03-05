const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        social: {
          discord: '#7289DA',
          twitch: '#6441A4',
          twitter: '#1DA1F2',
        },
        green: {
          50: '#E7F8E7',
          100: '#D4F1D4',
          200: '#ADE5AD',
          300: '#86D986',
          400: '#5FCD5F',
          500: '#3BBE3B',
          600: '#2F972F',
          700: '#237023',
          800: '#174917',
          900: '#0B220B',
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover', 'group-focus'],
      opacity: ['group-hover', 'group-focus'],
      width: ['group-hover', 'group-focus'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
