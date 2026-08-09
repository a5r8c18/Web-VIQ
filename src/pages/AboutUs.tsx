import { motion } from 'framer-motion';
import { Target, Briefcase, Mail } from 'lucide-react';
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

const team = [
  {
    name: 'Alex Rodriguez',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Fifteen years in digital transformation and business strategy.',
  },
  {
    name: 'Sarah Chen',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    bio: 'Scalable architectures and the day-to-day engineering habit.',
  },
  {
    name: 'Marcus Johnson',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Design that earns recognition instead of asking for it.',
  },
  {
    name: 'Emily Park',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Growth programs built on measurement, not guesswork.',
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-28 relative z-10 bg-[var(--color-bg-primary)]">
      <div className="container-custom">
        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="eyebrow-brass mb-5"
            >
              — ABOUT US
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-3xl"
            >
              A team that treats your build{" "}
              <span className="text-[#d8a455] font-medium italic">like an instrument.</span>
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
              We keep the client inside the loop — because a project steered
              together doesn't get lost in translation.
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)] mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            className="bg-background-secondary p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#d8a455]" />
              <span className="eyebrow-brass">Mission</span>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              To equip businesses with digital systems that drive growth and hold
              up under real use — turning a complex problem into clean, working
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={1}
            className="bg-background-secondary p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-[#d8a455]" />
              <span className="eyebrow-brass">Approach</span>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Discipline over decoration. We test it, measure it, and walk our
              clients through every choice — because the brief is their business,
              and the result has to survive contact with the real world.
            </p>
          </motion.div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="The hands on the work"
            title="Leadership"
            description="The people who answer when you call."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)] border border-[var(--color-border-default)]">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={index}
                className="group bg-background-secondary"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 border-t border-[var(--color-border-default)]">
                  <h3 className="font-display font-bold text-lg text-[var(--color-text-primary)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#d8a455]">
                    {member.position}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
          <div className="relative p-8 sm:p-12">
            <p className="eyebrow-brass mb-4">NEXT STEP</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Ready to build together?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-9 max-w-2xl">
              Whether it's a partner for the next project or a seat on the team,
              we'd like to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">
                Get in touch <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;