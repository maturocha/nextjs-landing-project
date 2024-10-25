"use client"

import { useRef, useState } from "react";

import TablePrices from "@/components/elements/prices-table/components/table";
import Prices from "@/components/elements/prices-table/components/prices";
import PricesMobile from "@/components/elements/prices-table/components/pricesMobile";

import DemoRequestModal from "@/components/elements/modals/DemoRequest";
import InfoModal from "@/components/elements/modals/InfoModal";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Image from "next/image";

const Pricing = () => {
  
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {});
  const inView = !!entry?.isIntersecting;

  const [price, setPrice] = useState("Freemium");

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<any>(null);
  const [plan, setPlan] = useState<string>("Freemium");

  return (
    <section
      id="valores"
      ref={ref}
      className="relative sm:min-h-screen mx-auto bg-white flex flex-col space-y-4 md:space-y-14 justify-center px-0 py-4 lg:px-6 lg:py-8"
    >
  
      <figure className="hidden lg:block absolute -left-32 md:-top-36">
        <Image
          src="/img/form-miscelanea.svg"
          alt=""
          width={300}
          height={486}
        />
      </figure>

      <h2 style={{color: "#3D4495"}} className="text-2xl md:text-4xl font-bold text-center">
        Precios
      </h2>

      {alertMessage && <InfoModal {...alertMessage} />}
      {modalOpen && (
                <DemoRequestModal
                    setMessage={setAlertMessage}
                    closeModal={() => setModalOpen(!modalOpen)}
                    plan={plan}
                />
            )}
      
      <div className={`mx-auto flex flex-col relative w-full ${inView && "animate-fade-in-down-1"}`}>

        <div className="hidden xl:block">
          <Prices
          price={price}
          setPrice={setPrice}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          plan={plan}
          setPlan={setPlan}
          />
        </div>

        <div className="block xl:hidden">
          <PricesMobile
          price={price}
          setPrice={setPrice}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          plan={plan}
          setPlan={setPlan}
          />
        </div>

      </div>

      <div className={`hidden xl:flex justify-center ${inView && "animate-fade-in-down-2"}`}>
        <TablePrices
        price={price}
        />
      </div>

    </section>
  );
};

export default Pricing;
