import React from 'react';
import Image from "next/image";
import BannerOrbsButton from "@/components/Buttons/BannerOrbsButton";

const Index = () => {
    return (
        <main className={"h-screen w-screen bg-blue-900 relative"}>
            <div className={'bg-black w-full h-full z-20 absolute opacity-30'}/>
            <Image src={'/home-banner-bg.png'} alt={'Banner com foto de condominio'} fill className={'z-10'}/>
            <div
                className={'absolute flex flex-col h-[35%] w-[35%] z-30 bottom-0 rounded-tr-3xl justify-around items-center p-4'}>
                <div className={'flex w-full relative justify-center items-center'}>
                    <BannerOrbsButton text={'VISUALIZE'} hoverText={'CONTATO'} height={'h-40'} width={'w-40'}
                                      link={''} image={'/teste1.jpg'} alt={''} zIndex={''}/>
                    <BannerOrbsButton text={'O FUTURO'} hoverText={'PROJETOS'} height={'h-52'} width={'w-52'}
                                      link={''} image={'/teste2.jpg'} alt={''} zIndex={'z-30'}/>
                    <BannerOrbsButton text={'DA CONSTRUÇÃO'} hoverText={'DEMONSTRAÇÃO'} height={'h-64'} width={'w-64'}
                                      link={''} image={'/teste3.jpg'} alt={''} zIndex={'z-40'}/>

                </div>
            </div>
        </main>
    );
};

export default Index;