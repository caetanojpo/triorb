"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, MapPin } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection/animetedSection";


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Residencial Modern Plaza',
            location: 'São Paulo, SP',
            image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            category: 'Residencial',
            description: 'Complexo residencial moderno com 200 unidades'
        },
        {
            id: 2,
            title: 'Centro Comercial Future',
            location: 'Rio de Janeiro, RJ',
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            category: 'Comercial',
            description: 'Centro comercial com conceito sustentável'
        },
        {
            id: 3,
            title: 'Torre Corporativa Tech',
            location: 'Brasília, DF',
            image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            category: 'Corporativo',
            description: 'Edifício corporativo inteligente'
        },
        {
            id: 4,
            title: 'Condomínio Green Valley',
            location: 'Curitiba, PR',
            image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            category: 'Residencial',
            description: 'Condomínio ecológico premium'
        }
    ];

    return (
        <AnimatedSection id="projects" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 mb-8 shadow-lg"
                    >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-purple-600 font-medium text-sm uppercase tracking-wider">Nossos Projetos</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Projetos que
                        <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Transformamos
            </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Conheça alguns dos projetos que ganharam vida através de nossas soluções tecnológicas inovadoras.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category}
                                </div>

                                <motion.button
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                        <Eye size={24} className="text-white" />
                                    </div>
                                </motion.button>
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

                                <motion.button
                                    className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <span>Ver projeto</span>
                                    <ArrowRight size={16} className="transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <motion.button
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Todos os Projetos
                    </motion.button>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;