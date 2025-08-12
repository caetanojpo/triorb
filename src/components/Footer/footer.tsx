'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const services = [
    'Tour Virtual 360°',
    'Realidade Virtual',
    'Planta Humanizada 3D',
    'Imagem 3D',
    'Vídeo Tour Virtual',
    'Scanner Imobiliário',
  ];

  const quickLinks = [
    // { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
    { name: 'Depoimentos', href: '#testimonials' },
    // { name: 'Blog', href: '#blog' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'http://instagram.com/triorb3d', color: 'hover:text-secondary-200' },
  ];

  return (
    <footer
      id={'footer'}
      className="bg-gradient-to-br from-gray-900 via-primary-500 to-support-600 text-white relative overflow-hidden font-poppins"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg relative ">
                  <Image src={'/logo.png'} alt={''} width={45} height={45} />
                </div>
                <span className="text-3xl font-bold">TRIORB</span>
              </motion.div>

              <p className="text-blue-100 leading-relaxed">
                Tecnologia e Arquitetura em suas mãos. Transformamos ideias em realidade através de
                soluções 3D imersivas e inovadoras.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={'_blank'}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Awards/Certifications */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-sm text-secondary-200">
                  <Globe size={16} />
                  <span>Certificado ISO 9001:2015</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-support-350 rounded-full"></div>
                <span>Nossos Serviços</span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#services"
                      className="text-secondary-200 hover:text-white transition-colors flex items-center space-x-3 group py-1"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 from-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <span>{service}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-support-350 rounded-full"></div>
                <span>Links Rápidos</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-secondary-200 hover:text-white transition-colors flex items-center space-x-3 group py-1"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />

                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-support-350 rounded-full"></div>
                <span>Contato</span>
              </h3>

              <div className="space-y-4">
                <motion.div
                  className=" rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Link
                    href={'https://wa.me/5518996138186'}
                    target={'_blank'}
                    className={'flex items-start space-x-3 p-3'}
                  >
                    <Phone size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div className="text-blue-100">
                      <p className="font-semibold text-white">+55 (18) 99613-8186</p>
                      <div className="flex items-center space-x-1 text-sm">
                        <Clock size={12} />
                        <span>Segunda à Sexta, 8h às 18h</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Link
                    href={'mailto:comercial@triorb.com.br'}
                    target={'_blank'}
                    className={'flex items-start space-x-3 p-3'}
                  >
                    <Mail size={20} className="text-secondary-400 mt-1 flex-shrink-0" />
                    <div className="text-blue-100">
                      <p className="font-semibold text-white">comercial@triorb.com.br</p>
                      <p className="text-sm">Resposta em até 24h</p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Link
                    href={'https://maps.app.goo.gl/tRk5iQEg8rgX3BMHA'}
                    target={'_blank'}
                    className={'flex items-start space-x-3 p-3'}
                  >
                    <MapPin size={20} className="text-support-300 mt-1 flex-shrink-0" />
                    <div className="text-blue-100">
                      <p className="font-semibold text-white">Rua João Hipólito</p>
                      <p>Vila São Jorge, São Paulo - SP</p>
                      <p className="text-sm">CEP: 19801-190</p>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="cursor-pointer bg-gradient-to-r from-secondary-500 to-support-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-full justify-center group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={'https://wa.me/5518996138186'}
                  target={'_blank'}
                  className={' px-6 py-3  flex items-center space-x-2 w-full justify-center group'}
                >
                  <span>Iniciar Projeto</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-200 text-sm flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>© 2025 TRIORB - Tecnologia & Arquitetura. Todos os direitos reservados.</span>
            </div>

            {/*<div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">*/}
            {/*  {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map((link, index) => (*/}
            {/*    <motion.a*/}
            {/*      key={index}*/}
            {/*      href="#"*/}
            {/*      className="text-secondary-200 hover:text-white transition-colors"*/}
            {/*      whileHover={{ y: -2 }}*/}
            {/*    >*/}
            {/*      {link}*/}
            {/*    </motion.a>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
