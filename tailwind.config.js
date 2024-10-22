/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui:{
themes:[
  {
    ecommerce:{
      primary:"#FFE0B3",
      secondary:"#FF3030",
      accent:"#FF9900",
      body:"#2A414F",
    }
  }
]
  },

  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}
