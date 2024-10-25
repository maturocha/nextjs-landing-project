"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Button from "@/components/elements/ui/Button";

const TalkSection = () => {

  const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section ref={ref} className="relative py-10 md:py-32 bg-white">

      {inView &&

        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 container mx-auto py-12 px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl">

          <div className="md:mx-auto px-8 mt-8">

              <figure className="animate-fade-in-down-1">
                <Image
                  src='/img/home-conversemos.svg'
                  alt=""
                  width={298}
                  height={308}
                  />
              </figure>

          </div>

          <div className="flex flex-col space-y-6 items-center sm:items-start">

            <h2 className="font-bold text-primary tracking-normal leading-none text-3xl md:text-5xl animate-fade-in-down-1 animation-delay-1">Incorpora seguros de vida y/o salud e impacta el bienestar</h2>

            <p className="text-3xl font-semibold text-gray-600 animate-fade-in-down-1 animation-delay-1">Recibe TRC Sports sin costo adicional.</p>

            <Button className="w-fit text-xl animate-fade-in-down-1 animation-delay-2">Conversemos</Button>

          </div>

        </div>
    }

        <figure className="hidden md:block absolute -right-48 md:-right-24 -bottom-24 md:-bottom-36">
          <Image
            src='/img/lefts_miscelanea.svg'
            alt=""
            width={350}
            height={400}
            />
        </figure>

    </section>
   
          
  );
}

export default TalkSection;