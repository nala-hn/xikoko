/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
      },
      colors: {
        customOrange: '#c53815',
      },
    },
  },
  plugins: [],
}

