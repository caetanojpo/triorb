import React from 'react';
import Link from "next/link";

type MenuLinks = {
    title: string;
    link: string;
    icon?: string;
}

type MenuProps = {
    bgColor?: string;
    textColor?: string
    textHover?: string;
}
const Menu = ({bgColor, textColor, textHover} : MenuProps) => {
    const menuLinks: MenuLinks[] = [
        {title: 'Home', link: '/#home'},
        {title: 'Quem Somos', link: '/#quemSomos'},
        {title: 'Serviços', link: '/#services'},
        {title: "Cases", link: '/#case'},
        {title: "Contato", link: '/#contacts'}
    ];
    return (
        <ul className={`w-fit h-full flex items-center justify-center ${bgColor} ${textColor} gap-4 p-2.5 rounded-3xl shadow-2xl transition-all duration-200`}>
            {menuLinks.map((item, index) => (
            <li key={index} className={`h-full`}>
                <Link href={item.link} className={`h-full`}>
                    <span className={`h-full ${textHover} p-2 rounded-2xl font-semibold`}>{item.title}</span>
                </Link>
            </li>
            ))}
        </ul>
    );
};

export default Menu;