import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showTitle, setShowTitle] = useState(false);
  const [showItems, setShowItems] = useState(Array(5).fill(false));
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Efecto de aparición del título
    const titleTimer = setTimeout(() => setShowTitle(true), 100);
    
    // Efecto de aparición secuencial de los items
    const itemTimers = showItems.map((_, index) => 
      setTimeout(() => {
        setShowItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 200 + index * 100)
    );

    return () => {
      clearTimeout(titleTimer);
      itemTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const createParticles = (event, index) => {
    // Primero, toggle the accordion
    setActiveIndex(activeIndex === index ? null : index);
    
    // Obtener posición y dimensiones del botón
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Crear partículas alrededor del perímetro del botón
    const newParticles = [];
    const colors = ['#FFD700', '#FFED4E', '#FFF176', '#FFEE58', '#FFEB3B'];
    
    // Crear partículas en los lados y arriba del botón
    const numParticles = 25;
    
    for (let i = 0; i < numParticles; i++) {
      // Decidir si la partícula va a salir de un lado o de arriba
      const side = i % 3; // 0: izquierda, 1: derecha, 2: arriba
      
      let x, y;
      let angle, distance;
      
      if (side === 0) { // Lado izquierdo
        x = rect.left + scrollX;
        y = rect.top + scrollY + (Math.random() * rect.height);
        angle = 180 + (Math.random() * 60 - 30); // Dispersión hacia la izquierda
        distance = Math.random() * 80 + 40;
      } else if (side === 1) { // Lado derecho
        x = rect.left + scrollX + rect.width;
        y = rect.top + scrollY + (Math.random() * rect.height);
        angle = 0 + (Math.random() * 60 - 30); // Dispersión hacia la derecha
        distance = Math.random() * 80 + 40;
      } else { // Parte superior
        x = rect.left + scrollX + (Math.random() * rect.width);
        y = rect.top + scrollY;
        angle = 270 + (Math.random() * 60 - 30); // Dispersión hacia arriba
        distance = Math.random() * 60 + 40;
      }
      
      newParticles.push({
        id: Math.random(),
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        duration: Math.random() * 600 + 600,
        angle,
        distance,
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Eliminar partículas después de la animación
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1500);
  };

  const faqs = [
    {
      question: 'Do I need technical knowledge to work with you?',
      answer: 'No. We guide you through the process and explain technical details in simple terms. Your focus should be on your business goals and vision, while we handle the technical execution.'
    },
    {
      question: 'Can you take over or "rescue" an existing project?',
      answer: 'Absolutely. We audit code, stabilize issues, and create a roadmap to get you back on track.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we take confidentiality seriously. We can sign NDAs before discussing your project details to ensure your ideas and information remain protected.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We\'re industry-agnostic and have experience across transportation, e-commerce, education, Hospitality / Foodservice / Travel, logistics and professional services.'
    },
    {
      question: 'How much does software development cost?',
      answer: 'Costs depend on factors like project scope, technology stack, and team expertise. We offer flexible pricing models (e.g., Fixed Price, Time & Materials, or Dedicated Team) to suit your budget.'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden wave-background">
      {/* Ondulaciones (Waves) */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="wave wave-4"></div>
      
      {/* Partículas */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed rounded-full pointer-events-none particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            '--angle': `${particle.angle}deg`,
            '--distance': `${particle.distance}px`,
            '--duration': `${particle.duration}ms`,
          }}
        />
      ))}
      
      {/* Elementos decorativos con múltiples tonalidades */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Tonos dorados muy sutiles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-amber-50/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Tonos blancos */}
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-70 h-70 bg-white/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título con efecto de aparición */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={showTitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
              Find answers to common questions about our services and processes.
            </span>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={showItems[index] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'gold-glow' : ''}`}>
                {/* Botón con el nuevo efecto */}
                <div 
                  className="faq-button relative overflow-hidden z-0 group"
                  onClick={(e) => createParticles(e, index)}
                >
                  {/* Spans para el efecto de fondo */}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  
                  {/* Contenido del botón */}
                  <div className="flex items-center justify-between w-full px-6 py-5 text-left">
                    <h3 className="text-lg font-medium text-amber-900 group-hover:text-black transition-colors duration-500">
                      {faq.question}
                    </h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-600 group-hover:text-black transition-colors duration-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-600 group-hover:text-black transition-colors duration-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: { 
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-black bg-amber-50/90 border-t border-amber-200">
                        <motion.p 
                          className="mt-2 text-sm sm:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeIndex === index ? 1 : 0,
                            height: activeIndex === index ? 'auto' : 0,
                            transition: { 
                              duration: 0.3,
                              ease: 'easeInOut'
                            }
                          }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={showTitle ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 text-center"
        >
          <p className="text-amber-100 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-900 bg-amber-300 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-colors duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Estilos para las ondulaciones, efectos de brillo, partículas, fondo y botones */}
      <style jsx>{`
        .wave-background {
          background: linear-gradient(
            135deg, 
            #000000 0%, 
            #1a1a1a 15%, 
            #2d2d2d 30%, 
            #1a1a1a 45%, 
            #333333 60%, 
            #1a1a1a 75%, 
            #000000 90%,
            #0a0a0a 100%
          );
          position: relative;
          overflow: hidden;
        }
        
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 12em;
          background: rgb(255 255 255 / 10%);
          border-radius: 1000% 1000% 0 0;
          transform: translate3d(0, 0, 0);
          opacity: 0.8;
          z-index: 1;
        }
        
        .wave-1 {
          animation: wave 18s -3s linear infinite;
          background: rgba(245, 158, 11, 0.15);
          height: 10em;
        }
        
        .wave-2 {
          animation: wave 20s -5s linear reverse infinite;
          background: rgba(255, 255, 255, 0.1);
          height: 12em;
          bottom: -1.25em;
          opacity: 0.6;
        }
        
        .wave-3 {
          animation: wave 25s -7s reverse infinite;
          background: rgba(156, 163, 175, 0.2);
          height: 14em;
          bottom: -2.5em;
          opacity: 0.4;
        }
        
        .wave-4 {
          animation: wave 22s -10s linear infinite;
          background: rgba(0, 0, 0, 0.2);
          height: 11em;
          bottom: -1.75em;
          opacity: 0.3;
        }
        
        .gold-glow {
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.4);
          animation: goldPulse 2s infinite;
        }
        
        .particle {
          transform: translate(-50%, -50%);
          animation: particleAnimation var(--duration) ease-out forwards;
          z-index: 2;
        }
        
        /* Estilos para el botón FAQ personalizado */
        .faq-button {
          color: #D4AF37;
          font-size: 16px;
          border: 0.3em solid #D4AF37;
          border-radius: 0.5em;
          width: 100%;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: 0.5s;
          cursor: pointer;
        }
        
        .faq-button span {
          position: absolute;
          width: 25%;
          height: 100%;
          background-color: #D4AF37;
          transform: translateY(150%);
          border-radius: 50%;
          left: calc((var(--n) - 1) * 25%);
          transition: 0.5s;
          transition-delay: calc((var(--n) - 1) * 0.1s);
          z-index: -1;
        }
        
        .faq-button:hover {
          color: black;
        }
        
        .faq-button:hover span {
          transform: translateY(0) scale(2);
        }
        
        .faq-button span:nth-child(1) {
          --n: 1;
        }
        
        .faq-button span:nth-child(2) {
          --n: 2;
        }
        
        .faq-button span:nth-child(3) {
          --n: 3;
        }
        
        .faq-button span:nth-child(4) {
          --n: 4;
        }
        
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(-50%);
          }
          75% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes goldPulse {
          0% {
            box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
          }
          50% {
            box-shadow: 0 0 15px rgba(245, 158, 11, 0.5);
          }
          100% {
            box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
          }
        }
        
        @keyframes particleAnimation {
          0% {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + cos(var(--angle) * 0.0174533) * var(--distance)),
              calc(-50% + sin(var(--angle) * 0.0174533) * var(--distance))
            );
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Faq;