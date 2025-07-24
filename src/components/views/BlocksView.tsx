"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {Block} from "@/types/types";
import {blockVariants, pageVariants} from "@/utils/animation";

interface BlocksViewProps {
    blocks: Block[];
    onBlockSelect: (block: Block) => void;
}

export const BlocksView: React.FC<BlocksViewProps> = ({ blocks, onBlockSelect }) => {
    return (
        <motion.div
            className="relative w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl overflow-hidden"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-40"></div>
            <div className="relative w-full h-full">
                {/*{blocks.map((block, index) => (*/}
                {/*    <motion.button*/}
                {/*        key={block.id}*/}
                {/*        custom={index}*/}
                {/*        variants={blockVariants}*/}
                {/*        initial="initial"*/}
                {/*        animate="animate"*/}
                {/*        whileHover="hover"*/}
                {/*        whileTap={{ scale: 0.95 }}*/}
                {/*        onClick={() => onBlockSelect(block)}*/}
                {/*        disabled={!block.available}*/}
                {/*        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl border-3 font-bold text-xl transition-all duration-300 shadow-lg ${*/}
                {/*            block.available*/}
                {/*                ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-300 cursor-pointer hover:shadow-2xl'*/}
                {/*                : 'bg-gray-400 text-gray-600 border-gray-300 cursor-not-allowed opacity-50'*/}
                {/*        }`}*/}
                {/*        style={{*/}
                {/*            left: `${block.position.x}%`,*/}
                {/*            top: `${block.position.y}%`,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {block.id}*/}
                {/*    </motion.button>*/}
                {/*))}*/}
            </div>
            <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <h3 className="font-semibold text-gray-800 mb-2">Selecione uma Quadra</h3>
                <p className="text-sm text-gray-600">Clique em uma quadra disponível (verde) para ver os lotes</p>
            </motion.div>
        </motion.div>
    );
};