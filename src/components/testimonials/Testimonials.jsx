import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  
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
      text: "Working with VIQSystems has been a game-changer for our business! Their expertise in web development and digital marketing helped us revamp our online presence.",
      author: "Alex Johnson",
      position: "Business Owner, NextGen Solutions",
      rating: 5,
      initial: "A"
    },
    {
      id: 3,
      text: "Working with Don Jesus and his development team has been an absolute pleasure. Their depth of technical knowledge and collaborative approach has been instrumental.",
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? testimonials.length - cardsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.1)_0,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our solutions
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(testimonials.length / cardsToShow) * 100}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="px-3 transition-all duration-300"
                style={{ width: `${100 / testimonials.length * cardsToShow}%`, minWidth: `${100 / cardsToShow}%` }}
              >
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl duration-700 z-10 relative overflow-hidden hover:shadow-amber-500/10 hover:shadow-3xl">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    </div>

                    <div className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center">
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
                        </div>
                        
                        <p className="text-gray-300">
                          {testimonial.text}
                        </p>
                        
                        <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500"></div>
                        
                        <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-gray-800 shadow-md flex items-center justify-center text-white hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300" 
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-gray-800 shadow-md flex items-center justify-center text-white hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300" 
            aria-label="Next testimonial"
            onClick={nextTestimonial}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsToShow) ? 'bg-amber-500 w-6' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index * cardsToShow)}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
