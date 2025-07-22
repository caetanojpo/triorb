"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
    RotateCcw,
    Eye,
    Building2,
    Box,
    Play,
    Scan,
    ArrowRight
} from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection/animetedSection";

const Services = () => {
    const services = [
        {
            icon: RotateCcw,
            title: 'TOUR VIRTUAL 360°',
            description: 'Experiência interativa completa onde o usuário navega por ambientes digitais com visão panorâmica total.',
            color: 'from-blue-500 to-blue-600',
            delay: 0
        },
        {
            icon: Eye,
            title: 'REALIDADE VIRTUAL',
            description: 'Tecnologia VR com óculos que cria ambientes digitais totalmente imersivos e realistas.',
            color: 'from-cyan-500 to-cyan-600',
            delay: 0.1
        },
        {
            icon: Building2,
            title: 'PLANTA HUMANIZADA 3D',
            description: 'Representação gráfica realista com acabamentos, móveis, decoração e cores autênticas.',
            color: 'from-purple-500 to-purple-600',
            delay: 0.2
        },
        {
            icon: Box,
            title: 'IMAGEM 3D',
            description: 'Representação visual tridimensional que simula profundidade, volume e perspectiva realista.',
            color: 'from-green-500 to-green-600',
            delay: 0.3
        },
        {
            icon: Play,
            title: 'VÍDEO TOUR VIRTUAL',
            description: 'Animação em vídeo que simula um passeio completo por ambientes criados em 3D.',
            color: 'from-orange-500 to-orange-600',
            delay: 0.4
        },
        {
            icon: Scan,
            title: 'SCANNER IMOBILIÁRIO',
            description: 'Tecnologia que digitaliza ambientes reais em alta precisão criando modelos virtuais completos.',
            color: 'from-red-500 to-red-600',
            delay: 0.5
        }
    ];

    return (
        <AnimatedSection id="services" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 w-full flex justify-center items-center">
            <div className="container mx-auto px-6 w-full ">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-2 mb-8"
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Soluções
                        <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Tecnológicas
            </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        A TRÍORB conecta tecnologia, experiência e inovação para que você visualize antes de construir.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: service.delay }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            <motion.div
                                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <service.icon size={28} className="text-white" />
                            </motion.div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <motion.button
                                className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                                whileHover={{ x: 5 }}
                            >
                                <span>Saiba mais</span>
                                <ArrowRight size={16} className="transition-transform" />
                            </motion.button>
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
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Todos os Serviços
                    </motion.button>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Services;