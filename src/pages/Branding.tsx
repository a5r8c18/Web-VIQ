import { motion } from 'framer-motion';
import { Palette, Sparkles, Target, Eye, Lightbulb, PenTool, Zap, Award } from 'lucide-react';
import { SectionHeading } from '../components/ui';
import Button from '../components/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const services = [
  {
    icon: Palette,
    title: 'Brand identity design',
    description: 'A visual identity that captures what you do and says it to the people who need to hear it.',
  },
  {
    icon: PenTool,
    title: 'Logo & marks',
    description: 'Marks built to outlive trends — engineered for print, screen, and everything between.',
  },
  {
    icon: Eye,
    title: 'Visual strategy',
    description: 'Guidelines that keep the brand coherent across every touchpoint you own.',
  },
  {
    icon: Sparkles,
    title: 'Brand guidelines',
    description: 'A brand book that sets the rules once, so nobody has to guess after.',
  },
  {
    icon: Lightbulb,
    title: 'Brand strategy',
    description: 'Positioning, voice, and personality — decided deliberately, not inherited.',
  },
  {
    icon: Zap,
    title: 'Rebranding',
    description: 'When the current brand has worn out its usefulness, we retire it cleanly.',
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understand the brand essence' },
  { step: '02', title: 'Research', description: 'Map the market and the room' },
  { step: '03', title: 'Concept', description: 'Develop creative directions' },
  { step: '04', title: 'Design', description: 'Draw the assets and elements' },
  { step: '05', title: 'Refinement', description: 'Tighten details from feedback' },
  { step: '06', title: 'Launch', description: 'Deploy the identity everywhere' },
];

const deliverables = [
  'Logo system',
  'Color & typography',
  'Guidelines document',
  'Marketing materials',
  'Brand voice',
  'Assets & templates',
];

const Branding = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-28">
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
              — BRANDING SERVICES
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-3xl"
            >
              A mark your customers{" "}
              <span className="text-[#d8a455] font-medium italic">can recall</span>{" "}
              at a glance.
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
              Identity, done like an instrument: a mark, a system, and the rules
              that keep it steady on every surface it lands on.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="What a brand system covers"
            description="Everything that makes you recognizable in the wild."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={index}
                className="group bg-background-secondary p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <service.icon className="w-5 h-5 text-[#d8a455]" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--color-text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
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
          custom={2}
          className="mb-20"
        >
          <SectionHeading
            eyebrow={process.map((p) => p.step).join(' → ')}
            title="The sequence"
            description="A numbered process, because a brand arrives one deliberate step at a time."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                custom={index}
                className="group bg-background-secondary p-7"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d8a455]">{item.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    {String(index).padStart(2, '0')} / {process.length}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={3}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Handover"
            title="What lands in your hands"
            description="A complete kit, ready to ship."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                className="flex items-center gap-3 bg-background-secondary px-6 py-5"
              >
                <Award className="w-4 h-4 text-[#d8a455] flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                  {deliverable}
                </span>
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
          custom={4}
          className="relative overflow-hidden border border-[var(--color-border-default)] bg-background-secondary mb-20"
        >
          <div className="absolute inset-0 spec-grid opacity-60 pointer-events-none" />
          <div className="relative p-8 sm:p-12">
            <p className="eyebrow-brass mb-4">NEXT STEP</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Ready to build your brand?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-9 max-w-2xl">
              Let's make an identity people remember — and one you can run a
              business on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">
                Start your brand journey
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

export default Branding;