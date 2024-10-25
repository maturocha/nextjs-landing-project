"use client"

import { useRef } from "react";

import Link from "next/link";
import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Button from "@/components/elements/ui/Button";
import { FaRegCalendar } from "react-icons/fa";

const OurOnboarding = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting
  
  return (

    <section ref={ref} className="relative py-10 md:py-32 bg-white flex flex-col md:flex-row items-center md:space-x-8 container mx-auto py-12 px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl">

      {inView && <>

          <div className="flex flex-col space-y-2 items-center sm:items-start text-center md:text-left">

            <h2 className="font-bold text-primary tracking-normal leading-none text-2xl md:text-3xl animate-fade-in-down-1 animation-delay-1">Nuestro Onboarding es prácticamente instantáneo</h2>

            <p className="text-base md:text-2xl text-primary animate-fade-in-down-1 animation-delay-1">y no requiere gestión por parte de RRHH</p>

            <Button className="w-fit text-xl animate-fade-in-down-2">
              <Link href="/contacto">
                <a className="flex items-center space-x-2">
                    <span>Contactanos</span>
                </a>
              </Link>
            </Button>

          </div>

          <div className="md:mx-auto px-8 mt-8 flex flex-row space-x-8 items-center">

            <figure className="animate-fade-in-down-1">
              <Image
                src='/img/icon-multiplayer.svg'
                alt=""
                width={140}
                height={140}
                />
            </figure>

            <div className="border-solid border rounded-xl border-primary py-2 px-4 md:p-6 text-primary text-center animate-fade-in-down-1">
              <p className="text-xl">Tus colaboradores on line</p>
              <p className="text-2xl font-semibold">24 horas</p>
            </div>

        </div>

    </>

    }

    </section>
   
          
  );
}

export default OurOnboarding;