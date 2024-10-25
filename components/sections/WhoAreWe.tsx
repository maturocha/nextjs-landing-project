import RowImageTitleText from "@/components/elements/RowImageTitleText";
import Ilustration from 'public/img/ilus/university-home-our-proposal.svg';


const WhoAreWe = () => {
	return (
		<RowImageTitleText
			id="nosotros"
			ilustration={Ilustration}
			background="bg-violet-superligth"
			title={{
				text: "Nosotros",
				color: 'text-primary'
			}}
			content={
				<div className='text-base text-gray-700'>

					<p>
						Somos TRC Sports, parte de TRC GROUP, líder en capital humano y profesionales para el futuro laboral, con más de 10 años de experiencia.
					</p>
					<p>
					TRC Sports es el aliado tecnológico de colegios, apoderados y profesores que buscan involucrar a sus alumnos para las carreras del futuro de una manera entretenida, inclusiva y colaborativa. Para ello ofrecemos un taller extraprogramático que involucra aprendizaje, despertar vocacional y deportes electrónicos todo en uno.
					</p>
					
				</div>
			}
		/>
	);
};

export default WhoAreWe;