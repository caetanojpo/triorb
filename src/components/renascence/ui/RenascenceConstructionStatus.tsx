import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProgressBar } from '@/components/renascence/ProgressBar';

export const RenascenceConstructionStatus = () => {
  const progress = 5;

  return (
    <section className="relative flex flex-col xl:flex-row gap-8 bg-renascence_support w-full min-h-screen xl:pl-10 py-4 xl:py-20 justify-between overflow-hidden font-poppins">
      <motion.div
        className="w-full xl:w-[65%] h-full flex"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full min-h-[65vh] relative">
          <Image src="/renascence/obras.JPEG" alt="Status da obra" fill className="object-cover" />
        </div>
      </motion.div>
      <motion.div
        className="w-full xl:w-[30%] h-full min-h-[65vh] bg-renascence xl:rounded-3xl p-6 xl:p-10 text-renascence_support"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProgressBar progress={progress} />
        <motion.div
          className="flex flex-col mt-8 px-2 xl:px-10 space-y-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center space-y-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-black text-2xl xl:text-4xl">OBRA EM FASE I</h3>
            <h4 className="text-lg xl:text-xl">INFRAESTRUTURA URBANA</h4>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <ul className="flex flex-col gap-2 text-sm xl:text-base">
              {[
                'Terraplanagem',
                'Drenagem Pluvial',
                'Água e Esgoto',
                'Pavimentação',
                'Rede Elétrica',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="text-center font-black space-y-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg">ESTIMATIVA DE ENTREGA</h4>
            <h5 className="text-xl">15/11/2025</h5>
          </motion.div>
          <motion.div
            className="text-center text-sm opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
          >
            <span>Atualizado em 06/08/2025</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
