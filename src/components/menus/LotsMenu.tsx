"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import {Block, Lot} from "@/types/types";

interface LotsMenuProps {
    selectedBlock: Block;
    lots: Lot[];
    onLotSelect: (lot: Lot) => void;
    onBack: () => void;
}

export const LotsMenu: React.FC<LotsMenuProps> = ({
                                                      selectedBlock,
                                                      lots,
                                                      onLotSelect,
                                                      onBack
                                                  }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Quadra {selectedBlock.id}</h2>
                <motion.button
                    onClick={onBack}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1"
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Voltar</span>
                </motion.button>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {lots.map((lot, index) => (
                    <motion.button
                        key={lot.id}
                        onClick={() => onLotSelect(lot)}
                        disabled={!lot.available}
                        className={`aspect-square rounded-lg p-2 text-center text-sm font-semibold transition-all duration-200 ${
                            lot.available
                                ? 'bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 text-emerald-700 cursor-pointer'
                                : 'bg-red-50 border-2 border-red-200 text-red-400 cursor-not-allowed opacity-60'
                        }`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.3 }}
                        whileHover={lot.available ? { scale: 1.1, rotate: 5 } : {}}
                        whileTap={lot.available ? { scale: 0.95 } : {}}
                    >
                        {lot.number}
                    </motion.button>
                ))}
            </div>
            <motion.div
                className="mt-6 p-4 bg-gray-50 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span>Disponível</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span>Vendido</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};