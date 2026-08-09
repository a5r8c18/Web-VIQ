import { MapPin, Phone, Mail } from 'lucide-react';
import { VMark } from '../components/ui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Branding', href: '/services/branding' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Projects', href: '/projects' },
        { name: 'Clients', href: '/clients' },
        { name: 'About us', href: '/about-us' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'Email us', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-[var(--color-border-default)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a455]/40 to-transparent" />
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.svg" alt="VIQ Systems" className="h-9 w-auto" />
              <span className="font-display font-bold text-lg text-[var(--color-text-primary)]">
                VIQ Systems
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm mb-8">
              A Miami digital studio engineering web products, reach, and
              identity that hold up to real-world pressure.
            </p>
            <VMark className="w-14 text-[#d8a455] opacity-80" />
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="eyebrow-brass mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="link-strike text-sm text-[var(--color-text-secondary)] hover:text-[#d8a455] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="eyebrow-brass mb-6">Studio</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <MapPin className="w-4 h-4 text-[#d8a455] mt-0.5 flex-shrink-0" />
                Miami, Florida, USA
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <Phone className="w-4 h-4 text-[#d8a455] mt-0.5 flex-shrink-0" />
                +1 (305) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <Mail className="w-4 h-4 text-[#d8a455] mt-0.5 flex-shrink-0" />
                info@viqsystems.com
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-[var(--color-border-default)]">
              <p className="text-xs text-[var(--color-text-muted)]">
                © {currentYear} VIQ Systems INC. All rights reserved.
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]/60">
                DEV / MARKETING / BRAND
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;