'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Block } from '@/types/types';
import { pageVariants } from '@/utils/animation';
import Image from 'next/image';
import Spinner from '@/components/spinner/Spinner';
import LoadingFallback from '@/components/spinner/LoadingFallback';

interface BlocksViewProps {
  blocks: Block[];
  onBlockSelect: (block: Block) => void;
  blocksImage: string;
}

export const BlocksView: React.FC<BlocksViewProps> = ({
  blocks,
  onBlockSelect,
  blocksImage = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [attempt, setAttempt] = useState(0);

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
      aria-label="Visualização das quadras"
    >
      {/* Wrapper do background image - precisa ser relative para 'fill' do next/image */}
      <div className="absolute inset-0">
        {/* Spinner enquanto carrega */}
        {!isLoaded && !hasError && (
          <div
            aria-hidden={false}
            className="absolute inset-0 z-20 flex items-center justify-center bg-transparent pointer-events-none"
          >
            <LoadingFallback />
          </div>
        )}

        {/* Fallback de erro */}
        {hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/40 text-white p-4">
            <p className="text-sm">Erro ao carregar a imagem de fundo.</p>
            <button
              onClick={handleRetry}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-white text-sm"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Image com transição de opacidade */}
        {/* NOTE: key depende de `attempt` para forçar remount quando retry */}
        {blocksImage ? (
          <Image
            key={`${blocksImage}-${attempt}`}
            src={blocksImage}
            alt=""
            fill
            priority={false}
            // className aplicado ao <img> interno — usamos object-* pra controlar display
            className={`object-contain object-center transition-opacity duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={() => handleLoad()}
            onError={() => handleError()}
            // se imagem for externa, certifique-se de configurar next.config.js remotePatterns/domains
            // ou use unoptimized (dev/prototipagem) -> unoptimized={true}
          />
        ) : (
          // caso blocksImage esteja vazio, exiba um placeholder simples
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/40">
            <span className="text-sm text-gray-600">Sem imagem</span>
          </div>
        )}
      </div>
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
        <h3 className="font-semibold text-renascence mb-2">Selecione uma Quadra</h3>
        <p className="text-sm text-gray-600">
          Clique em uma quadra disponível (verde) para ver os lotes
        </p>
      </motion.div>
    </motion.div>
  );
};
