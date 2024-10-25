"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import TabsHome from "@/components/elements/tabs/TabsHowItsWorks";


const OurPlatform = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  const TabsInfo:any = [
    {
      title: 'Efectos de Red',
      cols: <>
                <figure className="h-52 md:h-72 w-auto relative animate-fade-in-down-1">
          <Image
            src='/img/ilus/our-platform-1.svg'
            alt=""
            fill
            />
        </figure>
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 tick-list list-inside md:list-outside leading-none">
          <li>Más actividades.</li>
          <li>Nuevos desafíos.</li>
        </ul>
      </>
    },
    {
      title: 'En la nube',
      cols: <>
                <figure className="h-52 md:h-72 w-auto relative animate-fade-in-down-1">
        <Image
          
          src='/img/ilus/ourproposal-2.svg'
          alt=""
          fill
          />
      </figure>
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 tick-list list-inside md:list-outside leading-none md:leading-tight">
         <li>No requiere integraciones.</li>
         <li>Cuenta con asistencia online.</li>
        </ul>
      </>
    },
    {
      title: 'Multiplataforma',
      cols: <>

<figure className="h-52 md:h-72 w-auto relative animate-fade-in-down-1">
          <Image
            src='/img/ilus/ourproposal-3.svg'
            alt=""
            fill
            />
        </figure>
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 tick-list list-inside md:list-outside leading-none md:leading-tight">
          <li>Presente tanto en desktop como mobile.</li>
          <li>Utilizado como plataforma de entretenimiento, comunicación y dar visibilidad a beneficios.</li>
       </ul>
      </>
    }
  ]
  
  return (

    <section ref={ref} className="relative bg-white py-20 md:py-24">

      {inView &&
        <>
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center animate-fade-in-down-2">Nuestra plataforma</h2>
          <p className="text-base md:text-xl text-primary text-center animate-fade-in-down-2">Dashboard propio, sin integraciones y multiplataforma.</p>

          <div className="md:max-w-screen-md mx-auto flex flex-col space-y-8">
              <TabsHome
                tabs={TabsInfo}
              />
          </div>

         

        </>

      }

    </section>
   
          
  );
}

export default OurPlatform;