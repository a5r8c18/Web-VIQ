import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

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
        { name: 'Branding', href: '/services/branding' },
      ],
    },
    { name: 'Clients', href: '/clients' },
    { name: 'Projects', href: '/projects' },
    { name: 'About us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/85 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="VIQ Systems" className="h-8 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors bg-transparent hover:bg-transparent py-2">
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-background-secondary border border-[var(--color-border-muted)] shadow-xl shadow-black/40"
                      >
                        {item.dropdown?.map((d) => (
                          <a
                            key={d.name}
                            href={d.href}
                            className="block px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[#d8a455] transition-colors first:border-t-0"
                          >
                            {d.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors"
                >
                  {item.name}
                </a>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="outline" className="!py-2.5">
              Contact us
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background-secondary border-t border-[var(--color-border-default)]"
          >
            <div className="container-custom py-4">
              <nav className="space-y-1">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-5 space-y-1"
                          >
                            {item.dropdown?.map((d) => (
                              <a
                                key={d.name}
                                href={d.href}
                                className="block px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-muted)] hover:text-[#d8a455] transition-colors"
                              >
                                {d.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors"
                    >
                      {item.name}
                    </a>
                  ),
                )}
                <div className="pt-3">
                  <Button href="/contact" className="w-full text-center">
                    Contact us
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;