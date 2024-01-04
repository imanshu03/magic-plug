import React from "react";
import Image from "next/image";
import CustomLink from "@/Components/CustomLink";
import { useRouteSlider } from "@/app/RouteTransition";
import Divider from "@/Components/Divider";
import StarIcon from "@/Icons/Star";

const Footer = () => {
  const { handleRouteChange } = useRouteSlider();
  return (
    <>
      <Divider margin />
      <footer className="w-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] pb-10 font-manrope text-sm md:text-base flex flex-col items-center justify-start">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start">
          <div className="flex items-center justify-start grow mb-8 md:mb-0">
            <Image
              src="/assets/image/logo.png"
              alt="magicplug"
              width={276}
              height={276}
              className="w-8 h-8 md:h-10 md:w-10 inline-block"
            />

            <p className="font-bold text-2xl md:text-3xl">
              Magic<span className="font-medium">Plug</span>
            </p>
          </div>
          <div className="flex items-start justify-start">
            <div className="flex flex-col items-start justify-start font-medium">
              <p>follow us:</p>
              <CustomLink className="mt-2">linkedin</CustomLink>
              <CustomLink>X(twitter)</CustomLink>
            </div>
            <div className="flex flex-col items-start justify-start font-medium mx-6 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-16">
              <p>Contact us:</p>
              <CustomLink className="mt-2">email</CustomLink>
              <CustomLink>whatsapp</CustomLink>
            </div>
            <div className="flex flex-col items-start justify-start font-medium">
              <CustomLink onClick={() => handleRouteChange("/")}>
                home
              </CustomLink>
              <CustomLink onClick={() => handleRouteChange("/contact-us")}>
                contact us
              </CustomLink>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start mt-14">
          <span>&#169; MagicPlug 2024</span>
          <span className="mx-3">|</span>
          <a className="underline cursor-pointer">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
