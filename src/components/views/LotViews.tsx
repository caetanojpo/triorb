'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '@/utils/animation';
import { Block, Lot } from '@/types/types';
import { BackButton } from '@/components/Buttons/BackButton';
import ImageMapperOriginal, { MapArea, ImageMapperProps } from 'react-img-mapper';
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
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const imageUrl = selectedBlock?.overviewImage?.url || '';
  const ImageMapperTyped = ImageMapperOriginal as unknown as React.ComponentType<ImageMapperProps>;

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
    if (imageUrl) {
      const img = new Image();
      img.src = `${imageUrl}?attempt=${attempt}`;
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
  }, [imageUrl, attempt]);

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setAttempt((prev) => prev + 1);
  };

  const areas: MapArea[] = (selectedBlock.clickableAreas || []).map((area) => {
    const lot = selectedBlock.lots.find((l) => l.id === area.lotId);
    const available = !!lot?.available;
    const isHovered = hoveredId === area.lotId;
    return {
      id: area.lotId,
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
      className="relative w-full  h-[35dvh] lg:h-[45dvh]  xl:h-[92dvh] 2xl:h-full bg-renascence xl:rounded-2xl overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      role="region"
      aria-label={`Visualização da quadra ${selectedBlock?.id ?? ''}`}
    >
      <div ref={containerRef} className="absolute inset-0">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent pointer-events-none">
            <LoadingFallback />
          </div>
        )}

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

        {imageUrl ? (
          isLoaded && (
            <ImageMapperTyped
              src={imageUrl}
              name={`lots-map-${selectedBlock?.id}`}
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
                const lot = selectedBlock.lots.find((l) => l.id === area.id);
                if (lot && lot.available) {
                  onLotSelect(lot);
                }
              }}
              onMouseEnter={(area) => {
                if (!area.disabled) {
                  setHoveredId(area.id);
                }
              }}
              onMouseLeave={() => setHoveredId(null)}
              imgProps={{
                alt: `Quadra ${selectedBlock?.id} - visão geral`,
                className:
                  'object-contain object-center w-full h-full transition-opacity duration-500 ease-out',
              }}
              containerProps={{
                className: 'w-full h-full relative',
              }}
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/40">
            <span className="text-sm text-gray-600">Imagem não disponível</span>
          </div>
        )}
      </div>

      <motion.div
        className="hidden xl:block absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="font-semibold text-renascence mb-1">Quadra {selectedBlock?.id}</h3>
        <p className="text-sm text-gray-600">Lotes disponíveis em verde</p>
      </motion.div>

      <BackButton
        onClick={onBack}
        className="cursor-pointer absolute top-48 xl:top-6 right-6 z-20"
      />
    </motion.div>
  );
};
