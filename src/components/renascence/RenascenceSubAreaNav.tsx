import React from 'react';
import { motion } from 'framer-motion';
import { SubAreaEnum } from '@/app/renascence/utils';

interface RenascenceSubAreaNavProps {
  subArea: string;
  onToggleSubArea: (areaName: string) => void;
}

export const RenascenceSubAreaNav: React.FC<RenascenceSubAreaNavProps> = ({
  subArea,
  onToggleSubArea,
}) => {
  const subAreas = [
    { key: SubAreaEnum.ESPORTE, label: SubAreaEnum.ESPORTE },
    { key: SubAreaEnum.LAZER, label: SubAreaEnum.LAZER },
  ];

  return (
    <nav>
      <ul className="flex gap-10">
        {subAreas.map((area, index) => (
          <motion.li
            key={area.key}
            onClick={() => onToggleSubArea(area.key)}
            className={`cursor-pointer border-2 transition-colors duration-200 ${
              subArea === area.key ? 'border-renascence_support' : 'border-transparent'
            } hover:border-renascence_support rounded-md p-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.h3
              className="text-sm xl:text-base"
              animate={{
                color: subArea === area.key ? 'var(--renascence-support)' : 'inherit',
                fontWeight: subArea === area.key ? 'bold' : 'normal',
              }}
              transition={{ duration: 0.2 }}
            >
              {area.label}
            </motion.h3>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
