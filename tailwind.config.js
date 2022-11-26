/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header:"560px",
        rate:"400px",
      },
      fontSize: {
        h1: "3.5rem",
      },
      screens: {
        xs:"320px",
      },
      colors: {
        main:'#080A1A',
        subMain: 'yellow',
        dry:"#F2F2F2",
        star:"#F2C94C",
        text:"#F2F2F2",
        border:"#F2F2F2",
        dryGray:"#F2F2F2",
    },
  },
},
  plugins: [],
}
