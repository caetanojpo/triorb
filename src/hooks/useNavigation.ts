// src/hooks/useNavigation.ts
import { useState } from 'react';
import { Block, Lot, NavigationLayer, SiteData } from '@/types/types';
import { siteData } from '@/data/siteData';

export const useNavigation = () => {
    const data: SiteData | unknown = siteData;
    const [currentLayer, setCurrentLayer] = useState<NavigationLayer>('blocks');
    const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
    const [selectedLot, setSelectedLot] = useState<Lot | null>(null);

    const handleBlockSelect = (block: Block) => {
        if (!block.available) return;
        setSelectedBlock(block);
        setCurrentLayer('lots');
    };

    const handleLotSelect = (lot: Lot) => {
        if (!lot.available) return;
        setSelectedLot(lot);
        setCurrentLayer('details');
    };

    const handleBack = () => {
        if (currentLayer === 'details') {
            setCurrentLayer('lots');
            setSelectedLot(null);
        } else if (currentLayer === 'lots') {
            setCurrentLayer('blocks');
            setSelectedBlock(null);
        }
    };

    return {
        currentLayer,
        selectedBlock,
        selectedLot,
        blocks: data.blocks,
        lots: selectedBlock?.lots ?? [],
        handleBlockSelect,
        handleLotSelect,
        handleBack,
    };
};
