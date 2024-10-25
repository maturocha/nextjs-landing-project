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
			title: '1.256',
			text: 'Horas de Transmisión',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-stop-watch.svg" fill alt="" />
				</figure>
			),
		},
		{
			title: '346',
			text: 'Semanas Jugadas',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-calendar.svg" fill alt="" />
				</figure>
			),
		},
		{
			title: '988',
			text: 'partidas totales',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-viewers.svg" fill alt="" />
				</figure>
			),
		},
		{
			title: '34',
			text: 'Empresas',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-business.svg" fill alt="" />
				</figure>
			),
		},
		{
			title: '341',
			text: 'Equipos',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-gamer.svg" fill alt="" />
				</figure>
			),
		},
		{
			title: '2',
			text: 'comentaristas',
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/icon-multiplayer.svg" fill alt="" />
				</figure>
			),
		},
	];

	return (
		<section
			ref={ref}
			className="relative flex flex-col space-y-12 md:space-y-8 justify-center py-24 md:py-32 px-6">
			{inView && (
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-primary text-center animate-fade-in-down-2">
						Nuestro Impacto
					</h2>
				</div>
			)}

			<div className="md:max-w-screen-4xl mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:flex sm:flex-wrap sm:justify-center sm:flex-row sm:space-y-4 sm:items-center sm:space-x-12">
				{inView &&
					campaingsInfo.map((item, index) => {
						return (
							<HeadingIconText
								key={index}
								title={item.title}
								text={item.text}
								classTitle="font-semibold text-blue-purple text-4xl"
								classText="text-base text-gray-800"
								align="vertical"
								className="items-center animate-fade-in-down-2"
								icon={item.icon}
							/>
						);
					})}
			</div>
		</section>
	);
};

export default OurImpact;
