import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Efecto para desplazar al inicio al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
    <header className="bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-white/10">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
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
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 bg-white/60 dark:bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
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
            </nav>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-4 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
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
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
