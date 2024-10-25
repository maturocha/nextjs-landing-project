"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import HeadingIconText from "@/components/elements/HeadingIconText";

import ilus_habilidades from 'public/img/ilus/new-generation-habilidades.svg'
import ilus_creatividad from 'public/img/ilus/new-generation-creatividad.svg'
import ilus_equipo from 'public/img/ilus/new-generation-trabajo-equipo.svg'
import ilus_sociales from 'public/img/ilus/new-generation-sociales.svg'
import ilus_manojo from 'public/img/ilus/new-generation-manojo.svg'

const campaingsInfo = [
  {
    title: 'Desarrollo de Habilidades Cognitivas',
    text: 'Mejora la memoria, la atención, la concentración y la toma de decisiones. Importantes para el aprendizaje y pueden ser transferibles a otras áreas de la vida.',
    icon:  <figure className="md:w-[200px]">
            <Image
              src={ilus_habilidades}
              
              alt=""// Establece el layout como "fixed"
              />
            </figure>
    
  },
  {
    title: 'Fomento de la Creatividad',
    text: 'Estimulan la creatividad al ofrecerles la oportunidad de resolver problemas complejos de formas diversas y creativas.',
    icon:   <figure className="md:w-[200px]">
             <Image
              src={ilus_creatividad}
              
              alt=""
              />
            </figure>
    
  },
  {
    title: 'Fomento del Trabajo en Equipo',
    text: 'Útil para enseñar a los alumnos cómo trabajar en equipo, coordinarse y comunicarse de manera efectiva para lograr objetivos comunes.',
    icon:  <figure className="md:w-[200px]">
            <Image
              src={ilus_equipo}
              alt=""
              />
            </figure>
    
  },
  {
    title: 'Desarrollo de Habilidades Sociales',
    text: 'Ayuda a desarrollar habilidades sociales, como la cooperación, la empatía y la comunicación.',
    icon:  <figure className="md:w-[200px]">
            <Image
              src={ilus_sociales}
              alt=""
             
              />
            </figure>
    
  },
  {
    title: 'Mejora de la Coordinación Mano-Ojo',
    text: 'Ayuda a mejorar su coordinación mano-ojo y su capacidad para realizar múltiples tareas al mismo tiempo.',
    icon:    <figure className="md:w-[200px]">
            <Image
             src={ilus_manojo}
             alt=""
              />
            </figure>
    
  }
]

const NewGenerations = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section ref={ref} className="relative bg-white py-20 md:py-24 md:max-w-screen-xl mx-auto">

      {inView &&
        <div className="flex flex-col px-12 md:grid md:grid-cols-1fr-auto">

          <h2 className="text-xl text-center md:text-left md:text-2xl font-bold text-primary animate-fade-in-down-2">
            Acompaña el relacionamiento de las nuevas generaciones
          </h2>

          <div className="md:max-w-screen-md mx-auto flex flex-col space-y-8">

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        { inView && campaingsInfo.map((item, index) => {
                  return ( 
                    <HeadingIconText
                    key={index}
                    title={item.title}
                    text={item.text}
                    className="bg-white rounded-sm shadow-xl py-8 px-6 animate-fade-in-down-2"
                    classTitle="text-base font-semibold text-primary"
                    classText="text-sm text-gray-600 leading-relaxed"
                    align="allright"
                    icon={
                    item.icon
                    }
                  />
                  
              )})
            }
        </ul>
            
          </div>

        </div>

      }

    </section>
   
          
  );
}

export default NewGenerations;