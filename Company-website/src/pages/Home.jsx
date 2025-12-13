import Hero from '../components/ui/Hero'
import { Link } from 'react-router-dom'
import { Code, Smartphone, Cloud, Users, ArrowRight, Star } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y responsivas con las últimas tecnologías.',
      features: ['React/Vue/Angular', 'Backend APIs', 'Base de datos']
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas e híbridas para iOS y Android.',
      features: ['React Native', 'Flutter', 'Nativo iOS/Android']
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Soluciones en la nube escalables y seguras.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservicios']
    },
    {
      icon: Users,
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico para la transformación digital.',
      features: ['Arquitectura', 'Estrategia', 'Optimización']
    }
  ]

  const testimonials = [
    {
      name: 'María González',
      company: 'StartupTech',
      content: 'TechCorp transformó completamente nuestro negocio. Su equipo es excepcional.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'InnovateCorp',
      content: 'Profesionales, eficientes y con resultados excepcionales. Altamente recomendados.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'DigitalFlow',
      content: 'La mejor inversión que hemos hecho. ROI increíble en tiempo récord.',
      rating: 5
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Services Preview */}
      <section className="section-padding bg-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-secondary-700 border border-gold-600/20 rounded-xl p-6 hover:shadow-lg hover:border-gold-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gold-600 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-secondary-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gold-400 mb-2">{service.title}</h3>
                  <p className="text-secondary-300 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-secondary-400">• {feature}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>Ver Todos los Servicios</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-6">
                ¿Por qué elegir TechCorp?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-secondary-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Experiencia Comprobada</h3>
                    <p className="text-secondary-300">Más de 500 proyectos exitosos y 10 años de experiencia en el mercado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-secondary-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Tecnología de Vanguardia</h3>
                    <p className="text-secondary-300">Utilizamos las últimas tecnologías y mejores prácticas del mercado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-secondary-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Soporte Continuo</h3>
                    <p className="text-secondary-300">Acompañamos tu proyecto desde la concepción hasta el mantenimiento.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-800 rounded-2xl p-8 shadow-lg border border-gold-600/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                  <div className="text-secondary-300">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
                  <div className="text-secondary-300">Satisfacción Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                  <div className="text-secondary-300">Soporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">10+</div>
                  <div className="text-secondary-300">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-secondary-300">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary-700 border border-gold-600/20 rounded-xl p-6 hover:shadow-lg hover:border-gold-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gold-400">{testimonial.name}</div>
                  <div className="text-sm text-secondary-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gold-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-secondary-800 mb-8 max-w-2xl mx-auto">
            Únete a más de 500 empresas que ya confían en nuestras soluciones tecnológicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-secondary-900 text-gold-400 hover:bg-secondary-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Comenzar Ahora
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-gold-400 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
