"use client"

import { useRef } from "react";

import Image from "next/image"

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import HeadingIconText from '@/components/elements/HeadingIconText';

const OurImpact = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

  const campaingsInfo = [
    {
      title: '56%',
      text: 'Incrementa el rendimiento académico*',
      icon:    <figure className="w-20 h-20 relative">
              <Image
                src='/img/ilus/impaction-rendimiento.svg'
                fill
                alt=""
                />
              </figure>
      
    },
    {
      title: '41%',
      text: 'Favorece sus oportunidades profesionales*',
      icon:    <figure className="w-20 h-20 relative">
              <Image
                src='/img/ilus/impaction-oportunidades.svg'
                fill
                alt=""
                />
              </figure>
      
    },
    {
      title: '20%',
      text: 'Tiene posibilidades de becas en universidades en el mundo*',
      icon:    <figure className="w-20 h-20 relative">
              <Image
                src='/img/ilus/impaction-becas.svg'
                fill
                alt=""
                />
              </figure>
      
    }
  ]

	return (
		<section
			ref={ref}
			className="relative flex flex-col space-y-12 md:space-y-8 justify-center py-24 md:py-32 px-6 bg-violet-superligth">
			{inView && (
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-primary animate-fade-in-down-2">
          Impacta académica y profesionalmente el futuro de tus alumnos
					</h2>
          <p>A través del gaming crea nuevas oportunidades de desarrollo laboral para tus alumnos</p>
				</div>
			)}

			<div className="md:max-w-screen-sm mx-auto px-12 
                      flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 
                      md:grid-cols-3">
				{inView &&
					campaingsInfo.map((item, index) => {
						return (
              <HeadingIconText
              key={index}
              title={item.title}
              text={item.text}
              className="bg-white rounded-sm shadow-xl py-12 sm:py-8 px-4 sm:px-6 animate-fade-in-down-2"
              classTitle="text-4xl font-bold text-primary"
              classText="text-base text-gray-600 leading-relaxed"
              align="vertical"
              icon={
              item.icon
              }
            />
						);
					})}
			</div>

      <p className="text-sm text-center">*Dato de Extreme e-campus new worldwide, indica que el 20% de establecimiento tiene un programa basado en juegos digitales y que un 70% esta considerando tenerlo. https://www.ecampusnews.com/</p>
		</section>
	);
};

export default OurImpact;
