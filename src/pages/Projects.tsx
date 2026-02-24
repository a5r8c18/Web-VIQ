import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with AI-powered recommendations and seamless payment integration',
      image: '/images/logo1.png',
      fullImage: '/images/logo1.png',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'Global Retail Group',
      duration: '3 months',
      results: '300% increase in online sales',
      url: 'https://example.com/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Fintech Mobile App',
      description: 'Secure financial management application with real-time transactions and biometric authentication',
      image: '/images/PrimeVIP_Logo_FullColors-7CRMU-Kr (1).svg',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Stripe API'],
      client: 'FinanceHub Inc',
      duration: '4 months',
      results: '50K+ active users',
      url: 'https://example.com/fintech-app'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] pt-24 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-xl"
            >
              <div className="min-h-[200px] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(34,197,94,1)]"
                  style={{
                    filter: project.id === 1 ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))' : 'none',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (project.id === 1) {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(34, 197, 94, 1)) brightness(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.id === 1) {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))';
                    }
                  }}
                />
                
                {/* Overlay con icono de enlace */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-amber-500 rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
