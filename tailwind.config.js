/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary:"#F0E003",
        secundary:"#FAEA15",
        // #FACC15,

      },
      container:{
        center:true,
        padding :{
          default:"1rem",
          sm:"3rem",
        },
      }
      
    },
  },
  plugins: [],
}

