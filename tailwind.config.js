/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#7CC649',
        dark: '#374151',
        light: '#f3f4f6',
      },

      fontFamily: {
        poppin: "'Poppins', sans-serif",
        noto: "'Noto Sans Ethiopic', sans-serif",
      }
    },
  },
  plugins: [],
}
