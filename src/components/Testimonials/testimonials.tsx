"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User, ChevronLeft, ChevronRight, Play, Award } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection/animetedSection";


const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "CRISTIANO",
            company: "EMPRESA ROCKSTAR",
            role: "CEO & Fundador",
            rating: 5,
            text: "O projeto 3D ficou simplesmente incrível. Dá para ver o cuidado, o realismo e o nível de detalhamento em cada parte, superou minhas expectativas — é claro que eu já esperava algo bom. Obrigado por transformar minha casa em algo visual e impactante. Com certeza esse material vai fazer toda a diferença na apresentação do projeto.",
            projectType: "Residencial Premium",
            videoThumbnail: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            avatar: "CR"
        },
        {
            id: 2,
            name: "MARINA SILVA",
            company: "CONSTRUTORA MODERNA",
            role: "Diretora de Projetos",
            rating: 5,
            text: "A TRÍORB revolucionou nossa forma de apresentar projetos aos clientes. O tour virtual 360° permitiu que nossos compradores visualizassem completamente o imóvel antes mesmo da construção começar. Isso aumentou nossas vendas em 40% no último trimestre.",
            projectType: "Complexo Comercial",
            videoThumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            avatar: "MS"
        },
        {
            id: 3,
            name: "RICARDO SANTOS",
            company: "ARQUITETURA INOVADORA",
            role: "Arquiteto Principal",
            rating: 5,
            text: "Como arquiteto, sempre busquei formas de mostrar minhas ideias de maneira mais clara aos clientes. A tecnologia de realidade virtual da TRÍORB me permitiu criar experiências únicas, onde os clientes literalmente caminham dentro dos projetos que criei.",
            projectType: "Residência de Luxo",
            videoThumbnail: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            avatar: "RS"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentTestimonial];

    return (
        <AnimatedSection id={"testimonials"} className="py-32 bg-gradient-to-br from-white via-gray-50 to-secondary-100 overflow-hidden text-white" >
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold mb-6 text-text"
                    >
                        Experiências
                        <span className="block text-secondary-500 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Transformadoras
            </span>
                    </motion.h2>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Video/Image Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src={current.videoThumbnail}
                                        alt={`Projeto ${current.projectType}`}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Play Button */}
                                    <motion.button
                                        className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                                            <Play size={32} className="text-white ml-1" />
                                        </div>
                                    </motion.button>

                                    {/* Project Type Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                                        {current.projectType}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating Stats */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-support-500/20 backdrop-blur-sm rounded-2xl p-6 border border-support-500/20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center space-x-3">
                                    <Award className="text-yellow-400" size={24} />
                                    <div>
                                        <div className="text-lg font-bold">98%</div>
                                        <div className="text-xs text-gray-300">Satisfação</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Testimonial Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    {/* Quote Icon */}
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-support-400 rounded-2xl flex items-center justify-center">
                                        <Quote size={28} />
                                    </div>

                                    {/* Rating */}
                                    <div className="flex space-x-1">
                                        {[...Array(current.rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, rotate: -180 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                            >
                                                <Star size={24} className="text-yellow-400 fill-current" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote className="text-lg lg:text-xl leading-relaxed font-medium text-text">
                                        &#34;{current.text}&#34;
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{current.avatar}</span>
                                        </div>
                                        <div>
                                            <div className="text-xl text-primary-500 font-bold">{current.name}</div>
                                            <div className="text-primary-500 font-semibold">{current.company}</div>
                                            <div className="text-support-250 text-sm">{current.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="flex items-center justify-between pt-8">
                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === currentTestimonial
                                                    ? 'bg-primary-500 w-8'
                                                    : 'bg-text/30 hover:bg-text/50'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <div className="flex space-x-3">
                                    <motion.button
                                        onClick={prevTestimonial}
                                        className="cursor-pointer bg-support-500/20 backdrop-blur-sm text-text p-3 rounded-full hover:bg-support-500/40 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ChevronLeft size={20} />
                                    </motion.button>
                                    <motion.button
                                        onClick={nextTestimonial}
                                        className="cursor-pointer  bg-support-500/20 backdrop-blur-sm text-text p-3 rounded-full hover:bg-support-500/40 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ChevronRight size={20} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Testimonials;