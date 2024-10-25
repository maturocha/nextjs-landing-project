"use client"

import { useRef } from "react";

import Image from "next/image"
import Link from "next/link";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Button from "@/components/elements/ui/Button";
import TabsHome from "@/components/elements/tabs/TabsHowItsWorks";


const OurProposal = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  const TabsInfo:any = [
    {
      title: 'Red Social exclusiva',
      cols: <>
                <figure className="h-52 md:h-72 w-auto relative animate-fade-in-down-1">
          <Image
            src='/img/ilus/ourproposal-1.svg'
            alt=""
            fill
            />
        </figure>
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 text-2xl tick-list list-inside md:list-outside leading-none">
          <li><span className="text-base md:text-xl">URL único.</span></li>
          <li><span className="text-base md:text-xl">Log In Brandeado.</span></li>
        </ul>
      </>
    },
    {
      title: '100% en la nube',
      cols: <>
                <figure className="h-52 md:h-72 w-auto relative animate-fade-in-down-1">
        <Image
          
          src='/img/ilus/ourproposal-2.svg'
          alt=""
          fill
          />
      </figure>
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 text-2xl tick-list list-inside md:list-outside leading-none md:leading-tight">
         <li><span className="text-base md:text-xl">No requiere integraciones.</span></li>
         <li><span className="text-base md:text-xl">Cuenta con asistencia online.</span></li>
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
        <ul className="flex flex-col justify-center animate-fade-in-down-1 space-y-2 text-gray-700 text-2xl tick-list list-inside md:list-outside leading-none md:leading-tight">
          <li><span className="text-base md:text-xl">Presente tanto en desktop como mobile.</span></li>
          <li><span className="text-base md:text-xl">Utilizado como plataforma de entretenimiento, comunicación y dar visibilidad a beneficios.</span></li>
       </ul>
      </>
    }
  ]
  
  return (

    <section ref={ref} className="relative bg-white py-20 md:py-32">

      {inView &&
        <>
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center animate-fade-in-down-2">Nuestra plataforma</h2>
          <p className="text-base md:text-xl text-primary text-center animate-fade-in-down-2">Ingreso exclusivo con tu marca, sin integraciones y multiplataforma.</p>

          <div className="md:max-w-screen-md mx-auto flex flex-col space-y-8">
              <TabsHome
                tabs={TabsInfo}
              />

            <Button className="w-fit mx-auto text-center animate-fade-in-down-2">
                <Link href="/como-funciona">
                ¿Cómo funciona?
                </Link>
            </Button>
          </div>

         

        </>

      }

    </section>
   
          
  );
}

export default OurProposal;