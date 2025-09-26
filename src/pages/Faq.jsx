import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

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
    const colors = ['#B8860B', '#DAA520', '#CD853F', '#F4A460', '#DEB887'];
    
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
   
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900">
      {/* Fondo animado con cuadrados dorados más oscuros */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título con efecto de aparición */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={showTitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-200 to-amber-400 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(184,134,11,0.4)]">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-200 to-amber-400 
              animate-text-shimmer bg-[length:200%_100%] bg-left 
              drop-shadow-[0_0_8px_rgba(184,134,11,0.3)]">
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
                    <h3 className="text-lg font-medium text-amber-800 group-hover:text-amber-900 transition-colors duration-500">
                      {faq.question}
                    </h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-700 group-hover:text-amber-900 transition-colors duration-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-700 group-hover:text-amber-900 transition-colors duration-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                      {/* Overlay para cerrar */}
                      <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
                        onClick={() => setActiveIndex(null)}
                      />

                      {/* Contenido del modal */}
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, rotateX: -10 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
                        exit={{ opacity: 0, y: 10, scale: 0.96, rotateX: -5 }}
                        className="relative z-10 w-[92%] max-w-2xl rounded-2xl bg-black/90 text-white shadow-[0_25px_80px_rgba(0,0,0,0.65)] border border-gray-700 p-6 overflow-hidden ring-1 ring-cyan-400/10 hover:ring-cyan-300/20 transition"
                      >
                        {/* Grid/fondo sutil futurista */}
                        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:18px_18px]"></div>
                        {/* Botón cerrar */}
                        <button
                          aria-label="Cerrar"
                          className="group absolute top-3 right-3 rounded-full p-2 bg-white/90 text-black hover:bg-gray-200/70 transition border border-gray-300 shadow"
                          onClick={() => setActiveIndex(null)}
                        >
                          <svg className="h-5 w-5 transition-transform duration-300 ease-out group-hover:rotate-180 group-active:rotate-[360deg]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
                          </svg>
                        </button>

                        {/* Contenido del modal */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-br from-amber-300/20 via-amber-200/20 to-amber-400/20 text-amber-200 ring-1 ring-amber-300/40">
                            <MessageSquare className="h-4 w-4" /> Question
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold italic mb-2 text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-200 to-amber-400 animate-text-shimmer bg-[length:200%_100%] bg-left drop-shadow-[0_0_8px_rgba(184,134,11,0.35)]">
                          {faq.question}
                        </h3>
                        <div className="my-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
                        <p className="text-base sm:text-lg leading-relaxed text-gray-100 selection:bg-gray-700 selection:text-white">
                          {faq.answer}
                        </p>
                      </motion.div>
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
          <p className="text-amber-200 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-900 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Estilos para el fondo animado, efectos de brillo y partículas */}
      <style jsx>{`
        .area {
          background: #1a1a1a; /* Fondo más claro que negro puro */
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(184, 134, 11, 0.6); /* Dorado oscuro y más fuerte */
          animation: animate 25s linear infinite;
          bottom: -150px;
          border: 1px solid rgba(184, 134, 11, 0.8);
        }

        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          background: rgba(184, 134, 11, 0.4);
        }

        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
          background: rgba(184, 134, 11, 0.7);
        }

        .circles li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          background: rgba(184, 134, 11, 0.5);
        }

        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
          background: rgba(184, 134, 11, 0.3);
        }

        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          background: rgba(184, 134, 11, 0.6);
        }

        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
          background: rgba(184, 134, 11, 0.2);
        }

        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
          background: rgba(184, 134, 11, 0.4);
        }

        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
          background: rgba(184, 134, 11, 0.7);
        }

        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
          background: rgba(184, 134, 11, 0.5);
        }

        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
          background: rgba(184, 134, 11, 0.3);
        }

        .gold-glow {
          box-shadow: 0 0 12px rgba(184, 134, 11, 0.6);
          animation: goldPulse 2s infinite;
        }

        .particle {
          transform: translate(-50%, -50%);
          animation: particleAnimation var(--duration) ease-out forwards;
          z-index: 2;
        }

        /* Estilos para el botón FAQ personalizado */
        .faq-button {
          color: #B8860B; /* Dorado más oscuro */
          font-size: 16px;
          border: 0.3em solid #B8860B; /* Dorado más oscuro */
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
          background: rgba(26, 26, 26, 0.8); /* Fondo que coincide con el nuevo color */
        }

        .faq-button span {
          position: absolute;
          width: 25%;
          height: 100%;
          background-color: #B8860B; /* Dorado más oscuro */
          transform: translateY(150%);
          border-radius: 50%;
          left: calc((var(--n) - 1) * 25%);
          transition: 0.5s;
          transition-delay: calc((var(--n) - 1) * 0.1s);
          z-index: -1;
        }

        .faq-button:hover {
          color: #1a1a1a; /* Color de texto al hover más oscuro */
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

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }

          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes goldPulse {
          0% {
            box-shadow: 0 0 8px rgba(184, 134, 11, 0.4);
          }
          50% {
            box-shadow: 0 0 15px rgba(184, 134, 11, 0.7);
          }
          100% {
            box-shadow: 0 0 8px rgba(184, 134, 11, 0.4);
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