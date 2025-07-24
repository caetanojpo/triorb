"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Block, ImageData, Lot, NavigationLayer} from "@/types/types";
import {sidebarVariants} from "@/utils/animation";
import {SidebarHeader} from "@/components/sidebar/SidebarHeader";
import {AmenitiesSection} from "@/components/sections/AmenitiesSection";
import {BlocksMenu} from "@/components/menus/BlocksMenu";
import {LotsMenu} from "@/components/menus/LotsMenu";
import {DetailsMenu} from "@/components/menus/DetailsMenu";
import {ContactInfo} from "@/components/infos/ContactInfo";

interface SidebarProps {
    currentLayer: NavigationLayer;
    selectedBlock: Block | null;
    selectedLot: Lot | null;
    blocks: Block[];
    lots: Lot[];
    currentImageIndex: number;
    onBlockSelect: (block: Block) => void;
    onLotSelect: (lot: Lot) => void;
    onImageSelect: (index: number) => void;
    onBack: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
                                                    currentLayer,
                                                    selectedBlock,
                                                    selectedLot,
                                                    blocks,
                                                    lots,
                                                    currentImageIndex,
                                                    onBlockSelect,
                                                    onLotSelect,
                                                    onImageSelect,
                                                    onBack
                                                }) => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 h-full overflow-y-auto"
            variants={sidebarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <SidebarHeader />
            <AmenitiesSection />

            {/* Navigation Menu */}
            <AnimatePresence mode="wait">
                {currentLayer === 'blocks' && (
                    <BlocksMenu
                        key="blocks-menu"
                        blocks={blocks}
                        onBlockSelect={onBlockSelect}
                    />
                )}

                {currentLayer === 'lots' && selectedBlock && (
                    <LotsMenu
                        key="lots-menu"
                        selectedBlock={selectedBlock}
                        lots={lots}
                        onLotSelect={onLotSelect}
                        onBack={onBack}
                    />
                )}

                {currentLayer === 'details' && selectedBlock && selectedLot && (
                    <DetailsMenu
                        key="details-menu"
                        selectedBlock={selectedBlock}
                        selectedLot={selectedLot}
                        lotImages={selectedLot.images}
                        currentImageIndex={currentImageIndex}
                        onImageSelect={onImageSelect}
                        onBack={onBack}
                    />
                )}
            </AnimatePresence>

            <ContactInfo />
        </motion.div>
    );
};