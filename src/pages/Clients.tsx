import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

const clients = [
  { name: 'TechCorp Solutions', industry: 'Technology', note: 'Enterprise software & cloud', image: '/images/projects/proyect-1/cover.jpg', result: 'Efficiency up 45%' },
  { name: 'Global Retail Group', industry: 'Retail', note: 'Commerce & digital transformation', image: '/images/projects/proyect-2/cover.jpg', result: 'Online sales up 300%' },
  { name: 'FinanceHub Inc', industry: 'Finance', note: 'Fintech product & security', image: '/images/projects/proyect-3/cover.jpg', result: 'Processing time down 60%' },
  { name: 'HealthCare Plus', industry: 'Healthcare', note: 'Patient systems & telehealth', image: '/images/projects/proyect-4/cover.jpg', result: 'Satisfaction up 85%' },
  { name: 'EduTech Academy', industry: 'Education', note: 'Learning platform & mobile app', image: '/images/projects/proyect-5/cover.jpg', result: '50,000+ active students' },
  { name: 'Logistics Pro', industry: 'Logistics', note: 'Supply chain & tracking', image: '/images/projects/proyect-6/cover.jpg', result: 'Delivery times down 40%' },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-28">
      <SEO
        title="Our Clients & Partnerships"
        description="See how VIQ Systems collaborates with clients across technology, retail, finance, healthcare, and education to drive real results."
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
              — CLIENTS
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-3xl"
            >
              The work
              <span className="text-[#d8a455] font-medium italic"> repays the client's trust.</span>
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
              We stay small enough to know every account personally — and build
              for the long partnership, not the one-off invoice.
            </p>
          </motion.div>
        </div>

        {/* Client grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)] mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={index}
              className="group bg-background-secondary flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-primary)] bg-black/50 px-3 py-1.5">
                    {client.industry}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 border-t border-[var(--color-border-default)]">
                <h3 className="font-display font-bold text-xl text-[var(--color-text-primary)]">
                  {client.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{client.note}</p>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-default)] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d8a455]">{client.result}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[#d8a455] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={3}
          className="relative overflow-hidden border border-[var(--color-border-default)] bg-background-secondary mb-20"
        >
          <div className="absolute inset-0 spec-grid opacity-60 pointer-events-none" />
          <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="eyebrow-brass mb-4">NEXT PARTNER</p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)]">
                Looking for a team that measures its work?
              </h2>
            </div>
            <Button href="/contact" className="shrink-0">
              Become a client
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;