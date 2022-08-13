/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      '--container-color':'#2d2e37',
      '--body-color':'#1e1e2a',
      '--play-color': '#1e1e2f',
      '--main-color':'#ffb43a',
      '--hover-color':'hsl(37,94%,57%)',
      '--text-color':'#fcfeff',
      '--white-color':'#FFFFFF',
      '--nav-link':'#b7b7b7',
      '--button-color':'rgb(128 128 128 / 0.7)',
      '--opacity-color':'rgb(128 128 128 / 0.2)',
      '--input-color': '#333',
      '--background-blend-gradient': 'linear-gradient(rgba(255,255,255,0) 68%, rgb(48,48,48) 100%)',
       black: 'black',
      '--focus-input': '#454545',
      '--sign-button':'#e50914',
      '--genre-color':'#fff',
      '--play-button': '#dd003f',
      '--search-result':'#ccc',
      gray : 'gray'
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-textshadow'),
      require('tailwind-scrollbar-hide'),
      require('tailwind-scrollbar'),
      require('@tailwindcss/line-clamp')
  ],
}
