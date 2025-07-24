"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface ImageIndicatorsProps {
    totalImages: number;
    currentIndex: number;
    onImageSelect: (index: number) => void;
}

export const ImageIndicators: React.FC<ImageIndicatorsProps> = ({
                                                                    totalImages,
                                                                    currentIndex,
                                                                    onImageSelect
                                                                }) => {
    return (
        <motion.div
            className="flex space-x-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
        >
            {Array.from({ length: totalImages }).map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => onImageSelect(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                />
            ))}
        </motion.div>
    );
};