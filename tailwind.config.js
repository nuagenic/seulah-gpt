/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 2s step-end infinite',
      },
      colors: {
        blue1: '#020962',
        blue2: '#9DC2E9',
      },
    },
  },
  plugins: [],
}
