import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Años de Experiencia', icon: Award },
    { number: '500+', label: 'Proyectos Completados', icon: Target },
    { number: '98%', label: 'Clientes Satisfechos', icon: Users },
    { number: '24/7', label: 'Soporte Técnico', icon: TrendingUp }
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Siempre a la vanguardia de las últimas tecnologías y tendencias digitales.',
      icon: '🚀'
    },
    {
      title: 'Calidad',
      description: 'Compromiso con la excelencia en cada proyecto que emprendemos.',
      icon: '⭐'
    },
    {
      title: 'Compromiso',
      description: 'Dedicación total al éxito de nuestros clientes y sus proyectos.',
      icon: '🤝'
    },
    {
      title: 'Creatividad',
      description: 'Soluciones originales y personalizadas para cada necesidad.',
      icon: '💡'
    }
  ];

  return (
    <section className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
            Sobre VIQ Systems
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Somos un equipo apasionado de profesionales dedicados a transformar ideas en soluciones digitales excepcionales que impulsan el crecimiento empresarial.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-2">{stat.number}</div>
              <div className="text-[var(--color-text-secondary)] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Nuestra Misión</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Empoderar a las empresas con soluciones digitales innovadoras que maximicen su potencial y las posicionen como líderes en sus industrias. Creemos en la tecnología como catalizador del crecimiento y la transformación.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Nuestra Visión</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Convertirnos en el socio estratégico digital preferido para empresas que buscan excelencia, innovación y resultados medibles. Aspiramos a ser reconocidos por nuestra capacidad de transformar desafíos en oportunidades.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-primary)]">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">{value.title}</h4>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-500/10 rounded-2xl p-12 border border-amber-500/20">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos digitales con soluciones personalizadas y resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contáctanos
              </a>
              <a href="/projects" className="btn-secondary">
                Ver Proyectos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
