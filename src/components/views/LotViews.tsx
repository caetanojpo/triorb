"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {lotVariants, pageVariants} from "@/utils/animation";
import {Block, Lot} from "@/types/types";
import {BackButton} from "@/components/Buttons/BackButton";

interface LotsViewProps {
    lots: Lot[];
    selectedBlock: Block;
    onLotSelect: (lot: Lot) => void;
    onBack: () => void;
}

export const LotsView: React.FC<LotsViewProps> = ({
                                                      lots,
                                                      selectedBlock,
                                                      onLotSelect,
                                                      onBack
                                                  }) => {
    return (
        <motion.div
            className="relative w-full h-full bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl overflow-hidden"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-30"></div>
            <div className="relative w-full h-full">
                {/*{lots.map((lot, index) => (*/}
                {/*    <motion.button*/}
                {/*        key={lot.id}*/}
                {/*        custom={index}*/}
                {/*        variants={lotVariants}*/}
                {/*        initial="initial"*/}
                {/*        animate="animate"*/}
                {/*        whileHover="hover"*/}
                {/*        whileTap={{ scale: 0.9 }}*/}
                {/*        onClick={() => onLotSelect(lot)}*/}
                {/*        disabled={!lot.available}*/}
                {/*        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl border-2 font-semibold text-sm transition-all duration-300 shadow-md ${*/}
                {/*            lot.available*/}
                {/*                ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-300 cursor-pointer hover:shadow-xl'*/}
                {/*                : 'bg-red-400 text-red-100 border-red-300 cursor-not-allowed opacity-60'*/}
                {/*        }`}*/}
                {/*        style={{*/}
                {/*            left: `${lot.position.x}%`,*/}
                {/*            top: `${lot.position.y}%`,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {lot.number}*/}
                {/*    </motion.button>*/}
                {/*))}*/}
            </div>
            <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <h3 className="font-semibold text-gray-800 mb-1">Quadra {selectedBlock.id}</h3>
                <p className="text-sm text-gray-600">Lotes disponíveis em verde</p>
            </motion.div>
            <BackButton
                onClick={onBack}
                className="absolute top-6 right-6"
            />
        </motion.div>
    );
};