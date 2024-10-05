/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   animation: {
    //     'slide-in': 'slideIn 0.5s ease forwards',
    //   },
    //   keyframes: {
    //     slideIn: {
    //       '0%': {
    //         transform: 'translateX(20px)',
    //         opacity: '0',
    //       },
    //       '100%': {
    //         transform: 'translateY(0)',
    //         opacity: '1',
    //       },
    //     },
    //   },
    // }, // <-- Add a comma here
  },
  plugins: [],
}
