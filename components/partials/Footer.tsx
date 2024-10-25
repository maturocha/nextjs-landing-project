import Image from "next/image";

const Footer = ({ prefooter = true }: { prefooter?: boolean }) => {

	const currentYear = new Date().getFullYear();

	return (
		<footer>
			{prefooter && (
				<section className='bg-blue-purple bg-footer-pattern bg-left md:bg-rigth bg-cover py-24'>
					<div className='flex flex-col justify-around md:flex-row space-y-8 md:space-x-8 md:max-w-screen-xl px-6 mx-auto items-center'>
						<figure className='mx-12 md:mx-2'>
							<Image
								alt="Logo"
								src='/logo-white.svg'
								width={300}
								height={78}
							/>
						</figure>
						<div className='flex flex-col space-y-6 items-center md:items-start'>
							<ul className='flex space-x-8 md:space-x-6'>
								<li>
									<a
										href='https://www.instagram.com/trc_sports/'
										target='_blank'
										rel="noopener noreferrer"
										title='Seguinos en instagram'>
										<Image
											alt="Logo Instagram"
											src='/img/instagram-logo-rose.svg'
											width={28}
											height={28}
										/>
									</a>
								</li>
								<li>
									<a
										href='https://www.linkedin.com/company/trcsports/'
										target='_blank'
										rel="noopener noreferrer"
										title='Seguinos en Linkedin'>
										<Image
											alt="Logo Linkedin"
											src='/img/linkedin-logo-rose.svg'
											width={28}
											height={28}
										/>
									</a>
								</li>
								<li>
									<a
										href='https://discord.com/invite/maEJeZ4uk8'
										target='_blank'
										rel="noopener noreferrer"
										title='Unite a nuestro Discord'>
										<Image
											alt="Logo Discord"
											src='/img/discord-logo-rose.svg'
											width={28}
											height={28}
										/>
									</a>
								</li>
							</ul>
							<div className='flex flex-col text-sm'>
								<a
									className='text-white hover:text-pink-default'
									href='mailto:karlreimann@trcsports.com'>
									 karlreimann@trcsports.com
								</a>
								<a
									className='text-white hover:text-pink-default'
									href='tel:56951666869'>
									+56 9 5166 6869
								</a>
							</div>
							<address className='text-white'>
								Apoquindo 4700, Piso 11.
								<br />
								Las Condes, Santiago de Chile.
							</address>
						</div>
					</div>
				</section>
			)}
		</footer>
	);
};

export default Footer;
