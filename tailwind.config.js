/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {
            fontFamily: 'plain light',
            '-webkit-text-stroke': '1px #fff',
            color: '#fff',
            fontWeight: '500',
            opacity: '0',
          },
          '48%': {
            fontFamily: 'plain light',
            '-webkit-text-stroke': '1px #fff',
            color: '#fff',
            fontWeight: '500',
            opacity: '1',
          },
          '50%': {
            fontFamily: 'silk serif',
            '-webkit-text-stroke': '1px #fff',
            color: 'transparent',
            fontWeight: '500',
            opacity: '0',
          },
          '100%': {
            fontFamily: 'silk serif',
            '-webkit-text-stroke': '1px #fff',
            color: 'transparent',
            fontWeight: '500',
            opacity: '1',
          },
        },
      },
      animation: {
        fade: 'fade 5s infinite',
      },
    },
  },
  plugins: [],
}
