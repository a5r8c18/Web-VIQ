import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin } from 'lucide-react';
import SocialMediaButton from '../ui/SocialMediaButton';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-300 text-gray-800 border-t border-gray-400 shadow-2xl dark:bg-black dark:text-white dark:border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="https://viqsystems.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
              <div className="p-1.5 rounded-lg">
                <img 
                  src="/images/logo.svg" 
                  alt="VIQSystems INC | Web & Software Development, Digital Marketing, and Branding Services" 
                  className="h-10 w-auto object-contain"
                  title="VIQSystems INC | Web & Software Development, Digital Marketing, and Branding Services"
                />
              </div>
            </a>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Leaders in innovative technology solutions. We transform ideas into digital reality with excellence and passion.
            </p>
            <div className="mt-6">
              <SocialMediaButton />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/register' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile App Development',
                'UI/UX Design',
                'Digital Marketing',
                'Cloud Solutions',
                'IT Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Miami, Florida</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="tel:+17866432616" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-sm">+1 786-643-2616</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="mailto:infoviq@viqsystems.com" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-sm">infoviq@viqsystems.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400 dark:border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} VIQ Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
