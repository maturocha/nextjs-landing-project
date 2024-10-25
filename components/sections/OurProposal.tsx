"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import HeadingIconText from "@/components/elements/HeadingIconText";

const OurProposal = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section id="propuesta" ref={ref} className="relative bg-gray-100 flex flex-col space-y-12 md:space-y-24 justify-center py-20 md:py-24 px-6">

    
        <h2 className={`text-2xl md:text-4xl font-bold text-primary text-center ${inView && "animate-fade-in-down-1"}`}>
          Nuestra Propuesta
        </h2>
    

      <div className="grid md:grid-cols-3 gap-x-2 gap-y-4 container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl">

      <figure className={`hidden md:block absolute -left-32 md:-top-52 ${inView && "animate-fade-in-down-1"}`}>
          <Image
            src="/img/form-miscelanea.svg"
            alt=""
            width={350}
            height={400}
            />
        </figure>

        <div className={`flex flex-col space-y-12 ${inView && "animate-fade-in-down-2"}`}>

          <HeadingIconText
            title="Clases STEAM"
            text="Contenido con foco en el desarrollo de habilidades STEAM aplicadas al Club de Gaming"
            icon={
              
              <figure className="w-32 md:w-40 h-32 md:h-40 relative">
                <Image
                  src='/img/icons/steam-class.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="right"
            className=""
            
          />

            <HeadingIconText
            title="Charlas STEAM"
            text="Para despertar la vocación profesional de los alumnos, con invitados profesionales y expertos en la materia"
            icon={
              <figure className="w-32 md:w-40 h-32 md:h-40 relative">
                <Image
                  src='/img/icons/talks.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="right"
            className=""
           
          />

        </div>

        <div className={`hidden md:flex flex-col items-center justify-center`}>
            <figure className="py-4 px-2 ">
              <Image
                src='/img/mascota.svg'
                alt=""
                width={245}
                height={253}
                />
            </figure>
        </div>

        <div className={`flex flex-col space-y-12 ${inView && "animate-fade-in-down-2"}`}>

          <HeadingIconText
            title="Club de Gaming"
            text="Sistema único que permite unir clubes de gaming, actividades interescolares y clases steam, todo en uno"
            icon={
              <figure className="w-32 md:w-40 h-32 md:h-40 relative">
                <Image
                  src='/img/icons/gaming.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="left"
            className=""
          />


          <HeadingIconText
            title="Beneficios"
            text="Creamos beneficios para los Alumnos, Apoderados, Colegios, Profesores y para la Comunidad"
            icon={
              <figure className="w-32 md:w-40 h-32 md:h-40 relative">
                <Image
                  src='/img/icons/benefits.svg'
                  fill 
                  alt=""
                  />

              </figure>
            }
            align="left"
            className=""
          />

        </div>

      </div>

    </section>
   
          
  );
}

export default OurProposal;