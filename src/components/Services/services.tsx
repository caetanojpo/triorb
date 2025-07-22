"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RotateCcw,
    Eye,
    Building2,
    Box,
    Play,
    Scan,
    ArrowRight,
    Sparkles,
    Zap,
    MousePointer2
} from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection/animetedSection";

const Services = () => {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [selectedService, setSelectedService] = useState(0);

    const services = [
        {
            icon: RotateCcw,
            title: 'TOUR VIRTUAL 360°',
            description: 'Experiência interativa completa onde o usuário navega por ambientes digitais com visão panorâmica total.',
            longDescription: 'Navegue livremente por todos os cômodos e espaços do projeto com controle total da câmera. Visualize cada detalhe, textura e acabamento como se estivesse fisicamente presente no local.',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'from-blue-50 to-blue-100',
            delay: 0,
            features: ['Navegação livre 360°', 'Controles intuitivos', 'Qualidade 4K', 'Compatível VR']
        },
        {
            icon: Eye,
            title: 'REALIDADE VIRTUAL',
            description: 'Tecnologia VR com óculos que cria ambientes digitais totalmente imersivos e realistas.',
            longDescription: 'Mergulhe completamente no projeto usando óculos VR de última geração. Sinta-se verdadeiramente dentro do ambiente com experiência imersiva total.',
            color: 'from-cyan-500 to-cyan-600',
            bgColor: 'from-cyan-50 to-cyan-100',
            delay: 0.1,
            features: ['Imersão total', 'Óculos VR premium', 'Interação natural', 'Experiência realista']
        },
        {
            icon: Building2,
            title: 'PLANTA HUMANIZADA 3D',
            description: 'Representação gráfica realista com acabamentos, móveis, decoração e cores autênticas.',
            longDescription: 'Visualize a planta baixa em três dimensões com todos os móveis, decoração e acabamentos posicionados de forma realista e proporcional.',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'from-purple-50 to-purple-100',
            delay: 0.2,
            features: ['Móveis realistas', 'Acabamentos detalhados', 'Proporções exatas', 'Decoração completa']
        },
        {
            icon: Box,
            title: 'IMAGEM 3D',
            description: 'Representação visual tridimensional que simula profundidade, volume e perspectiva realista.',
            longDescription: 'Renderizações fotorrealistas em alta resolução que capturam cada detalhe do projeto com iluminação natural e materiais autênticos.',
            color: 'from-green-500 to-green-600',
            bgColor: 'from-green-50 to-green-100',
            delay: 0.3,
            features: ['Qualidade fotorrealista', 'Iluminação natural', 'Materiais autênticos', 'Alta resolução']
        },
        {
            icon: Play,
            title: 'VÍDEO TOUR VIRTUAL',
            description: 'Animação em vídeo que simula um passeio completo por ambientes criados em 3D.',
            longDescription: 'Vídeos cinematográficos que conduzem o espectador através de todos os ambientes do projeto com transições suaves e ângulos estratégicos.',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'from-orange-50 to-orange-100',
            delay: 0.4,
            features: ['Qualidade cinematográfica', 'Transições suaves', 'Ângulos estratégicos', 'Narração opcional']
        },
        {
            icon: Scan,
            title: 'SCANNER IMOBILIÁRIO',
            description: 'Tecnologia que digitaliza ambientes reais em alta precisão criando modelos virtuais completos.',
            longDescription: 'Captura digital precisa de ambientes existentes usando tecnologia de escaneamento 3D para criar réplicas virtuais exatas.',
            color: 'from-red-500 to-red-600',
            bgColor: 'from-red-50 to-red-100',
            delay: 0.5,
            features: ['Precisão milimétrica', 'Captura completa', 'Modelo digital exato', 'Tecnologia avançada']
        }
    ];

    return (
        <AnimatedSection id="services" className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20"
                    >
                        <motion.div
                            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <Sparkles size={16} className="text-blue-600" />
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Soluções
                        <motion.span
                            className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text"
                            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            Tecnológicas
                        </motion.span>
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

                {/* Interactive Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Services Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: service.delay }}
                                onHoverStart={() => setHoveredService(index)}
                                onHoverEnd={() => setHoveredService(null)}
                                onClick={() => setSelectedService(index)}
                                className={`group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 cursor-pointer ${
                                    selectedService === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                                }`}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Background Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    initial={false}
                                    animate={{ opacity: hoveredService === index ? 0.1 : 0 }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 360,
                                            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <service.icon size={24} className="text-white" />
                                    </motion.div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <motion.button
                                        className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span>Saiba mais</span>
                                        <ArrowRight size={16} className="transition-transform" />
                                    </motion.button>
                                </div>

                                {/* Hover Effect */}
                                <motion.div
                                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <MousePointer2 size={16} className="text-blue-500" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Selected Service Detail */}
                    <div className="lg:col-span-1">
                        <motion.div
                            className="sticky top-8 bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
                            layout
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedService}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {(() => {
                                        const CurrentIcon = services[selectedService].icon;
                                        return (
                                            <>
                                                <div className="flex items-center space-x-4 mb-6">
                                                    <motion.div
                                                        className={`w-16 h-16 bg-gradient-to-r ${services[selectedService].color} rounded-2xl flex items-center justify-center shadow-lg`}
                                                        whileHover={{rotate: 360}}
                                                        transition={{duration: 0.8}}
                                                    >
                                                        <CurrentIcon size={28} className="text-white"/>
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">
                                                            {services[selectedService].title}
                                                        </h3>
                                                        <div className="flex items-center space-x-1 mt-1">
                                                            <Zap size={14} className="text-yellow-500"/>
                                                            <span
                                                                className="text-sm text-gray-500">Tecnologia Premium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed mb-6">
                                                    {services[selectedService].longDescription}
                                                </p>
                                                <div className="space-y-3 mb-6">
                                                    <h4 className="font-semibold text-gray-900">Características:</h4>
                                                    {services[selectedService].features.map((feature, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-center space-x-3"
                                                            initial={{opacity: 0, x: -20}}
                                                            animate={{opacity: 1, x: 0}}
                                                            transition={{delay: index * 0.1}}
                                                        >
                                                            <div
                                                                className={`w-2 h-2 bg-gradient-to-r ${services[selectedService].color} rounded-full`}/>
                                                            <span className="text-sm text-gray-600">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                <motion.button
                                                    className={`w-full bg-gradient-to-r ${services[selectedService].color} text-white py-3 rounded-xl font-semibold shadow-lg`}
                                                    whileHover={{
                                                        scale: 1.02,
                                                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                                                    }}
                                                    whileTap={{scale: 0.98}}
                                                >
                                                    Solicitar Orçamento
                                                </motion.button>
                                            </>
                                    );
                                    })()}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <motion.button
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-12 py-4 rounded-2xl font-semibold shadow-xl relative overflow-hidden group"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">Ver Todos os Serviços</span>
                    </motion.button>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Services;