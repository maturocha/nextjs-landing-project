import Image from "next/image";
import Ilustration from "public/img/ilus/how-its-works.svg";

import Button from "@/components/elements/ui/Button";
import { FaYoutube } from "react-icons/fa";

const HeroSection = () => {
	return (
		<section className='relative py-10 md:py-28 bg-pattern-1 bg-left bg-cover bg-left sm:bg-right'>
			<div className='grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-home container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 md:max-w-screen-xl'>
				<div className='flex flex-col space-y-8'>
					<h2 className='font-bold text-white tracking-normal leading-none text-3xl md:text-4xl animate-fade-in-down-2'>
						¿Cómo funciona?
					</h2>

					<p className='text-xl text-white animate-fade-in-down-2'>
						Sports actúa como red social organizacional con puntaje por
						participar en los diferentes campeonatos y ligas de esports o juegos
						digitales.
					</p>

					<Button
						style='secondary'
						className='w-fit text-base animate-fade-in-down-2 bg-white'>
						<a
							target='_blank'
							rel="noopener noreferrer"
							href='https://www.youtube.com/watch?v=8ZcpizJ40iw'
							className='flex space-x-2 items-center'>
							<FaYoutube className='h-6 w-6' />
							<span>Ver experiencia Cornershop</span>
						</a>
					</Button>
				</div>

				<div className='md:mx-auto'>
					<figure className='mx-4 md:mx-2 animate-fade-in-down-2'>
						<Image alt="" src={Ilustration} priority />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
