import { useState, useCallback } from 'react';

export const useImageNavigation = (totalImages: number) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [is3DView, setIs3DView] = useState(false);

    const nextImage = useCallback(() => {
        setCurrentImageIndex(prev => (prev + 1) % totalImages);
    }, [totalImages]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex(prev => (prev - 1 + totalImages) % totalImages);
    }, [totalImages]);

    const selectImage = useCallback((index: number) => {
        setCurrentImageIndex(index);
    }, []);

    const toggleView = useCallback((is3D: boolean) => {
        setIs3DView(is3D);
    }, []);

    const resetNavigation = useCallback(() => {
        setCurrentImageIndex(0);
        setIs3DView(false);
    }, []);

    return {
        currentImageIndex,
        is3DView,
        nextImage,
        prevImage,
        selectImage,
        toggleView,
        resetNavigation
    };
};
