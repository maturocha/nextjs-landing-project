"use client"

import { useRef } from "react";

import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import HeadingIconText from '@/components/elements/HeadingIconText';

const CountryPlayed = () => {

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const inView = !!entry?.isIntersecting

	const campaingsInfo = [
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/cl-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/co-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/pe-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/ec-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/mx-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/ur-round.svg" fill alt="" />
				</figure>
			),
		},
		{
			icon: (
				<figure className="w-16 h-16 relative">
					<Image src="/img/flags/ar-round.svg" fill alt="" />
				</figure>
			),
		},
	];

	return (
		<section
			ref={ref}
			className="bg-primary relative flex flex-col space-y-12 justify-center py-24 md:py-32 px-6">
				<div>
					<h2 className="md:max-w-screen-md mx-auto text-2xl md:text-2xl font-semibold text-white text-center ">
						Estamos presentes en todo Latinoamerica
					</h2>
				</div>

			<ul className={`mx-auto grid grid-cols-2 gap-x-12 gap-y-8 md:flex md:flex-wrap md:justify-center md:items-center md:space-x-16 ${inView && "animate-fade-in-down-1"}`}>
				{
					campaingsInfo.map((item, index) => {
						return (
							<HeadingIconText
								key={index}
								align="vertical"
								className="items-center "
								icon={item.icon}
							/>
						);
					})}
			</ul>
		</section>
	);
};

export default CountryPlayed;
