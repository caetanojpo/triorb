import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

export const RenascenceHeader = () => {
  const isMobile = useIsMobile();
  return (
    <motion.header
      className="relative h-[30vh] xl:h-[60vh] w-full bg-renascence flex justify-end items-center flex-col overflow-hidden font-poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-1/2 h-1/5 xl:w-[8%] xl:h-[8%] -left-[10vw] xl:left-0 xl:right-[91vw] top-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/renascence/duaco.png"
          alt="Logo Duaco"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute w-full h-full xl:h-1/2 left-2 -top-5 xl:-top-8"
        initial={{ scale: isMobile ? 0.5 : 0.8, opacity: 0 }}
        animate={{ scale: isMobile ? 0.8 : 1.0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="/renascence/logo.png"
          alt="Logo Renascence"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div
        className="block absolute w-full h-4/5"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image
          src="/renascence/fachada.png"
          alt="Fachada Renascence"
          fill
          className="object-bottom object-cover"
          priority
        />
      </motion.div>
      <motion.div
        className="block absolute w-10 h-10 xl:w-24 xl:h-24 -bottom-4 xl:-bottom-10 z-10"
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Image
          src="/renascence/folha-white.png"
          alt="Folha decorativa"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.header>
  );
};
