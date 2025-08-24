import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Code, Smartphone, Cloud, Users, Database, Shield, 
  Zap, ArrowRight, CheckCircle, Star 
} from 'lucide-react'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Servicios' },
    { id: 'development', name: 'Desarrollo' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'consulting', name: 'Consultoría' }
  ]

  const services = [
    {
      id: 1,
      category: 'development',
      icon: Code,
      title: 'Desarrollo Web Frontend',
      description: 'Interfaces modernas y responsivas con las mejores tecnologías del mercado.',
      features: ['React, Vue, Angular', 'Responsive Design', 'PWA', 'Optimización SEO'],
      price: 'Desde $2,500',
      duration: '4-8 semanas',
      popular: false
    },
    {
      id: 2,
      category: 'development',
      icon: Database,
      title: 'Desarrollo Backend & APIs',
      description: 'Arquitecturas robustas y escalables para tu aplicación.',
      features: ['Node.js, Python, .NET', 'APIs RESTful/GraphQL', 'Microservicios', 'Base de datos'],
      price: 'Desde $3,500',
      duration: '6-10 semanas',
      popular: true
    },
    {
      id: 3,
      category: 'development',
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android.',
      features: ['React Native', 'Flutter', 'Nativo iOS/Android', 'App Store Deploy'],
      price: 'Desde $4,000',
      duration: '8-12 semanas',
      popular: false
    },
    {
      id: 4,
      category: 'cloud',
      icon: Cloud,
      title: 'Migración a la Nube',
      description: 'Transición segura y eficiente hacia infraestructura cloud.',
      features: ['AWS/Azure/GCP', 'Migración de datos', 'Optimización costos', 'Monitoreo'],
      price: 'Desde $5,000',
      duration: '6-14 semanas',
      popular: false
    },
    {
      id: 5,
      category: 'cloud',
      icon: Shield,
      title: 'DevOps & Seguridad',
      description: 'Automatización de despliegues y seguridad integral.',
      features: ['CI/CD Pipelines', 'Docker/Kubernetes', 'Seguridad', 'Monitoreo'],
      price: 'Desde $3,000',
      duration: '4-8 semanas',
      popular: true
    },
    {
      id: 6,
      category: 'consulting',
      icon: Users,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para la transformación digital.',
      features: ['Arquitectura de software', 'Estrategia tecnológica', 'Code review', 'Mentoring'],
      price: 'Desde $150/hora',
      duration: 'Flexible',
      popular: false
    },
    {
      id: 7,
      category: 'development',
      icon: Zap,
      title: 'Desarrollo Full-Stack',
      description: 'Solución completa desde frontend hasta backend y base de datos.',
      features: ['Stack completo', 'Diseño UX/UI', 'Backend robusto', 'Despliegue'],
      price: 'Desde $6,500',
      duration: '10-16 semanas',
      popular: true
    },
    {
      id: 8,
      category: 'cloud',
      icon: Database,
      title: 'Big Data & Analytics',
      description: 'Procesamiento y análisis de grandes volúmenes de datos.',
      features: ['Data pipelines', 'Machine Learning', 'Dashboards', 'Reportes'],
      price: 'Desde $4,500',
      duration: '8-12 semanas',
      popular: false
    }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-gold-400 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto mb-8">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio. 
            Desde desarrollo web hasta consultoría estratégica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Calidad garantizada</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Soporte 24/7</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Entrega a tiempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Filter */}
      <section className="bg-secondary-800 border-b border-gold-600/20 sticky top-20 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gold-600 text-secondary-900'
                    : 'bg-secondary-700 text-secondary-300 hover:bg-gold-600/20 hover:text-gold-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="relative bg-secondary-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gold-600/20 hover:border-gold-500/40">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gold-600 text-secondary-900 px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gold-600 rounded-2xl mb-6">
                      <IconComponent className="h-8 w-8 text-secondary-900" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gold-400 mb-4">{service.title}</h3>
                    <p className="text-secondary-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-gold-400 flex-shrink-0" />
                          <span className="text-secondary-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gold-600/20 pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gold-400">{service.price}</div>
                          <div className="text-sm text-secondary-400">{service.duration}</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        to="/registro" 
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <span>Solicitar Cotización</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
              Seguimos una metodología probada que garantiza resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', description: 'Entendemos tus necesidades y objetivos' },
              { step: '02', title: 'Planificación', description: 'Diseñamos la estrategia y arquitectura' },
              { step: '03', title: 'Desarrollo', description: 'Implementamos con las mejores prácticas' },
              { step: '04', title: 'Entrega', description: 'Desplegamos y brindamos soporte continuo' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-600 text-secondary-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gold-400 mb-2">{phase.title}</h3>
                <p className="text-secondary-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gold-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-secondary-800 mb-8 max-w-2xl mx-auto">
            Contáctanos para soluciones personalizadas. Adaptamos nuestros servicios a tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registro" className="bg-secondary-900 hover:bg-secondary-800 text-gold-400 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contactar Ahora
            </Link>
            <a href="tel:+15551234567" className="bg-transparent border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-gold-400 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Llamar: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
