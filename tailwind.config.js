/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#E6F0FF',
          200: '#BFDAFF',
          300: '#99C3FF',
          400: '#66A3FF',
          500: '#3382FF',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}