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
        // Usando variables CSS directamente
        background: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          default: 'var(--color-border-default)',
          muted: 'var(--color-border-muted)',
        },
        
        // Colores personalizados
        primary: {
          light: '#1f2937',    // Gris oscuro para modo claro
          dark: '#000000',     // Negro para modo oscuro
          DEFAULT: '#000000',
        },
        secondary: {
          light: '#4b5563',    // Gris medio para modo claro
          dark: '#f59e0b',     // Dorado para modo oscuro
          DEFAULT: '#f59e0b',
        },
        accent: {
          light: '#6b7280',    // Gris más claro para acentos
          dark: '#d97706',
          DEFAULT: '#d97706',
        },
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': theme('colors.primary'),
        'secondary': theme('colors.secondary'),
        'accent': theme('colors.accent'),
        'background-primary': 'var(--color-bg-primary)',
        'background-secondary': 'var(--color-bg-secondary)',
        'background-tertiary': 'var(--color-bg-tertiary)',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'border-default': 'var(--color-border-default)',
        'border-muted': 'var(--color-border-muted)',
      }),
    },
  },
  plugins: [],
}
