/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "#C7FF00",
          glow: "#D6FF33",
          dark: "#A3D600",
          muted: "rgba(199, 255, 0, 0.15)"
        },
        dark: {
          950: "#070707",
          900: "#0B0B0B",
          850: "#121212",
          800: "#181818",
          700: "#242424",
          600: "#333333"
        }
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'neon': '0 0 20px rgba(199, 255, 0, 0.4)',
        'neon-lg': '0 0 35px rgba(199, 255, 0, 0.6)',
        'neon-inset': 'inset 0 0 15px rgba(199, 255, 0, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(ellipse at top, #1a1e0b 0%, #0B0B0B 60%, #050505 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.9) 100%)',
        'neon-gradient': 'linear-gradient(90deg, #C7FF00 0%, #a2db00 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(199, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(199, 255, 0, 0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
