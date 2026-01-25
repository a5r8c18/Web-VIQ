import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Shield, Zap, Monitor, Cpu, ArrowRight, CheckCircle, Target } from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: 'Responsive Web Design',
      description: 'Websites that adapt perfectly to all devices, providing exceptional user experiences on desktop, tablet, and mobile.',
      features: ['Mobile-First Approach', 'Cross-Browser Compatibility', 'Accessibility Standards']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built with modern technologies to meet your specific business requirements and scale with your growth.',
      features: ['Clean Architecture', 'Scalable Solutions', 'Best Practices']
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Robust and scalable database solutions designed for optimal performance and data security.',
      features: ['Performance Optimization', 'Data Security', 'Cloud Integration']
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging web applications that work offline and provide native-like experiences.',
      features: ['Offline Functionality', 'Push Notifications', 'App-Like Experience']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services for enhanced scalability, performance, and accessibility.',
      features: ['Auto-Scaling', 'CDN Integration', 'Global Deployment']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect your web applications from threats and vulnerabilities.',
      features: ['SSL/TLS Encryption', 'Security Audits', 'Compliance Standards']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Vue.js', category: 'Frontend', level: 90 },
    { name: 'Node.js', category: 'Backend', level: 92 },
    { name: 'Python', category: 'Backend', level: 88 },
    { name: 'PostgreSQL', category: 'Database', level: 85 },
    { name: 'MongoDB', category: 'Database', level: 87 },
    { name: 'AWS', category: 'Cloud', level: 90 },
    { name: 'Docker', category: 'DevOps', level: 85 }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals', icon: Target },
    { step: '02', title: 'Planning', description: 'Creating detailed project roadmap', icon: Monitor },
    { step: '03', title: 'Development', description: 'Building your solution with agile methodology', icon: Code },
    { step: '04', title: 'Testing', description: 'Ensuring quality and performance', icon: Shield },
    { step: '05', title: 'Deployment', description: 'Launching your web application', icon: Cloud },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and improvements', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Video Hero Section */}
      <div className="relative h-[80vh] md:h-[90vh] overflow-hidden mt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/istockphoto-1556389414-640_adpp_is.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/30 via-amber-400/30 to-amber-500/30 rounded-full mb-8 border border-amber-500/40 backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
                <Code className="w-5 h-5 text-amber-300 mr-3" />
                <span className="text-sm text-amber-200 font-semibold tracking-wide uppercase">Web Development Services</span>
              </div>
              
              <div className="relative mb-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                    Custom Web Solutions
                  </span>
                </h1>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-70" />
              </div>
              
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light mb-12 drop-shadow-lg">
                Transform your ideas into powerful, scalable web applications that drive growth and deliver exceptional user experiences.
              </p>

              {/* Visual Hero Elements */}
              <div className="relative max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[Globe, Code, Database].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl" />
                      <div className="relative bg-white/20 backdrop-blur-md border border-amber-500/40 rounded-2xl p-6 hover:border-amber-400/60 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg mb-4 mx-auto">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-black bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                          {index === 0 ? '500+' : index === 1 ? '98%' : '24/7'}
                        </div>
                        <div className="text-white/90 text-sm mt-1">
                          {index === 0 ? 'Projects Delivered' : index === 1 ? 'Client Satisfaction' : 'Support Available'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-custom py-20">

        {/* Enhanced Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Development Services</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Comprehensive solutions for modern web challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{service.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-[var(--color-text-muted)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section with Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Technology Expertise</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Mastery of cutting-edge development tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    <span className="text-[var(--color-text-primary)] font-semibold">{tech.name}</span>
                  </div>
                  <span className="text-amber-400 font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-[var(--color-bg-tertiary)] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  />
                </div>
                <div className="mt-2 text-[var(--color-text-muted)] text-sm">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Development Process</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">A systematic approach to deliver exceptional results</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent transform -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative text-center"
                >
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-black text-xl mb-4 mx-auto border-4 border-[var(--color-bg-primary)] hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-muted)] text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-amber-600/10 via-amber-500/10 to-amber-400/10 rounded-3xl p-12 border border-amber-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
                Ready to Build Your Web Solution?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your ideas into a powerful web application that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="/projects" 
                  className="group inline-flex items-center px-8 py-4 bg-[var(--color-bg-secondary)] border border-amber-500/20 text-[var(--color-text-primary)] font-semibold rounded-xl hover:border-amber-400/40 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
