"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Button from "@/components/elements/ui/Button";
import { FaSlack } from "react-icons/fa";

const Esports = () => {

  const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section ref={ref} className="relative bg-gray-100 flex items-center justify-center space-x-12 py-24 px-12 mx-auto">

    {inView && <>

        <div className="flex flex-col space-y-4 items-center sm:items-start text-center md:text-left">

          <h2 className="font-bold text-primary tracking-normal leading-none text-2xl md:text-3xl animate-fade-in-down-1 animation-delay-1">Únete a nuestra comunidad en Slack</h2>

          <Button className="w-fit text-xl animate-fade-in-down-2">
           
            <a className="flex space-x-2" rel="noopener noreferrer" target="_blank" href="https://join.slack.com/t/trcsports-comunidad/shared_invite/zt-1och5dfvq-X0y5jpPxu3b07GfemaoOqg">
              <FaSlack className="text-white self-center" />
              <span>Unirse ahora!</span>
            </a>
           
          </Button>
          
        </div>

        <figure className="animate-fade-in-down-1">
          <Image
            src='/img/icon-multiplayer.svg'
            alt=""
            width={140}
            height={140}
            />
        </figure>

  </>

  }

  </section>
 
   
          
  );
}

export default Esports;