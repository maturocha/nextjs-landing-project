"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ContactInscription from "@/components/sections/contact/ContactFormInscription";
import ContactClubForm from "@/components/sections/contact/ContactFormClub";

import Ilustration from 'public/img/ilus/ourproposal-1.svg'
import IlustrationClub from 'public/img/ilus/how-its-works.svg'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";


const ContactSection = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {});
    const inView = !!entry?.isIntersecting;

    const [contactType, setContactType] = useState("inscription");

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = `Hola, necesito más información respecto de los clubes digitales de trcsports.com`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    useEffect(()=>{
        const query = new URLSearchParams(window.location.search);
        query.has('code') ? setContactType("club") : setContactType("inscription")
    }, []);

    return (
        <section ref={ref} id="contacto" className={`lg:bg-pattern-white bg-transparent min-h-[100vh] bg-rigth bg-cover flex flex-col items-center justify-center gap-8 pt-20 ${contactType === "club" ? "pb-16" : "pb-24"}`}>

            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <div className="flex w-full md:w-5/6 lg:w-2/3 justify-center items-center lg:items-start lg:gap-12 xl:gap-16 gap-4 flex-col lg:flex-row">
                    <div className="flex flex-col gap-6 w-5/6 xl:w-1/2">
                        <article className="flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            ¡Comienza tu revolución digital hoy!
                            </h2>
                        </article>

                        <p className={`text-lg text-gray-900 lg:text-gray-700 ${inView && "animate-fade-in-down-2"}`}>
                        Estamos aquí para ayudarte a llevar el aprendizaje STEM al siguiente nivel. ¡Contáctanos hoy mismo y descubre cómo podemos colaborar!
                        </p>

                        <div className={`lg:flex hidden items-center justify-center w-full lg:pt-8 lg:pr-12 ${inView && "animate-fade-in-down-2"}`}>
                                <Image
                                        alt=""
                                        src={IlustrationClub}
                                        priority
                                        width={350}
                                        height={350}
                                    />

                        </div>
                    </div>

                    <div className={`w-5/6 xl:w-1/2 flex flex-col items-center justify-center ${inView && "animate-fade-in-down-2"}`}>

                        <div className={`flex w-full pt-4 gap-2 md:gap-4 lg:gap-4 ${inView && "animate-fade-in-down-1"}`}>
                            <button
                                className={`flex flex-1 px-1 justify-center items-center shadow font-semibold rounded py-1 ${contactType === "inscription"
                                        ? "bg-violet-water text-primary"
                                        : "bg-gray-100 hover:bg-violet-water text-primary"
                                    }`}
                                onClick={() => setContactType("inscription")}
                            >
                                Soy docente
                            </button>
                            <button className={`flex flex-1 px-1 justify-center items-center shadow font-semibold rounded py-1 ${contactType === "club"
                                    ? "bg-violet-water text-primary"
                                    : "bg-gray-100 hover:bg-violet-water text-primary"
                                }`}
                                onClick={() => setContactType("club")}>Soy estudiante</button>
                        </div>

                        {contactType === "club" ?
                            <ContactClubForm background="transparent" italic={false} notPadding={true} /> :
                            <ContactInscription />}
                    </div>
                </div>
            </div>

            <div className="px-6 lg:pt-8">
                <p className='text-gray-800 font-light italic tracking-normal leading-none md:mt-0'>¿No puedes esperar y necesitas conversar con nosotros ya? Comunicate con nuestro equipo de ventas <a href={whatsappUrl} target="_blank" className='cursor-pointer my-2 text-pink-dark hover:text-pink-default italic hover:underline'>aquí.</a></p>
            </div>
        </section>
    );
};

export default ContactSection;
