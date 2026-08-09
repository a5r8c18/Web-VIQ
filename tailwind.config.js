/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        primary: {
          DEFAULT: '#0b0e14',
        },
        secondary: {
          DEFAULT: '#c3873f',
        },
        accent: {
          DEFAULT: '#d8a455',
        },
        // Signature ramp: the logo is a bronze-to-gold "V". We repoint the
        // entire amber scale at that range so every existing amber-* class
        // resolves to the brand's own metal instead of the Tailwind default.
        amber: {
          50: '#fbf6ec',
          100: '#f5e9cf',
          200: '#ebd39b',
          300: '#e2b96b',
          400: '#d8a455',
          500: '#c3873a',
          600: '#a86e2c',
          700: '#8a571f',
          800: '#6d4318',
          900: '#4d2e11',
          950: '#2f1c0a',
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
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      backgroundImage: {
        'spec-grid':
          'linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)',
        'brass-gradient':
          'linear-gradient(135deg, #a86e2c 0%, #c3873a 35%, #d8a455 70%, #e2b96b 100%)',
      },
    },
  },
  plugins: [],
}