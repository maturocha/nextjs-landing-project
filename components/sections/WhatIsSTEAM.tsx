"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import SteamIlust from 'public/img/steam.svg';

const WhatIsSTEAM = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting


	return (
		<section ref={ref} className="relative bg-white flex flex-col justify-center space-y-12 py-8 px-8 mx-auto">

		{inView &&
  
		  <div className="flex flex-col space-y-2 items-center gap-4">
			<h2 className="text-2xl md:text-4xl font-bold text-primary text-center animate-fade-in-down-2">¿Qué es STEAM?</h2>
			<p className="text-base md:text-xl text-gray-700 text-center animate-fade-in-down-2">STEAM, por sus siglas en inglés, representa las disciplinas de:</p>
			<figure className="h-20">
				<Image alt="Steam list" src={SteamIlust} />
			</figure>
		  </div>
  
		}
		
		{inView &&
			<div className="text-base md:text-xl text-center flex flex-col space-y-2">
				<p>
					Estas carreras son consideradas las del futuro, con los mejores salarios y mayores oportunidades de empleo. Su enseñanza e incorporación a través de talleres extraprogramáticos, en conjunto con los juegos electrónicos, tienen una estrecha relación con los profesionales que finalmente se desarrollan en estas áreas.
				</p>
			</div>
  
		}
  
	  </section>

	);
};

export default WhatIsSTEAM;
