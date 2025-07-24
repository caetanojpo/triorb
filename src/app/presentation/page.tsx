"use client";
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/hooks/useNavigation';
import { useImageNavigation } from '@/hooks/useImageNavigation';
import { BlocksView } from '@/components/views/BlocksView';
import { Sidebar } from '@/components/sidebar/Sidebar';
import {LotsView} from "@/components/views/LotViews";
import {LotDetailsView} from "@/components/details/LotDetails";
import {siteData} from "@/data/siteData";

export default function App() {
    const {
        currentLayer,
        selectedBlock,
        selectedLot,
        blocks,
        lots,
        handleBlockSelect,
        handleLotSelect,
        handleBack,
    } = useNavigation();

    const imageCount = (selectedLot?.images && selectedLot.images.length) ?? 0;
    const {
        currentImageIndex,
        is3DView,
        nextImage,
        prevImage,
        selectImage,
        toggleView,
        resetNavigation,
    } = useImageNavigation(imageCount);

    React.useEffect(() => {
        if (currentLayer === 'details') resetNavigation();
    }, [currentLayer, resetNavigation]);

    const handleImageChange = (dir: 'next' | 'prev') =>
        dir === 'next' ? nextImage() : prevImage();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <div className="mx-auto flex h-screen max-w-[80dvw] flex-col gap-6 xl:flex-row xl:max-w-[95dvw]">
                <main className="flex-1 min-h-[80dvh] xl:min-h-screen">
                    <AnimatePresence mode="wait">
                        {currentLayer === 'blocks' && (
                            <BlocksView key="blocks" blocks={blocks} onBlockSelect={handleBlockSelect} blocksImage={siteData.overview.url}/>
                        )}
                        {currentLayer === 'lots' && selectedBlock && (
                            <LotsView
                                key="lots"
                                lots={lots}
                                selectedBlock={selectedBlock}
                                onLotSelect={handleLotSelect}
                                onBack={handleBack}
                            />
                        )}
                        {currentLayer === 'details' && selectedBlock && selectedLot && (
                            <LotDetailsView
                                key="details"
                                selectedLot={selectedLot}
                                selectedBlock={selectedBlock}
                                lotImages={selectedLot.images}
                                currentImageIndex={currentImageIndex}
                                is3DView={is3DView}
                                onImageChange={handleImageChange}
                                onImageSelect={selectImage}
                                onViewToggle={toggleView}
                                onBack={handleBack}
                            />
                        )}
                    </AnimatePresence>
                </main>
                <aside className="min-w-80 xl:w-30">
                    <Sidebar
                        currentLayer={currentLayer}
                        selectedBlock={selectedBlock}
                        selectedLot={selectedLot}
                        blocks={blocks}
                        lots={lots}
                        currentImageIndex={currentImageIndex}
                        onBlockSelect={handleBlockSelect}
                        onLotSelect={handleLotSelect}
                        onImageSelect={selectImage}
                        onBack={handleBack}
                    />
                </aside>
            </div>
        </div>
    );
}
