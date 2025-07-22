"use client"

import React, {ReactNode} from 'react';
import {motion} from 'framer-motion';
import {useScrollAnimation} from "@/hooks/useScrollAnimation";


interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    id: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             id,
                                                             children,
                                                             className = '',
                                                             delay = 0,
                                                             direction = 'up'
                                                         }) => {
    const {ref, isVisible} = useScrollAnimation(0.1);

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return {y: 60, opacity: 0};
            case 'down':
                return {y: -60, opacity: 0};
            case 'left':
                return {x: -60, opacity: 0};
            case 'right':
                return {x: 60, opacity: 0};
            default:
                return {y: 60, opacity: 0};
        }
    };

    return (
        <motion.section
            ref={ref}
            initial={getInitialPosition()}
            animate={isVisible ? {x: 0, y: 0, opacity: 1} : getInitialPosition()}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
            id={id}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;