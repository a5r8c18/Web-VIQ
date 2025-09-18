import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLightMode = theme === 'light';
  const particleColorClass = isLightMode ? 'bg-amber-300' : 'bg-white';

  // CSS for the star particles
  const starStyles = `
    @keyframes twinkling-star-anim {
      0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
      }
      50% {
        transform: scale(1) rotate(180deg);
        opacity: 1;
      }
      100% {
        transform: scale(0) rotate(360deg);
        opacity: 0;
      }
    }
  `;

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme class to the document element
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="h-16 w-[140px] rounded-xl"></div>
    );
  }

  return (
    <>
      <style>{starStyles}</style>
      <button
        onClick={toggleTheme}
        className={`relative group h-16 w-[140px] rounded-xl flex items-center justify-center transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] backdrop-blur-xs
          ${isLightMode ? 'bg-amber-50' : 'bg-gray-800'}
          after:content-[''] after:absolute after:inset-0 after:rounded-xl after:transition-all after:duration-500 after:z-[-1] after:blur-md
          ${isLightMode ? 'after:bg-amber-200' : 'after:bg-gray-700'}`}
        tabIndex="0"
        aria-label={isLightMode ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      >
        <div className="absolute inset-0 opacity-50 transition-opacity duration-500 bg-gradient-to-r from-amber-200/50 to-orange-200/50"></div>
        <div className="relative w-full flex items-center justify-center">
          {isLightMode ? (
            <div className="flex flex-col items-center gap-1 transition-all duration-500">
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
                  className="lucide lucide-sun w-7 h-7 text-amber-500"
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
              <span className="text-xs font-medium translate-y-0.5 text-amber-600">Light</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1 transition-all duration-500">
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
                  className="lucide lucide-moon w-7 h-7 text-white"
                  aria-hidden="true"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                </svg>
              </div>
              <span className="text-xs font-medium translate-y-0.5 text-white">Dark</span>
            </div>
          )}
        </div>

        {/* Star/particle effect */}
        <div
          key={theme} // Force re-render to restart animations on theme change
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        >
          {/* Particles */}
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '20%',
              top: '30%',
              animationDelay: '0.1s',
            }}
          ></div>
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '75%',
              top: '50%',
              animationDelay: '0.4s',
            }}
          ></div>
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '40%',
              top: '80%',
              animationDelay: '0.7s',
            }}
          ></div>
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '50%',
              top: '15%',
              animationDelay: '0.2s',
            }}
          ></div>
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '80%',
              top: '80%',
              animationDelay: '0.9s',
            }}
          ></div>
          <div
            className={`absolute w-1 h-1 rounded-full animate-[twinkling-star-anim_2s_linear_infinite] ${particleColorClass}`}
            style={{
              left: '10%',
              top: '70%',
              animationDelay: '0.5s',
            }}
          ></div>
        </div>
      </button>
    </>
  );
};

export default ThemeToggle;
