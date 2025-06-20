/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: '#006400',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'background-color': 'rgba(45, 212, 191, 0.1)' // teal-400 with low opacity
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
            'background-color': 'rgba(0, 100, 0, 0.1)' // darkgreen with low opacity
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'background-color': 'rgba(45, 212, 191, 0.1)' // back to teal-400
          }
        },
      },
     
    },
  },
  plugins: [],
}
