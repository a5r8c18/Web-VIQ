import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const autoSlideInterval = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      text: "As an IT director of HSBOX, I've worked with numerous vendors, but this company stands out. They provide reliable, scalable solutions with exceptional support.",
      author: "David Chen",
      position: "IT Director, HSBOX",
      rating: 5,
      initial: "D"
    },
    {
      id: 2,
      text: "Working with VIQSystems has been a game-changer. Their expertise in web development and digital marketing helped us revamp our online presence.",
      author: "Alex Johnson",
      position: "Business Owner, NextGen Solutions",
      rating: 5,
      initial: "A"
    },
    {
      id: 3,
      text: "Working with Don Jesus and his development team was a pleasure. Their technical knowledge and collaborative approach were instrumental.",
      author: "Michael Rodriguez",
      position: "CTO, Visionary Tech",
      rating: 5,
      initial: "M"
    },
    {
      id: 4,
      text: "The team delivered exceptional results for our e-commerce platform. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Sarah Williams",
      position: "E-commerce Director, StyleHub",
      rating: 5,
      initial: "S"
    }
  ];

  // Auto-slide effect removed since we're showing all cards
  useEffect(() => {
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, []);
  
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/8725948-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] h-full"
            >
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl duration-700 z-10 relative overflow-hidden hover:shadow-amber-500/10 hover:shadow-3xl">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                <div className="p-6 relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="p-4 rounded-full backdrop-blur-lg border border-amber-500/20 bg-black shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-amber-500/20">
                        <div className="transform group-hover:rotate-180 transition-transform duration-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                        {testimonial.author}
                      </h3>
                      <p className="text-amber-400 text-sm mt-1">{testimonial.position}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500"></div>
                    
                    <div className="flex justify-center space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
