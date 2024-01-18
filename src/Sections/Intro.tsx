"use client";
import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollLottie } from "@/utils";
import lottie, { AnimationItem } from "lottie-web";
import { useAnimation } from "@/hooks";

const Intro = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const textMoverRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const mainTimeline = useRef<GSAPTimeline>();
  const scrollTimeline = useRef<GSAPTimeline>();
  const animation = useRef<AnimationItem>();

  const addScrollAnimation = () => {
    mainTimeline.current?.kill();
    scrollTimeline.current?.kill();
    animation.current?.destroy();

    gsap.registerPlugin(ScrollTrigger);
    mainTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.7,
        markers: false,
      },
    });

    mainTimeline.current.fromTo(
      textMoverRef.current,
      {
        y: "0",
        ease: Power4.easeOut,
      },
      {
        y: "-100px",
      }
    );

    const response = ScrollLottie({
      scrollTarget: scrollerRef.current!,
      lottieTarget: lottieRef.current!,
      start: "top top",
      end: "bottom top",
      path: "/assets/lottie/Intro.json",
    });
    animation.current = response.animation;
    scrollTimeline.current = response.timeline;
  };

  const addStaticAnimation = () => {
    textMoverRef.current?.removeAttribute("style");
    mainTimeline.current?.kill();
    scrollTimeline.current?.kill();
    animation.current?.destroy();

    animation.current = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/lottie/Intro.json",
    });
  };

  useAnimation(addScrollAnimation, addStaticAnimation);

  useEffect(
    () => () => {
      mainTimeline.current?.kill();
      scrollTimeline.current?.kill();
      animation.current?.destroy();
    },
    []
  );

  return (
    <section
      className="w-screen h-screen flex items-center justify-center relative bg-app-bg overflow-hidden"
      ref={scrollerRef}
    >
      <div
        className="w-full h-auto flex flex-col items-center justify-center relative z-[1] "
        ref={textMoverRef}
      >
        <h1 className="font-extrabold text-dark-primary text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl !leading-snug">
          Empowering your vision
        </h1>
        <h1 className="font-extrabold text-dark-primary text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl !leading-snug">
          <span className="font-hurricane text-[1.5em] leading-none">
            Crafting
          </span>
          &nbsp;&nbsp;digital excellence
        </h1>
      </div>
      <div
        className="h-full w-full max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] opacity-30"
        ref={lottieRef}
      />
    </section>
  );
};

export default Intro;
