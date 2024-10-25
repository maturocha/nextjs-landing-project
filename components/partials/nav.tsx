'use client'

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/elements/ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";

import menuNavItems from "@/data/nav"

interface Props {
  type?: "desktop" | "mobile";
  handleClickItem?: () => any;
}

const GeneralNav = ({ type = "desktop", handleClickItem }: Props) => {

  const router = useRouter();

  const current_path = usePathname();
  
  const [showMenu, setShowMenu] = useState(false);


  const clickMenu = () => {
    setShowMenu(!showMenu);
  };

  const onClickItem = (link: string) => {

    router.push(link);
    setShowMenu(!showMenu);

  };

  return (
    <>
      <nav className="my-auto md:py-4 flex flex-col items-center justify-evenly h-[7vh] ">
        {type === "desktop" ? (
          <ul className="items-center justify-center flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-6 h-full">

            {menuNavItems.map((item, index) => {
              return (
                <li
                  className={`text-xl sm:text-base text-gray-700 hover:text-pink-default ${
                    current_path === item.link
                      ? "font-semibold text-primary"
                      : ""
                  }`}
                  key={index}
                >
                  {type == "desktop" ? (
                    <Link href={item.link}>{item.title}</Link>
                  ) : (
                    <span onClick={() => onClickItem(item.link)}>
                      {item.title}
                    </span>
                  )}
                </li>
              );
            })}

            <li
              className={`text-xl sm:text-base text-gray-700 hover:text-violet-lighter`}
            >
              <Button style="primary" className="">
                <Link href={`#contacto`}>Comienza acá</Link>
              </Button>
            </li>

          </ul>
        ) : (
          !showMenu && (
            <div className="h-full flex items-center">
              <a onClick={() => clickMenu()}>
              <GiHamburgerMenu className="text-violet-default w-12 h-12 cursor-pointer self-center" />
            </a>
            </div>
          )
        )}
      </nav>

      <div
        className={`modal fixed w-full p-4 h-full top-0 md:max-w-max bg-white z-20 transition-all ease-linear ${
          showMenu ? "left-0 right-0" : "-left-full  "
        }transition ease-linear duration-1000 outline-0`}
      >
        <div className="z-30 w-full h-full flex flex-col space-y-8">
          <div
            onClick={() => clickMenu()}
            className="cursor-pointer text-right mt-4 mr-4 outline-0"
          >
            <svg
              className="fill-primary text-violet-default"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
          <ul className="items-center justify-center flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            {menuNavItems.map((item, index) => {
              return (
                <li
                  className={`text-xl sm:text-base text-gray-700 hover:text-violet-lighter ${
                    current_path === item.link
                      ? "font-semibold text-primary"
                      : ""
                  }`}
                  key={index}
                >
                  {type == "desktop" ? (
                    <Link href={item.link}>{item.title}</Link>
                  ) : (
                    <span onClick={() => onClickItem(item.link)}>
                      {item.title}
                    </span>
                  )}
                </li>
              );
            })}

            <li
              className={`text-xl sm:text-base text-gray-700 hover:text-violet-lighter`}
            >
              <Button style="primary" className="" onClick={clickMenu}>
                <Link href={`#contacto`}>Comienza acá</Link>
              </Button>
            </li>

          </ul>
          <ul className="flex space-x-8 md:space-x-6 items-center justify-center md:hidden">
            <li>
              <a
                href="https://www.instagram.com/trcsports/"
                target="_blank"
                rel="noopener noreferrer"
                title="Seguinos en instagram"
              >
                <Image
                  src="/img/instagram-logo-rose.svg"
                  alt=""
                  width={37}
                  height={37}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/trc-sports/"
                target="_blank"
                rel="noopener noreferrer"
                title="Seguinos en Linkedin"
              >
                <Image
                  src="/img/linkedin-logo-rose.svg"
                  alt=""
                  width={37}
                  height={37}
                />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/dmc4DgsnhB"
                target="_blank"
                rel="noopener noreferrer"
                title="Unite a nuestro Discord"
              >
                <Image
                  src="/img/discord-logo-rose.svg"
                  alt=""
                  width={37}
                  height={37}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GeneralNav;
