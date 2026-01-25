import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Award, Zap, Globe, Code, Briefcase, GraduationCap, MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Founder',
      image: '/images/team/alex.jpg',
      bio: 'Visionary leader with 15+ years in digital transformation and business strategy.',
      skills: ['Strategic Planning', 'Business Development', 'Innovation'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Tech expert specializing in scalable architectures and cutting-edge solutions.',
      skills: ['Cloud Architecture', 'AI/ML', 'System Design'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Johnson',
      position: 'Creative Director',
      image: '/images/team/marcus.jpg',
      bio: 'Award-winning designer passionate about creating memorable brand experiences.',
      skills: ['Brand Design', 'UX/UI', 'Creative Strategy'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Park',
      position: 'Marketing Director',
      image: '/images/team/emily.jpg',
      bio: 'Data-driven marketing specialist with proven track record in growth strategies.',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy'],
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We are driven by a relentless pursuit of excellence in everything we do.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Our clients success is our success. We build partnerships, not just projects.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring diverse experiences and global insights to every challenge.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-24">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 rounded-full mb-8 border border-amber-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse" />
            <Users className="w-5 h-5 text-amber-400 mr-3" />
            <span className="text-sm text-amber-300 font-semibold tracking-wide uppercase">About VIQ Systems</span>
          </div>
          
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          </div>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed font-light">
            We are a diverse team of passionate professionals dedicated to transforming ideas into digital excellence.
          </p>
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

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our Core Values</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
                <div className="relative bg-[var(--color-bg-secondary)] border border-amber-500/20 rounded-3xl overflow-hidden hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-2">
                  {/* Placeholder Image */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-amber-400/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
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
                    <div className="flex space-x-3">
                      <a 
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-amber-500/20 hover:text-amber-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className="w-8 h-8 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-amber-500/20 hover:text-amber-500 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
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
          className="text-center"
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
    </div>
  );
};

export default AboutUs;
