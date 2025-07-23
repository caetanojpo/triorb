"use client"

import React, { useEffect, useState } from 'react';
import WhatsAppButton from "../Buttons/WhatsAppButton";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import Menu from '@/components/Navbar/Menu/menu';

const navVariants = {
    initial: { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0.1)' },
    scrolled: { backdropFilter: 'blur(10px)', backgroundColor: '#ffffff' }
};

const menuOverlayVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
};

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial="initial"
            animate={scrolled ? 'scrolled' : 'initial'}
            variants={navVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 z-50 shadow-none"
        >
            <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
                {/* Logo with subtle bounce on load and scale on hover */}
                <motion.div
                    className="flex items-center cursor-pointer"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center">
                    <Menu
                        variant={scrolled ? 'solid' : 'ghost'}
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <WhatsAppButton size="md" phoneNumber="5518997970919" animation="pulse" variant="full-contact" />
                    </motion.div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setMobileOpen(prev => !prev)}
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.9 }}
                            animate={{ rotate: mobileOpen ? 90 : 0 }}
                        >
                            { <MenuIcon size={24} className={`${scrolled ? "text-text" : "text-white"}`}/>}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay Sliding from Right */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed md:hidden inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuOverlayVariants}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="flex h-screen flex-col items-center py-8 bg-white space-y-2">
                               <div className={"flex w-full justify-end mr-8 "}>
                                   <motion.button
                                       onClick={() => setMobileOpen(prev => !prev)}
                                       aria-label="Toggle menu"
                                       whileTap={{ scale: 0.9 }}
                                       animate={{ rotate: !mobileOpen ? 90 : 0 }}
                                   >
                                       {mobileOpen ? <CloseIcon size={24} /> : ''}
                                   </motion.button>
                               </div>
                                <Menu variant="mobile" />
                                <div className={"flex h-full items-end"}>

                                    <WhatsAppButton size="lg" phoneNumber="5518997970919" animation="pulse" variant="full-contact" c/>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;