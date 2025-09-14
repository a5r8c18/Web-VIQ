import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import SocialMediaButton from '../ui/SocialMediaButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const [isDark, setIsDark] = useState(false);

  // Efecto para desplazar al inicio al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Efecto para el tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/register' },
  ]

  const isActive = (path) => location.pathname === path

  const handleNavigation = () => {
    // Cerrar el menú móvil si está abierto
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-50 dark:bg-black/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-white/10">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Social */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://viqsystems.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg"
            >
              <img 
                src="/images/logo.svg" 
                alt="VIQSystems INC | Web & Software Development, Digital Marketing, and Branding Services"
                className="h-10 w-auto object-contain"
                title="VIQSystems INC | Web & Software Development, Digital Marketing, and Branding Services"
              />
            </a>
            <div className="hidden md:block">
              <SocialMediaButton />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 bg-white/60 dark:bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavigation}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                    isActive(item.href)
                      ? 'bg-gradient-to-br from-yellow-600/80 to-yellow-800/80 text-white shadow-lg shadow-yellow-900/30 transform -translate-y-0.5'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-yellow-500 dark:hover:text-yellow-400 hover:shadow-md hover:shadow-yellow-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer bg-zinc-900 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:hover:bg-zinc-50/90 py-2 group text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-100 rounded-lg bg-gradient-to-b from-zinc-50/95 to-zinc-100/95 dark:from-zinc-800/95 dark:to-zinc-900/95 hover:from-zinc-100/95 hover:to-zinc-200/95 dark:hover:from-zinc-700/95 dark:hover:to-zinc-800/95 border border-zinc-200 dark:border-zinc-700/80 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-[0_1px_2px_-1px_rgb(0_0_0/0.1),0_1px_3px_-2px_rgb(0_0_0/0.1)] dark:shadow-[0_1px_2px_-1px_rgb(0_0_0/0.3),0_1px_3px_-2px_rgb(0_0_0/0.3)] hover:shadow-[0_2px_4px_-2px_rgb(0_0_0/0.15),0_2px_6px_-3px_rgb(0_0_0/0.15)] dark:hover:shadow-[0_2px_4px_-2px_rgb(0_0_0/0.4),0_2px_6px_-3px_rgb(0_0_0/0.4)] active:shadow-[0_0px_1px_0_rgb(0_0_0/0.1)] dark:active:shadow-[0_0px_1px_0_rgb(0_0_0/0.2)] transition-all duration-200 ease-out backdrop-blur-sm relative after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity before:absolute before:inset-[1px] before:rounded-[7px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity dark:before:from-white/5 h-10 px-4"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <div className="flex items-center gap-2 transition-all duration-300 ease-out">
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
                    className={`lucide lucide-sun transition-all duration-700 ease-in-out w-4 h-4 group-hover:rotate-[360deg] group-hover:scale-110 ${isDark ? 'rotate-0' : 'rotate-180'} transform-gpu drop-shadow-[0_0_12px_rgba(252,211,77,0.3)] dark:drop-shadow-[0_0_12px_rgba(252,211,77,0.2)] text-zinc-300 group-hover:text-zinc-100 group-active:scale-95`}
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
                  <span className="capitalize font-medium relative transition-opacity duration-300 ease-out">
                    <span className={`absolute inset-0 transition-opacity duration-300 ease-out ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                      Dark
                    </span>
                    <span className={`absolute inset-0 transition-opacity duration-300 ease-out ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                      Light
                    </span>
                    <span className="opacity-0">Light</span>
                  </span>
                </div>
                <span className="absolute inset-0 bg-gradient-to-r from-zinc-500/0 via-zinc-500/[0.12] to-zinc-500/0 dark:from-white/0 dark:via-white/[0.05] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out pointer-events-none z-[1]"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.07),transparent_70%)] transition-opacity duration-500 pointer-events-none z-[2]"></span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavigation}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center space-x-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-5 h-5"
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
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
