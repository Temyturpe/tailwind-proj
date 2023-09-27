/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'mygold': '#8d6815', 
    },
    extend: {
      fontSize:{
        '10xl': '200px',
      }
    },
    screens:{
      'xs': '375px',
    }
  },
  plugins: [],
}

