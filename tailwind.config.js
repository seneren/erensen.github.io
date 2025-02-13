/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'chillax': ['Chillax-Regular', 'sans-serif'],
        'chillax-light': ['Chillax-Light', 'sans-serif'],
        'chillax-medium': ['Chillax-Medium', 'sans-serif'],
        'chillax-semibold': ['Chillax-Semibold', 'sans-serif'],
        'chillax-bold': ['Chillax-Bold', 'sans-serif'],
        'chillax-extralight': ['Chillax-Extralight', 'sans-serif'],
        'nephilm': ['Nephilm', 'sans-serif'],
        'insigne': ['Insigne', 'sans-serif'],
        'gandhi': ['GandhiSans', 'sans-serif'],
        'coccina': ['Coccina', 'sans-serif'],
      },
      textDecorationThickness: {
        2: '2px',
        4: '4px',
      },
      underlineOffset: {
        2: '2px',
        4: '4px',
      },
      textUnderlineOffset: {
        2: '2px',
        4: '4px',
      },
    },
  },
  plugins: [],
} 