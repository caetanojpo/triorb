import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MapMenu from '@/components/map/MapMenu';

const RenascenceMap = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col gap-8 py-4 xl:py-16 overflow-hidden">
      <motion.div
        className="w-full h-auto flex flex-col items-center justify-center px-4 xl:px-24 text-center text-renascence gap-2 my-2 xl:my-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl lg:text-5xl xl:text-6xl font-medium"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Renascence II
        </motion.h1>
        <motion.p
          className="text-base xl:text-xl max-w-4xl leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Com o projeto urbanístico integrado com o paisagismo o Renascence II valoriza a
          sustentabilidade e preza pelo cuidado com a natureza. Levando a tradição do primeiro
          condomínio adiante.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex-1 min-h-screen xl:h-4/5 w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapMenu />
      </motion.div>
      <motion.div
        className="hidden xl:block absolute w-24 h-24 -bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ rotate: 45, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/renascence/folha-green.png"
          alt="Folha decorativa"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default RenascenceMap;
