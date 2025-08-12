'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { lotVariants, pageVariants } from '@/utils/animation';
import { Block, Lot } from '@/types/types';
import { BackButton } from '@/components/Buttons/BackButton';
import Image from 'next/image';
import Spinner from '@/components/spinner/Spinner';
import LoadingFallback from '@/components/spinner/LoadingFallback';

interface LotsViewProps {
  lots: Lot[];
  selectedBlock: Block;
  onLotSelect: (lot: Lot) => void;
  onBack: () => void;
}

export const LotsView: React.FC<LotsViewProps> = ({ lots, selectedBlock, onLotSelect, onBack }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const imageUrl = selectedBlock?.overviewImage?.url || '';

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setAttempt((s) => s + 1);
  };

  return (
    <motion.div
      className="relative w-full h-full bg-renascence xl:rounded-2xl overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      role="region"
      aria-label={`Visualização da quadra ${selectedBlock?.id ?? ''}`}
    >
      {/* Background image wrapper (absolute inset-0) */}
      <div className="absolute inset-0">
        {/* Spinner enquanto carrega */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent pointer-events-none">
            <LoadingFallback />
          </div>
        )}

        {/* Fallback de erro */}
        {hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/40 text-white p-4">
            <p className="text-sm">Erro ao carregar a imagem de visualização.</p>
            <button
              onClick={handleRetry}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-white text-sm"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Image: usamos next/image para controlar loading/erro e ter otimização */}
        {imageUrl ? (
          <Image
            key={`${imageUrl}-${attempt}-${selectedBlock?.id}`}
            src={imageUrl}
            alt={`Quadra ${selectedBlock?.id} - visão geral`}
            fill
            priority={false}
            className={`object-contain object-center transition-opacity duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={() => handleLoad()}
            onError={() => handleError()}
            // Se for fonte externa, configure next.config.js (images.domains / remotePatterns)
            // Para protótipo, pode usar unoptimized={true}
            // unoptimized={true}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/40">
            <span className="text-sm text-gray-600">Imagem não disponível</span>
          </div>
        )}
      </div>

      <div className="relative w-full h-full">
        {/* Aqui vão seus botões/lotes (estavam comentados no original) */}
        {/* Exemplo (descomente/adapte): */}
        {/* {lots.map((lot, index) => (
            <motion.button
              key={lot.id}
              custom={index}
              variants={lotVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              onClick={() => onLotSelect(lot)}
              disabled={!lot.available}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl border-2 font-semibold text-sm transition-all duration-300 shadow-md ${
                lot.available
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-300 cursor-pointer hover:shadow-xl'
                  : 'bg-red-400 text-red-100 border-red-300 cursor-not-allowed opacity-60'
              }`}
              style={{
                left: `${lot.position.x}%`,
                top: `${lot.position.y}%`,
              }}
            >
              {lot.number}
            </motion.button>
          ))} */}
      </div>

      <motion.div
        className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="font-semibold text-renascence mb-1">Quadra {selectedBlock?.id}</h3>
        <p className="text-sm text-gray-600">Lotes disponíveis em verde</p>
      </motion.div>

      <BackButton onClick={onBack} className="cursor-pointer absolute top-6 right-6" />
    </motion.div>
  );
};
