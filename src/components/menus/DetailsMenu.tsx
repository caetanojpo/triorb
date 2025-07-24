"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, Clock, Home } from 'lucide-react';
import {Block, Lot, LotImage} from "@/types/types";

interface DetailsMenuProps {
    selectedBlock: Block;
    selectedLot: Lot;
    lotImages: LotImage[];
    currentImageIndex: number;
    onImageSelect: (index: number) => void;
    onBack: () => void;
}

export const DetailsMenu: React.FC<DetailsMenuProps> = ({
                                                            selectedBlock,
                                                            selectedLot,
                                                            lotImages,
                                                            currentImageIndex,
                                                            onImageSelect,
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
                <h2 className="text-lg font-semibold text-gray-800">
                    Lote {selectedLot.number}
                </h2>
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

            <div className="space-y-4">
                {lotImages.map((image, index) => (
                    <motion.button
                        key={image.id}
                        onClick={() => onImageSelect(index)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                            index === currentImageIndex
                                ? 'bg-blue-50 border-2 border-blue-200'
                                : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                        }`}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="font-semibold text-gray-800 mb-1">{image.title}</div>
                        <div className="text-sm text-gray-600">{image.description}</div>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            {image.id.includes('morning') ? (
                                <><Calendar className="w-3 h-3" /><span>Manhã</span></>
                            ) : (
                                <><Clock className="w-3 h-3" /><span>Tarde</span></>
                            )}
                            {image.id.includes('house') && (
                                <><Home className="w-3 h-3" /><span>Com Casa</span></>
                            )}
                        </div>
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="mt-6 p-4 bg-emerald-50 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <h3 className="font-semibold text-emerald-800 mb-2">Informações do Lote</h3>
                <div className="space-y-1 text-sm text-emerald-700">
                    <div>Quadra: {selectedBlock.id}</div>
                    <div>Lote: {selectedLot.number}</div>
                    <div>Status: Disponível</div>
                    <div>Área: 300m²</div>
                </div>
            </motion.div>
        </motion.div>
    );
};