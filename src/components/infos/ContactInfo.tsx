'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <Link
          className="hover:opacity-80 transition-opacity duration-200 border-b border-transparent hover:border-renascence"
          href={'https://wa.me/5518997655987'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-renascence">18 99765-5987</p>
        </Link>
        <Link
          className="hover:opacity-80 transition-opacity duration-200 border-b border-transparent hover:border-renascence"
          href={'https://duaco.com.br/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-renascence">https://duaco.com.br/</p>
        </Link>
        <Link
          className="hover:opacity-80 transition-opacity duration-200 border-b border-transparent hover:border-renascence"
          href={'http://instagram.com/construtoraduaco'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-renascence">@construtoraduaco</p>
        </Link>
      </div>
    </motion.div>
  );
};
