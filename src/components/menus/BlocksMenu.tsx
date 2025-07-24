"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {Block} from "@/types/types";

interface BlocksMenuProps {
    blocks: Block[];
    onBlockSelect: (block: Block) => void;
}

export const BlocksMenu: React.FC<BlocksMenuProps> = ({ blocks, onBlockSelect }) => {
    const availableBlocks = blocks.filter(block => block.available);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quadras Disponíveis</h2>
            <div className="grid grid-cols-3 gap-3">
                {availableBlocks.map((block, index) => (
                    <motion.button
                        key={block.id}
                        onClick={() => onBlockSelect(block)}
                        className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-4 text-center transition-all duration-200"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="font-bold text-emerald-700 text-lg">{block.id}</div>
                        <div className="text-xs text-emerald-600 mt-1">Disponível</div>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};