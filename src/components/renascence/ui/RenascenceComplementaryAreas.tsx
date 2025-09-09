import React from 'react';
import Image from 'next/image';
import { Areas, esporteAreas, lazerArea, mainAreas } from '@/app/renascence/utils';
import { RenascenceAreaTab } from '@/components/renascence/RenascenceAreaTab';
import { RenascenceSubAreaNav } from '@/components/renascence/RenascenceSubAreaNav';
import { RenascenceSubAreaList } from '@/components/renascence/RenascenceSubAreaList';
import PanoramaViewer from '@/components/image/PanoramaViewer';

interface ComplementaryAreasProps {
  areaContent: Areas;
  subArea: string;
  changeAreaContent: (area: Areas) => void;
  toggleSubArea: (areaName: string) => void;
}

export const RenascenceComplementaryAreas: React.FC<ComplementaryAreasProps> = ({
  areaContent,
  subArea,
  changeAreaContent,
  toggleSubArea,
}) => {
  return (
    <section className="relative flex flex-col-reverse xl:flex-row gap-8 bg-renascence w-full min-h-[80vh] xl:px-10 py-10 xl:py-20 overflow-hidden font-poppins">
      <div className="flex flex-col w-full xl:w-[30%] px-2 xl:px-0 gap-4 xl:gap-10 text-renascence_support">
        <nav>
          <ul className="flex flex-col xl:flex-row gap-4 xl:gap-0 font-bold justify-between">
            {mainAreas.map((area: Areas, index) => (
              <RenascenceAreaTab
                key={index}
                area={area}
                isActive={areaContent.title === area.title}
                onClick={() => changeAreaContent(area)}
              />
            ))}
          </ul>
        </nav>
        <div className="px-4 xl:px-8 min-h-[150px] xl:mt-8">
          <p className="leading-relaxed text-[0.9rem]">{areaContent.description}</p>
        </div>
        <div className="px-4 xl:px-8">
          <RenascenceSubAreaNav subArea={subArea} onToggleSubArea={toggleSubArea} />
          <RenascenceSubAreaList
            subArea={subArea}
            areaContent={areaContent}
            onChangeAreaContent={changeAreaContent}
            esporteAreas={esporteAreas}
            lazerArea={lazerArea}
          />
        </div>
      </div>
      <div className="w-full xl:w-[65%] h-[70dvh] flex relative">
        {areaContent.image.includes('jpg') ? (
          <Image
            src={areaContent.image}
            alt={''}
            fill
            className="w-full h-full xl:rounded-[40px] object-cover"
          />
        ) : (
          <PanoramaViewer
            className="w-full h-full xl:rounded-[40px] object-cover"
            imageSrc={areaContent.image}
          />
        )}
      </div>
      <div className="hidden xl:block absolute w-24 h-24 -bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/renascence/folha-white.png"
          alt="Folha decorativa"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
