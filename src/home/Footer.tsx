import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', href: '/services/web-development' },
        { name: 'Marketing Digital', href: '/services/digital-marketing' },
        { name: 'Branding', href: '/services/branding' },
        { name: 'Software a Medida', href: '/services/custom-software' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Nosotros', href: '/about' },
        { name: 'Proyectos', href: '/projects' },
        { name: 'Testimonios', href: '/testimonials' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/privacy' },
        { name: 'Términos de Servicio', href: '/terms' },
        { name: 'Política de Cookies', href: '/cookies' }
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
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-default)]">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600/10 to-amber-500/10 border-b border-amber-500/20">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]"
            >
              ¿Listo para transformar tu presencia digital?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-text-secondary)] mb-6"
            >
              Suscríbete para recibir las últimas tendencias en tecnología y marketing digital.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="input flex-1"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
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
              Transformamos ideas en soluciones digitales excepcionales que impulsan el crecimiento de tu negocio.
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-[var(--color-text-secondary)] text-sm">Síguenos:</span>
              <div className="flex items-center space-x-4">
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
            <div className="text-[var(--color-text-muted)] text-sm">
              © {currentYear} VIQ Systems. Todos los derechos reservados.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
