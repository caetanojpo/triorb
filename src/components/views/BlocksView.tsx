'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Block } from '@/types/types';
import { pageVariants } from '@/utils/animation';
import ImageMapper, { MapArea } from 'react-img-mapper';
import LoadingFallback from '@/components/spinner/LoadingFallback';
import { siteDataNew } from '@/data/siteData';

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
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setParentWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (blocksImage) {
      const img = new Image();
      img.src = `${blocksImage}?attempt=${attempt}`;
      img.onload = () => {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        setIsLoaded(true);
        setHasError(false);
      };
      img.onerror = () => {
        setHasError(true);
        setIsLoaded(false);
      };
    } else {
      setIsLoaded(true);
      setHasError(false);
    }
  }, [blocksImage, attempt]);

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setAttempt((prev) => prev + 1);
  };

  const areas: MapArea[] = siteDataNew.overview.clickableAreas.map((area) => {
    const block = blocks.find((b) => b.id === area.blockId);
    const available = !!block?.available;
    const isHovered = hoveredId === area.blockId;
    return {
      id: area.blockId,
      shape: area.shape,
      coords: area.coords.split(',').map(Number),
      active: available,
      disabled: !available,
      fillColor: 'rgba(0,0,0,0)',
      preFillColor: available ? (isHovered ? 'rgba(0, 148, 0, 0.2)' : 'rgba(0,0,0,0)') : undefined,
      strokeColor: available ? (isHovered ? 'green' : 'green') : 'transparent',
      lineWidth: available ? (isHovered ? 6 : 4) : 1,
    };
  });

  return (
    <motion.div
      className="relative w-full h-[35dvh] lg:h-[45dvh] xl:h-[92dvh] 2xl:h-full bg-renascence xl:rounded-2xl overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      role="region"
      aria-label="Visualização das quadras"
    >
      <div ref={containerRef} className="absolute inset-0">
        {!isLoaded && !hasError && (
          <div
            aria-hidden={false}
            className="absolute inset-0 z-20 flex items-center justify-center bg-transparent pointer-events-none"
          >
            <LoadingFallback />
          </div>
        )}

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

        {blocksImage ? (
          isLoaded && (
            <ImageMapper
              src={blocksImage}
              name="blocks-map"
              areas={areas}
              fillColor="rgba(0,0,0,0)"
              strokeColor="transparent"
              lineWidth={2}
              active={true}
              disabled={false}
              responsive={true}
              parentWidth={parentWidth}
              natural={false}
              onClick={(area) => {
                const block = blocks.find((b) => b.id === area.id);
                if (block && block.available) {
                  onBlockSelect(block);
                }
              }}
              onMouseEnter={(area) => {
                if (!area.disabled) {
                  setHoveredId(area.id);
                }
              }}
              onMouseLeave={() => setHoveredId(null)}
              imgProps={{
                alt: 'Mapa das quadras do empreendimento',
                className:
                  'object-cover object-center w-full h-full transition-opacity duration-500 ease-out',
              }}
              containerProps={{
                className: 'w-full h-full relative',
              }}
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/40">
            <span className="text-sm text-gray-600">Sem imagem</span>
          </div>
        )}
      </div>

      <motion.div
        className="hidden xl:block absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="font-semibold text-renascence mb-2">Selecione uma Quadra</h3>
        <p className="text-sm text-gray-600">Clique em uma quadra disponível para ver os lotes</p>
      </motion.div>
    </motion.div>
  );
};
