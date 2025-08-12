'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Eye, Filter, MapPin, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection/animetedSection';
import Link from 'next/link';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['Todos', 'Residencial', 'Comercial', 'Corporativo'];

  const projects = [
    {
      id: 1,
      title: 'Residencial Renascence',
      location: 'Assis, SP',
      image: '/renascence/fachada2.png?fit=cover',
      category: 'Residencial',
      description: 'Condomínio residencial moderno de alto padrão',
      year: '2025',
      area: '???m²',
      units: '???',
      status: 'Concluído',
      technologies: ['Tour 360°', 'Video Tour', 'Imagem 3D', 'VR', 'Planta 3D'],
      color: 'from-blue-500 to-blue-600',
      link: '/renascence',
      target: '_self',
    },
    {
      id: 2,
      title: 'Terras de Santo Antônio',
      location: 'Assis, SP',
      image: '/terras.png',
      category: 'Residencial',
      description: 'Complexo residencial moderno de alto padrão',
      year: '2025',
      area: '???m²',
      units: '5',
      status: 'Em andamento',
      technologies: ['Planta 3D', 'Vídeo Tour', 'Imagem 3D'],
      color: 'from-green-500 to-green-600',
      link: 'https://youtu.be/kwD-hLECxVY?si=YJy5UrTAIDvuxFrg',
      target: '_blank',
    },
    // {
    //   id: 3,
    //   title: 'Torre Corporativa Tech',
    //   location: 'Brasília, DF',
    //   image:
    //     'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   category: 'Corporativo',
    //   description: 'Edifício corporativo inteligente',
    //   year: '2023',
    //   area: '30.000m²',
    //   units: '40',
    //   status: 'Concluído',
    //   technologies: ['VR', 'Tour 360°', 'Scanner 3D'],
    //   color: 'from-purple-500 to-purple-600',
    // },
    // {
    //   id: 4,
    //   title: 'Condomínio Green Valley',
    //   location: 'Curitiba, PR',
    //   image:
    //     'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   category: 'Residencial',
    //   description: 'Condomínio ecológico premium',
    //   year: '2024',
    //   area: '50.000m²',
    //   units: '300',
    //   status: 'Em andamento',
    //   technologies: ['Planta 3D', 'Imagem 3D', 'Vídeo Tour'],
    //   color: 'from-emerald-500 to-emerald-600',
    // },
    // {
    //   id: 5,
    //   title: 'Shopping Experience',
    //   location: 'Belo Horizonte, MG',
    //   image:
    //     'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   category: 'Comercial',
    //   description: 'Shopping center de nova geração',
    //   year: '2023',
    //   area: '80.000m²',
    //   units: '250',
    //   status: 'Concluído',
    //   technologies: ['Tour 360°', 'VR', 'Scanner 3D'],
    //   color: 'from-orange-500 to-orange-600',
    // },
    // {
    //   id: 6,
    //   title: 'Corporate Hub',
    //   location: 'Porto Alegre, RS',
    //   image:
    //     'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   category: 'Corporativo',
    //   description: 'Hub corporativo sustentável',
    //   year: '2024',
    //   area: '20.000m²',
    //   units: '60',
    //   status: 'Em andamento',
    //   technologies: ['VR', 'Planta 3D', 'Imagem 3D'],
    //   color: 'from-cyan-500 to-cyan-600',
    // },
  ];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <AnimatedSection
      id="projects"
      className="py-32 bg-dark  bg-gradient-to-br from-primary-700 via-support-600 to-gray-900 relative overflow-hidden font-poppins"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[15dvh] left-[10dvw] w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 0.5, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 0.5, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Projetos que
            <motion.span
              className="block text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Transformamos
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            Conheça alguns dos projetos que ganharam vida através de nossas soluções tecnológicas
            inovadoras.
          </motion.p>
        </div>

        {/* Interactive Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-xl text-gray-700 hover:bg-white border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2 ">
                <Filter size={16} />
                <span>{category}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Concluído'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-orange-500/90 text-white'
                    }`}
                  >
                    {project.status}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>

                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: hoveredProject === project.id ? 1 : 0.8 }}
                  >
                    <div className="flex space-x-3">
                      <Link href={project.link} target={project.target}>
                        <motion.button
                          className="cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye size={20} />
                        </motion.button>
                      </Link>
                      {/*<motion.button*/}
                      {/*  className="cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"*/}
                      {/*  whileHover={{ scale: 1.1 }}*/}
                      {/*  whileTap={{ scale: 0.9 }}*/}
                      {/*>*/}
                      {/*  <Search size={20} />*/}
                      {/*</motion.button>*/}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-gray-500 mb-3">
                    <MapPin size={14} />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{project.area}</div>
                      <div className="text-xs text-gray-500">Área</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{project.units}</div>
                      <div className="text-xs text-gray-500">Unidades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{project.year}</div>
                      <div className="text-xs text-gray-500">Ano</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link} target={project.target}>
                    <motion.button
                      className="cursor-pointer w-full text-blue-600 font-semibold flex items-center justify-center space-x-2 group-hover:space-x-3 transition-all py-2"
                      whileHover={{ x: 5 }}
                    >
                      <span>Ver projeto completo</span>
                      <ArrowRight size={16} className="transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center "
        >
          <Link href={'/renascence'} target={'_self'}>
            <motion.button
              className="cursor-pointer bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white px-12 py-4 rounded-2xl font-semibold shadow-xl relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center space-x-2">
                <span>Ver Projeto mais Recente</span>
                <Users size={20} />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
