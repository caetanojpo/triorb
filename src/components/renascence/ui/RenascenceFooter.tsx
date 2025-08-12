import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RenascenceContactInfo } from '@/components/renascence/RenascenceContactInfo';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const RenascenceFooter = () => {
  return (
    <motion.footer
      className="flex flex-col h-full xl:h-screen w-full text-renascence overflow-hidden font-poppins bg-renascence_support font-poppins"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col w-full h-[75vh] xl:h-full items-center  p-2 xl:p-0"
        variants={itemVariants}
      >
        <motion.div
          className="hidden xl:block w-full h-full xl:h-1/2 relative"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/renascence/logo-green.png"
            alt="Logo Renascence"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          className="xl:hidden w-full h-full xl:h-1/2 relative"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/renascence/logo-green.png"
            alt="Logo Renascence"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div className="xl:w-[35%] text-center px-4" variants={itemVariants}>
          <motion.p
            className="xl:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Adquira seu lote do Residencial Renascence II e construa sua casa dos sonhos com a
            Duaço!
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants} className={'my-10'}>
          <RenascenceContactInfo />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-row h-[50vh] xl:h-[30%] w-full bg-renascence  justify-between px-2 xl:px-16"
        variants={itemVariants}
      >
        <motion.div
          className="h-full w-full justify-start items-center hidden xl:flex "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="https://duaco.com.br/" target="_blank" className="relative w-[30%] h-4/5">
            <Image
              src="/renascence/duaco.png"
              alt="Logo Duaco"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>
        <motion.div
          className="h-full w-full xl:w-3/4 text-renascence_support flex items-center justify-center xl:justify-end"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="w-full h-full flex flex-col xl:flex-row text-renascence_support items-center justify-center xl:justify-end"
          >
            <motion.h6
              className="font-bold text-[1rem] 2xl:text-[1.2rem] text-center xl:text-right mr-4"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Este site foi produzido com a tecnologia
            </motion.h6>
            <motion.div
              className="relative w-full xl:w-[30%] mt-10 xl:mt-0 h-1/5 xl:h-2/5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Image
                src="/logo-white.png"
                alt="Logo da tecnologia"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};
