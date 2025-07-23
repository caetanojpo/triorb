"use client"
import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight, Play} from "lucide-react";


const BannerButton = () => (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-10 lg:gap-4 pt-4"
    >
        <motion.button
            className={`cursor-pointer group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-xl`}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Explorar Projetos</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <motion.button
            className="cursor-pointer group bg-white/80 backdrop-blur-xl text-gray-900 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.95)"
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div

            >
                <Play size={20} className="text-blue-600 ml-1" />
            </motion.div>
            <span>Ver Demonstração</span>
        </motion.button>
    </motion.div>
);

export default BannerButton;