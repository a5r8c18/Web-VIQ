import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Code, Smartphone, Cloud, Users, Database, Shield, 
  Zap, ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight,
  Globe, BarChart2, Cpu, Lock, Server, Target, Settings, PenTool, Palette
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'development', name: 'Desarrollo' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'consulting', name: 'Consultoría' }
  ]

  const services = [
    {
      id: 1,
      category: 'development',
      icon: <Code className="h-8 w-8" />,
      title: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones personalizadas construidas con tecnologías modernas para un rendimiento óptimo.',
      features: ['React, Vue, Angular', 'Diseño Responsivo', 'Aplicaciones Web Progresivas', 'Optimización SEO'],
      price: 'Desde $2,500',
      duration: '4-8 semanas',
      popular: true
    },
    {
      id: 2,
      category: 'development',
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas e híbridas para iOS y Android.',
      features: ['React Native', 'Flutter', 'iOS/Android Nativo', 'Publicación en Tiendas'],
      price: 'Desde $4,000',
      duration: '8-12 semanas',
      popular: true
    },
    {
      id: 3,
      category: 'marketing',
      icon: <BarChart2 className="h-8 w-8" />,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing basadas en datos para hacer crecer tu presencia en línea.',
      features: ['SEO/SEM', 'Redes Sociales', 'Marketing de Contenidos', 'Analítica'],
      price: 'Desde $1,500',
      duration: 'Continuo',
      popular: true
    },
    {
      id: 4,
      category: 'cloud',
      icon: <Cloud className="h-8 w-8" />,
      title: 'Migración a la Nube',
      description: 'Transición sin problemas a la infraestructura en la nube con máximo rendimiento.',
      features: ['AWS/Azure/GCP', 'Migración de Datos', 'Optimización de Costos', 'Seguridad'],
      price: 'Desde $5,000',
      duration: '6-14 semanas',
      popular: false
    },
    {
      id: 5,
      category: 'cloud',
      icon: <Shield className="h-8 w-8" />,
      title: 'DevOps & Seguridad',
      description: 'Implementación de prácticas DevOps y medidas de seguridad para proteger tus activos digitales.',
      features: ['Pipelines CI/CD', 'Docker/Kubernetes', 'Auditorías de Seguridad', 'Monitoreo'],
      price: 'Desde $3,000',
      duration: '4-8 semanas',
      popular: true
    },
    {
      id: 6,
      category: 'consulting',
      icon: <Users className="h-8 w-8" />,
      title: 'Consultoría IT',
      description: 'Orientación experta para alinear tu tecnología con los objetivos de negocio.',
      features: ['Estrategia Tecnológica', 'Transformación Digital', 'Arquitectura de Sistemas', 'Capacitación'],
      price: 'Desde $150/hora',
      duration: 'Flexible',
      popular: false
    },
    {
      id: 7,
      category: 'development',
      icon: <Zap className="h-8 w-8" />,
      title: 'Desarrollo Full-Stack',
      description: 'Servicios de desarrollo de extremo a extremo desde el concepto hasta el despliegue.',
      features: ['Frontend & Backend', 'Diseño de Base de Datos', 'Desarrollo de API', 'Despliegue'],
      price: 'Desde $6,500',
      duration: '10-16 semanas',
      popular: true
    },
    {
      id: 8,
      category: 'marketing',
      icon: <Target className="h-8 w-8" />,
      title: 'Branding',
      description: 'Crea una identidad de marca sólida que resuene con tu audiencia objetivo.',
      features: ['Diseño de Logo', 'Guías de Marca', 'Identidad Visual', 'Estrategia de Marca'],
      price: 'Desde $3,000',
      duration: '4-6 semanas',
      popular: false
    }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-500">Cargando servicios...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones tecnológicas personalizadas para impulsar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'text-yellow-400/90 hover:bg-yellow-500/10 hover:text-yellow-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              >
                <div className="dark:text-white text-gray-900 rounded-3xl border-2 dark:border-yellow-600/50 border-gray-200 dark:bg-black bg-white shadow-2xl duration-700 z-10 relative backdrop-blur-xl dark:hover:border-yellow-500/70 hover:border-yellow-400/50 hover:shadow-yellow-500/30 hover:shadow-3xl h-full">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr dark:from-yellow-600/5 dark:via-yellow-400/10 dark:to-yellow-600/5 from-yellow-400/5 via-yellow-300/10 to-yellow-400/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr dark:from-yellow-700/10 dark:via-yellow-500/15 from-yellow-300/10 via-yellow-200/15 to-transparent blur-3xl opacity-40 group-hover:opacity-60 transform group-hover:scale-110 transition-all duration-700"></div>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-full dark:bg-yellow-600/20 bg-yellow-400/20 blur-xl animate-ping"></div>
                    <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full dark:bg-yellow-600/20 bg-yellow-400/20 blur-lg animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent dark:via-yellow-500/10 via-yellow-400/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r dark:from-yellow-600 dark:to-yellow-700 from-yellow-500 to-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        ¡Popular!
                      </div>
                    )}
                    
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl dark:bg-yellow-500/10 bg-yellow-100 dark:text-yellow-500 text-yellow-600 mb-6 group-hover:bg-yellow-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold dark:text-yellow-400 text-gray-800 mb-3">{service.title}</h3>
                    <p className="dark:text-yellow-300/80 text-gray-600 mb-6 flex-grow">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="dark:text-yellow-400 text-gray-800 font-medium mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center dark:text-yellow-300/80 text-gray-600 text-sm">
                            <CheckCircle className="h-4 w-4 dark:text-yellow-500 text-yellow-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t dark:border-yellow-500/20 border-gray-200 flex justify-between items-center">
                      <div>
                        <span className="block dark:text-yellow-400 text-gray-800 font-medium">{service.price}</span>
                        <span className="dark:text-yellow-500/70 text-gray-500 text-sm">{service.duration}</span>
                      </div>
                      <Link 
                        to="/contacto" 
                        className="dark:text-yellow-400 text-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Services
