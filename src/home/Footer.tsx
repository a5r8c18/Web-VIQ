import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Branding', href: '/services/branding' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-x-twitter', href: '#', label: 'X' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-default)] relative">
      {/* Fondo para bloquear partículas */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      
      {/* Main Footer Content */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo.svg" 
                alt="VIQ Systems" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                  VIQ Systems
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">Digital Excellence</p>
              </div>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We transform ideas into exceptional digital solutions that drive your business growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[var(--color-text-secondary)]">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm">Miami, Florida, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--color-text-secondary)]">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm">+1 (305) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--color-text-secondary)]">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm">info@viqsystems.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[var(--color-text-secondary)] hover:text-amber-500 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-[var(--color-border-default)] mt-12 pt-8"
        >
          <div className="flex flex-col space-y-6">
            {/* Social Media Section */}
            <div className="text-center">
              <span className="text-[var(--color-text-secondary)] text-sm mb-4 block">Follow us:</span>
              <div className="flex items-center justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-text-secondary)] hover:bg-amber-500/20 hover:text-amber-500 transition-all duration-300"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-[var(--color-text-muted)] text-sm">
              © {currentYear} VIQ Systems INC. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
