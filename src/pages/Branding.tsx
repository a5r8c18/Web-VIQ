import { motion } from 'framer-motion';
import { Palette, Sparkles, Target, Eye, Lightbulb, PenTool, Zap, Award } from 'lucide-react';

const Branding = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Create a unique visual identity that captures your brand essence and resonates with your target audience.'
    },
    {
      icon: Sparkles,
      title: 'Logo Design',
      description: 'Design memorable logos that stand out and represent your brand values across all touchpoints.'
    },
    {
      icon: Eye,
      title: 'Visual Strategy',
      description: 'Develop comprehensive visual guidelines that ensure brand consistency across all platforms.'
    },
    {
      icon: PenTool,
      title: 'Brand Guidelines',
      description: 'Create detailed brand books that maintain consistency and strengthen brand recognition.'
    },
    {
      icon: Lightbulb,
      title: 'Brand Strategy',
      description: 'Define your brand positioning, voice, and personality to differentiate in the market.'
    },
    {
      icon: Zap,
      title: 'Rebranding',
      description: 'Transform your existing brand to stay relevant and connect with modern audiences.'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your brand essence and values' },
    { step: '02', title: 'Research', description: 'Market analysis and competitor insights' },
    { step: '03', title: 'Concept', description: 'Developing creative brand concepts' },
    { step: '04', title: 'Design', description: 'Creating visual elements and assets' },
    { step: '05', title: 'Refinement', description: 'Perfecting details based on feedback' },
    { step: '06', title: 'Launch', description: 'Implementing your new brand identity' }
  ];

  const deliverables = [
    'Logo Design Suite',
    'Color Palette & Typography',
    'Brand Guidelines Document',
    'Business Card Design',
    'Social Media Templates',
    'Brand Voice Guidelines',
    'Iconography System',
    'Marketing Materials'
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-24">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 rounded-full mb-8 border border-amber-500/30 backdrop-blur-sm">
            <Palette className="w-5 h-5 text-amber-400 mr-3" />
            <span className="text-sm text-amber-300 font-semibold tracking-wide uppercase">Branding Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Build Your Brand
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed font-light">
            Create a powerful brand identity that captivates your audience and sets you apart from the competition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Branding Process</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">A systematic approach to creating memorable brands</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">What We Deliver</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Comprehensive branding assets for your business</p>
          </div>
          
          <div className="bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center space-x-3"
                >
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-[var(--color-text-primary)] font-medium">{deliverable}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Brand Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Brand Elements We Create</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Everything you need for a cohesive brand identity</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Visual Identity',
                items: ['Logo Design', 'Color Systems', 'Typography', 'Imagery Style'],
                icon: Palette
              },
              {
                title: 'Brand Voice',
                items: ['Tone & Personality', 'Messaging Framework', 'Content Guidelines', 'Communication Style'],
                icon: PenTool
              },
              {
                title: 'Brand Applications',
                items: ['Digital Assets', 'Print Materials', 'Social Media', 'Environmental Design'],
                icon: Target
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 mx-auto">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 text-center">{category.title}</h3>
                
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-amber-600/10 via-amber-500/10 to-amber-400/10 rounded-3xl p-12 border border-amber-500/20 overflow-hidden">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
              Ready to Build Your Brand?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that tells your story and connects with your audience on a deeper level.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              Start Your Brand Journey
              <Sparkles className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Branding;
