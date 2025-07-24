"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, RotateCcw } from 'lucide-react';
import {Block, ImageData, Lot} from "@/types/types";
import {imageVariants, pageVariants} from "@/utils/animation";
import {NavigationButton} from "@/components/Buttons/NavigationButton";
import {ViewToggle} from "@/components/toggle/ViewToggle";
import {BackButton} from "@/components/Buttons/BackButton";
import {ImageIndicators} from "@/components/image/ImageIndicators";

interface LotDetailsViewProps {
    selectedLot: Lot;
    selectedBlock: Block;
    lotImages: ImageData[];
    currentImageIndex: number;
    is3DView: boolean;
    onImageChange: (direction: 'next' | 'prev') => void;
    onImageSelect: (index: number) => void;
    onViewToggle: (is3D: boolean) => void;
    onBack: () => void;
}

export const LotDetailsView: React.FC<LotDetailsViewProps> = ({
                                                                  selectedLot,
                                                                  selectedBlock,
                                                                  lotImages,
                                                                  currentImageIndex,
                                                                  is3DView,
                                                                  onImageChange,
                                                                  onImageSelect,
                                                                  onViewToggle,
                                                                  onBack
                                                              }) => {
    const getCurrentImageUrl = () => {
        const currentImage = lotImages[currentImageIndex];
        return is3DView && currentImage.url3d ? currentImage.url3d : currentImage.url;
    };

    return (
        <motion.div
            className="relative w-full h-full bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl overflow-hidden"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={`${currentImageIndex}-${is3DView}`}
                    src={getCurrentImageUrl()}
                    alt={lotImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20"></div>

            <NavigationButton
                direction="left"
                onClick={() => onImageChange('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />

            <NavigationButton
                direction="right"
                onClick={() => onImageChange('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
            />

            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <ViewToggle is3DView={is3DView} onToggle={onViewToggle} />
            </div>

            <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{lotImages[currentImageIndex].title}</h3>
                    <div className="flex items-center space-x-3">
                        <motion.div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                is3DView ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                            }`}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            {is3DView ? '3D View' : '2D View'}
                        </motion.div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>{currentImageIndex + 1}</span>
                            <span>/</span>
                            <span>{lotImages.length}</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{lotImages[currentImageIndex].description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Lote {selectedLot.number} - Quadra {selectedBlock.id}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <RotateCcw className="w-4 h-4" />
                        <span>Vista 360°</span>
                    </div>
                </div>
            </motion.div>

            <BackButton
                onClick={onBack}
                className="absolute top-6 right-6"
            />

            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                <ImageIndicators
                    totalImages={lotImages.length}
                    currentIndex={currentImageIndex}
                    onImageSelect={onImageSelect}
                />
            </div>
        </motion.div>
    );
};