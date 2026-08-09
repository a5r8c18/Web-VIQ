import { useEffect, useState, useCallback, useRef } from 'react';
import type { SyntheticEvent } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import { VMark } from '../components/ui';
import Button from '../components/Button';

const MEDIA_DURATION = 5000;
const MAX_VIDEO_SECONDS = 10;
const MAX_VIDEO_GRACE = 0.5;

// Video + photo slides for the home hero. Test set: reuse assets already in
// the project. Swap these paths for the final campaign later.
const slides = [
  { type: 'video', src: '/videos/VQS.mp4' },
  { type: 'image', src: '/images/6zTkyqP0n_2000x1500__1.jpg', alt: 'VIQ team at work' },
  { type: 'video', src: '/videos/ViqSVideo.mp4' },
  { type: 'image', src: '/images/projects/proyect-1/cover.jpg', alt: 'VIQ project' },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const Hero = () => {
  const [active, setActive] = useState(0);
  const [removed, setRemoved] = useState<number[]>([]);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const pendingSlides = slides.filter((_, i) => !removed.includes(i));

  useEffect(() => {
    if (active >= pendingSlides.length) {
      setActive(0);
      return;
    }
    const slide = pendingSlides[active];
    if (!slide || slide.type === 'video') return;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % pendingSlides.length);
    }, MEDIA_DURATION);
    return () => clearTimeout(id);
  }, [active, pendingSlides.length, removed]);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, video]) => {
      if (!video) return;
      const i = Number(index);
      if (i === active) {
        if (video.ended) video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % pendingSlides.length);
  }, [pendingSlides.length]);

  const onDuration = useCallback((index: number) => (e: SyntheticEvent<HTMLVideoElement>) => {
    const duration = e.currentTarget.duration;
    if (Number.isFinite(duration) && duration > MAX_VIDEO_SECONDS + MAX_VIDEO_GRACE) {
      e.currentTarget.pause();
      e.currentTarget.removeAttribute('src');
      setRemoved((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  }, []);

  const renderSlide = (index: number) => {
    const slide = pendingSlides[index];
    const isActive = index === active;
    return (
      <div
        key={slide.src}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!isActive}
      >
        {slide.type === 'video' ? (
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            muted
            onLoadedMetadata={onDuration(index)}
            onEnded={() => setActive((prev) => (prev + 1) % pendingSlides.length)}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hero — thesis: the subject is "systems", so open with the mark and
          the grid of the machine, not a generic centered gradient. */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Rotating media banner: video → photo → video → photo */}
        <div className="absolute inset-0 z-0">
          {pendingSlides.map((_, index) => renderSlide(index))}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 spec-grid opacity-70" />
        </div>

        {/* Slide index + names */}
        <div className="absolute bottom-[12vh] right-0 z-10 hidden sm:flex items-center gap-3">
          {pendingSlides.map((slide, index) => (
            <button
              key={index}
              onClick={next}
              aria-label={slide.type === 'video' ? `Play video ${index + 1}` : `Show photo ${index + 1}`}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 px-2 py-1 ${
                index === active
                  ? 'text-[#d8a455]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
              }`}
            >
              {String(index + 1).padStart(2, '0')} {slide.type === 'video' ? '· video' : '· photo'}
            </button>
          ))}
        </div>

        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 max-w-3xl">
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="eyebrow-brass mb-6"
              >
                — VIQ SYSTEMS · DIGITAL STUDIO
              </motion.p>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-display font-bold leading-[1.02] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-[var(--color-text-primary)]"
              >
                Engineering ideas into{" "}
                <span className="text-[#d8a455] font-medium italic">systems</span> that work.
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg text-[var(--color-text-secondary)] leading-relaxed"
              >
                Web development, digital marketing, and branding. With eleven
                years in the field, we build the digital instruments your
                business runs on.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
              >
                <Button href="/contact">
                  Contact us
                </Button>
                <Button href="/projects" variant="outline">
                  See projects
                </Button>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-14 pt-6 max-w-xl"
              >
                <div className="rule" />
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  EST. MIAMI · DEV / MARKETING / BRAND
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};

export default Hero;