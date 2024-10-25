"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import HeadingIconText from '@/components/elements/HeadingIconText';

const DigitalActivities = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  const campaingsInfo = [
    {
      text: 'Encontrar un profesor que supervise las actividades', 
    },
    {
      text: 'Recluta los equipos', 
    },
    {
      text: 'Enrola los equipos en el sistema trcsports', 
    },
    {
      text: 'Planifica detalles (juegos, modalidades)', 
    },
    {
      text: 'Comunicar la participación', 
    },
    {
      text: 'Desarrollar las actividades', 
    }
  ]

	return (
		<section
			ref={ref}
			className="relative flex flex-col space-y-12 md:space-y-8 justify-center py-24 md:py-32 px-6">
			{inView && (
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-primary animate-fade-in-down-2">
          Como crear un programa de actividades digitales
					</h2>
				</div>
			)}

			<div className="md:max-w-screen-xl mx-auto md:px-36
                      flex flex-col md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 
                      md:grid-cols-[550px_1fr]">

        <ul className="flex flex-col space-y-2">
        {inView &&
					campaingsInfo.map((item, index) => {
						return (
              <li key={index} className="bg-white rounded-sm shadow-xl py-12 sm:py-8 px-4 sm:px-6 animate-fade-in-down-2">
               <span className="text-xl font-bold">{index+1}.</span> {item.text}
              </li>
						);
					})}

        </ul>

        <div className="px-8 py-12 w-fit flex flex-col items-center  self-start space-y-4 bg-white rounded-sm shadow-xl">

          <figure className="animate-fade-in-down-1">
            <Image
              src='/img/icon-multiplayer.svg'
              alt=""
              width={140}
              height={140}
              />
          </figure>

          <h3 className="text-2xl font-bold text-center">Nuestro Onboarding es prácticamente instantáneo</h3>

          <div className="border-solid border rounded-xl border-primary py-2 px-4 md:p-6 text-primary text-center animate-fade-in-down-1">
            <p className="text-xl">Tus alumnos on line</p>
            <p className="text-2xl font-semibold">24 horas</p>
          </div>

        </div>

			</div>
		</section>
	);
};

export default DigitalActivities;
