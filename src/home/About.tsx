import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Users, Target, Award, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollSpeed;
      
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      carousel.scrollLeft = scrollAmount;
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const stats = [
    { number: '10+', label: 'Años de Experiencia', icon: Award, description: 'De innovación digital' },
    { number: '500+', label: 'Proyectos Completados', icon: Target, description: 'En diversas industrias' },
    { number: '98%', label: 'Clientes Satisfechos', icon: Users, description: 'De retención' },
    { number: '24/7', label: 'Soporte Técnico', icon: TrendingUp, description: 'Siempre disponible' }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="container-custom">
        {/* Video Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 -mx-4 md:-mx-6 lg:-mx-8"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/90 z-10" />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[400px] object-cover scale-105"
            >
              <source src="/videos/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Transformación Digital con <span className="text-amber-400">Impacto Real</span>
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                    Creamos experiencias digitales que no solo se ven increíbles, sino que impulsan resultados medibles para tu negocio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact" 
                      className="group inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-400 transition-all duration-300"
                    >
                      Iniciar Conversación
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a 
                      href="/projects" 
                      className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      Ver Proyectos
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 rounded-full mb-8 border border-amber-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            <Globe className="w-5 h-5 text-amber-400 mr-3" />
            <span className="text-sm text-amber-300 font-semibold tracking-wide uppercase">Líderes en Transformación Digital</span>
          </div>
          
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                VIQ Systems
              </span>
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-secondary)] max-w-5xl mx-auto leading-relaxed font-light">
            Transformamos ideas en 
            <span className="relative">
              <span className="text-amber-400 font-bold"> soluciones digitales excepcionales</span>
              <svg className="absolute bottom-0 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,8 50,5 T100,5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            que impulsan el crecimiento empresarial y crean experiencias memorables.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[var(--color-text-primary)] font-bold text-lg">{stat.label}</div>
                  <div className="text-[var(--color-text-muted)] text-sm font-light">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mb-20 -mx-4 md:-mx-6 lg:-mx-8"
        >
          <div className="text-center mb-12 px-4">
            <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Nuestros Proyectos Destacados</h3>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Un vistazo a algunos de los trabajos más recientes que hemos desarrollado
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex space-x-6 overflow-x-hidden scrollbar-hide"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* First set of projects */}
              {[1, 2, 3, 4, 5, 6, 7].map((project) => (
                <div key={project} className="flex-shrink-0 w-80">
                  <div className="relative group overflow-hidden rounded-2xl border border-[var(--color-border-default)] hover:border-amber-500/50 transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`/images/projects/proyect-${project}/cover.jpg`}
                        alt={`Proyecto ${project}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-semibold text-white mb-2">Proyecto {project}</h4>
                        <p className="text-gray-300 text-sm mb-4">Solución digital personalizada</p>
                        <a 
                          href="/projects" 
                          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          Ver más
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7].map((project) => (
                <div key={`duplicate-${project}`} className="flex-shrink-0 w-80">
                  <div className="relative group overflow-hidden rounded-2xl border border-[var(--color-border-default)] hover:border-amber-500/50 transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`/images/projects/proyect-${project}/cover.jpg`}
                        alt={`Proyecto ${project}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-semibold text-white mb-2">Proyecto {project}</h4>
                        <p className="text-gray-300 text-sm mb-4">Solución digital personalizada</p>
                        <a 
                          href="/projects" 
                          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          Ver más
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              Ver Todos los Proyectos
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
