"use client";
import React from "react";
import Image from "next/image";
import { CustomLink, NextLink } from "@/Atoms/Links";
import Divider from "@/Atoms/Divider";
import { useScroll } from "./SmoothScrollWrapper";
import { LinkData } from "@/types";
import Link from "next/link";
import ClutchLogo from "./ClutchLogo";

const Footer: React.FC<LinkData> = ({ linkData }) => {
  const lenis = useScroll();
  const scrollToTop = () => lenis?.scrollTo(0);

  return (
    <>
      <Divider margin direction="down" />
      <footer className="w-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] pb-10 text-sm md:text-base flex flex-col items-center justify-start text-dark-primary">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start">
          <div className="flex flex-col items-start justify-start grow mb-8 md:mb-0">
            <div className="flex items-center justify-start">
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
            <div className="w-full mt-6">
              <ClutchLogo />
            </div>
          </div>
          <div className="flex items-start justify-start">
            <div className="flex flex-col items-start justify-start font-medium">
              <p>follow us:</p>
              {linkData.social.map(({ name, link }, i) => (
                <CustomLink className="mt-4 md:mt-2" href={link} key={i}>
                  {name}
                </CustomLink>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start font-medium mx-6 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-16">
              <p>Contact us:</p>
              {linkData.contact.map(({ name, link }, i) => (
                <CustomLink className="mt-4 md:mt-2" href={link} key={i}>
                  {name}
                </CustomLink>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start font-medium">
              <NextLink href="/" triggerCallbackOnSamePath={scrollToTop}>
                Home
              </NextLink>
              {linkData.primaryPage.map(({ slug: { title, path } }) => (
                <NextLink
                  href={path}
                  className="mt-4 md:mt-2"
                  triggerCallbackOnSamePath={scrollToTop}
                  key={path}
                >
                  {title}
                </NextLink>
              ))}

              <NextLink
                href="/contact-us"
                className="mt-4 md:mt-2"
                triggerCallbackOnSamePath={scrollToTop}
              >
                Contact Us
              </NextLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-14">
          <span>&#169; Magic Plug Concepts Private Limited 2024</span>
          {linkData.secondaryPage.map(({ slug: { title, path } }) => (
            <Link className="underline cursor-pointer" key={path} href={path}>
              {title}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
