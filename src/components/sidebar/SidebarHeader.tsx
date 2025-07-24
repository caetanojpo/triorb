"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const SidebarHeader: React.FC = () => {
    return (
        <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Renascence II</h1>
            <p className="text-gray-600">Loteamento Premium</p>
        </motion.div>
    );
};