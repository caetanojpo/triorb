import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
    className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
                                                                      direction,
                                                                      onClick,
                                                                      className = ''
                                                                  }) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    const hoverX = direction === 'left' ? -5 : 5;
    const initialX = direction === 'left' ? -50 : 50;

    return (
        <motion.button
            onClick={onClick}
            className={`bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 ${className}`}
            whileHover={{ scale: 1.1, x: hoverX }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: initialX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <Icon className="w-6 h-6 text-gray-700" />
        </motion.button>
    );
};