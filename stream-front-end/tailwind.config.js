/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      fontFamily: {
       handjet: ['"Handjet"', 'cursive'],
      },
      // colors: {
      //   disneyYellow: '#FFE81F', 
      // },
      fontSize: {
        '10xl': '10rem',
        'giant': '12rem',
      },
    },
  },
  plugins: [
  ]
}

