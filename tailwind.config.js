/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          400: '#FF6B81',
          500: '#FF3A54',
          600: '#E01E36',
          700: '#C10A24',
        },
        blue: {
          400: '#4B83EA',
          500: '#2563EB',
          600: '#1755E3',
          700: '#1042B0',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};