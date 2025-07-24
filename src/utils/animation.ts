import {Variants} from "motion-dom";

export const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 }
};

export const blockVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }),
    hover: {
        scale: 1.15,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
    }
};

export const lotVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.05,
            type: "spring",
            stiffness: 120,
            damping: 12
        }
    }),
    hover: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.4 }
    }
};

export const sidebarVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
};

export const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
};