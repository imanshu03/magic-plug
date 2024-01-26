"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ColoredHeading } from "@/Atoms/Heading";
import { useAnimation } from "@/hooks";

const commonTextClass =
  "text-left text-lg xs:text-2xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight tracking-normal font-extrabold";

const text1 = `MagicPlug is your trusted partner in transforming ideas into cutting-edge digital solutions. As a dedicated software development company, we specialize in assisting clients to build innovative products and deliver top-tier services tailored to their unique needs.`;

const logo = (
  <>
    <span className="text-theme">Magic</span>Plug
  </>
);

const About = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const absoluteTextRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const mainTimeline = useRef<GSAPTimeline>();
  const [fallback, setFallback] = useState(false);

  const addScrollAnimation = async () => {
    try {
      const { gsap, Power4 } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      mainTimeline.current?.kill();

      gsap.registerPlugin(ScrollTrigger);

      mainTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 0.7,
          markers: false,
        },
      });

      document.querySelectorAll(".animate-chars").forEach((el, i) => {
        mainTimeline.current?.fromTo(
          el,
          {
            autoAlpha: 0,
            ease: Power4.easeOut,
          },
          {
            autoAlpha: 1,
          },
          ">"
        );
      });
      setFallback(false);
    } catch {
      addStaticAnimation();
      setFallback(true);
    }
  };

  const addStaticAnimation = () => {
    mainTimeline.current?.kill();
  };

  useAnimation(addScrollAnimation, addStaticAnimation);

  useEffect(() => {
    let animation: any;
    import("lottie-web").then((module) => {
      const lottie = module.default;
      animation = lottie.loadAnimation({
        container: lottieRef.current!,
        renderer: "svg",
        autoplay: true,
        loop: true,
        path: "/assets/lottie/Building.json",
      });
    });

    return () => {
      animation?.destroy();
      mainTimeline.current?.kill();
    };
  }, []);

  return (
    <section className="bg-app-bg w-screen px-[5vw] lg:px-[10vw]">
      <div
        className={clsx(
          "h-auto w-full box-border relative",
          fallback ? "md:h-screen" : "md:h-[200vh]"
        )}
        ref={scrollerRef}
      >
        <div className="h-auto pb-16 md:pb-0 md:h-screen w-full sticky top-0 left-0 flex flex-col items-center justify-center">
          <div
            className={clsx(
              "block h-auto",
              fallback ? "md:block" : "md:hidden"
            )}
          >
            <h1 className={clsx("text-dark-primary", commonTextClass)}>
              {logo}&nbsp;{text1.split(" ").slice(1).join(" ")}
            </h1>
          </div>
          <h1
            className={clsx(
              "hidden md:block w-full h-auto text-dark-primary/10 relative",
              commonTextClass,
              fallback ? "md:hidden" : "md:block"
            )}
          >
            {text1.split(" ").map((word, i) => (
              <Fragment key={i}>
                <span className="inline-block">{word}</span>
                &nbsp;
              </Fragment>
            ))}
            <div
              className={clsx(
                "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-primary",
                commonTextClass
              )}
              ref={absoluteTextRef}
            >
              {[logo, ...text1.split(" ").slice(1)].map((word, i) => (
                <Fragment key={i}>
                  <span className="inline-block animate-chars">{word}</span>
                  &nbsp;
                </Fragment>
              ))}
            </div>
          </h1>
        </div>
      </div>
      <div className="w-full h-auto md:h-[max(50vh,500px)] flex flex-col md:flex-row items-stretch justify-between flex-nowrap bg-theme rounded-xl box-border overflow-hidden shadow-md">
        <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8 grow order-2 md:order-1 md:min-w-[320px] lg:min-w-[400px]">
          <ColoredHeading>How we help you ?</ColoredHeading>
          <p className="text-light-primary font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">
            With a customer-centric approach, we collaborate closely with you to
            understand your goals and aspirations.
          </p>
          <p className="text-light-secondary font-extralight text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            Leveraging the latest technologies and industry best practices, we
            craft seamless, user-friendly experiences that leave a lasting
            impact on your audience.
          </p>
        </div>
        <div
          ref={lottieRef}
          className="h-auto w-full md:h-full md:w-auto shrink-0 order-1 md:order-2 [&>svg]:rounded-[12px_12px_0px_0px] md:[&>svg]:rounded-[0px_12px_12px_0px] aspect-square"
        />
      </div>
    </section>
  );
};

export default About;
