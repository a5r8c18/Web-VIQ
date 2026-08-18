import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

const projects = [
  {
    id: 1,
    title: 'E-commerce platform',
    category: 'Web Development',
    discipline: 'DEV · COMMERCE',
    image: '/images/projects/proyect-1/cover.jpg',
    stack: 'React · Node · Payment',
  },
  {
    id: 2,
    title: 'Fintech experience',
    category: 'Digital Product',
    discipline: 'DEV · FINTECH',
    image: '/images/projects/proyect-3/cover.jpg',
    stack: 'Web app · API · Design',
  },
  {
    id: 3,
    title: 'Brand relaunch',
    category: 'Branding',
    discipline: 'BRAND · IDENTITY',
    image: '/images/projects/proyect-6/cover.jpg',
    stack: 'Identity · Guidelines · Assets',
  },
  {
    id: 4,
    title: 'Campaign system',
    category: 'Digital Marketing',
    discipline: 'MKT · CAMPAIGN',
    image: '/images/projects/proyect-7/cover.jpg',
    stack: 'SEO · Content · Growth',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-28 pb-24">
      <SEO
        title="Selected Projects & Case Studies"
        description="Explore selected web development, digital product, branding, and marketing campaigns delivered by VIQ Systems."
      />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Selected work"
          title="Build the thing, then measure it."
          description="Projects are judged by the outcome they produce — reach, conversion, or shelf life — not by how loud the hero is."
          align="left"
        />

        <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col bg-background-secondary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-primary)] bg-black/50 px-3 py-1.5">
                    {project.discipline}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between gap-6 p-6 border-t border-[var(--color-border-default)]">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{project.category}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)] text-right">
                    {project.stack}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#d8a455] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[var(--color-border-default)] bg-background-secondary p-8 sm:p-10"
        >
          <div>
            <p className="eyebrow-brass mb-2">OPEN FOR WORK</p>
            <h3 className="font-display font-bold text-2xl text-[var(--color-text-primary)]">
              Have a project that needs engineering discipline?
            </h3>
          </div>
          <Button href="/contact" className="shrink-0">
            Talk to us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;