import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const scrollRef = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHomeRef = useRef(isHome);
  isHomeRef.current = isHome;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const scrollContainer = document.getElementById('main-scroll-container') || window;

    const onScroll = () => {
      scrollRef.current = scrollContainer === window 
        ? window.scrollY || 0 
        : (scrollContainer as HTMLElement).scrollTop || 0;
    };

    resizeCanvas();
    onScroll();
    window.addEventListener('resize', resizeCanvas);
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    // Smaller, quieter golden specks
    const particleCount = 28;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.7,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    particlesRef.current = particles;

    // On the home page, the hero banner fills the first viewport-height. Keep
    // specks off-screen until the user scrolls past it.
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Home hero occupies the first viewport — none of the band while visible.
      if (isHomeRef.current && scrollRef.current < canvas.height) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const h = canvas.height;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = h;
        if (particle.y > h) particle.y = 0;

        particle.pulsePhase += particle.pulseSpeed;
        const pulseFactor = Math.sin(particle.pulsePhase) * 0.3 + 0.7;

        const haloR = particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, haloR,
        );

        gradient.addColorStop(0, `rgba(251, 191, 36, ${particle.opacity * pulseFactor})`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${particle.opacity * pulseFactor * 0.4})`);
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, haloR, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(251, 191, 36, ${particle.opacity * pulseFactor})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      scrollContainer.removeEventListener('scroll', onScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;