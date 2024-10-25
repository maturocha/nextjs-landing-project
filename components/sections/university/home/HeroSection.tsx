'use client'

import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation

import Ilustration from 'public/img/ilus/university-home-hero.svg'
import HeroTitleImage from "@/components/elements/HeroTitleImage";

const HeroSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {

    router.push('#contacto');

  };

  return (
    <HeroTitleImage
      className="py-16"
      background="bg-pattern-1"
      title="Impacta el rendimiento escolar con nuestros Clubes Digitales STEAM para las carreras del futuro"
      subtitle="Explora un mundo de posibilidades educativas con nuestro programa de STEAM. Impulsamos el rendimiento escolar, reducimos el ausentismo y despertamos vocaciones para un futuro profesional brillante. ¡Únete a la Revolución Educativa!"
      ilustration={Ilustration}
      button={{
        style: 'tertiary',
        title: 'Comienza acá',
        onClick: () => handleButtonClick()
      }}
    />
  );
}

export default HeroSection;
