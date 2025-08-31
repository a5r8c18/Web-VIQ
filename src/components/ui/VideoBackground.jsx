import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = ({ videoSources, overlay = true, children, className = '' }) => {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [error, setError] = useState(null);

  // Función para cargar el siguiente video cuando falle el actual
  const handleError = (e) => {
    console.error('Error al cargar el video:', e);
    
    // Intentar con el siguiente video si hay más disponibles
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    } else {
      setError('No se pudo cargar ningún video');
    }
  };

  // Efecto para manejar la reproducción automática
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error al reproducir el video:', error);
          // Si falla la reproducción, intentar silenciar y reproducir de nuevo
          video.muted = true;
          video.play().catch(e => console.error('Error al reproducir video silenciado:', e));
        });
      }
    };

    // Intentar reproducir cuando el video pueda reproducirse
    video.addEventListener('canplay', playVideo);
    video.addEventListener('error', handleError);
    
    // Forzar la carga del video
    video.load();

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('error', handleError);
    };
  }, [currentVideoIndex, videoSources]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`} style={{ minHeight: '80vh' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {videoSources && videoSources.length > 0 ? (
          <video
            ref={videoRef}
            key={currentVideoIndex}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
            onError={handleError}
          >
            <source 
              src={videoSources[currentVideoIndex]} 
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
        )}
        
        {overlay && <div className="absolute inset-0 bg-black/60"></div>}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-red-400 p-4">
            {error}
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
