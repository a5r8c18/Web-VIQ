export const theme = {
  background: {
    primary: '#111827',     // gray-900
    secondary: '#1f2937',   // gray-800
    tertiary: '#374151',    // gray-700
  },
  text: {
    primary: '#f9fafb',     // gray-50
    secondary: '#e5e7eb',   // gray-200
    muted: '#9ca3af',       // gray-400
  },
  border: {
    default: '#374151',     // gray-700
    muted: '#4b5563',       // gray-600
  },
};

// Mapeo de temas a variables CSS
export const themeToCSSVars = (theme) => ({
  '--background-primary': theme.background.primary,
  '--background-secondary': theme.background.secondary,
  '--background-tertiary': theme.background.tertiary,
  '--text-primary': theme.text.primary,
  '--text-secondary': theme.text.secondary,
  '--text-muted': theme.text.muted,
  '--border-default': theme.border.default,
  '--border-muted': theme.border.muted,
});
