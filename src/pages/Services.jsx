import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Code, Smartphone, Cloud, Users, Database, Shield, 
  Zap, ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight,
  Globe, BarChart2, Cpu, Lock, Server, Target, Settings, PenTool, Palette
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceCard from '../components/services/ServiceCard'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'development', name: 'Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ]

  const services = [
    {
      id: 1,
      category: 'development',
      icon: <Code className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies for optimal performance.',
      features: ['Custom Solutions', 'Responsive Design', 'High Performance', 'SEO Friendly'],
      popular: true
    },
    {
      id: 2,
      category: 'development',
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Applications',
      description: 'Cross-platform and native mobile applications for iOS and Android.',
      features: ['Cross-Platform Solutions', 'Native Performance', 'Intuitive UI/UX', 'App Store Ready'],
      popular: true
    },
    {
      id: 3,
      category: 'infrastructure',
      icon: <Server className="h-6 w-6" />,
      title: 'Enterprise System Modernization',
      description: 'We transform legacy systems into secure, scalable cloud-ready platforms - faster releases, fewer incidents, lower cost',
      features: [
        'Modernize without disruption',
        'Modern Architecture',
        'Zero-Downtime Migration',
        'Enhanced Security'
      ],
      popular: true,
      ctaText: 'Modernize Now',
      ctaLink: '/contact'
    },
    {
      id: 4,
      category: 'infrastructure',
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your applications.',
      features: ['Cloud Migration', 'Scalable Architecture', 'High Availability', 'Disaster Recovery'],
      popular: true
    },
    {
      id: 5,
      category: 'marketing',
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
      features: ['Search Engine Optimization', 'Social Media Strategy', 'Content Marketing', 'Performance Analytics'],
      popular: false
    },
    {
      id: 6,
      category: 'marketing',
      icon: <Target className="h-6 w-6" />,
      title: 'Brand Strategy',
      description: 'Building strong brand identities that resonate with your audience.',
      features: ['Brand Identity', 'Market Positioning', 'Strategic Messaging', 'Visual Branding'],
      popular: false
    },
    {
      id: 7,
      category: 'development',
      icon: <Database className="h-6 w-6" />,
      title: 'Database Design',
      description: 'Optimized database solutions for performance and scalability.',
      features: ['Custom Database Design', 'Performance Optimization', 'Data Security', 'Scalable Architecture'],
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-amber-600 dark:text-yellow-500">Loading services...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[oklch(92.2%_0_0)] dark:bg-gradient-to-b dark:from-gray-900 dark:to-black py-20 relative overflow-hidden">
      {/* Fondo con ondas doradas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full text-gray-300/80 dark:text-yellow-500/10" viewBox="-2400 -800 4800 1600" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Definición del gradiente dorado para las ondas */}
          <defs>
            <linearGradient id="sharedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700"></stop>
              <stop offset="50%" stopColor="#FFC100"></stop>
              <stop offset="100%" stopColor="#DAA520"></stop>
            </linearGradient>
          </defs>
          {/* Grupo de ondas decorativas con diferentes opacidades */}
          <g className="primary-waves">
            <path d="M 2400 845 C 2035.2 845, 1852.8 605.85, 1488 605.85 C 1161.6 605.85, 998.4 306.05, 672 306.05 C 384 306.05, 240 4.81, -48 4.81 C -297.6 4.81, -422.4 -248.38, -672 -248.38 C -883.2 -248.38, -988.8 -446.5, -1200 -446.5 C -1372.8 -446.5, -1459.2 -592.95, -1632 -592.95 C -1766.4 -592.95, -1833.6 -679.62, -1968 -679.62 C -2064 -679.62, -2112 -711.13, -2208 -711.13 C -2265.6 -711.13, -2294.4 -726.9, -2352 -726.9 C -2371.2 -726.9, -2380.8 -768.5, -2400 -768.5" stroke="url(#sharedGradient)" strokeWidth="4" strokeLinecap="round" className="opacity-40 dark:opacity-15" />
            <path d="M 2400 870.92 C 2035.2 870.92, 1852.8 616.5, 1488 616.5 C 1161.6 616.5, 998.4 304.62, 672 304.62 C 384 304.62, 240 3.24, -48 3.24 C -297.6 3.24, -422.4 -242.56, -672 -242.56 C -883.2 -242.56, -988.8 -431.44, -1200 -431.44 C -1372.8 -431.44, -1459.2 -568.32, -1632 -568.32 C -1766.4 -568.32, -1833.6 -647.14, -1968 -647.14 C -2064 -647.14, -2112 -677.99, -2208 -677.99 C -2265.6 -677.99, -2294.4 -702.54, -2352 -702.54 C -2371.2 -702.54, -2380.8 -754.56, -2400 -754.56" stroke="url(#sharedGradient)" strokeWidth="4.3" strokeLinecap="round" className="opacity-45 dark:opacity-17" />
            <path d="M 2400 894.02 C 2035.2 894.02, 1852.8 622.54, 1488 622.54 C 1161.6 622.54, 998.4 300.34, 672 300.34 C 384 300.34, 240 1.4, -48 1.4 C -297.6 1.4, -422.4 -235.36, -672 -235.36 C -883.2 -235.36, -988.8 -414.38, -1200 -414.38 C -1372.8 -414.38, -1459.2 -541.88, -1632 -541.88 C -1766.4 -541.88, -1833.6 -614.1, -1968 -614.1 C -2064 -614.1, -2112 -646.2, -2208 -646.2 C -2265.6 -646.2, -2294.4 -680.45, -2352 -680.45 C -2371.2 -680.45, -2380.8 -741.43, -2400 -741.43" stroke="url(#sharedGradient)" strokeWidth="4.6" strokeLinecap="round" className="opacity-50 dark:opacity-19" />
            <path d="M 2400 913.37 C 2035.2 913.37, 1852.8 623.91, 1488 623.91 C 1161.6 623.91, 998.4 293.73, 672 293.73 C 384 293.73, 240 -0.11, -48 -0.11 C -297.6 -0.11, -422.4 -226.43, -672 -226.43 C -883.2 -226.43, -988.8 -395.26, -1200 -395.26 C -1372.8 -395.26, -1459.2 -513.85, -1632 -513.85 C -1766.4 -513.85, -1833.6 -580.92, -1968 -580.92 C -2064 -580.92, -2112 -616.07, -2208 -616.07 C -2265.6 -616.07, -2294.4 -660.5, -2352 -660.5 C -2371.2 -660.5, -2380.8 -728.65, -2400 -728.65" stroke="url(#sharedGradient)" strokeWidth="4.9" strokeLinecap="round" className="opacity-55 dark:opacity-21" />
          </g>
        </svg>
      </div>

      {/* Contenedor principal del contenido */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Encabezado principal con gradiente animado */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {/* Primera línea con efecto de gradiente y brillo */}
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] pb-2">
              Solutions!
            </span>
          </h2>
          {/* Subtítulo descriptivo con efectos mejorados */}
          <p className="text-xl max-w-3xl mx-auto">
            <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
              Take your business to the next level with our cutting-edge solutions
            </span>
          </p>
        </div>

        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-white shadow-md hover:bg-amber-600 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-500/90'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm dark:bg-gray-800/50 dark:text-yellow-400 dark:hover:bg-gray-800/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cuadrícula de servicios */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          {/* Animación de entrada para la cuadrícula */}
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
                  className="h-full"
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Services