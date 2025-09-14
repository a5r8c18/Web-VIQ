import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Facebook, Linkedin, MessageCircle, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-100 border-t border-gray-700 shadow-2xl dark:bg-gray-900 dark:text-white">
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
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Leaders in innovative technology solutions. We transform ideas into digital reality with excellence and passion.
            </p>
            <div className="flex space-x-2 pt-2 -ml-4">
              {[
                { 
                  icon: Facebook, 
                  url: 'https://www.facebook.com/viqsystems',
                  color: 'text-gray-400 group-hover:text-blue-400',
                  bg: 'bg-gray-700/50 group-hover:bg-blue-500/10',
                  border: 'border-gray-600 group-hover:border-blue-500/30',
                  label: 'Facebook'
                },
                { 
                  icon: null, 
                  url: 'https://www.tiktok.com/@viqsystems',
                  color: 'text-gray-400 group-hover:text-black',
                  bg: 'bg-gray-700/50 group-hover:bg-white/90',
                  border: 'border-gray-600 group-hover:border-gray-300',
                  customIcon: true,
                  customIconPath: (
                    <>
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.18 1.99 1.3 3.02 3.3 3.12 1.5.08 3.04.04 4.26-.01 2.1-.07 3.25-.3 3.3-3.1.1-4.2.03-8.4.03-12.6h-5.8c0 2.08-.01 4.17 0 6.26-.01.7-.1 1.3-.6 1.7-.5.4-1.1.5-1.8.4-1.6-.2-2.9-1.4-3.2-3-.1-.7-.1-1.3-.1-2 0-2.2 0-4.4.01-6.58h-5.8v19.57c0 1.1.03 2.2-.02 3.3-.1 1.8-1 3.1-2.6 3.6-1.4.5-2.9.4-4.3-.2-1.4-.6-2.2-1.7-2.6-3.1-.3-1.1-.3-2.2-.4-3.3 0-1.1 0-2.2.1-3.3.2-1.6 1.1-2.8 2.6-3.4 1.1-.4 2.2-.4 3.3-.2.7.1 1.3.6 1.6 1.2.4.7.4 1.4.5 2.1.1 1.1.1 2.3 0 3.4-.1.9-.1 1.8.8 1.8.9 0 .9-.9.9-1.7.1-1.3.1-2.5 0-3.8 0-.5-.1-1.1-.5-1.5-.4-.4-1-.5-1.5-.5-1.5-.1-2.6.6-2.9 2.1-.2 1.1-.2 2.2-.2 3.3v3.3c0 1.1 0 2.2.2 3.3.3 1.5 1.4 2.2 2.9 2.1 1.6-.1 2.6-1.1 2.8-2.7.1-1.1.1-2.2 0-3.3V6.73c0-1.1 0-2.2-.1-3.3-.1-1.1-.4-2.1-1.4-2.7-.9-.6-1.9-.8-3-.7-1.1.1-2.1.5-2.9 1.3-.8.8-1.2 1.8-1.3 2.9-.1 1.1-.1 2.2-.1 3.3v1.8c0 1.1 0 2.2.1 3.3.1 1.1.4 2.1 1.4 2.7.9.6 1.9.8 3 .7 1.1-.1 2.1-.5 2.9-1.3.8-.8 1.2-1.8 1.3-2.9.1-1.1.1-2.2.1-3.3V.02z" fill="currentColor"/>
                    </>
                  ),
                  label: 'TikTok'
                },
                { 
                  icon: Linkedin, 
                  url: 'https://www.linkedin.com/company/viqsystems',
                  color: 'text-gray-400 group-hover:text-blue-500',
                  bg: 'bg-gray-700/50 group-hover:bg-blue-500/10',
                  border: 'border-gray-600 group-hover:border-blue-500/30',
                  label: 'LinkedIn'
                },
                { 
                  icon: Instagram, 
                  url: 'https://www.instagram.com/viq.systems',
                  color: 'text-gray-400 group-hover:text-pink-500',
                  bg: 'bg-gray-700/50 group-hover:bg-pink-500/10',
                  border: 'border-gray-600 group-hover:border-pink-500/30',
                  label: 'Instagram'
                },
                { 
                  icon: Youtube, 
                  url: 'https://www.youtube.com/channel/UCqwGR2DEiXghq0gYXUi1U8g',
                  color: 'text-gray-400 group-hover:text-red-500',
                  bg: 'bg-gray-700/50 group-hover:bg-red-500/10',
                  border: 'border-gray-600 group-hover:border-red-500/30',
                  label: 'YouTube'
                },
                { 
                  icon: null, 
                  url: 'https://twitter.com/viqsystems',
                  color: 'text-gray-400 group-hover:text-black',
                  bg: 'bg-gray-700/50 group-hover:bg-white/90',
                  border: 'border-gray-600 group-hover:border-gray-300',
                  customIcon: true,
                  customIconPath: (
                    <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                  ),
                  label: 'X (Twitter)'
                },
                { 
                  icon: MessageCircle, 
                  url: 'https://wa.link/rpkawi',
                  color: 'text-gray-400 group-hover:text-green-500',
                  bg: 'bg-gray-700/50 group-hover:bg-green-500/10',
                  border: 'border-gray-600 group-hover:border-green-500/30',
                  label: 'WhatsApp'
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="group relative p-0.5 rounded-full transition-all duration-500 hover:scale-105"
                  aria-label={social.label || (social.icon ? social.icon.name : 'Social link')}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label || ''}
                >
                  <div className={`relative p-2 rounded-full ${social.bg} ${social.border} border transition-all duration-500 group-hover:shadow-md ${social.url.includes('youtube') ? 'group-hover:shadow-red-500/10' : social.url.includes('tiktok') ? 'group-hover:shadow-gray-500/10' : social.url.includes('whatsapp') ? 'group-hover:shadow-green-500/10' : social.url.includes('linkedin') ? 'group-hover:shadow-blue-500/10' : social.url.includes('instagram') ? 'group-hover:shadow-pink-500/10' : 'group-hover:shadow-yellow-500/10'}`}>
                    <div className="relative z-10">
                      <div className="transform transition-transform duration-500 group-hover:rotate-[-15deg]">
                        <div className={`absolute inset-0 rounded-full ${social.url.includes('youtube') ? 'bg-gradient-to-br from-red-500 to-red-300/80' : social.url.includes('tiktok') ? 'bg-gradient-to-br from-gray-100 to-gray-400/80' : social.url.includes('whatsapp') ? 'bg-gradient-to-br from-green-500 to-green-300/80' : social.url.includes('linkedin') ? 'bg-gradient-to-br from-blue-500 to-blue-300/80' : social.url.includes('instagram') ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-300/80' : 'bg-gradient-to-br from-yellow-500 to-yellow-300/80'} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                        {social.customIcon ? (
                          <div className="relative z-10">
                            <svg 
                              className={`w-5 h-5 ${social.color} transition-colors duration-300`} 
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              {social.customIconPath}
                            </svg>
                          </div>
                        ) : (
                          <social.icon className={`w-5 h-5 ${social.color} transition-colors duration-300`} />
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
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
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
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
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
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
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
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
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-yellow-400 text-sm">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@viqsystems.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">info@viqsystems.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Code className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} VIQ Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
