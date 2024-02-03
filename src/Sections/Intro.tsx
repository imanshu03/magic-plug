"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Divider from "@/Atoms/Divider";

const Intro = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/lottie/Circular.json",
    });
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <section
      className="w-screen h-auto min-h-screen bg-app-bg overflow-hidden relative px-[5vw] lg:px-[10vw] flex flex-col items-center justify-center"
      ref={scrollerRef}
    >
      <div className="flex flex-col items-stretch justify-start shrink-0 w-full relative z-[1]">
        <h2 className="text-dark-primary text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl !leading-tight font-medium tracking-wide">
          Empowering your&nbsp;
          <span className="text-theme inline font-bold">Vision</span>,
          <br />
          Crafting <span className="text-theme inline font-bold">Software</span>
          &nbsp;
          <span className="text-theme inline font-bold">Excellence</span>
        </h2>
        <Divider fullWidth className="my-4" />
        <h1 className="text-dark-primary text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-tight">
          We are your trusted partner in transforming ideas into cutting-edge
          digital solutions. As a dedicated software development company, we
          specialize in assisting clients to build innovative products and
          deliver top-tier services tailored to their unique needs.
        </h1>
      </div>
      <div
        className="w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute opacity-20"
        ref={lottieRef}
      />
    </section>
  );
};

export default Intro;
