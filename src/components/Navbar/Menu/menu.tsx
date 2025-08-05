"use client"
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface MenuLinks {
    title: string;
    link: string;
}

interface MenuProps {
    variant?: 'solid' | 'ghost' | 'mobile';
}

const containerVariants: Variants = {
    ghost: {
        backgroundColor: 'rgba(0,0,0,0)',     // transparent
        color: '#ffffff',
        transition: { duration: 0.4, ease: 'easeInOut' }
    },
    solid: {
        backgroundColor: '#8822c7', // your bg-support-500
        color: '#ffffff',
        transition: { duration: 0.4, ease: 'easeInOut' }
    },
    mobile: {
        backgroundColor: '#ffffff',
        color: '#000000',
        transition: { duration: 0.4, ease: 'easeInOut' }
    }
};

const underlineVariants: Variants = {
    hidden: { width: 0 },
    visible: { width: '100%' }
};

const Menu: React.FC<MenuProps> = ({ variant = 'ghost' }) => {
    const menuLinks: MenuLinks[] = [
        { title: 'Home', link: '/#home' },
        { title: 'Serviços', link: '/#services' },
        { title: 'Projetos', link: '/#projects' },
        { title: 'Depoimentos', link: '/#testimonials' },
        { title: 'Contato', link: '/#footer' },
    ];

    return (
        <motion.ul
            className={`p-2 z-50 ${
                variant === 'mobile'
                    ? 'flex flex-col space-y-4 text-lg'
                    : 'flex flex-row items-center gap-6 rounded-4xl'
            }`}
            variants={containerVariants}
            initial={variant}
            animate={variant}
        >
            {menuLinks.map((item, idx) => (
                <li key={idx} className="relative">
                    <Link href={item.link} passHref>
                        <motion.div
                            className="font-semibold py-2 px-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            {item.title}
                            <motion.span
                                className="block h-[2px] bg-secondary-500 mt-1"
                                variants={underlineVariants}
                                initial="hidden"
                                whileHover="visible"
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </Link>
                </li>
            ))}
        </motion.ul>
    );
};

export default Menu;
