import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-full w-full [perspective:1000px] min-h-[400px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front of the card - Our Services style */}
        <div className="absolute inset-0 w-full h-full p-8 rounded-3xl border-2 dark:border-yellow-600/30 border-yellow-400/30 dark:bg-gray-900/50 bg-white/30 shadow-lg backdrop-blur-sm duration-700 z-10 [backface-visibility:hidden] flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl dark:bg-yellow-500/10 bg-yellow-400/20 dark:text-yellow-400 text-yellow-600 mb-6 transition-all duration-300 group-hover:bg-yellow-500/30 group-hover:rotate-6 group-hover:scale-110">
            {service.icon}
          </div>
          
          <h3 className="text-xl font-bold dark:text-yellow-400 text-gray-800 mb-4">
            {service.title}
          </h3>
          
          <p className="dark:text-yellow-300/80 text-gray-700 mb-6">
            {service.description}
          </p>
          
          <div className="mt-auto w-full">
            <div className="relative inline-flex items-center text-sm font-medium text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors cursor-pointer">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="absolute inset-0 w-full h-full p-8 rounded-3xl border-2 dark:border-yellow-500/50 border-yellow-400/30 dark:bg-gray-900/80 bg-white/50 shadow-lg backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          <h3 className="text-xl font-bold dark:text-yellow-400 text-gray-800 mb-6 text-center">
            {service.title} Features
          </h3>
          
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start dark:text-yellow-300/80 text-gray-700 text-sm">
                <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-4 border-t border-yellow-400/20">
            <Link 
              to="/register" 
              className="w-full inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-800 dark:text-yellow-400 bg-amber-300/70 hover:bg-amber-300/90 dark:bg-yellow-600/20 dark:hover:bg-yellow-500/30 rounded-lg transition-colors duration-200"
            >
              {service.ctaText || 'Get started'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
