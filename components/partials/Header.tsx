'use client'

import Link from "next/link";
import Image from "next/image";

import GeneralNav from "./nav";
import useResizer from "@/hooks/useResizer";

export default function Header() {
	
	const isMobile = useResizer()

	return (
		<header className='relative p-2 py-2 md:py-3 text-white z-10'>
			<div className='container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-xl'>
				<div className='flex justify-between items-center'>
					<div className='sm:flex sm:items-baseline sm:flex-wrap sm:justify-start'>
						<div className='text-4xl text-white font-semibold cursor-pointer'>
							<Link href="/">		
								<Image
									src='/logo.svg'
									alt='TRC Sports'
									width={170}
									height={36}
								/>
							</Link>
						</div>
					</div>
					
					{!isMobile ?
						<GeneralNav/>:
						<GeneralNav type="mobile"/>
					}
				</div>
			</div>
		</header>
	);
}
