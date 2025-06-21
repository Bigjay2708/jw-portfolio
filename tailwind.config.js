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
        'float': 'float 3s ease-in-out infinite',
        'tech-flow': 'tech-flow 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 8s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
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
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'tech-flow': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(0, 100, 0, 0.2)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(0, 100, 0, 0.8), 0 0 30px rgba(0, 200, 0, 0.6)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(0, 100, 0, 0.8)' }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        'morph': {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-pattern': 'url("/tech-words.png")',
      },
      borderRadius: {
        'xl-2': '1rem',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.darkgreen"), 0 0 10px rgba(0, 100, 0, 0.8)',
        'inner-glow': 'inset 0 0 20px rgba(0, 100, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
