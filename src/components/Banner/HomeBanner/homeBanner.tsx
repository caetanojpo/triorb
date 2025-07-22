import React from 'react';
import BannerButton from "@/components/Buttons/BannerButton/bannerButton";
import BannerCard from "@/components/Cards/BannerCard/bannerCard";


export interface HomeBannerProps {
    titleLines: string[];
    description: string;
    onDemoClick?: () => void;
}

const HomeBanner: React.FC<HomeBannerProps> = ({
                                                   titleLines = ['VISUALIZE O FUTURO', 'DA CONSTRUÇÃO'],
                                                   description = 'Unimos alto realismo e tecnologias de AR com uma equipe especializada em arquitetura e tecnologia, sempre focados na melhor experiência para o cliente final.',
                                                   onDemoClick,
                                               }) => {
    return (
        <main className="relative h-screen w-screen bg-primary-850 bg-banner bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-10" />

            {/* Content */}
            <div className="relative z-20 flex h-full w-full">
                {/* Left Section */}
                <div className="flex w-full flex-col justify-center px-14 lg:w-1/2 lg:pt-48">
                    <header className="font-black text-white">
                        <h5 className="text-[4.5rem] leading-7">{titleLines[0]}</h5>
                        <h4 className="text-[6rem]">{titleLines[1]}</h4>
                    </header>

                    <section className="mt-8 max-w-lg flex flex-col gap-6">
                        <p className="text-white text-[1.5rem] leading-7">{description}</p>
                        <BannerButton text="Demonstração" onClick={onDemoClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none">
                                    <path d="M24 0v24H0V0z" />
                                    <path
                                        fill="currentColor"
                                        d="m15.06 5.283 5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"
                                    />
                                </g>
                            </svg>
                        </BannerButton>
                    </section>
                </div>

                {/* Sidebar BannerCard */}
                <div className="hidden lg:flex lg:absolute lg:right-40 lg:bottom-[-200px] lg:z-30 lg:h-[100%] lg:w-[35%] lg:flex-col lg:justify-around lg:items-center">
                    <BannerCard />
                </div>
            </div>
        </main>
    );
};

export default HomeBanner;