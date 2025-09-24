import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const features = [
    { 
      text: 'Leading Digital Solutions Provider',
      icon: '🚀',
      color: 'text-amber-400 hover:text-amber-300'
    },
    { 
      text: 'Accelerate Time to Market',
      icon: '⚡',
      color: 'text-amber-400 hover:text-amber-300'
    },
    { 
      text: 'Friendly and Reliable',
      icon: '🤝',
      color: 'text-amber-400 hover:text-amber-300'
    },
    { 
      text: 'Quality Deliverables',
      icon: '⭐',
      color: 'text-amber-400 hover:text-amber-300'
    },
    { 
      text: '24/7 Support',
      icon: '🌙',
      color: 'text-amber-400 hover:text-amber-300'
    }
  ]

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
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120
      }
    }
  }

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
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] pb-2">
              Digital Revolution Starts Here!
            </span>
          </h1>
          
          <p className="mt-4 mb-6 md:mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-medium">
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                Joined hands create futures!
              </span>
            </span>
          </p>

          {/* Features as interactive text */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 px-2 text-lg"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`inline-flex items-center group cursor-default ${feature.color} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-2 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <span className="relative">
                  {feature.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-current to-transparent group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 md:pt-4 px-2">
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
    </section>
  )
}

export default Hero