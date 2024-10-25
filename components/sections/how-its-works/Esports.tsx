"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";



const Esports = () => {

  const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  
  return (

    <section ref={ref} className="relative flex flex-col space-y-12 justify-center py-24 px-6">


      {inView &&
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center animate-fade-in-down-2">Los Esports, cómo experiencia digital</h2>
      }

      <div className="grid md:grid-cols-2 gap-x-2 gap-y-12 container mx-auto px-4 md:px-4 lg:px-4 xl:px-0 max-w-screen-xl">

      {inView &&
        <div className="flex flex-col space-y-8 justify-center animate-fade-in-down-2">

          <p className="text-xl text-gray-700">A través de torneos de videojuegos online (“Esports”) diseñados para potenciar el vínculo entre tus colaboradores.</p>
          <p className="text-xl text-gray-700">Los Esports o deportes electrónicos son competiciones de videojuegos virtuales 100% online (ej. Fifa 2021)</p>

        </div>
      }

        <div className="md:mx-auto">

        {inView &&
          <figure className="mx-4 md:mx-2 animate-fade-in-down-2">
            <Image
              src='/img/home-how-it-works.svg'
              alt=""
              width={741}
              height={421}
              />
          </figure>
        }

        </div>

      </div>

    </section>
   
          
  );
}

export default Esports;