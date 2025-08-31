import { useEffect, useRef, useState } from 'react';
import Hero from '../components/ui/Hero';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Users, ArrowRight, Star, Shield, BarChart2, Clock, MessageCircle, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'WEB DEVELOPMENT',
      description: 'Custom websites and applications built with modern technologies for optimal performance.',
      features: ['React, Vue, Angular', 'Responsive Design', 'Progressive Web Apps', 'SEO Optimization'],
      price: 'From $2,500',
      timeline: '4-8 weeks',
      popular: true
    },
    {
      icon: Users,
      title: 'FULL-STACK DEVELOPMENT',
      description: 'Desarrollo completo de aplicaciones web desde el frontend hasta el backend.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Publishing'],
      price: 'Desde $6,500',
      timeline: '10-16 semanas',
      popular: true
    },
    {
      icon: BarChart2,
      title: 'DIGITAL MARKETING',
      description: 'Data-driven marketing strategies to grow your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      price: 'From $1,500',
      timeline: 'Ongoing'
    },
    {
      icon: Award,
      title: 'BRANDING',
      description: 'Create a solid brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guides', 'Visual Identity'],
      price: 'From $3,000',
      timeline: '4-8 weeks'
    }
  ];

  // Estado para el carrusel
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const itemWidth = 350; // Ancho de cada tarjeta (ajustado al ancho real)
  const gap = 32; // Espacio entre tarjetas
  const speed = 0.5; // Velocidad del desplazamiento
  const [items, setItems] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    // Crear un array con los servicios suficientes para el carrusel
    const itemsNeeded = Math.ceil(window.innerWidth / (itemWidth + gap)) + 2;
    const repeatedItems = [];
    
    for (let i = 0; i < itemsNeeded; i++) {
      repeatedItems.push(...services);
    }
    
    setItems(repeatedItems);
  }, []);

  useEffect(() => {
    if (isPaused || items.length === 0) return;

    let animationId;
    const animate = () => {
      setOffset(prevOffset => {
        const maxOffset = (itemWidth + gap) * services.length;
        let newOffset = prevOffset + speed;
        
        // Reiniciar la posición cuando llegue al final
        if (newOffset >= maxOffset) {
          newOffset = 0;
        }
        
        return newOffset;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, items.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div>
      <Hero />
      
      {/* Sección Servicios con Video y Carrusel */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gray-900">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            ref={videoRef => videoRef && (videoRef.playbackRate = 0.4)}
          >
            <source src="/videos/14159465_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 w-full">
          {/* VIQ Systems Section */}
          <div className="py-16 bg-gradient-to-b from-transparent to-black/30">
            <div className="container-custom text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                VIQ <span className="text-yellow-400">Systems</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/90 px-4">
                <p className="leading-relaxed">
                  We're passionate about leveraging technology to help businesses thrive in the digital age. With over nine years of experience in the industry, we've honed our expertise in providing cutting-edge solutions that empower our clients to succeed online.
                </p>
                <p className="leading-relaxed">
                  Since our inception in 2020, we've been committed to delivering exceptional results and exceeding our clients' expectations. Over the past nine years, we've evolved and adapted to meet the ever-changing needs of the digital landscape, staying ahead of the curve with innovative solutions and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="relative py-16 bg-gradient-to-b from-black/30 to-transparent">
            <div className="text-center mb-16 container-custom">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Complete technological solutions to boost your business to the next level
              </p>
            </div>

            <div 
              className="relative w-full overflow-hidden py-8"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                ref={containerRef}
                className="flex whitespace-nowrap"
                style={{
                  transform: `translateX(-${offset}px)`,
                  transition: isPaused ? 'transform 0.3s ease-out' : 'transform 0.1s linear'
                }}
              >
                {items.map((service, index) => (
                  <div 
                    key={`${service.title}-${index}`}
                    className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 px-4"
                  >
                    <div className="text-white dark:text-gray-800 rounded-3xl border border-white/10 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-[#010101] dark:via-[#090909] dark:to-[#010101] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 dark:hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl w-[350px] h-full">
                      {/* Background effects */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 dark:from-white/5 dark:to-white/10 opacity-40 dark:opacity-40 group-hover:opacity-60 dark:group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div 
                          style={{ animationDelay: '0.5s' }}
                          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent dark:from-white/10 dark:to-transparent blur-3xl opacity-30 dark:opacity-30 group-hover:opacity-50 dark:group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
                        ></div>
                        <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 dark:bg-white/5 blur-xl animate-ping"></div>
                        <div 
                          style={{ animationDelay: '1s' }}
                          className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 dark:bg-white/5 blur-lg animate-ping"
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:from-transparent dark:via-white/5 dark:to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                      </div>

                      {/* Card content */}
                      <div className="p-8 relative z-10">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-white/20 animate-ping"></div>
                            <div 
                              style={{ animationDelay: '0.5s' }}
                              className="absolute inset-0 rounded-full border border-white/10 dark:border-white/10 animate-pulse"
                            ></div>
                            <div className="p-4 rounded-full backdrop-blur-lg border border-white/20 dark:border-white/20 bg-gradient-to-br from-white/90 to-white/70 dark:from-black/80 dark:to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-white/20">
                              <div className="transform group-hover:rotate-180 transition-transform duration-700">
                                <service.icon className="w-8 h-8 text-blue-600 dark:text-yellow-500 group-hover:text-blue-500 dark:group-hover:text-yellow-400 transition-colors duration-300 filter drop-shadow-lg" />
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                              {service.title}
                            </h3>
                          </div>

                          <div className="space-y-1 max-w-sm">
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                  <svg className="w-4 h-4 mr-2 text-blue-500 dark:text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:from-transparent dark:via-white dark:to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

                          <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            {[0, 0.1, 0.2].map((delay) => (
                              <div 
                                key={delay}
                                style={{ animationDelay: `${delay}s` }}
                                className="w-2 h-2 bg-white rounded-full animate-bounce"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent dark:from-white/10 dark:to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent dark:from-white/10 dark:to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 dark:bg-gradient-to-r dark:from-yellow-600 dark:to-yellow-600 dark:text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/30 dark:hover:shadow-yellow-600/30"
              >
                <span className="relative z-10">View all services</span>
                <ArrowRight className="w-5 h-5 ml-2 text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegirnos? */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Fondo con efecto de partículas */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
          <div className="absolute inset-0 opacity-20 dark:opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-gold-600 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Over 5 years of experience offering top-level technological solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "Cutting-Edge Technology",
                description: "We use the latest technologies and frameworks on the market to offer you modern and scalable solutions.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "Specialized Team",
                description: "Our team of experts is highly trained to face any technological challenge.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              },
              {
                icon: <Shield className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "Guaranteed Security",
                description: "We implement the highest security standards to protect your data and that of your clients.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              },
              {
                icon: <Clock className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "On-Time Deliveries",
                description: "We meet the agreed deadlines without compromising the quality of the final product.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              },
              {
                icon: <MessageCircle className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "Clear Communication",
                description: "We maintain constant and transparent communication throughout the project development.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              },
              {
                icon: <Award className="w-10 h-10 text-blue-600 dark:text-gold-500 group-hover:scale-110 transition-transform" />,
                title: "Continuous Support",
                description: "We offer continuous technical support even after the project is finished.",
                bgGradient: "from-blue-100 via-blue-50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-900/80 p-6 rounded-xl overflow-hidden transition-all duration-300 shadow-xl dark:shadow-none border-2 border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/80"
              >
                <div className="w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gold-600/10 dark:to-gold-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{item.description}</p>
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/50 to-transparent dark:from-gold-600/5 dark:via-gold-500/10 dark:to-transparent rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Digital Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Successful Digital Projects
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Plataforma E-commerce",
                image: "/images/projects/proyect-1/cover.jpg",
                fullImage: "/images/projects/proyect-1/full.jpg",
                link: null
              },
              {
                title: "App de Banca Móvil",
                image: "/images/projects/proyect-2/cover.jpg",
                fullImage: "/images/projects/proyect-2/cover.jpg",
                link: null
              },
              {
                title: "Rediseño de Sitio Web",
                image: "/images/projects/proyect-3/cover.jpg",
                fullImage: "/images/projects/proyect-3/full.jpg",
                link: null
              },
              {
                title: "App de Comida a Domicilio",
                image: "/images/projects/proyect-4/cover.jpg",
                fullImage: "/images/projects/proyect-4/cover.jpg",
                link: "https://vanellix.com/"
              },
              {
                title: "Panel de Ejercicios",
                image: "/images/projects/proyect-5/cover.jpg",
                fullImage: "/images/projects/proyect-5/cover.jpg",
                link: "https://hsbox.cl"
              },
              {
                title: "Portal Inmobiliario",
                image: "/images/projects/proyect-6/cover.jpg",
                fullImage: "/images/projects/proyect-6/full.jpg",
                link: null
              },
              {
                title: "Sistema de Salud",
                image: "/images/projects/proyect-7/cover.jpg",
                fullImage: "/images/projects/proyect-7/full.jpg",
                link: null
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 aspect-square overflow-hidden rounded-xl"
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, "_blank");
                  } else if (project.fullImage) {
                    setModalImage(project.fullImage);
                  }
                }}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-600 shadow-lg">
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="relative py-20 overflow-hidden">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/8725948-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Testimonials from companies that have trusted our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Incredible work. The team exceeded all our expectations with their professionalism and attention to detail.",
                author: "María González",
                position: "CEO, TechSolutions",
                rating: 5
              },
              {
                quote: "The best investment we've made. Their focus on user experience is exceptional.",
                author: "Carlos Méndez",
                position: "Director of Marketing, DigitalPlus",
                rating: 5
              },
              {
                quote: "Exceptional support and customized solutions that really understand our needs.",
                author: "Ana Ramírez",
                position: "IT Manager, InnovateCorp",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl dark:shadow-none border-2 border-gray-200 dark:border-transparent"
              >
                <div className="flex mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gold-600/20 flex items-center justify-center text-blue-600 dark:text-gold-500 font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Listo para cambiar tu negocio */}
      <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 dark:hidden">
          <div className="absolute inset-0 bg-white"></div>
        </div>
        <div className="absolute inset-0 z-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-transparent to-yellow-600/5"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.2) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today and discover how we can help you achieve your technological goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="bg-black text-white border-2 border-black px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Modal para la imagen */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setModalImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-4xl"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img 
              src={modalImage} 
              alt="Vista previa del proyecto"
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
