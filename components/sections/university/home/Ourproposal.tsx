'use client'

import RowImageTitleText from "@/components/elements/RowImageTitleText";
import Ilustration from 'public/img/ilus/university-home-our-proposal.svg'


const SportsSection = () => {


	return (
		<RowImageTitleText
			ilustration={Ilustration}
			background="bg-violet-superligth"
			title={{
				text:"Nuestra propuesta de valor permite:",
				color:'text-primary'
				}	
			}
			content={
				<ul className='text-base text-gray-700 tick-list flex flex-col space-y-4'>
							<li className='animate-fade-in-down-1'>
								Incrementa el rendimiento académico.
							</li>
							<li className='animate-fade-in-down-1'>
								Impacta positivamente la participación del alumnado.
							</li>
							<li className='animate-fade-in-down-1'>
								Favorece la adopción de nuevos campos académicos y laborales.
							</li>
							<li className='animate-fade-in-down-1'>
								Permite el reconocimiento interno
							</li>
						</ul>
			}

		/>
		
	);
};

export default SportsSection;
