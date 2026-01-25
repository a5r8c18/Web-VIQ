import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#',
      hasDropdown: true,
      dropdown: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Branding', href: '/services/branding' }
      ]
    },
    { name: 'Projects', href: '/projects' },
    { name: 'About us', href: '/about-us' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-default)]">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 border-b border-amber-500/20">
        <div className="container-custom">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-[var(--color-text-secondary)]">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 animate-ring" />
                <span>+1 (305) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>info@viqsystems.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[var(--color-text-muted)] hover:text-amber-500 transition-colors text-xs opacity-75 hover:opacity-100">
                
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/logo.svg" 
                  alt="VIQ Systems" 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden lg:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                  VIQ Systems
                </h1>
                <p className="text-xs text-[var(--color-text-muted)]">Digital Excellence</p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-[var(--color-text-secondary)] hover:text-amber-500 transition-colors font-medium bg-transparent hover:bg-transparent">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)] rounded-lg shadow-xl shadow-amber-500/10"
                        >
                          {item.dropdown?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-[var(--color-text-secondary)] hover:bg-amber-500/10 hover:text-amber-500 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-[var(--color-text-secondary)] hover:text-amber-500 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <a 
              href="/contact" 
              className="btn-primary"
            >
              Contact us
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-amber-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-default)]"
          >
            <div className="container-custom py-4">
              <nav className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button 
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-[var(--color-text-secondary)] hover:bg-amber-500/10 hover:text-amber-500 transition-colors rounded-lg font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown?.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-[var(--color-text-muted)] hover:text-amber-500 transition-colors"
                                >
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-[var(--color-text-secondary)] hover:bg-amber-500/10 hover:text-amber-500 transition-colors rounded-lg font-medium"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <a 
                    href="/contact" 
                    className="btn-primary w-full text-center"
                  >
                    Consulta Gratuita
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
