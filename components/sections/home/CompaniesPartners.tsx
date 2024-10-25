"use client"

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import GeekAcademy from 'public/img/companies/4GeekAcademy.png';
import AcidLabs from 'public/img/companies/acidLabs.png';
import BUK from 'public/img/companies/buk.png';
import CodingDojo from 'public/img/companies/codingDojo.png';
import CornershopByUber from 'public/img/companies/cornershopByUber.png';
import CruzVerde from 'public/img/companies/cruzVerde.png';
import Dell from 'public/img/companies/dell.png';
import DesafioLatam from 'public/img/companies/desafioLatam.png';
import Escalab from 'public/img/companies/escalab.png';
import Fallabela from 'public/img/companies/fallabela.png';
import Homecenter from 'public/img/companies/homecenter.png';
import IMed from 'public/img/companies/iMed.png';
import Linets from 'public/img/companies/linets.png';
import Linio from 'public/img/companies/linio.png';
import Poliglota from 'public/img/companies/poliglota.png';
import Rankmi from 'public/img/companies/rankmi.png';
import SimpliRoute from 'public/img/companies/simpliRoute.png';
import Tenpo from 'public/img/companies/tenpo.png';
import UPlanner from 'public/img/companies/u-Planner.png';

const CompaniesPartners = () => {
	const animation = { duration: 9000, easing: (t: number) => t };

	const [refCallback] = useKeenSlider<HTMLElement>({
		loop: true,
		drag: false,
		mode: 'free',
		renderMode: 'performance',

		slides: {
			perView: 6,
			spacing: 10,
		},
		breakpoints: {
			"(max-width: 400px)": {
			  slides: { perView: 3, spacing: 15 },
			},
			"(min-width: 1000px)": {
			  slides: { perView: 4, spacing: 10 },
			},
		  },
		created(s) {
			s.moveToIdx(2, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});

	const partnersData = [
		{
			name: '4 Geek Academy',
			img: GeekAcademy,
		},
		{
			name: 'Acid Labs',
			img: AcidLabs,
		},
		{
			name: 'BUK',
			img: BUK,
		},
		{
			name: 'Coding Dojo',
			img: CodingDojo,
		},
		{
			name: 'Cornershop By Uber',
			img: CornershopByUber,
		},
		{
			name: 'Cruz Verde',
			img: CruzVerde,
		},
		{
			name: 'Dell',
			img: Dell,
		},
		{
			name: 'Desafio Latam',
			img: DesafioLatam,
		},
		{
			name: 'Escalab',
			img: Escalab,
		},
		{
			name: 'Falabella',
			img: Fallabela,
		},
		{
			name: 'Homecenter',
			img: Homecenter,
		},
		{
			name: 'iMed',
			img: IMed,
		},
		{
			name: 'Linets',
			img: Linets,
		},
		{
			name: 'Linio',
			img: Linio,
		},
		{
			name: 'Poliglota',
			img: Poliglota,
		},
		{
			name: 'Rankmi',
			img: Rankmi,
		},
		{
			name: 'Simpli Route',
			img: SimpliRoute,
		},
		{
			name: 'Tenpo',
			img: Tenpo,
		},
		{
			name: 'U-Planner',
			img: UPlanner,
		},
	];

	return (
		<section className="relative flex flex-col space-y-12 md:space-y-8 justify-center py-24 md:py-32 px-6">
			<div>
				<h2 className="md:max-w-screen-md mx-auto text-2xl md:text-3xl font-bold text-primary text-center animate-fade-in-down-2">
					Más de 30 empresas han jugado con nosotros
				</h2>
			</div>

			<ul ref={refCallback} className="keen-slider flex items-center">
				{partnersData.map((item, index) => {
					return (
						<div
							key={index}
							className={`keen-slider__slide number-slide${
								index + 1
							} text-center`}>
							<Image width={150} alt={item.name} src={item.img} />
						</div>
					);
				})}
			</ul>
		</section>
	);
};

export default CompaniesPartners;

//position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;
