"use client"

import { useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import TabsHome from "@/components/elements/tabs/TabsHowItsWorks";
import HeadingIconText from "../elements/HeadingIconText";

import { schoolsBenefits, teacherBenefits, alumnsBenefits } from "data/benefits.js";

const OurBenefits = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const inView = !!entry?.isIntersecting;

  const TabsInfo = [
    {
      title: "Para los establecimientos",
      cols: (
        <>
          <ul className="w-full h-full flex flex-col md:flex-row space-x-3 space-y-3">
            {schoolsBenefits.map((item, index) => {
                  return ( 
                    <li key={index} className={`flex-1 h-100 px-12 md:px-0 ${inView && "animate-fade-in-down-1"}`}>
                      <HeadingIconText
                        key={index}
                        title={item.title}
                        text={item.text}
                        className="bg-white shadow-xl py-12 sm:py-8 px-4 h-full rounded-md"
                        classTitle="text-xl font-semibold text-primary"
                        classText="text-base text-gray-600 leading-relaxed"
                        align="vertical"
                        icon={
                          <figure className="w-24 h-24 relative">
                            <Image
                              src={item.icon}
                              fill
                              alt=""
                            />
                          </figure>
                        }
                      />
                    </li>
                    
                  
              )})

            }
            </ul>
        </>
      )
    },
    {
      title: "Para los apoderados",
      cols: (
        <>
          <ul className="w-full h-full flex flex-col md:flex-row space-x-3 space-y-3">
            {teacherBenefits.map((item, index) => {
                  return ( 
                    <li key={index} className="flex-1 h-100">
                      <HeadingIconText
                        key={index}
                        title={item.title}
                        text={item.text}
                        className="bg-white shadow-xl py-12 sm:py-8 px-4 h-full rounded-md"
                        classTitle="text-xl font-semibold text-primary"
                        classText="text-base text-gray-600 leading-relaxed"
                        align="vertical"
                        icon={
                          <figure className="w-24 h-24 relative">
                            <Image
                              src={item.icon}
                              fill
                              alt=""
                            />
                          </figure>
                        }
                      />
                    </li>
                    
                  
              )})

            }
            </ul>
        </>
      )
    },
    {
      title: "Para los alumnos",
      cols: (
        <>
          <ul className="w-full h-full flex  flex-col md:flex-row space-x-3 space-y-3">
            {alumnsBenefits.map((item, index) => {
                  return ( 
                    <li key={index} className="flex-1 h-100">
                      <HeadingIconText
                        key={index}
                        title={item.title}
                        text={item.text}
                        className="bg-white shadow-xl py-12 sm:py-8 px-4 h-full rounded-md"
                        classTitle="text-xl font-semibold text-primary"
                        classText="text-base text-gray-600 leading-relaxed"
                        align="vertical"
                        icon={
                          <figure className="w-24 h-24 relative">
                            <Image
                              src={item.icon}
                              fill
                              alt=""
                            />
                          </figure>
                        }
                      />
                    </li>
                    
                  
              )})

            }
            </ul>
        </>
      )
    },
  ];

  return (
    <section id="beneficios" ref={ref} className="relative bg-white py-20 md:py-32">
        <div className={`${inView && "animate-fade-in-down-1"}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center animate-fade-in-down-2">
            Beneficios
          </h2>
          <div className="md:max-w-screen-xl mx-auto flex flex-col space-y-8">
            <TabsHome tabs={TabsInfo} />
          </div>
        </div>
    </section>
  );
};

export default OurBenefits;
