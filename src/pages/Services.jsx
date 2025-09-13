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
      features: ['React, Vue, Angular', 'Responsive Design', 'Progressive Web Apps', 'SEO Optimization'],
      popular: true
    },
    {
      id: 2,
      category: 'development',
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Applications',
      description: 'Cross-platform and native mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Publishing'],
      popular: true
    },
    {
      id: 3,
      category: 'marketing',
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      popular: false
    },
    {
      id: 4,
      category: 'infrastructure',
      icon: <Server className="h-6 w-6" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your applications.',
      features: ['AWS/GCP/Azure', 'DevOps', 'CI/CD Pipelines', 'Containerization'],
      popular: true
    },
    {
      id: 5,
      category: 'development',
      icon: <Database className="h-6 w-6" />,
      title: 'Database Design',
      description: 'Optimized database solutions for performance and scalability.',
      features: ['SQL/NoSQL', 'Data Modeling', 'Performance Tuning', 'Migrations'],
      popular: false
    },
    {
      id: 6,
      category: 'marketing',
      icon: <Target className="h-6 w-6" />,
      title: 'Brand Strategy',
      description: 'Building strong brand identities that resonate with your audience.',
      features: ['Brand Identity', 'Positioning', 'Messaging', 'Visual Design'],
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
        <div className="animate-pulse text-yellow-500">Loading services...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 dark:text-yellow-400 mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-lg text-yellow-600 dark:text-yellow-500/90 max-w-3xl mx-auto">
            Custom technology solutions to take your business to the next level.
          </p>
        </div>

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
        <div className="px-4 sm:px-6 lg:px-8 py-12">
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
