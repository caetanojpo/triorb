import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <header
        className={
          'h-[20dvh] xl:h-[60dvh] w-screen bg-renascence flex justify-end items-center flex-col relative'
        }
      >
        <div
          className={
            'absolute w-[50%] h-[20%] xl:w-[8%] xl:h-[8%] left-[-10dvw] xl:left-0 xl:right-[91dvw] top-[1rem]'
          }
        >
          <Image
            src={'/renascence/duaco.png'}
            alt={'Logo Duaco'}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className={'absolute w-full h-full xl:h-[50%] left-[0.5rem] xl:top-[-2rem]'}>
          <Image
            src={'/renascence/logo.png'}
            alt={'Logo Renascence'}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className={'hidden xl:block absolute w-full h-[80%]'}>
          <Image
            src={'/renascence/fachada.png'}
            alt={'Logo Renascence'}
            fill
            className="object-bottom object-cover"
            priority
          />
        </div>
        <div className={'hidden xl:block absolute w-[6rem] h-[6rem] bottom-[-2.5rem]   z-10'}>
          <Image
            src={'/renascence/folha-white.png'}
            alt={'folha branca'}
            fill
            className="object-cover"
          />
        </div>
      </header>
      <main className={' h-screen w-screen'}></main>
    </>
  );
};

export default Page;
