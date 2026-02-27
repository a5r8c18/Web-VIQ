import { motion } from 'framer-motion';
import About from './About';

const Hero = () => {
  return (
    <>
      {/* Hero Section con Video de Fondo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video de Fondo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/VQS.mp4" type="video/mp4" />
          </video>
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent"
          >
            Welcome to VIQ Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4"
          >
           With 11 years of experience in the industry, we transform ideas into exceptional digital solutions. Web development, digital marketing, and branding that propel your business forward.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="btn-primary">
              Contact us
            </a>
            <a href="/projects" className="btn-secondary">
              See projects
            </a>
          </motion.div>
        </div>

        </section>
      
      <About />
    </>
  );
};

export default Hero;
