import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

const Hero = () => {
  const features = [
    'Soluciones personalizadas',
    'Soporte 24/7',
    'Tecnología de vanguardia'
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-100 leading-tight">
                Transformamos
                <span className="text-gold-400 block">Ideas en Realidad</span>
                Digital
              </h1>
              <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
                Somos líderes en soluciones tecnológicas innovadoras. Ayudamos a empresas 
                a digitalizar sus procesos y alcanzar el éxito en la era digital.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span className="text-secondary-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary flex items-center justify-center space-x-2">
                <span>Comenzar Ahora</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Ver Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold-600/20 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-sm text-secondary-300">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">98%</div>
                <div className="text-sm text-secondary-300">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">24/7</div>
                <div className="text-sm text-secondary-300">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
