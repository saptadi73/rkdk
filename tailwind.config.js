/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'Roboto':['Roboto,sans-serif'],
        'Poppins':['Poppins,sans-serif'],
        'Geologica':['Geologica,sans-serif'],
        'Mochiy':['Mochiy Pop P One,sans-serif'],
        'Fjalla':['Fjalla One,sans-serif'],
        'Jost':['Jost,sans-serif'],
      },
      colors:{
        "buruh": "#ff6801",
        "frburuh":"#e6cfc0",
        "toburuh":"#e9e6e4",
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

