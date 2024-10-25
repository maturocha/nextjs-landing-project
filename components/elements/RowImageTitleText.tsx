'use client'

import { useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface HeroTitleImageProps {
  id?: string,
  background: string;
  ilustration: any;
  title: {
    text: string;
    color: string;
  };
  content: any;
  button?: {
    title: string;
    style: any;
    onClick: () => any;
  }
}

const RowImageTitleText = ({ id = 'id', background, ilustration, title, content, button }: HeroTitleImageProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const inView = !!entry?.isIntersecting;

  return (
    <section ref={ref} id={id} className={`relative bg-gray-100 py-20 md:py-24 ${background} ${inView ? 'animate-fade-in-down-2' : ''}`}>
      <div className='relative flex flex-col-reverse items-center
                      space-y-reverse space-y-12 
                      justify-between 
                      sm:grid sm:grid-cols-2 
                      container mx-auto px-8 md:px-8 lg:px-4 xl:px-0 md:max-w-screen-xl'>
        <figure className='mx-4 md:mx-auto p-2 md:p-8'>
          <Image alt="" src={ilustration} priority />
        </figure>
        <div className='flex flex-col space-y-8'>
          <h2 className={`${title.color} font-bold text-center md:text-left tracking-normal leading-none text-2xl md:text-4xl`}>
            {title.text}
          </h2>
          {inView && content}
        </div>
      </div>
    </section>
  );
}

export default RowImageTitleText;
