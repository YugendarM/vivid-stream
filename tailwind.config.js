/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vivid : {
            primaryBlue: '#5755FE',
            secondaryBlue: '#8B93FF',
            primaryPink: '#FF71CD',
            bgWhite: '#FFF7FC'
        }
      }
     
    },
  },
  plugins: [],
}