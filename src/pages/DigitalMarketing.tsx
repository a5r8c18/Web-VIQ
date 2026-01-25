import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart, ArrowRight, Eye, Globe, Lightbulb } from 'lucide-react';

const DigitalMarketing = () => {
  const results = [
    { metric: '300%', label: 'Average ROI Increase' },
    { metric: '200%', label: 'Traffic Growth' },
    { metric: '150%', label: 'Conversion Rate Improvement' },
    { metric: '50+', label: 'Successful Campaigns' }
  ];

  const strategies = [
    'SEO Optimization',
    'Content Marketing',
    'Social Media Strategy',
    'Email Campaigns',
    'PPC Advertising',
    'Influencer Partnerships',
    'Brand Storytelling',
    'Data Analytics'
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
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            <TrendingUp className="w-5 h-5 text-amber-400 mr-3" />
            <span className="text-sm text-amber-300 font-semibold tracking-wide uppercase">Digital Marketing Services</span>
          </div>
          
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Drive Digital Growth
              </span>
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          </div>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed font-light">
            Transform your online presence with data-driven marketing strategies that deliver measurable results and accelerate business growth.
          </p>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Proven Results</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-[var(--color-text-primary)] font-semibold">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Video Section - Split Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover"
              >
                <source src="/videos/4017225-uhd_3840_2160_30fps.mp4" type="video/mp4" />
              </video>
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full">
                  <Eye className="w-3 h-3 text-white mr-1" />
                  <span className="text-white text-xs font-semibold">Live Analytics</span>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    Real-Time Marketing Intelligence
                  </span>
                </h3>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  Our advanced analytics platform provides real-time insights into your marketing performance, allowing us to optimize campaigns on the fly and maximize your ROI.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Globe, text: 'Global Market Reach' },
                  { icon: BarChart, text: 'Advanced Analytics Dashboard' },
                  { icon: Target, text: 'Precision Targeting' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[var(--color-text-primary)] font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Explore Analytics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Strategies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Marketing Strategies</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">Comprehensive approaches to digital success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="flex items-center space-x-3 bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-xl p-4 hover:border-amber-400/40 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Lightbulb 
                    className="w-5 h-5 text-amber-400 flex-shrink-0" 
                    fill="currentColor"
                  />
                </motion.div>
                <span className="text-[var(--color-text-primary)] font-medium">{strategy}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Marketing Process</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">A strategic approach to digital success</p>
          </div>
          
          <div className="bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Audit & Research', desc: 'Comprehensive analysis of current performance' },
                { title: 'Strategy Development', desc: 'Create tailored marketing strategies' },
                { title: 'Implementation', desc: 'Execute campaigns across channels' },
                { title: 'Optimization', desc: 'Continuously improve and refine results' }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-amber-600/10 via-amber-500/10 to-amber-400/10 rounded-3xl p-12 border border-amber-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
                Ready to Grow Your Business?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                Let's create a digital marketing strategy that drives real results and helps you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Start Your Campaign
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

export default DigitalMarketing;
