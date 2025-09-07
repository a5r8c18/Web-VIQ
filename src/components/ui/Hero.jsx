import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react';

const Hero = () => {
  const features = [
    'Custom Solutions',
    '24/7 Support',
    'Cutting-edge Technology',
    'Proven Results'
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 backdrop-blur-md text-white font-medium shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-400 mr-2"></span>
              Leading Digital Solutions Provider
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-transparent leading-tight tracking-tight drop-shadow-xl">
              <span className="block font-semibold text-white">Your</span>
              <span className="text-white dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent-300 dark:to-primary-300 drop-shadow-2xl">
                Digital Revolution
              </span>
              <span className="block font-semibold text-white">Starts Here!</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl font-semibold text-white max-w-2xl mx-auto leading-relaxed drop-shadow-xl">
              Your Vision, our Expertise, your Success!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-full border-2 border-white/30 shadow-xl"
                >
                  <CheckCircle className="h-5 w-5 text-accent-300" />
                  <span className="text-sm font-semibold text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className='text-white/90'>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://www.youtube.com/@viqsystems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                <span className='text-white/90'>Watch on YouTube</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto">
              {[
                { value: '100%', label: 'Client Satisfaction' },
                { value: '5+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm font-medium text-white/90 mt-1 drop-shadow">{stat.label}</div>
                </div>
              ))}
            </div>
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
