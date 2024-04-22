/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
        colors: {
          customBlue: 'var(--blue, #5949A7)',
          customOrange:''
        },
        boxShadow: {
          custom: '0px 3.81px 3.81px 0px rgba(0, 0, 0, 0.25)',
          customBlue: 'var(--blue, #5949A7)'
       
    },
    backgroundColor:{
      customBlue: 'var(--blue, #5949A7)' 
    },
  }
    },
  plugins: [require("daisyui")],
}