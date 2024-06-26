/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        londrina:['Londrina Solid','sans-serif'],
        cursive: ['"Brush Script MT"', 'cursive'],
        sevillana: ['Sevillana', 'cursive'],
      },
    },
  },
  plugins: [],
}