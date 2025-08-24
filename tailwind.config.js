/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fff7c2',
          300: '#ffed8d',
          400: '#ffdd55',
          500: '#ffc107',
          600: '#e6ac00',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        gold: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fff7c2',
          300: '#ffed8d',
          400: '#ffdd55',
          500: '#ffc107',
          600: '#e6ac00',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
