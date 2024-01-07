import React from "react";
import Image from "next/image";
import { CustomLink, NextLink } from "@/Components/Links";
import Divider from "@/Components/Divider";
import { useScroll } from "./SmoothScrollWrapper";

const Footer = () => {
  const lenis = useScroll();

  const scrollToTop = () => lenis?.scrollTo(0);

  return (
    <>
      <Divider margin />
      <footer className="w-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] pb-10 font-manrope text-sm md:text-base flex flex-col items-center justify-start text-dark-primary">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start">
          <div className="flex items-center justify-start grow mb-8 md:mb-0">
            <Image
              src="/assets/image/logo.png"
              alt="magicplug logo"
              width={276}
              height={276}
              className="w-8 h-8 md:h-10 md:w-10 inline-block"
              priority
            />

            <p className="font-bold text-2xl md:text-3xl">
              <span className="text-theme">Magic</span>
              <span className="font-medium">Plug</span>
            </p>
          </div>
          <div className="flex items-start justify-start">
            <div className="flex flex-col items-start justify-start font-medium">
              <p>follow us:</p>
              <CustomLink className="my-4 md:my-2">linkedin</CustomLink>
              <CustomLink>X(twitter)</CustomLink>
            </div>
            <div className="flex flex-col items-start justify-start font-medium mx-6 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-16">
              <p>Contact us:</p>
              <CustomLink className="my-4 md:my-2">email</CustomLink>
              <CustomLink>whatsapp</CustomLink>
            </div>
            <div className="flex flex-col items-start justify-start font-medium">
              <NextLink href="/" triggerCallbackOnSamePath={scrollToTop}>
                home
              </NextLink>
              <NextLink
                href="/how-we-work"
                className="mt-4 md:mt-2"
                triggerCallbackOnSamePath={scrollToTop}
              >
                how we work
              </NextLink>
              <NextLink
                href="/contact-us"
                className="mt-4 md:mt-2"
                triggerCallbackOnSamePath={scrollToTop}
              >
                contact us
              </NextLink>
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
