import React from 'react';
import { Areas } from '@/app/renascence/utils';
import { motion } from 'framer-motion';

interface AreaTabProps {
  area: Areas;
  isActive: boolean;
  onClick: () => void;
}

export const RenascenceAreaTab: React.FC<AreaTabProps> = ({ area, isActive, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      className={`cursor-pointer border-b-2 transition-colors duration-200 ${
        isActive ? 'border-renascence_support' : 'border-transparent'
      } hover:border-renascence_support`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        className="text-2xl 2xl:text-3xl py-2"
        animate={{ color: isActive ? 'var(--renascence-support)' : 'inherit' }}
        transition={{ duration: 0.2 }}
      >
        {area.title}
      </motion.h2>
    </motion.li>
  );
};
