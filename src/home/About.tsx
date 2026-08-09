import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import { VMark } from '../components/ui';
import Button from '../components/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const stats = [
  { number: '11+', label: 'Years of experience', note: 'Delivering in the field' },
  { number: '70+', label: 'Projects completed', note: 'Across industries' },
  { number: '100%', label: 'Clients retained', note: 'By working together' },
  { number: '24/7', label: 'Technical support', note: 'Always reachable' },
];

const clients = [1, 2, 3, 4, 5, 6, 7];

const About = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-default)]">
      <div className="container-custom">
        {/* Intro — the statement of craft */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-4 flex items-center gap-4 lg:pt-2">
            <VMark className="w-16 h-12 text-[#d8a455]" />
            <div className="space-y-1">
              <p className="eyebrow-brass">01 / OVERVIEW</p>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">
                WEBSITE · PRODUCT · CAMPAIGN
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="lg:col-span-8"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-[3.25rem] leading-tight tracking-tight text-[var(--color-text-primary)] max-w-2xl">
              Digital transformation isn't décor —{" "}
              <span className="text-[#d8a455] font-medium italic">it's the machine</span>{" "}
              your business runs on.
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                VIQ Systems builds the instruments behind a strong web presence:
                development, reach, and identity. The work is judged by one
                question — does it move the numbers that matter to you?
              </p>
              <p>
                We bring eleven years of engineering habit: honest structure,
                measurable outcomes, and no decoration that doesn't earn its place.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats — plain, un-gimmicked */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)] mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background-secondary p-8">
              <div className="stat-number text-5xl">{stat.number}</div>
              <p className="mt-3 font-medium text-[var(--color-text-primary)]">{stat.label}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.note}</p>
            </div>
          ))}
        </motion.div>

        {/* Clients — a static index, no autoplay marquee */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow-brass mb-3">02 / CLIENTS</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-text-primary)]">
              Work across industries
            </h3>
          </div>
          <a href="/clients" className="link-strike font-mono text-xs uppercase tracking-[0.18em] text-[#d8a455]">
            View all clients
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)] mb-20">
          {clients.map((p) => (
            <div key={p} className="relative bg-background-secondary aspect-[4/3] overflow-hidden">
              <img
                src={`/images/projects/proyect-${p}/cover.jpg`}
                alt={`Client project ${p}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA band */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={2}
          className="relative overflow-hidden border border-[var(--color-border-default)] bg-background-secondary"
        >
          <div className="absolute inset-0 spec-grid opacity-60 pointer-events-none" />
          <div className="relative md:flex md:items-center md:justify-between gap-10 p-8 sm:p-12">
            <div>
              <p className="eyebrow-brass mb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> START A CONVERSATION
              </p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)]">
                Let's map your next system.
              </h3>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
              <Button href="/contact">
                Contact us <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/projects" variant="outline">
                View projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;