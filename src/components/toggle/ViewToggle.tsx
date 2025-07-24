"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Cuboid as Cube } from 'lucide-react';

interface ViewToggleProps {
    is3DView: boolean;
    onToggle: (is3D: boolean) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ is3DView, onToggle }) => {
    return (
        <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <div className="flex items-center space-x-2">
                <motion.button
                    onClick={() => onToggle(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        !is3DView
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ImageIcon className="w-4 h-4 inline mr-1" />
                    2D
                </motion.button>
                <motion.button
                    onClick={() => onToggle(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        is3DView
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Cube className="w-4 h-4 inline mr-1" />
                    3D
                </motion.button>
            </div>
        </motion.div>
    );
};