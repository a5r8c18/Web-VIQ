import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

const Hero = () => {
  const features = [
    'Leading Digital Solutions Provider',
    'Proven Results',
    'Custom Solutions',
    '24/7 Support'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.8) contrast(1.1)'
          }}
        >
          <source src="/videos/VQS.mp4" type="video/mp4" />
          Video dont supported.
        </video>
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/75 to-gray-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center px-4 py-8">
          {/* Main Heading with responsive styling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
              Digital
            </span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] mt-2">
              Revolution
            </span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] mt-2">
              Starts Here!
            </span>
          </h1>
          
          <p className="mt-4 mb-6 md:mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-medium">
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                Joined hands 
              </span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] mt-1">
                create futures!
              </span>
            </span>
          </p>

          {/* Features - Responsive grid */}
          <div className="w-full px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap lg:justify-center gap-3 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center sm:justify-start space-x-2 bg-white/30 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-1.5 rounded-full border-2 border-white/30 shadow-xl"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white text-center sm:text-left">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 md:pt-8 px-2">
            <Link 
              to="/register" 
              className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:bg-white/10 hover:from-transparent hover:to-transparent hover:border hover:border-primary-400/50 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
            >
              <span className='text-white/90 group-hover:text-white transition-colors duration-300'>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-primary-300 transition-colors duration-300" />
            </Link>
            <a 
              href="https://www.youtube.com/@viqsystems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:bg-white/10 hover:from-transparent hover:to-transparent hover:border hover:border-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className='text-white/90'>Watch on YouTube</span>
            </a>
          </div>

          {/* Stats - Adjusted for mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-8 md:pt-12 max-w-2xl mx-auto">
            {[
              { value: '100%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-white/90 mt-1 drop-shadow">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 sm:w-8 sm:h-14 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero