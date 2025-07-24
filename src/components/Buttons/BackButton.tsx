"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
    onClick: () => void;
    className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className = '' }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 ${className}`}
            whileHover={{ scale: 1.1, rotate: -90 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
        </motion.button>
    );
};