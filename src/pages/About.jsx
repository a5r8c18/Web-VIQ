import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-yellow-500">VIQ Systems</span>
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 mb-12"
        >
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We're passionate about leveraging technology to help businesses thrive in the digital age. With over nine years of experience in the industry, we've honed our expertise in providing cutting-edge solutions that empower our clients to succeed online.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Since our inception in 2020, we've been committed to delivering exceptional results and exceeding our clients' expectations. Over the past nine years, we've evolved and adapted to meet the ever-changing needs of the digital landscape, staying ahead of the curve with innovative solutions and best practices.
            </p>
            
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success in an increasingly digital world.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Innovation', description: 'Embracing cutting-edge technology to deliver forward-thinking solutions.' },
                  { title: 'Excellence', description: 'Committed to the highest standards in everything we do.' },
                  { title: 'Integrity', description: 'Building trust through transparency and ethical practices.' },
                  { title: 'Client-Centric', description: 'Your success is our top priority.' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl">
                    <h4 className="font-medium text-lg text-yellow-600 dark:text-yellow-400 mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
