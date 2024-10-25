"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import HeadingIconText from "@/components/elements/HeadingIconText";

const ActionSection = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section ref={ref} className="relative bg-gray-100 flex flex-col space-y-12 md:space-y-24 justify-center py-24 md:py-32 px-6">

      {inView &&
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center animate-fade-in-down-2">Una acción al día para la creación de impacto</h2>
      }

      <div className="grid md:grid-cols-3 gap-x-2 gap-y-4 container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl">

      <figure className="hidden md:block absolute -right-48 md:-right-24 md:-top-48">
          <Image
            src='/img/lefts_miscelanea.svg'
            alt=""
            width={350}
            height={400}
            />
        </figure>

        <div className="flex flex-col space-y-12">

        {inView &&
          <HeadingIconText
            title="Experiencia"
            text="Traducimos las campañas en acción mejorando la presencia de la marca empleadora con el colaborador"
            icon={
              
              <figure className="w-24 h-24 relative">
                <Image
                  src='/img/actions-icon_experience.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="right"
            className="animate-fade-in-down-1"
            
          />
        }

          {inView &&
            <HeadingIconText
            title="Impacto"
            text="Toda campaña tiene un impacto, el cual se ve reflejado en informes de participación a través de inteligencia de negocios de la plataforma"
            icon={
              <figure className="w-24 h-24 relative">
                <Image
                  src='/img/actions-icon_impact.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="right"
            className="animate-fade-in-down-1"
           
          />
        }

        </div>

        <div className="flex flex-col items-center justify-center">
        {inView &&
            <figure className="py-4 px-2 animate-fade-in-down-1">
              <Image
                src='/img/actions-1.svg'
                alt=""
                width={245}
                height={253}
                />
            </figure>
          }
        </div>

        <div className="flex flex-col space-y-12">
        {inView &&

          <HeadingIconText
            title="Juego"
            text="Al plantearlo de manera lúdica facilitamos la entrega de la experiencia a potenciar"
            icon={
              <figure className="w-24 h-24 relative">
                <Image
                  src='/img/actions-icon_game.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="left"
            className="animate-fade-in-down-1"
          />
        }

          {inView &&

          <HeadingIconText
            title="Vinculación"
            text="El reforzamiento positivo por medio de nuestro juego, al ser sostenido en el tiempo, permite incrementar la relación del colaborador con la empresa"
            icon={
              <figure className="w-24 h-24 relative">
                <Image
                  src='/img/actions-icon_vinc.svg'
                  fill alt=""
                  />

              </figure>
            }
            align="left"
            className="animate-fade-in-down-1"
          />
        }

        </div>

      </div>

    </section>
   
          
  );
}

export default ActionSection;