'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="mt-8 pt-6 border-t border-gray-200 font-poppins"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="text-center">
        <p className="text-sm font-bold text-renascence mb-2">Contato</p>
        <p className=" text-renascence"> Vinicius de Oliveira</p>
        <p className=" text-renascence">(18) 99705-1428</p>
        <p className=" text-renascence">vinicius@duaco.com.br</p>
      </div>
    </motion.div>
  );
};
