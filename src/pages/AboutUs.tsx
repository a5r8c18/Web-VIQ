import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Briefcase, Mail, TrendingUp } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
      duration: 0.4
    }
  }
};

const AboutUs = () => {
  const team = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in digital transformation and business strategy.',
      skills: ['Strategic Planning', 'Business Development', 'Innovation'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Tech expert specializing in scalable architectures and cutting-edge solutions.',
      skills: ['Cloud Architecture', 'AI/ML', 'System Design'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Johnson',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning designer passionate about creating memorable brand experiences.',
      skills: ['Brand Design', 'UX/UI', 'Creative Strategy'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Park',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Data-driven marketing specialist with proven track record in growth strategies.',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy'],
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const stats = [
    { number: '9+', label: 'Years Experience', icon: Award, description: 'Delivering high-quality technology solutions' },
    { number: '150+', label: 'Projects Delivered', icon: Target, description: 'Across diverse industries' },
    { number: '98%', label: 'Client Satisfaction', icon: Users, description: 'Retention rate' },
    { number: '24/7', label: 'Technical Support', icon: TrendingUp, description: 'Always available' }
  ];

  return (
    <><FloatingParticles /><div className="min-h-screen pt-24 relative z-10">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -mx-8 -mt-24 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-amber-500/10 to-transparent z-10" />
            <img
              src="/images/6zTkyqP0n_2000x1500__1.jpg"
              alt="Team working together"
              className="w-full h-full object-cover object-center scale-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />
          </div>

          {/* Content */}
          <div className="relative z-30 pt-40 pb-16">
            <div className="relative mb-12">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent drop-shadow-lg inline-block">
                  {"Meet Our Team".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">
              We are a diverse team of passionate professionals dedicated to transforming ideas into digital excellence.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Technical Expertise</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
              Our team stays up-to-date with the latest technologies and best practices to deliver cutting-edge solutions that future-proof your online presence.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] border border-amber-500/20 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent rounded-3xl opacity-50" />
            <div className="relative z-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Collaborative Approach</h3>
                <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
                  We view our clients as partners and involve them throughout the development process to ensure alignment and transparency every step of the way
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-primary)] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center">Our Mission</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-center">
                  To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences. We strive to be the catalyst for digital transformation, turning complex challenges into opportunities for excellence.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 mx-auto">
                  <Eye className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center">Our Vision</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-center">
                  To be a global leader in digital innovation, setting new standards for excellence and creativity. We envision a future where technology seamlessly enhances human potential, and businesses thrive through digital empowerment and sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Leadership Team</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">The experts behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <div className="relative bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl overflow-hidden hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Team Member Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{member.name}</h3>
                    <p className="text-amber-400 font-medium mb-3">{member.position}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3 mt-auto">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-text-secondary)] hover:bg-amber-500/20 hover:text-amber-500 transition-all duration-300"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-text-secondary)] hover:bg-amber-500/20 hover:text-amber-500 transition-all duration-300"
                      >
                        <i className="fab fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-20"
        >
          <div className="relative bg-gradient-to-r from-amber-600/10 via-amber-500/10 to-amber-400/10 rounded-3xl p-12 border border-amber-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
                Ready to Join Our Journey?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                Whether you're looking to partner with us or join our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Get In Touch
                  <Mail className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-[var(--color-bg-secondary)] border border-amber-500/20 text-[var(--color-text-primary)] font-semibold rounded-xl hover:border-amber-400/40 transition-all duration-300"
                >
                  Join Our Team
                  <Briefcase className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div></>
  );
};

export default AboutUs;