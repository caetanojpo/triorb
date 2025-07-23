"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuLinks {
    title: string;
    link: string;
}

interface MenuProps {
    variant?: 'solid' | 'ghost' | 'mobile';
}

const underlineVariants = {
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

    const getStyles = () => {
        switch (variant) {
            case 'solid':
                return 'bg-secondary-500 text-white';
            case 'ghost':
                return 'bg-transparent text-white';
            case 'mobile':
                return 'bg-white text-black text-lg';
            default:
                return '';
        }
    };

    return (
        <ul className={`flex ${variant === 'mobile' ? 'flex-col space-y-4' : 'flex-row items-center gap-6 rounded-4xl'} p-2 ${getStyles()} z-99`}>
            {menuLinks.map((item, idx) => (
                <li key={idx} className="relative">
                    <Link href={item.link} passHref>
                        <motion.div
                            className="font-semibold py-2 px-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            onHoverStart={() => {}}
                            onHoverEnd={() => {}}
                        >
                            {item.title}
                            {/* Animated underline */}
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
        </ul>
    );
};

export default Menu;
