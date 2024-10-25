'use client'

import { useState } from "react";

import Image from "next/image"
import Ilustration from 'public/img/home-hero-ilustration.svg'

import DemoRequestModal from "@/components/elements/modals/DemoRequest"
import InfoModal from "@/components/elements/modals/InfoModal"
import Button from "@/components/elements/ui/Button";

const HeroSection = () => {


  const [alertMessage, setAlertMessage] = useState<any>(null)
  const [modalOpen, setmodalOpen] = useState(false)
  
  return (

    <section className="relative pt-28 py-20 md:py-40 bg-home-hero-mobile md:bg-home-hero bg-cover md:bg-right">

      <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-home container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 md:max-w-screen-xl">

        <div className="flex flex-col space-y-12 justify-center">

          <h2 className="font-bold text-violet-default tracking-normal leading-none text-3xl md:text-4xl animate-fade-in-down-1">Fortalece tu engagement interno con nuestra plataforma de gaming organizacional</h2>

          <p className="text-xl md:text-xl text-gray-700 animate-fade-in-down-1">Aumenta los vínculos con tus colaboradores de forma inclusiva, remota, híbrida o presencial</p>

          <Button className="w-fit text-base animate-fade-in-down-2" onClick={() => setmodalOpen(!modalOpen)}>
                <span>Adenda una demo</span>
          </Button>


        </div>

        <div className="md:mx-auto">

          <figure className="mx-4 md:mx-2 animate-fade-in-down-2">
            <Image
              alt=""
              src={Ilustration}
              priority
              />
          </figure>

        </div>

      </div>


    {alertMessage &&
      <InfoModal {...alertMessage} />
    }

    {modalOpen && <DemoRequestModal
                                  setMessage={setAlertMessage}
                                  closeModal={() => setmodalOpen(!modalOpen)} />}

    </section>
   
          
  );
}

export default HeroSection;