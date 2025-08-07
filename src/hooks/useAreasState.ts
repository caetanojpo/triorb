import { useState } from 'react';
import { Areas, esporteAreas, lazerArea, mainAreas } from '@/app/renascence/utils';

export const useAreasState = () => {
  const [areaContent, setAreaContent] = useState<Areas>({
    title: mainAreas[0].title,
    image: mainAreas[0].image,
    description: mainAreas[0].description,
  });
  const [subArea, setSubArea] = useState<string>('ESPORTE E MOVIMENTO');
  const [progress] = useState(5);

  const changeAreaContent = (area: Areas) => {
    if (esporteAreas.includes(area) || lazerArea.includes(area)) {
      area.description = areaContent.description;
    }
    setAreaContent(area);
  };

  const toggleSubArea = (areaName: string) => {
    setSubArea(areaName);
  };

  return {
    areaContent,
    subArea,
    progress,
    changeAreaContent,
    toggleSubArea,
  };
};
