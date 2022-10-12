/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#7CC649',
        dark: '#374151', //gray-700
        light: '#f3f4f6',
      },

      fontFamily: {
        poppin: "'Poppins', sans-serif",
        noto: "'Noto Sans Ethiopic', sans-serif",
      },

      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
