import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLightMode = theme === 'light';

  // Evitar hidratación no coincidente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-16 w-[140px] rounded-xl"></div>
    );
  }

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative group overflow-hidden h-16 w-[140px] rounded-xl flex items-center justify-center transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] backdrop-blur-xs ${
        isLightMode ? 'bg-amber-50' : 'bg-gray-800'
      }`}
      tabIndex="0"
      aria-label={isLightMode ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      <div className="absolute inset-0 opacity-50 transition-opacity duration-500 bg-gradient-to-r from-amber-200/50 to-orange-200/50"></div>
      <div className="relative w-full px-4">
        <div className="relative flex items-center justify-between">
          {/* Contenido del Modo Claro */}
          <div
            className="flex flex-col items-center gap-1 transition-all duration-500"
            style={{
              transform: isLightMode ? 'scale(1)' : 'scale(0.7)',
              opacity: isLightMode ? 1 : 0.5,
            }}
          >
            <div className="h-7 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-sun w-7 h-7 ${isLightMode ? 'text-amber-500' : 'text-gray-100'}`}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
            <span className={`text-xs font-medium translate-y-0.5 ${isLightMode ? 'text-amber-600' : 'text-gray-100'}`}>
              Light
            </span>
          </div>

          {/* Contenido del Modo Oscuro */}
          <div
            className="flex flex-col items-center gap-1 transition-all duration-500"
            style={{
              transform: isLightMode ? 'scale(0.7)' : 'scale(1)',
              opacity: isLightMode ? 0.5 : 1,
            }}
          >
            <div className="h-7 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-moon w-7 h-7 ${isLightMode ? 'text-indigo-400/50' : 'text-white'}`}
                aria-hidden="true"
              >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
              </svg>
            </div>
            <span className={`text-xs font-medium translate-y-0.5 ${isLightMode ? 'text-indigo-400/50' : 'text-white'}`}>
              Dark
            </span>
          </div>

          {/* Control deslizante */}
          <div
            className={`absolute top-[1px] w-9 h-9 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform duration-500 ${
              isLightMode ? 'bg-gradient-to-br from-amber-300 to-orange-300' : 'bg-gray-700'
            }`}
            style={{
              transform: isLightMode ? 'translateX(-1px)' : 'translateX(65px)',
            }}
          >
            <div className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-amber-300' : 'bg-gray-700'}`}></div>
            <div className={`absolute inset-0 rounded-full ${isLightMode ? 'bg-gradient-to-br from-amber-300 to-orange-300' : ''}`}></div>
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: isLightMode ? 'rgba(251, 191, 36, 0.6) 0px 0px 12px' : '' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Efecto de estrellas/partículas - Solo visible en modo claro */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: isLightMode ? 1 : 0 }}
      >
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(-5.85172px) translateY(-2.87157px) scale(0.965347)',
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(2.63356px) translateY(-2.43594px) scale(0.453611)',
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(-11.9091px) translateY(-19.7656px) scale(0.0130814)',
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(12.4175px) translateY(-14.5326px) scale(0.238923)',
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(-2.18633px) translateY(-13.5985px) scale(0.650833)',
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full"
          style={{
            opacity: 0,
            transform: 'translateX(2.52168px) translateY(-7.17348px) scale(1.19238)',
          }}
        ></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
