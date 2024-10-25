'use client'

import Image from "next/image"
import Button from "@/components/elements/ui/Button";

interface HeroTitleImageProps {
  className?: string;
  background: string;
  type?: 'dark' | 'ligth'
  ilustration: any;
  title: string;
  subtitle?: string;
  button?: {
    title: string;
    style: any;
    onClick: () => any;
  }
}

const HeroTitleImage = ({ background, className = '', type = 'ligth', ilustration, title, subtitle, button }: HeroTitleImageProps) => {

  const colorText = (type == 'ligth') ? 'text-white' : 'text-violet-default'
  
  return (

    <section className={`relative ${className} ${background} bg-cover bg-center md:bg-right py-20 md:py-32`}>

      <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-home container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 md:max-w-screen-xl">

        <div className="flex flex-col space-y-12 justify-center">

          <h2 className={`font-semibold ${colorText} tracking-normal leading-none text-3xl md:text-4xl animate-fade-in-down-1`}>
            {title}
          </h2>

          {subtitle &&
            <p className={`text-xl ${colorText} animate-fade-in-down-1`}>
              {subtitle}
            </p>

          }

          {button &&
            <Button
              style={button.style} 
              className="w-fit animate-fade-in-down-2 uppercase tracking-wider" onClick={() => button.onClick()}>
                <span>{button.title}</span>
            </Button>

          }


        </div>

        <div className="md:mx-auto">

          <figure className="px-8 mx-4 md:mx-2 animate-fade-in-down-2">
            <Image
              alt=""
              src={ilustration}
              priority
              />
          </figure>

        </div>

      </div>

    </section>
   
          
  );
}

export default HeroTitleImage;