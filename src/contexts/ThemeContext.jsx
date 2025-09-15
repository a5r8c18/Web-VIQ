import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  // Cargar el tema guardado al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setIsMounted(true);
  }, []);

  // Aplicar el tema cuando cambie
  useEffect(() => {
    if (!isMounted) return;
    
    const root = document.documentElement;
    
    // Aplicar la clase 'dark' al elemento raíz
    root.classList.toggle('dark', theme === 'dark');
    
    // Guardar preferencia
    localStorage.setItem('theme', theme);
    
    // Aplicar variables CSS según el tema
    if (theme === 'light') {
      // Modo claro en tonos grises más oscuros
      root.style.setProperty('--color-bg-primary', '#d1d5db');      // Gris más oscuro
      root.style.setProperty('--color-bg-secondary', '#9ca3af');    // Gris oscuro
      root.style.setProperty('--color-bg-tertiary', '#6b7280');     // Gris muy oscuro
      root.style.setProperty('--color-text-primary', '#111827');    // Casi negro
      root.style.setProperty('--color-text-secondary', '#1f2937');  // Gris muy oscuro
      root.style.setProperty('--color-text-muted', '#4b5563');      // Gris oscuro
      root.style.setProperty('--color-border-default', '#6b7280');  // Gris muy oscuro
      root.style.setProperty('--color-border-muted', '#9ca3af');    // Gris oscuro
    } else {
      // Modo oscuro
      root.style.setProperty('--color-bg-primary', '#111827');
      root.style.setProperty('--color-bg-secondary', '#1f2937');
      root.style.setProperty('--color-bg-tertiary', '#374151');
      root.style.setProperty('--color-text-primary', '#f9fafb');
      root.style.setProperty('--color-text-secondary', '#e5e7eb');
      root.style.setProperty('--color-text-muted', '#9ca3af');
      root.style.setProperty('--color-border-default', '#374151');
      root.style.setProperty('--color-border-muted', '#4b5563');
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
