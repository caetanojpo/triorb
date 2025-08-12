'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const BannerButton = () => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="flex flex-col sm:flex-row gap-10 lg:gap-4 pt-2 font-poppins font-bold"
  >
    <motion.button
      className={`cursor-pointer group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-xl`}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={'/#projects'} className={'flex items-center space-x-3 justify-center'}>
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        <span className="relative z-10 text-[0.9rem]">Explorar Projetos</span>
        <ArrowRight
          size={18}
          className="relative z-10 group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </motion.button>

    <motion.button
      className="cursor-pointer group bg-white/80 backdrop-blur-xl text-gray-900 px-4 py-4 rounded-2xl font-semibold flex items-center justify-center border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={'/renascence'} className={'flex items-center space-x-3 justify-center'}>
        <span className={'text-[0.9rem]'}>Ver Demonstração</span>
        <motion.div>
          <Play size={18} className="text-blue-600 ml-1" />
        </motion.div>
      </Link>
    </motion.button>
  </motion.div>
);

export default BannerButton;
