"use client"

import React from 'react';
import Image from "next/image";
import Link from "next/link";

type BannerOrbsButtonProps = {
    text: string,
    hoverText: string,
    height: string,
    width: string,
    link: string,
    image: string,
    alt: string,
    zIndex: string,
}

const BannerOrbsButton = ({text, hoverText, height, width, link, image, alt, zIndex}: BannerOrbsButtonProps) => {
    const [isHovered, setHovered] = React.useState<boolean>(false);
    return (
        <Link href={link}>
            <div
                className={`${height} ${width} rounded-full relative hover:scale-105 outline-8 outline-white border-solid transition-all duration-300 cursor-pointer ${!isHovered ? zIndex : 'z-90'} bg-dark`}
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={`absolute ${height} ${width} bg-primary-500 rounded-full opacity-50 z-20`}/>
                <div className={`h-full w-full z-10 flex items-center justify-center text-center`}>
                    <p className={`z-20 font-bold text-xl text-white ${isHovered && 'scale-110'}`}>{!isHovered ? text : hoverText}</p>
                    <Image src={image} alt={alt} fill className={`rounded-full`}/>
                </div>
            </div>
        </Link>
    );
};

export default BannerOrbsButton;