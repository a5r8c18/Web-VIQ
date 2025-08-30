import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 shadow-2xl dark:bg-black dark:text-white dark:border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-1.5 rounded-lg">
                <img 
                  src="/images/Captura de pantalla (430).png" 
                  alt="Website Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-blue-600 dark:text-yellow-500">Systems</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Líderes en soluciones tecnológicas innovadoras. Transformamos ideas en realidad digital con excelencia y pasión.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Facebook, url: '#' },
                { icon: Twitter, url: '#' },
                { icon: Linkedin, url: '#' },
                { icon: Github, url: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-yellow-500 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  aria-label={social.icon.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Registro', path: '/registro' },
                { name: 'Sobre Nosotros', path: '/nosotros' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-yellow-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600/0 group-hover:bg-blue-600 dark:group-hover:bg-yellow-500 rounded-full mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              {[
                'Desarrollo Web',
                'Aplicaciones Móviles',
                'Cloud Computing',
                'Consultoría IT',
                'Ciberseguridad',
                'Marketing Digital'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-yellow-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600/0 group-hover:bg-blue-600 dark:group-hover:bg-yellow-500 rounded-full mr-2 transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-yellow-500" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
                  <p className="text-gray-900 dark:text-white text-sm">info@viqsystems.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-yellow-500" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Teléfono</span>
                  <p className="text-gray-900 dark:text-white text-sm">+1 234 567 890</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-yellow-500" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Dirección</span>
                  <p className="text-gray-900 dark:text-white text-sm">Av. Principal 123, Ciudad, País</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            &copy; {currentYear} VIQ Systems. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-500 dark:hover:text-yellow-500 text-sm transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-500 dark:hover:text-yellow-500 text-sm transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
