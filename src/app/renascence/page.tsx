'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MapMenu from '@/components/map/MapMenu';
import { Areas, esporteAreas, lazerArea, mainAreas, SubAreaEnum } from '@/app/renascence/utils';
import Link from 'next/link';

const Page = () => {
  const [areaContent, setAreaContent] = useState<Areas>({
    title: mainAreas[0].title,
    image: mainAreas[0].image,
    description: mainAreas[0].description,
  });
  const [subArea, setSubArea] = useState<string>('ESPORTE E MOVIMENTO');
  const [progress, setProgress] = useState(5); // Começa com 50%

  function changeAreaContent(area: Areas) {
    if (esporteAreas.includes(area) || lazerArea.includes(area)) {
      area.description = areaContent.description;
    }
    setAreaContent(area);
  }

  function toggleSubArea(areaName: string) {
    setSubArea(areaName);
  }
  return (
    <>
      {/*HEADER*/}
      <header
        className={
          'h-[30dvh] xl:h-[60dvh] w-screen bg-renascence flex justify-end items-center flex-col relative overflow-hidden'
        }
      >
        <div
          className={
            'absolute w-[50%] h-[20%] xl:w-[8%] xl:h-[8%] left-[-10dvw] xl:left-0 xl:right-[91dvw] top-[1rem] '
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
      {/*MAPA ITERATIVO*/}
      <section
        className={
          'h-full min-h-screen w-screen flex flex-col gap-8 py-4 xl:py-16 relative overflow-x-hidden'
        }
      >
        <div
          className={
            'w-screen h-[20%] flex flex-col items-center justify-center px-10 xl:px-100 text-center text-renascence gap-2 my-2 xl:my-6'
          }
        >
          <h1 className={' text-[2rem] lg:text-[3rem] xl:text-[4rem] font-medium'}>
            Renascence II
          </h1>
          <p className={'text-[1rem] xl:text-[1.2rem]'}>
            Com o projeto urbanístico integrado com o paisagismo o Renascence II valoriza a
            sustentabilidade e preza pelo cuidado com a natureza. Levando a tradição do primeiro
            condomínio adiante.
          </p>
        </div>
        <div className={'h-full min-h-screen xl:h-[80%] w-screen flex'}>
          <MapMenu />
        </div>
        <div
          className={
            'hidden xl:block absolute w-[6rem] h-[6rem] bottom-[-2.5rem] left-1/2 transform -translate-x-1/2  z-10'
          }
        >
          <Image
            src={'/renascence/folha-green.png'}
            alt={'folha verde'}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/*AREAS COMPLEMENTARE*/}
      <section
        className={
          'flex flex-col-reverse xl:flex-row gap-8 bg-renascence w-screen h-full min-h-[80dvh] xl:px-10 py-10 xl:py-20 relative overflow-x-hidden'
        }
      >
        <div
          className={
            'flex flex-col w-full xl:w-[30%] h-full  px-2 xl:px-0 gap-4 xl:gap-10 text-renascence_support ]'
          }
        >
          <ul className={'flex flex-col xl:flex-row gap-4 xl:gap-0 font-bold justify-between'}>
            {mainAreas.map((area: Areas, index) => (
              <li
                key={index}
                onClick={() => changeAreaContent(area)}
                className={`cursor-pointer border-b-2 ${areaContent.title === area.title ? 'border-renascence_support' : 'border-transparent'} hover:border-renascence_support`}
              >
                <h2 className={'text-[1.5rem] 2xl:text-[1.8rem]'}>{area.title}</h2>
              </li>
            ))}
          </ul>
          <div className={'px-4 xl:px-8 min-h-[150px] xl:mt-8'}>
            <p>{areaContent.description}</p>
          </div>
          <div className={' px-4 xl:px-8'}>
            <ul className={'flex gap-10'}>
              <li
                onClick={() => toggleSubArea(SubAreaEnum.ESPORTE)}
                className={`cursor-pointer border-2 ${subArea === SubAreaEnum.ESPORTE ? 'border-renascence_support' : 'border-transparent'} hover:border-renascence_support rounded-md p-1`}
              >
                <h3>{SubAreaEnum.ESPORTE}</h3>
              </li>
              <li
                onClick={() => toggleSubArea(SubAreaEnum.LAZER)}
                className={`cursor-pointer border-2 ${subArea === SubAreaEnum.LAZER ? 'border-renascence_support' : 'border-transparent'} hover:border-renascence_support rounded-md p-1`}
              >
                <h3>{SubAreaEnum.LAZER}</h3>
              </li>
            </ul>
            <ul className={'flex flex-col mt-8 xl:mt-4 gap-4 ml-2'}>
              {subArea === SubAreaEnum.ESPORTE
                ? esporteAreas.map((area, index) => (
                    <li
                      onClick={() => changeAreaContent(area)}
                      key={index}
                      className={`cursor-pointer border-b-2 w-fit ${areaContent.title === area.title ? 'border-renascence_support' : 'border-transparent'} hover:border-renascence_support`}
                    >
                      <h5>{area.title}</h5>
                    </li>
                  ))
                : lazerArea.map((area, index) => (
                    <li
                      onClick={() => changeAreaContent(area)}
                      key={index}
                      className={`cursor-pointer border-b-2 w-fit ${areaContent.title === area.title ? 'border-renascence_support' : 'border-transparent'} hover:border-renascence_support`}
                    >
                      <h5>{area.title}</h5>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        <div className={'w-full xl:w-[65dvw]  h-full flex'}>
          <div className={' w-full   h-full min-h-[70dvh]  relative'}>
            <Image src={'/home-banner-bg.png'} alt={''} fill className={'xl:rounded-[70px]'} />
          </div>
        </div>
        <div
          className={
            'hidden xl:block absolute w-[6rem] h-[6rem] bottom-[-2.5rem] left-1/2 transform -translate-x-1/2  z-10'
          }
        >
          <Image
            src={'/renascence/folha-white.png'}
            alt={'folha verde'}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/*STATUS OBRA*/}
      <section
        className={
          'flex flex-col xl:flex-row gap-8 bg-white w-screen h-full min-h-screen xl:pl-10 py-4 xl:py-20 relative justify-between overflow-x-hidden'
        }
      >
        <div className={'w-full xl:w-[65dvw]  h-full flex'}>
          <div className={' w-full h-full min-h-[65dvh]  relative'}>
            <Image src={'/home-banner-bg.png'} alt={''} fill className={''} />
          </div>
        </div>
        <div
          className={
            'w-full xl:w-[30%] h-fit bg-renascence xl:rounded-3xl p-10 text-renascence_support'
          }
        >
          <div className={'flex gap-4 items-center justify-center'}>
            <div className="w-[50%] bg-renascence_support h-6 gap-2 rounded-full overflow-hidden flex  py-1 px-1">
              <div
                className="bg-renascence rounded-full h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-medium text-[2rem] width-[2rem]">{progress}%</span>
          </div>

          <div className={'flex flex-col h-full  mt-8 px-2 xl:px-10 justify-between'}>
            <div className={'flex flex-col text-center'}>
              <h3 className={'font-black text-[2rem] xl:text-[2.5rem]'}>OBRA EM FASE I </h3>
              <h3 className={'text-[1.2rem]'}>INFRAESTRUTURA URBANA</h3>
            </div>
            <div className={'mt-8 text-center'}>
              <ul className={'flex flex-col gap-2'}>
                <li>Terraplanagem</li>
                <li>Drenagem Pluvial</li>
                <li>Água e Esgoto</li>
                <li>Pavimentação</li>
                <li>Rede Elétrica</li>
              </ul>
            </div>
            <div className={'flex flex-col mt-16 text-center font-black'}>
              <h4>ESTIMATIVA DE ENTREGA</h4>
              <h5>15/11/2025</h5>
            </div>
            <span className={'mt-20 text-center'}>Atualizado em 06/08/2025</span>
          </div>
        </div>
      </section>

      {/*MAP EMPREEDIMENTO*/}
      <section
        className={'h-screen w-screen py-8 xl:px-14 text-renascence_support overflow-x-hidden'}
      >
        <div
          className={
            'h-full w-full bg-renascence xl:rounded-[50px] flex flex-col items-center xl:p-8 xl:px-40'
          }
        >
          <h2 className={'text-[2.5rem] font-bold'}>Localização</h2>
          <div className={' w-full h-full  relative mb-10 xl:mb-20 mt-6'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.346180486095!2d-50.39752999904089!3d-22.665438025885535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949539006727be1f%3A0x7bf02f4b24a49561!2sResidencial%20Renascence%20II!5e0!3m2!1sen!2sbr!4v1754522404731!5m2!1sen!2sbr"
              className={'w-full h-full xl:rounded-[40px]'}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <footer
        className={'flex flex-col h-full xl:h-screen w-screen text-renascence overflow-x-hidden'}
      >
        <div
          className={
            'flex flex-col w-full h-[75dvh] xl:h-full items-center justify-between p-2 xl:p-0'
          }
        >
          <div className={'hidden xl:block w-full h-full xl:h-[50%] relative'}>
            <Image
              src={'/renascence/logo-green.png'}
              alt={'Logo Renascence'}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className={'xl:hidden w-full h-full xl:h-[50%] relative'}>
            <Image
              src={'/renascence/logo-green.png'}
              alt={'Logo Renascence'}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={'xl:w-[35%] text-center'}>
            <p className={'xl:text-[1.2rem]'}>
              ADQUIRA SEU LOTE DO RESIDENCIAL RENASCENCE II E CONSTRUA SUA CASA DOS SONHOS COM A
              DUAÇO!
            </p>
          </div>
          <div className={'mt-10 xl:mt-0'}>
            <ul className={'flex flex-col gap-8 xl:gap-2 text-[0.8rem] xl:text-[1rem]'}>
              <li
                className={
                  'flex cursor-pointer w-fit border-b-1 border-transparent hover:border-renascence'
                }
              >
                <Link
                  className={'flex gap-2 items-center'}
                  href={'https://maps.app.goo.gl/gt9hsTkR1QQu2CEm6'}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
                    />
                    <path
                      fill="currentColor"
                      d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
                    />
                  </svg>
                  <span>
                    Av. Rui Barbosa - Centro, Assis/SP / Av. do Manganês, 451 - Distrito Industrial,
                    Assis/SP
                  </span>
                </Link>
              </li>
              <li
                className={
                  'flex cursor-pointer w-fit border-b-1 border-transparent hover:border-renascence'
                }
              >
                <Link
                  className={'flex gap-2 items-center'}
                  href={'https://wa.me/5518997655987'}
                  target={'_blank'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <span>(+55) 18 3421-1000 / (+55) 18 99765-5987</span>
                </Link>
              </li>
              <li
                className={
                  'flex cursor-pointer w-fit border-b-1 border-transparent hover:border-renascence'
                }
              >
                <Link
                  className={'flex gap-2 items-center'}
                  href={'https://duaco.com.br/'}
                  target={'_blank'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5 14H6v-7h7zm5 0h-3v-7h3zm0-9H6V6h12z"
                    />
                  </svg>
                  <span>https://duaco.com.br/</span>
                </Link>
              </li>
              <li
                className={
                  'flex cursor-pointer w-fit border-b-1 border-transparent hover:border-renascence'
                }
              >
                <Link
                  className={'flex gap-2 items-center'}
                  href={'http://instagram.com/construtoraduaco'}
                  target={'_blank'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>{' '}
                  <span>@construtoraduaco</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            'flex flex-row  h-[50dvh] xl:h-[30%] w-full bg-renascence mt-10 justify-between px-2 xl:px-16'
          }
        >
          <div className={'h-full w-full justify-start items-center hidden xl:flex'}>
            <Link
              href={'https://duaco.com.br/'}
              target={'_blank'}
              className={'relative w-[30%] h-[80%] '}
            >
              <Image
                src={'/renascence/duaco.png'}
                alt={'Logo Duaco'}
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div
            className={
              'h-full w-full xl:w-[50%]  text-renascence_support items-center justify-center xl:justify-end'
            }
          >
            <Link
              href={'/'}
              className={
                'w-full h-full flex flex-col xl:flex-row text-renascence_support  items-center   xl:text-center justify-center xl:justify-end'
              }
            >
              <h6 className={'font-bold 2xl:text-[1.2rem] text-center xl:text-justify'}>
                Este site foi produzido com a tecnologia
              </h6>
              <div className={'relative w-full xl:w-[20%] mt-10 xl:mt-0 h-[20%] xl:h-[40%] '}>
                <Image
                  src={'/logo.png'}
                  alt={'Logo Duaco'}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
