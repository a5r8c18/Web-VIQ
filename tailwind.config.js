/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color principal: Negro puro
        primary: {
          DEFAULT: '#000000',
          light: '#333333',  // Versión clara para fondos oscuros
          dark: '#000000',   // Versión oscura para fondos claros
        },
        // Color secundario: Dorado personalizado
        secondary: {
          light: '#FFE87C',  // Dorado claro para fondos oscuros
          DEFAULT: '#FFD700', // Dorado principal
          dark: '#B8860B',   // Dorado oscuro para hover/efectos
        },
        // Escala completa de colores dorados
        gold: {
          50: '#FFFBEB',  // Muy claro
          100: '#FEF3C7', // Claro
          200: '#FDE68A', // Claro-medio
          300: '#FCD34D', // Medio
          400: '#FBBF24', // Medio-intenso
          500: '#F59E0B', // Intenso
          600: '#D97706', // Intenso-oscuro (el que estás usando)
          700: '#B45309', // Oscuro
          800: '#92400E', // Muy oscuro
          900: '#78350F', // El tono más oscuro
        },
      },
      // Configuración de variantes
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'secondary-hover': theme('colors.secondary.dark'),
      }),
      // Asegurar contraste en textos
      textColor: {
        primary: 'var(--color-text-primary, #000000)',
        secondary: 'var(--color-text-secondary, #FFD700)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
