"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Link from "next/link";
import Menu from "./Menu";

dayjs.extend(utc);
dayjs.extend(timezone);

const Header = () => {
  const [hide, setHide] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const handleVisibilityOnScroll = (() => {
    let previousScroll = 0;
    return () => {
      const st = window.scrollY;
      if (st > previousScroll) {
        setHide(true);
      } else {
        setHide(false);
      }
      previousScroll = st;
    };
  })();

  const getFormattedTime = () => {
    return dayjs(currentTime).tz("Asia/Kolkata").format("hh:mm A");
  };

  useEffect(() => {
    let previousWidth = window.innerWidth;

    function handleResize() {
      if (window.innerWidth < 768 && previousWidth >= 768) {
        window.removeEventListener("scroll", handleVisibilityOnScroll);
        setHide(false);
      } else if (window.innerWidth >= 768 && previousWidth < 768) {
        window.addEventListener("scroll", handleVisibilityOnScroll);
      }
      previousWidth = window.innerWidth;
    }

    window.addEventListener("resize", handleResize);
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", handleVisibilityOnScroll);
    }
    const id = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleVisibilityOnScroll);
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={clsx(
        "w-screen h-auto fixed top-0 left-0 z-40 px-[5vw] lg:px-[10vw] flex items-center justify-start py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 bg-app-bg/40 backdrop-blur-md transition-transform duration-500 font-manrope",
        "text-dark-primary",
        hide ? "-translate-y-[100%]" : ""
      )}
    >
      <Link
        className="mr-auto flex items-center justify-start cursor-pointer order-2 md:order-1"
        href="/"
      >
        <Image
          src="/assets/image/logo.png"
          alt="magicplug logo"
          width={276}
          height={276}
          className="w-6 h-6 hidden md:inline-block"
          priority
        />
        <span className="ml-1 font-bold">
          <span className="text-theme">Magic</span>
          <span className="font-medium">Plug</span>
        </span>
      </Link>
      <p className="font-medium mr-4 md:mr-8 lg:mr-12 xl:mr-24 text-xs sm:text-sm md:text-base order-3 md:order-2">
        India,&nbsp;{getFormattedTime()}
      </p>
      <Menu className="order-1 md:order-3 mr-2 md:mr-0" />
    </header>
  );
};

export default Header;
