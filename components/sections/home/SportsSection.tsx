'use client'

import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/elements/ui/Button";
import { FaYoutube } from "react-icons/fa";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";


const SportsSection = () => {


	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

	return (
		<section ref={ref} className='relative bg-gray-100 py-20 md:py-32'>
			<div className='relative flex flex-col-reverse space-y-reverse space-y-12 justify-between sm:grid sm:grid-cols-2 container mx-auto px-8 md:px-8 lg:px-4 xl:px-0 md:max-w-screen-xl'>
				{inView && (
					<figure className='mx-4 md:mx-auto animate-fade-in-down-2'>
						<Image
							src='/img/home-sports-social.svg'
							alt=""
							width={410}
							height={400}
							priority
						/>
					</figure>
				)}

				<div className='flex flex-col space-y-8'>
					<h2 className='font-bold text-violet-default text-center md:text-left tracking-normal leading-none text-xl md:text-2xl animate-fade-in-down-1'>
						Nuestra propuesta para fortalecer los vínculos al interior de tu
						organización
					</h2>

					{inView && (
						<ul className='text-base text-gray-700 tick-list flex flex-col space-y-4'>
							<li className='animate-fade-in-down-1'>
								Mejorando el clima laboral
							</li>
							<li className='animate-fade-in-down-1'>
								Aumentando la retención{" "}
							</li>
							<li className='animate-fade-in-down-1'>
								Impactando directamente la rentabilidad de la empresa
							</li>
							<li className='animate-fade-in-down-1'>
								Un Facebook, modular y con puntaje por participar para favorecer
								la vinculación
							</li>
						</ul>
					)}

					<Button className='w-fit text-base animate-fade-in-down-2'>
						<a
							target='_blank'
							rel="noopener noreferrer"
							href='https://www.youtube.com/watch?v=3AesP9mASAw'
							className='flex space-x-2 items-center'>
							<FaYoutube className='h-6 w-6' />
							<span>Ver video</span>
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SportsSection;
