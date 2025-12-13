import React, { useEffect, useRef } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text }) => {
  const wrapperRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Forzar un reflow para asegurar que las animaciones se inicien correctamente
    if (wrapperRef.current) {
      void wrapperRef.current.offsetHeight;
    }
  }, [text]);

  return (
    <div ref={wrapperRef} className="animated-text-wrapper">
      <div className="animated-text">
        {text.split('').map((letter, index) => (
          <span 
            key={index} 
            className="letter" 
            style={{ '--i': index }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      <div ref={loaderRef} className="loader"></div>
    </div>
  );
};

export default AnimatedText;
