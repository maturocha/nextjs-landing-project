"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import HeadingIconText from "@/components/elements/HeadingIconText";

const Vinculos = () => {

  const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  const campaingsInfo = [
    {
      title: 'Generan Conexión',
      text: 'Al existir un objetivo (torneo) en común.',
      icon:    <figure className="w-24 h-24 relative">
              <Image
                src='/img/icon-people-conected.svg'
                fill
                alt=""
                />
              </figure>
      
    },
    {
      title: 'Fomentan una identidad común',
      text: 'Al todos ser parte de un gran equipo.',
      icon:    <figure className="w-24 h-24 relative">
              <Image
                src='/img/icon-care.svg'
                fill
                alt=""
                />
              </figure>
      
    },
    {
      title: 'Logran sentido',
      text: 'al permitir aporte tanto individual como grupal.',
      icon:    <figure className="w-24 h-24 relative">
              <Image
                src='/img/icon-worldwide.svg'
                fill
                alt=""
                />
              </figure>
      
    }
  ]
  
  return (

    <section ref={ref} className="relative bg-gray-100 flex flex-col space-y-12 md:space-y-8 justify-center py-24 md:py-32 px-6">

<figure className="hidden md:block absolute -left-32 md:-top-36">
          <Image
            src='/img/form-miscelanea.svg'
            alt=""
            width={314}
            height={486}
            />
    </figure>
    

      {inView &&
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center animate-fade-in-down-2">Fortaleciendo el vínculo entre la empresa y el colaborador</h2>
          <p className="text-xl md:text-2xl text-primary text-center animate-fade-in-down-2">A través del gaming une a las diferentes generaciones de tu organizaciónes</p>
        </ div>
      }

      <ul className="md:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-16">
        { inView && campaingsInfo.map((item, index) => {
                  return ( 
                    <HeadingIconText
                    key={index}
                    title={item.title}
                    text={item.text}
                    className="bg-white rounded-3xl shadow-xl py-12 sm:py-8 px-4 sm:px-6 animate-fade-in-down-2"
                    classTitle="text-2xl md:text-xl font-semibold text-primary"
                    classText="text-xl md:text-base text-gray-600 leading-relaxed"
                    align="vertical"
                    icon={
                    item.icon
                    }
                  />
                  
              )})
            }
        </ul>

    </section>
   
          
  );
}

export default Vinculos;