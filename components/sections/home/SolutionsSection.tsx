"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import HeadingIconText from "@/components/elements/HeadingIconText";



const SolutionsSection = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  return (

    <section ref={ref} className="relative sm:min-h-screen bg-white flex flex-col justify-center space-y-12 py-24 md:py-32 px-8">

      {inView &&

        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center animate-fade-in-down-2">Distribuimos digitalmente soluciones al colaborador</h2>
          <p className="text-base md:text-xl text-gray-700 text-center animate-fade-in-down-2">Crea una experiencia positiva en tu organización: a la vez ayudas al planeta y eres reconocido por tu huella.</p>
        </div>

      }
      
      {inView &&
        <div className="grid md:grid-cols-3 gap-6 container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl">

          <div className="flex flex-col space-y-12">

            <HeadingIconText
              title="Sustentabilidad"
              text="Participa en campañas sustentables y crea un impacto con las acciones de cada colaborador."
              icon={
                  <figure className="h-20 relative">
                    <Image
                      src='/img/solutions-icon_sustentabily.svg'
                      alt=""
                      width={200}
                      height={200}
                      />
    
                  </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

            <HeadingIconText
              title="Bienestar"
              text="Entrega servicios de salud para los colaboradores"
              icon={
                <figure className="h-20 relative">
                  <Image
                    src='/img/solutions-icon_bienestar.svg'
                    width={200}
                    height={200}
                    alt=""
                    />

                </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

            <HeadingIconText
              title="Juego"
              text="Al estar construido como juego, permite crear puntajes y rankings individuales y de la organización."
              icon={
                <figure className="h-20 relative">
                  <Image
                    src='/img/solutions-icon_juego.svg'
                    alt=""
                    width={200}
                    height={200}
                    />

                </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

          </div>

          <div className=" flex-col items-center justify-center hidden md:flex">
            <figure className="animate-fade-in-down-1">
              <Image
                src='/img/solutions_ilustration.svg'
                alt=""
                width={245}
                height={253}
                />
            </figure>
          </div>

          <div className="flex flex-col space-y-12">

          <HeadingIconText
              title="Store propio"
              text="Dispone de una tienda digital que permite distribuir beneficios y convenios."
              icon={
                  <figure className="h-20 relative">
                    <Image
                      src='/img/solutions-icon_store.svg'
                      alt=""
                      width={200}
                      height={200}
                      />
    
                  </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

          <HeadingIconText
              title="Comunicación"
              text="Difunde comunicados e informaciones, visualiza reconocimientos, participaciones, encuestas y más."
              icon={
                  <figure className="h-20 relative">
                    <Image
                      src='/img/solutions-icon_comunicacion.svg'
                      alt=""
                      width={200}
                      height={200}
                      />
    
                  </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

            <HeadingIconText
              title="Red Interna"
              text="Crea interacción interna y ambiente digital exclusivo para cada organización."
              icon={
                  <figure className="h-20 relative">
                    <Image
                      src='/img/solutions-icon_red.svg'
                      alt=""
                      width={200}
                      height={200}
                      />
    
                  </figure>
              }
              align="vertical"
              className="animate-fade-in-down-1"
            />

          </div>

        </div>

      }

    </section>
   
          
  );
}

export default SolutionsSection;