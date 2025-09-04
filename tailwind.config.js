/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      sans:"Roboto Mono , monospace",
    },
    extend: {
      height:{
        screen:"100dvh"
      },
       screens: {
        xs: { max: '639px' }, // applies only to screens < 640px
      },
    },
  },
  plugins: [],
}

