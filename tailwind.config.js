/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-yellow': 'rgb(251, 216, 93)',       // Custom RGB color
        'custom-black': 'rgb(26, 93, 26)', // Custom RGBA color
        'custom-dark-yellow':'rgb(241, 201, 59)',
        'custom-light-light-yellow':'rgb(250, 227, 146)'
      },
      height: {
        '10rem': '8rem',
        'header':'57px'
      },
      borderRadius:{
        'radius':'50%'
      }
    },
  },
  plugins: [],
}
