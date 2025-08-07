import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Areas, SubAreaEnum } from '@/app/renascence/utils';

interface RenascenceSubAreaListProps {
  subArea: string;
  areaContent: Areas;
  onChangeAreaContent: (area: Areas) => void;
  esporteAreas: Areas[];
  lazerArea: Areas[];
}

export const RenascenceSubAreaList: React.FC<RenascenceSubAreaListProps> = ({
  subArea,
  areaContent,
  onChangeAreaContent,
  esporteAreas,
  lazerArea,
}) => {
  const currentAreas = subArea === SubAreaEnum.ESPORTE ? esporteAreas : lazerArea;

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={subArea}
        className="flex flex-col mt-8 xl:mt-4 gap-4 ml-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        {currentAreas.map((area, index) => (
          <motion.li
            key={area.title}
            onClick={() => onChangeAreaContent(area)}
            className={`cursor-pointer border-b-2 w-fit transition-colors duration-200 ${
              areaContent.title === area.title ? 'border-renascence_support' : 'border-transparent'
            } hover:border-renascence_support`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h5
              className="py-1"
              animate={{
                color: areaContent.title === area.title ? 'var(--renascence-support)' : 'inherit',
                fontWeight: areaContent.title === area.title ? 'bold' : 'normal',
              }}
              transition={{ duration: 0.2 }}
            >
              {area.title}
            </motion.h5>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};
