import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Shield, Zap, Monitor, Cpu, CheckCircle, Target } from 'lucide-react';
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

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: 'Responsive web design',
      description: 'Interfaces that hold their structure on every screen — desktop, tablet, and phone.',
      features: ['Mobile-first', 'Cross-browser', 'Accessible by default']
    },
    {
      icon: Code,
      title: 'Custom development',
      description: 'Built to your business rules, not a template, and built to scale as you do.',
      features: ['Clean architecture', 'Scalable code', 'Maintainable systems']
    },
    {
      icon: Database,
      title: 'Data & architecture',
      description: 'Plumbing that performs: models, storage, and integration designed for speed and safety.',
      features: ['Performance', 'Security', 'Cloud integration']
    },
    {
      icon: Smartphone,
      title: 'Progressive web apps',
      description: 'Reliable, fast, installable — an app-grade experience served from the web.',
      features: ['Offline support', 'Push notifications', 'Native feel']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploy, monitor, and scale without friction on the infrastructure that fits.',
      features: ['Auto-scaling', 'Global delivery', 'Zero-downtime deploys']
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Hardening applied from day one rather than patched after the fact.',
      features: ['TLS / encryption', 'Audits', 'Standard compliance']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Vue.js', category: 'Frontend', level: 90 },
    { name: 'Node.js', category: 'Backend', level: 92 },
    { name: 'Python', category: 'Backend', level: 88 },
    { name: 'PostgreSQL', category: 'Database', level: 85 },
    { name: 'MongoDB', category: 'Database', level: 87 },
    { name: 'AWS', category: 'Cloud', level: 90 },
    { name: 'Docker', category: 'DevOps', level: 85 }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals', icon: Target },
    { step: '02', title: 'Planning', description: 'Creating a detailed roadmap', icon: Monitor },
    { step: '03', title: 'Development', description: 'Building with an agile rhythm', icon: Code },
    { step: '04', title: 'Testing', description: 'Quality and performance checks', icon: Shield },
    { step: '05', title: 'Deployment', description: 'Launching your application', icon: Cloud },
    { step: '06', title: 'Support', description: 'Maintenance and iteration', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-28">
      <SEO
        title="Web & Software Development Services"
        description="Custom web development, responsive web design, progressive web apps, cloud DevOps, and scalable software architecture by VIQ Systems in Miami."
      />
      <div className="container-custom">
        {/* Page header — a thesis, not a trailer */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="eyebrow-brass mb-5"
            >
              — WEB DEVELOPMENT SERVICES
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-3xl"
            >
              Software that behaves like a machine —{" "}
              <span className="text-[#d8a455] font-medium italic">built to last.</span>
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
              Reliable engineering behind every project: designed to your
              business rules, built to scale, and maintained long after launch.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="What we build"
            title="Disciplines"
            description="One engineering standard across everything we ship."
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
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#d8a455] flex-shrink-0" />
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={2}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Toolkit"
            title="The stack we're fluent in"
            description="Levels describe comfort and real production mileage, not something to game."
          />

          <div className="grid md:grid-cols-2 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-background-secondary px-6 py-5">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-[#d8a455]" />
                    <span className="font-mono text-sm text-[var(--color-text-primary)]">{tech.name}</span>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">{tech.category} · {tech.level}</span>
                </div>
                <div className="w-full bg-[var(--color-bg-tertiary)] h-px">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="h-0.5 bg-[#d8a455]/70"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={3}
          className="mb-20"
        >
          <SectionHeading
            eyebrow={process.map((p) => p.step).join(' → ')}
            title="The sequence"
            description="A process worth numbering because order carries meaning."
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
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-[#d8a455]">{item.step}</span>
                  <item.icon className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[#d8a455] transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6 max-w-2xl">
              Ready to build your web solution?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-9 max-w-2xl">
              Bring the idea. We'll bring the structure to make it hold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">
                Start your project
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

export default WebDevelopment;
