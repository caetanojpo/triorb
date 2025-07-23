"use client"
import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const BannerCard = () => {
    return (
        <motion.div className={"flex h-full w-full flex-col justify-center items-center rounded-xl"} whileHover={{
            scale: 1.01,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
        }}>
            <div className={"h-[80%] w-full relative"}><Image src={"/tecnologia.png"} alt={""} fill
                                                              className={'rounded-t-xl'}/></div>
            <div className={"flex flex-col  w-full h-full bg-white text-text p-4 rounded-b-xl"}>
                <div className={"flex w-full flex-col justify-center items-center gap-2 font-bold p-6"}>
                    <h5 className={"text-[1.7rem] leading-0"}>TECNOLOGIA 3D PARA TRANSFORMAR</h5>
                    <h4 className={"text-[2.8rem] text-secondary-500"}>O MERCADO IMOBILIÁRIO</h4>
                    <div className={"w-full h-[1px] bg-gray-300"}/>
                </div>
                <div className={"flex w-full flex-col justify-center gap-4 px-6 "}>
                    <p className={"text-[1.2rem]"}>A <span className={"text-secondary-500 font-bold"}>TRIORB</span> é
                        especializada em soluções visuais de alta performance para construção civil e incorporação
                        imobiliária. Com modelagem 3D, realidade aumentada e visualizações interativas, transformamos
                        projetos arquitetônicos em experiências imersivas, mais claras, atraentes e comerciais.</p>
                    <ul className={"flex flex-col w-full h-full list-disc px-6 marker:text-secondary-500"}>
                        <li className={''}>Valorizamos empreendimentos com imagens realistas e apresentações
                            impactantes
                        </li>
                        <li>Aceleramos vendas com visualizações que facilitam a tomada de decisão do cliente</li>
                        <li>Conectamos tecnologia e arquitetura para construir o futuro, hoje</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default BannerCard;