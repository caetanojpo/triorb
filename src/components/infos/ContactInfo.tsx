"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const ContactInfo: React.FC = () => {
    return (
        <motion.div
            className="mt-8 pt-6 border-t border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
            <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Contato</p>
                <p className="font-semibold text-gray-800">(18) 3421-1000</p>
            </div>
        </motion.div>
    );
};