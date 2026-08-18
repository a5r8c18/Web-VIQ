import { motion } from 'framer-motion';
import { Target, BarChart3, Eye, Globe, Lightbulb } from 'lucide-react';
import { SectionHeading } from '../components/ui';
import Button from '../components/Button';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const results = [
  { metric: '300%', label: 'Average ROI increase' },
  { metric: '200%', label: 'Traffic growth' },
  { metric: '150%', label: 'Conversion rate improvement' },
  { metric: '50+', label: 'Campaigns run' },
];

const strategies = [
  'SEO optimization',
  'Content marketing',
  'Social strategy',
  'Email campaigns',
  'PPC advertising',
  'Influencer partnerships',
  'Brand storytelling',
  'Data analytics',
];

const process = [
  { step: '01', title: 'Audit & research', desc: 'Measure where you actually stand' },
  { step: '02', title: 'Strategy', desc: 'A plan built on the data, not a mood' },
  { step: '03', title: 'Implementation', desc: 'Ship campaigns across channels' },
  { step: '04', title: 'Optimization', desc: 'Iterate on what the numbers say' },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-28">
      <SEO
        title="Digital Marketing Services"
        description="Data-driven digital marketing, SEO optimization, content strategy, and PPC campaign management with measurable ROI by VIQ Systems."
      />
      <div className="container-custom">
        {/* Page header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="eyebrow-brass mb-5"
            >
              — DIGITAL MARKETING SERVICES
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-3xl"
            >
              Growth that{" "}
              <span className="text-[#d8a455] font-medium italic">holds a number</span>{" "}
              to it.
            </motion.h1>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="lg:col-span-4"
          >
            <p className="text-[var(--color-text-secondary)] leading-relaxed border-l-2 border-[#d8a455]/50 pl-5">
              Marketing run like an instrument panel: every channel read,
              every dollar accountable, every result reported in language you
              can act on.
            </p>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Measurements"
            title="Results we point to"
            description="Numbers that speak for themselves — because the work is set up to be counted."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                className="bg-background-secondary p-8"
              >
                <div className="stat-number text-5xl sm:text-6xl">{result.metric}</div>
                <p className="mt-3 text-sm font-medium text-[var(--color-text-secondary)]">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Split: video + intelligence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={2}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <div className="relative border border-[var(--color-border-default)] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[16/10] object-cover"
            >
              <source src="/videos/4017225-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-[var(--color-bg-primary)]/80 px-3 py-1.5">
              <Eye className="w-3.5 h-3.5 text-[#d8a455]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Live analytics
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow-brass mb-4">— REAL-TIME INTELLIGENCE</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-text-primary)] mb-5">
              Read the market off the dashboards, not the vibes
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Analytics and AI-driven insight give marketing a steering wheel.
              We build the loop, watch it turn, and report in language you can
              bring to a boardroom.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#d8a455]" />
                <span className="text-sm text-[var(--color-text-primary)]">Global market reach</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-[#d8a455]" />
                <span className="text-sm text-[var(--color-text-primary)]">Analytics you can read</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-[#d8a455]" />
                <span className="text-sm text-[var(--color-text-primary)]">Precision targeting</span>
              </div>
            </div>
            <Button href="/contact" variant="outline">
              Explore analytics
            </Button>
          </div>
        </motion.div>

        {/* Strategies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={3}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Approaches"
            title="Weapons in the kit"
            description="Channels deployed deliberately, never all at once."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                className="group flex items-center gap-3 bg-background-secondary px-6 py-5"
              >
                <Lightbulb className="w-4 h-4 text-[#d8a455] flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                  {strategy}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={4}
          className="mb-20"
        >
          <SectionHeading
            eyebrow={process.map((p) => p.step).join(' → ')}
            title="The sequence"
            description="Ordered because each step only works after the one before it."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                custom={index}
                className="bg-background-secondary p-7"
              >
                <span className="font-mono text-xs text-[#d8a455]">{step.step}</span>
                <h3 className="font-display font-semibold text-lg text-[var(--color-text-primary)] mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={5}
          className="relative overflow-hidden border border-[var(--color-border-default)] bg-background-secondary mb-20"
        >
          <div className="absolute inset-0 spec-grid opacity-60 pointer-events-none" />
          <div className="relative p-8 sm:p-12">
            <p className="eyebrow-brass mb-4">NEXT STEP</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-9 max-w-2xl">
              A marketing plan with a measurement built in. Let's define what growth
              means for you first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">
                Start your campaign
              </Button>
              <Button href="/projects" variant="outline">
                View our work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketing;