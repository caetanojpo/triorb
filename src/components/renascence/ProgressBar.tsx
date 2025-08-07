import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="w-1/2 bg-renascence_support h-6 rounded-full overflow-hidden flex py-1 px-1">
        <motion.div
          className="bg-renascence rounded-full h-full transition-all duration-500 ease-in-out"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        />
      </div>
      <motion.span
        className="font-medium text-2xl xl:text-3xl min-w-[4rem]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {progress}%
      </motion.span>
    </div>
  );
};
