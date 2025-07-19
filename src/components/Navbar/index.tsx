"use client"

import Menu from "@/components/Navbar/Menu";
import WhatsAppButton from "../Buttons/WhatsAppButton";
import {useEffect, useState} from "react";

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
            <nav className={`flex w-full h-[5rem] text-black justify-around items-center z-[99] fixed ${scrolled ? "bg-white shadow-md" : "bg-transparent"} transition-all duration-200`}>
                <section className={'w-[20%] flex items-center justify-center'}>LOGO</section>
                <section className={'w-[60%] flex items-center justify-center'}><Menu bgColor={scrolled ? "bg-blue-700" : "bg-white"} textColor={scrolled ? "text-white" : "text-black"}/></section>
                <section className={`w-[20%] flex items-center justify-center`}><WhatsAppButton size={"md"} phoneNumber={"5518997970919"} animation={"pulse"} variant={"full-contact"}/>
                </section>
            </nav>
        </>
    );
}

export default Navbar;