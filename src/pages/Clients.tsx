import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Enterprise software development and cloud migration',
      logo: '/images/projects/proyect-1/cover.jpg',
      results: 'Increased efficiency by 45%',
      category: 'enterprise'
    },
    {
      name: 'Global Retail Group',
      industry: 'Retail',
      description: 'E-commerce platform and digital transformation',
      logo: '/images/projects/proyect-2/cover.jpg',
      results: '300% increase in online sales',
      category: 'retail'
    },
    {
      name: 'FinanceHub Inc',
      industry: 'Finance',
      description: 'Fintech application and security solutions',
      logo: '/images/projects/proyect-3/cover.jpg',
      results: 'Reduced processing time by 60%',
      category: 'finance'
    },
    {
      name: 'HealthCare Plus',
      industry: 'Healthcare',
      description: 'Patient management system and telemedicine',
      logo: '/images/projects/proyect-4/cover.jpg',
      results: 'Improved patient satisfaction by 85%',
      category: 'healthcare'
    },
    {
      name: 'EduTech Academy',
      industry: 'Education',
      description: 'Learning management system and mobile app',
      logo: '/images/projects/proyect-5/cover.jpg',
      results: '50,000+ active students',
      category: 'education'
    },
    {
      name: 'Logistics Pro',
      industry: 'Logistics',
      description: 'Supply chain management and tracking system',
      logo: '/images/projects/proyect-6/cover.jpg',
      results: 'Reduced delivery times by 40%',
      category: 'logistics'
    }
  ];

  const stats = [
    { number: '70+', label: 'Happy Clients', description: 'Across all industries' },
    { number: '100%', label: 'Client Retention', description: 'Long-term partnerships' },
    { number: '11+', label: 'Industries Served', description: 'Diverse expertise' },
    { number: '24/7', label: 'Support Available', description: 'Always here to help' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 rounded-full mb-8 border border-amber-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
              <span className="text-sm text-amber-300 font-semibold tracking-wide uppercase">Our Valued Partners</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Clients We Serve
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-secondary)] max-w-5xl mx-auto leading-relaxed font-light mb-8">
              We partner with industry leaders to transform their digital presence and drive measurable business growth.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent leading-none mb-3">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-primary)] font-bold text-lg mb-2">{stat.label}</div>
                <div className="text-[var(--color-text-muted)] text-sm font-light">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">Featured Client Partnerships</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Discover how we've helped businesses across various industries achieve their digital goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2">
                  
                  {/* Client Logo */}
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{client.name}</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-amber-500/20 rounded-full">
                        <span className="text-xs text-amber-300 font-semibold uppercase tracking-wide">{client.industry}</span>
                      </div>
                    </div>
                    
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {client.description}
                    </p>
                    
                    <div className="pt-4 border-t border-[var(--color-border-default)]">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-[var(--color-text-muted)] mb-1">Key Results</div>
                          <div className="text-amber-400 font-semibold">{client.results}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              Become Our Client
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
