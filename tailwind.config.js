/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vanilla: '#F4F4DC',
        burnt: '#CC5500'
      },
      fontFamily: {
        title: ['Anton'],
        main: ['Inter']
      }
    },
  },
  plugins: [],
}

