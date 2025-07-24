"use client"

import React from 'react';
import { motion } from 'framer-motion';

const amenities = ['Portaria', 'Piscina', 'Academia', 'Esportes', 'Salão', 'Bosque'];

export const AmenitiesSection: React.FC = () => {
    return (
        <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ambientes</h2>
            <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity, index) => (
                    <motion.div
                        key={amenity}
                        className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 text-center text-sm font-medium text-gray-700 transition-colors cursor-pointer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {amenity}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};