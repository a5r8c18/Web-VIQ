import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react';

const Hero = () => {
  const features = [
    'Leading Digital Solutions Provider',
    'Proven Results',
    'Custom Solutions',
    '24/7 Support'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center px-4 py-8">
          {/* Main Heading with new styling */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight whitespace-nowrap">
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              Digital
            </span>
            {' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              Revolution
            </span>
            {' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              Starts Here!
            </span>
          </h1>
          <p className="mt-2 mb-4">
            <span className="text-2xl sm:text-3xl font-medium whitespace-nowrap">
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                Joined hands 
              </span>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                create futures!
              </span>
            </span>
          </p>

          {/* Features */}
          <div className="w-full px-4 overflow-x-auto">
            <div className="flex flex-nowrap justify-center gap-3 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full border-2 border-white/30 shadow-xl whitespace-nowrap"
                >
                  <CheckCircle className="h-5 w-5 text-accent-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              to="/register" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:bg-white/10 hover:from-transparent hover:to-transparent hover:border hover:border-primary-400/50 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className='text-white/90 group-hover:text-white transition-colors duration-300'>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:text-primary-300 transition-colors duration-300" />
            </Link>
            <a 
              href="https://www.youtube.com/@viqsystems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:bg-white/10 hover:from-transparent hover:to-transparent hover:border hover:border-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              <span className='text-white/90'>Watch on YouTube</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto">
            {[
              { value: '100%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                <div className="text-sm font-medium text-white/90 mt-1 drop-shadow">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
