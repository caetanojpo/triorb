"use client"

import WhatsAppButton from "../Buttons/WhatsAppButton";
import {useEffect, useState} from "react";
import Image from "next/image";
import Menu from "@/components/Navbar/Menu/menu";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <nav className={`flex w-full h-[5rem] text-black justify-around items-center z-[99] fixed ${scrolled ? "bg-white shadow-md" : "backdrop-blur bg-black/1"} transition-all duration-200`}>
                <section className={'w-[20%] flex items-center justify-center '}><Image src={"/logo.png"} alt={""} width={50} height={50} /></section>
                <section className={'w-[60%] flex items-center justify-center'}><Menu bgColor={scrolled ? "bg-secondary-500" : "bg-white"} textColor={scrolled ? "text-white" : "text-black"} textHover={scrolled ? "hover:bg-secondary-700" : "hover:bg-secondary-200"}/></section>
                <section className={`w-[20%] flex items-center justify-center`}><WhatsAppButton size={"md"} phoneNumber={"5518997970919"} animation={"pulse"} variant={"full-contact"}/>
                </section>
            </nav>
        </>
    );
}

export default Navbar;