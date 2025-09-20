import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/ui/Hero';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Users, ArrowRight, Star, Shield, BarChart2, Clock, MessageCircle, Award, Brain, Server } from 'lucide-react';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'WEB DEVELOPMENT',
      description: 'We craft dynamic, user-centric web experiences that bring your digital vision to life with creativity and technical excellence.',
      price: 'From $2,500',
      timeline: '4-8 weeks',
      popular: true
    },
    {
      icon: Server,
      title: 'ENTERPRISE MODERNIZATION',
      description: 'We transform legacy systems into secure, scalable cloud platforms with faster releases, fewer incidents, and lower costs.',
      price: 'From $15,000',
      timeline: '12-24 weeks',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'MOBILE APPLICATIONS',
      description: 'Our expert team builds custom mobile solutions\nthat deliver seamless experiences across iOS and\nAndroid platforms.',
      price: 'From $5,000',
      timeline: '8-12 weeks',
      popular: true
    },
    {
      icon: BarChart2,
      title: 'DIGITAL MARKETING',
      description: 'We build impactful online presences through strategic digital marketing that connects you with your target audience.',
      price: 'From $1,500',
      timeline: 'Ongoing',
      popular: true
    },
    {
      icon: Shield,
      title: 'BRANDING',
      description: 'We craft unique brand identities and visual assets that set you apart and resonate with your target market.',
      price: 'From $3,000',
      timeline: '6-10 weeks',
      popular: true
    },
    {
      icon: Cloud,
      title: 'IT INFRASTRUCTURE',
      description: 'Reliable hosting and VPS solutions that deliver the performance and security your business demands.',
      price: 'From $3,500',
      timeline: 'Varies by project',
      popular: true
    },
    {
      icon: Users,
      title: 'SOFTWARE TEAM',
      description: 'Our dedicated developers work closely with you to build custom software solutions that drive your business forward.',
      price: 'From $10,000',
      timeline: 'Varies by project',
      popular: true
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

  // Estado para el carrusel de testimonios
  const [testimonialOffset, setTestimonialOffset] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [direction, setDirection] = useState(-1); // -1 para derecha a izquierda, 1 para izquierda a derecha
  const [testimonials, setTestimonials] = useState([
    
   
    {
      quote: "As an IT director of HSBOX, I've worked with numerous vendors, but this company stands out. They provide reliable, scalable solutions with exceptional support. With their help, we've streamlined operations and focused on driving our business forward. Highly recommend their services to any enterprise looking for a trusted IT partner!",
      author: "David Chen",
      position: "IT Director, HSBOX",
      rating: 5
    },
    {
      quote: "Working with VIQSystems has been a game-changer for our business! Their expertise in web development and digital marketing helped us revamp our online presence and reach new customers. What truly sets them apart is their personalized approach and attention to detail. They took the time to understand our brand and objectives, and the results speak for themselves. Highly recommend!",
      author: "Alex Johnson",
      position: "Business Owner, NextGen Solutions",
      rating: 5
    },
    {
      quote: "Working with Don Jesus and his development team has been an absolute pleasure. Their depth of technical knowledge and collaborative approach has been instrumental in bringing our vision to life. From the initial planning stages to the final implementation, they demonstrated a strong commitment to quality and excellence.",
      author: "Michael Rodriguez",
      position: "CTO, Visionary Tech",
      rating: 5
    }
  ]);

  useEffect(() => {
    // Crear un array con los testimonios suficientes para el carrusel (duplicamos para infinito)
    const itemsNeeded = Math.ceil(window.innerWidth / (320 + 24)) * 2 + 2;
    const repeatedTestimonials = [];
    
    for (let i = 0; i < itemsNeeded; i++) {
      repeatedTestimonials.push(...testimonials);
    }
    
    setTestimonials(repeatedTestimonials);
  }, []);

  useEffect(() => {
    if (isTestimonialPaused || testimonials.length === 0) return;

    let animationId;
    const animate = () => {
      setTestimonialOffset(prevOffset => {
        const cardWithGap = 320 + 24;
        const totalWidth = cardWithGap * testimonials.length;
        const maxOffset = totalWidth - (4 * cardWithGap);
        let newOffset = prevOffset + (1 * direction);

        // Invertir dirección al llegar a límites
        if (newOffset >= maxOffset && direction > 0) {
          setDirection(-1); // Cambiar a derecha -> izquierda
          newOffset = maxOffset;
        } else if (newOffset <= 0 && direction < 0) {
          setDirection(1); // Cambiar a izquierda -> derecha
          newOffset = 0;
        }

        return newOffset;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isTestimonialPaused, testimonials.length, direction]);

  const handleTestimonialNav = (dir) => {
    const step = 320 + 24;
    setTestimonialOffset(prevOffset => {
      const cardWithGap = 320 + 24;
      const maxOffset = (cardWithGap * testimonials.length) - (4 * cardWithGap);
      let newOffset;
      if (dir === 'prev') {
        newOffset = Math.max(0, prevOffset - step);
      } else {
        newOffset = Math.min(maxOffset, prevOffset + step);
      }
      return newOffset;
    });
  };

  // Configuración del carrusel
  const carouselConfig = {
    cardWidth: 320,
    gap: 24,
    padding: 60,
    speed: 1, // Velocidad ajustada para smoothness
    breakpoints: {
      lg: {
        cards: 4,
        cardWidth: 320
      },
      md: {
        cards: 2,
        cardWidth: 350
      },
      sm: {
        cards: 1.5,
        cardWidth: 320
      },
      xs: {
        cards: 1,
        cardWidth: 300
      }
    }
  };

  // Estado para las dimensiones del carrusel
  const [dimensions, setDimensions] = useState({
    containerWidth: 0,
    visibleCards: 5,      // Por defecto mostrar 5 tarjetas
    cardWidth: 260,       // Ancho por defecto
    maxOffset: 0
  });

  // Calcular dimensiones del carrusel
  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth = window.innerWidth;
      let breakpoint = 'lg';
      
      // Determinar el breakpoint actual
      if (viewportWidth < 1280) breakpoint = 'lg';
      if (viewportWidth < 1024) breakpoint = 'md';
      if (viewportWidth < 768) breakpoint = 'sm';
      if (viewportWidth < 480) breakpoint = 'xs';
      
      const { cards, cardWidth } = carouselConfig.breakpoints[breakpoint];
      
      const containerWidth = viewportWidth;
      const maxOffset = Math.max(0, (cardWidth + carouselConfig.gap) * (testimonials.length - cards) + (carouselConfig.padding * 2));
      
      setDimensions({
        containerWidth,
        visibleCards: cards,
        cardWidth,
        maxOffset
      });
    };

    // Actualizar dimensiones al cargar y al redimensionar
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
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
            <source src="/videos/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 w-full">
          {/* VIQ Systems Section with Video Background */}
          <div className="relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover min-h-screen"
                  style={{
                    objectPosition: 'center',
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.7)',
                    width: '100%',
                    height: 'auto',
                  }}
                >
                  <source src="/videos/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="pt-16 pb-2">
                <div className="container-custom text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    VIQ <span className="text-white">Systems</span>
                  </h2>
                  <div className="max-w-4xl mx-auto space-y-4 text-lg text-white px-4">
                    <p className="leading-relaxed">
                      We're passionate about leveraging technology to help businesses thrive in the digital age. With over nine years of experience in the industry, we've honed our expertise in providing cutting-edge solutions that empower our clients to succeed online.
                    </p>
                    <p className="leading-relaxed">
                      Since our inception in 2020, we've been committed to delivering exceptional results and exceeding our clients' expectations. Over the past nine years, we've evolved and adapted to meet the ever-changing needs of the digital landscape, staying ahead of the curve with innovative solutions and best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Add two lines of space before Our Services */}
              <div className="h-16"></div>

              <div className="pt-2 pb-16">
                <div className="relative z-10">
                  <div className="text-center mb-8 container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Our Services
                    </h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">
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
                          className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 px-3"
                        >
                          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl duration-300 z-10 relative overflow-hidden hover:shadow-amber-500/10 hover:shadow-3xl w-[280px] h-[380px] flex flex-col">
                            {/* Background effects */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                              <div 
                                style={{ animationDelay: '0.5s' }}
                                className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
                              ></div>
                              <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-amber-500/5 blur-xl animate-ping"></div>
                              <div 
                                style={{ animationDelay: '1s' }}
                                className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-amber-500/5 blur-lg animate-ping"
                              ></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                            </div>

                            {/* Card content */}
                            <div className="p-6 relative z-10 flex-1 flex flex-col">
                              <div className="flex flex-col items-center text-center flex-1">
                                <div className="relative mb-4">
                                  <div className="p-3 rounded-full backdrop-blur-lg border border-amber-500/20 bg-black/80 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 group-hover:shadow-amber-500/20">
                                    <div className="transform group-hover:rotate-180 transition-transform duration-700">
                                      <service.icon className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300 filter drop-shadow-lg" />
                                    </div>
                                  </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                  {service.title}
                                </h3>

                                <p className="text-gray-300 text-base leading-relaxed text-center w-full flex-1 whitespace-pre-line">
                                  {service.description}
                                </p>

                                <div className="mt-4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

                                <div className="flex space-x-1.5 mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                  {[0, 0.1, 0.2].map((delay) => (
                                    <div 
                                      key={delay}
                                      style={{ animationDelay: `${delay}s` }}
                                      className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Link 
                      to="/services" 
                      className="group relative inline-flex items-center justify-center px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/30"
                    >
                      <span className="relative z-10 text-white">View all services</span>
                      <ArrowRight className="w-5 h-5 ml-2 text-white group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegirnos? */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          >
            <source src="/videos/7989667-hd_1080_1920_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/75 to-gray-900/80"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Over 10 years of experience offering top-level technological solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Cutting-Edge Technology",
                description: "We use the latest technologies and frameworks on the market to offer you modern and scalable solutions.",
              },
              {
                icon: Users,
                title: "Specialized Team",
                description: "Our team of experts is highly trained to face any technological challenge.",
              },
              {
                icon: Clock,
                title: "On-Time Deliveries",
                description: "We meet the agreed deadlines without compromising the quality of the final product.",
              },
              {
                icon: MessageCircle,
                title: "Clear Communication",
                description: "We maintain constant and transparent communication throughout the project development.",
              },
              {
                icon: Award,
                title: "Continuous Support",
                description: "We offer continuous technical support even after the project is finished.",
              },
              {
                icon: Brain,
                title: "AI Producer",
                description: "We create cutting-edge AI solutions tailored to your business needs, from machine learning models to intelligent automation systems.",
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 px-4"
                >
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl duration-300 z-10 relative overflow-hidden hover:shadow-amber-500/10 hover:shadow-3xl w-full h-full">
                    {/* Background effects */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <div 
                        style={{ animationDelay: '0.5s' }}
                        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
                      ></div>
                      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-amber-500/5 blur-xl animate-ping"></div>
                      <div 
                        style={{ animationDelay: '1s' }}
                        className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-amber-500/5 blur-lg animate-ping"
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    </div>

                    {/* Card content */}
                    <div className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          <div className="p-4 rounded-full backdrop-blur-lg border border-amber-500/20 bg-black/80 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 group-hover:shadow-amber-500/20">
                            <div className="transform group-hover:rotate-180 transition-transform duration-700">
                              <IconComponent className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors duration-300 filter drop-shadow-lg" />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                          {item.title}
                        </h3>

                        <p className="text-gray-300 text-base leading-relaxed text-center w-full">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Successful Digital Projects Section */}
      <section className="py-16 bg-gray-400 dark:bg-gray-900 relative overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gray-400 dark:hidden"></div>
        
        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1),transparent_40%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,119,6,0.1),transparent_40%)]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Sección Listo para cambiar tu negocio */}
      <section className="py-16 md:py-20 bg-gray-400 dark:bg-gray-900 relative overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gray-400 dark:hidden"></div>
        
        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1),transparent_40%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,119,6,0.1),transparent_40%)]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-800 dark:text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today and discover how we can help you achieve your technological goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <span className="text-white">Contact Us</span>
            </Link>
            <Link 
              to="/services" 
              className="bg-yellow-600 hover:bg-yellow-500 text-white border-2 border-yellow-600 hover:border-yellow-500 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <span className="text-white">Our Services</span>
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
