/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      basic: ['D2Coding', 'sans-serif'],
      seula: ['Leferi', 'sans-serif'],
      chat: ['AppleSD', 'sans-serif'],
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '75.3%': { opacity: '0.7' },
        },
      },
      animation: {
        blink: 'blink 1.54s step-end infinite',
      },
      colors: {
        background: '#0036F9',
        mint: '#40E9E3',
        prompt: '#00FFFF',
      },
    },
  },
  plugins: [],
}
