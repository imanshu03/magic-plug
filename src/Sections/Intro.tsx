"use client";
import React, { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";
import { useAnimation } from "@/hooks";
import clsx from "clsx";

const Intro = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const textMoverRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const mainTimeline = useRef<GSAPTimeline>();
  const scrollTimeline = useRef<GSAPTimeline>();
  const animation = useRef<AnimationItem>();
  const [fallback, setFallback] = useState(false);

  const addScrollAnimation = async () => {
    try {
      const { gsap, Power4 } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

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

      const { ScrollLottie } = await import("@/utils");

      const response = ScrollLottie({
        scrollTarget: scrollerRef.current!,
        lottieTarget: lottieRef.current!,
        start: "top top",
        end: "bottom top",
        path: "/assets/lottie/Intro.json",
      });
      animation.current = response.animation;
      scrollTimeline.current = response.timeline;
      setFallback(false);
    } catch {
      mainTimeline.current?.kill();
      scrollTimeline.current?.kill();
      animation.current?.destroy();
      textMoverRef.current?.removeAttribute("style");
      setFallback(true);
    }
  };

  const addStaticAnimation = async () => {
    try {
      const lottie = (await import("lottie-web")).default;
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
      setFallback(false);
    } catch {
      setFallback(true);
    }
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
        className={clsx(
          "h-full w-full max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] opacity-30",
          fallback ? "hidden" : "block"
        )}
        ref={lottieRef}
      />
    </section>
  );
};

export default Intro;
