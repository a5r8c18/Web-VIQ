import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Set default theme to 'dark'
  const [theme, setTheme] = useState('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Load saved theme on component mount
  useEffect(() => {
    // Always set to 'dark' theme regardless of saved preference
    setTheme('dark');
    document.documentElement.classList.add('dark');
    setIsMounted(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (!isMounted) return;
    
    const root = document.documentElement;
    
    // Always apply dark theme
    root.classList.add('dark');
    
    // Save preference (always 'dark')
    localStorage.setItem('theme', 'dark');
    
    // Apply dark theme CSS variables
    root.style.setProperty('--color-bg-primary', '#111827');
    root.style.setProperty('--color-bg-secondary', '#1f2937');
    root.style.setProperty('--color-bg-tertiary', '#374151');
    root.style.setProperty('--color-text-primary', '#f9fafb');
    root.style.setProperty('--color-text-secondary', '#e5e7eb');
    root.style.setProperty('--color-text-muted', '#9ca3af');
    root.style.setProperty('--color-border-default', '#374151');
    root.style.setProperty('--color-border-muted', '#4b5563');
    
    // Commented out light theme code
    /* Light theme code (commented out but preserved)
    if (theme === 'light') {
      // Light mode in darker gray tones
      root.style.setProperty('--color-bg-primary', '#d1d5db');      // Darker gray
      root.style.setProperty('--color-bg-secondary', '#9ca3af');    // Dark gray
      root.style.setProperty('--color-bg-tertiary', '#6b7280');     // Very dark gray
      root.style.setProperty('--color-text-primary', '#111827');    // Almost black
      root.style.setProperty('--color-text-secondary', '#1f2937');  // Very dark gray
      root.style.setProperty('--color-text-muted', '#4b5563');      // Dark gray
      root.style.setProperty('--color-border-default', '#6b7280');  // Very dark gray
      root.style.setProperty('--color-border-muted', '#9ca3af');    // Dark gray
    } else {
      // Dark mode
      root.style.setProperty('--color-bg-primary', '#111827');
      root.style.setProperty('--color-bg-secondary', '#1f2937');
      root.style.setProperty('--color-bg-tertiary', '#374151');
      root.style.setProperty('--color-text-primary', '#f9fafb');
      root.style.setProperty('--color-text-secondary', '#e5e7eb');
      root.style.setProperty('--color-text-muted', '#9ca3af');
      root.style.setProperty('--color-border-default', '#374151');
      root.style.setProperty('--color-border-muted', '#4b5563');
    }
    */
  }, [isMounted]);

  // Keep the toggle function but make it a no-op or remove it if not needed
  // Commented out but preserved for future use
  /*
  const toggleTheme = () => {
    // No-op since we're forcing dark mode
  };
  */

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
