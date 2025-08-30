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
        >
          <source src="/videos/VQS.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
              Leading Digital Solutions Provider
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
              <span className="block">Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
                Digital Revolution
              </span>
              <span>Starts Here!</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your Vision, our Expertise, your Success!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                >
                  <CheckCircle className="h-4 w-4 text-accent-400" />
                  <span className="text-sm text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://www.youtube.com/@viqsystems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                <span>Watch on YouTube</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Team Members' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
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
