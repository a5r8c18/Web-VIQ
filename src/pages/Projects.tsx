import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción breve del primer proyecto',
      image: '/images/projects/proyect-1/cover.jpg',
      fullImage: '/images/projects/proyect-1/full.jpg',
      category: 'Desarrollo Web'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción breve del segundo proyecto',
      image: '/images/projects/proyect-2/cover.jpg',
      category: 'Marketing Digital'
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción breve del tercer proyecto',
      image: '/images/projects/proyect-3/cover.jpg',
      fullImage: '/images/projects/proyect-3/full.jpg',
      category: 'Desarrollo Web'
    },
    {
      id: 4,
      title: 'Proyecto 4',
      description: 'Descripción breve del cuarto proyecto',
      image: '/images/projects/proyect-4/cover.jpg',
      category: 'Branding'
    },
    {
      id: 5,
      title: 'Proyecto 5',
      description: 'Descripción breve del quinto proyecto',
      image: '/images/projects/proyect-5/cover.jpg',
      category: 'Software a Medida'
    },
    {
      id: 6,
      title: 'Proyecto 6',
      description: 'Descripción breve del sexto proyecto',
      image: '/images/projects/proyect-6/cover.jpg',
      fullImage: '/images/projects/proyect-6/full.jpg',
      category: 'Marketing Digital'
    },
    {
      id: 7,
      title: 'Proyecto 7',
      description: 'Descripción breve del séptimo proyecto',
      image: '/images/projects/proyect-7/cover.jpg',
      fullImage: '/images/projects/proyect-7/full.jpg',
      category: 'Desarrollo Web'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
            Nuestros Proyectos
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Descubre algunos de los trabajos más destacados que hemos desarrollado para nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)] rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex space-x-3">
                    {project.fullImage && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        <Eye className="w-4 h-4" />
                        <span>Ver más</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Visitar</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
