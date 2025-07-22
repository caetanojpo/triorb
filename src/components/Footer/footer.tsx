"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Building2 } from 'lucide-react';

const Footer = () => {
    const services = [
        'Tour Virtual 360°',
        'Realidade Virtual',
        'Planta Humanizada 3D',
        'Imagem 3D',
        'Vídeo Tour Virtual',
        'Scanner Imobiliário'
    ];

    const quickLinks = [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
        { name: 'Blog', href: '#blog' },
        { name: 'Carreiras', href: '#careers' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Company Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                                    <Building2 size={24} className="text-white" />
                                </div>
                                <span className="text-3xl font-bold">TRÍORB</span>
                            </div>

                            <p className="text-blue-100 leading-relaxed">
                                Tecnologia e Arquitetura em suas mãos. Transformamos ideias em realidade através de soluções 3D imersivas e inovadoras para o mercado imobiliário e da construção.
                            </p>

                            <div className="flex space-x-4">
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Instagram size={20} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Linkedin size={20} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Facebook size={20} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Nossos Serviços</h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <motion.a
                                            href="#services"
                                            className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{service}</span>
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <motion.a
                                            href={link.href}
                                            className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{link.name}</span>
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Contato</h3>
                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-start space-x-3"
                                    whileHover={{ x: 5 }}
                                >
                                    <Phone size={20} className="text-blue-300 mt-1 flex-shrink-0" />
                                    <div className="text-blue-100">
                                        <p className="font-medium">+55 (11) 9999-9999</p>
                                        <p className="text-sm">Segunda à Sexta, 8h às 18h</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start space-x-3"
                                    whileHover={{ x: 5 }}
                                >
                                    <Mail size={20} className="text-blue-300 mt-1 flex-shrink-0" />
                                    <div className="text-blue-100">
                                        <p className="font-medium">contato@triorb.com.br</p>
                                        <p className="text-sm">Resposta em até 24h</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start space-x-3"
                                    whileHover={{ x: 5 }}
                                >
                                    <MapPin size={20} className="text-blue-300 mt-1 flex-shrink-0" />
                                    <div className="text-blue-100">
                                        <p className="font-medium">Rua da Inovação, 123</p>
                                        <p>Vila Madalena, São Paulo - SP</p>
                                        <p className="text-sm">CEP: 05434-070</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 w-full justify-center"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Iniciar Projeto</span>
                                <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-700/30 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-blue-200 text-sm">
                            © 2025 TRÍORB - Tecnologia & Arquitetura. Todos os direitos reservados.
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                            <motion.a
                                href="#"
                                className="text-blue-200 hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                Política de Privacidade
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-200 hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                Termos de Uso
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-200 hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                Cookies
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;