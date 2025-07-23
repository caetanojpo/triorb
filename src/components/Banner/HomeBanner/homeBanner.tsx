"use client"
import React from 'react';
import BannerButton from "@/components/Buttons/BannerButton/bannerButton";
import BannerCard from "@/components/Cards/BannerCard/bannerCard";
import {motion} from 'framer-motion';


export interface HomeBannerProps {
    titleLines?: string[];
    description?: string;
    onDemoClick?: () => void;
}

const HomeBanner: React.FC<HomeBannerProps> = ({
                                                   titleLines = ['VISUALIZE O FUTURO', 'DA CONSTRUÇÃO'],
                                                   description = 'Unimos alto realismo e tecnologias de AR com uma equipe especializada em arquitetura e tecnologia, sempre focados na melhor experiência para o cliente final.',
                                                   onDemoClick,
                                               }) => {
    return (
        <main className="relative h-full min-h-screen lg:h-screen w-screen bg-primary-850 bg-banner bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-10" />

            {/* Content */}
            <div className="relative z-20 flex h-full w-full">
                {/* Left Section */}
                <div className="flex w-full flex-col justify-center px-14 lg:w-1/2 pt-32 lg:pt-48 pb-20 lg:pb-0">
                    <header className="font-black text-white">
                        <h5 className="text-[1.5rem] lg:text-[4.5rem] leading-7">{titleLines[0]}</h5>
                        <h4 className="text-[1.5rem] lg:text-[6rem]">{titleLines[1]}</h4>
                    </header>

                    <div className={"flex"}>
                        <section className="mt-8 max-w-lg flex flex-col gap-6">
                            <p className="text-white lg:text-[1.5rem] lg:leading-7">{description}</p>
                            <BannerButton />
                        </section>
                    </div>
                    <section>
                        {/* Animated Stats */}
                        <motion.div
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.8}}
                            className="flex flex-auto lg:flex-wrap gap-8 pt-8"
                        >
                            {[
                                {number: "500+", label: "Projetos Realizados"},
                                {number: "50+", label: "Clientes Satisfeitos"},
                                {number: "5+", label: "Anos de Experiência"}
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    whileHover={{scale: 1.1}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                >
                                    <motion.div
                                        className="text-2xl lg:text-3xl font-bold text-white mb-1"
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.6, delay: 1 + index * 0.1}}
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <div className="text-secondary-500 text-sm font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </div>

                {/* Sidebar BannerCard */}
                <div className="hidden lg:flex lg:absolute lg:right-20 lg:bottom-[-200px] lg:z-30 lg:h-[100%] lg:w-[35%] lg:flex-col lg:justify-around lg:items-center">
                    <BannerCard />
                </div>
            </div>
        </main>
    );
};

export default HomeBanner;