import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";

import { SectionHeading } from "@/Components/Heading";
import StarIcon from "@/Icons/Star";
import { SERVICES_DATA } from "@/data";
import { useAnimation } from "@/hooks";

const Services = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const mainTimeline = useRef<GSAPTimeline>();

  const addScrollAnimation = () => {
    mainTimeline.current?.clear();
    mainTimeline.current?.kill();
    mainTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.7,
        markers: true,
      },
    });

    const { scrollWidth, clientWidth } = scrollParentRef.current!;

    mainTimeline.current.fromTo(
      scrollerRef.current,
      {
        x: "0",
        ease: Power4.easeInOut,
      },
      {
        x: -(scrollWidth - clientWidth),
      }
    );
  };

  const addStaticAnimation = () => {
    mainTimeline.current?.clear();
    mainTimeline.current?.kill();
    scrollerRef.current?.removeAttribute("style");
  };

  useAnimation(addScrollAnimation, addStaticAnimation, true);

  useEffect(
    () => () => {
      mainTimeline.current?.kill();
    },
    []
  );

  return (
    <section
      className="w-screen h-auto md:h-[300vh] font-manrope relative"
      id="services"
      ref={parentRef}
    >
      <div className="w-full h-auto min-h-screen md:h-screen flex flex-col items-center justify-center sticky top-0 left-0 px-[5vw] lg:px-[10vw] overflow-hidden">
        <SectionHeading heading="Our services" className="w-full items-center">
          From inception to implementation, in the realm of software solutions,
          consider it done - we&apos;ve got you covered.
        </SectionHeading>
        <div className="w-full mt-6 md:mt-10 lg:mt-16" ref={scrollParentRef}>
          <div
            className="w-full flex flex-nowrap items-stretch justify-start overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none"
            ref={scrollerRef}
          >
            {SERVICES_DATA.map((item, i) => (
              <div
                className="flex flex-col items-start justify-start w-[320px] md:w-[500px] shrink-0 p-4 md:p-6 lg:p-8 bg-theme rounded-xl box-border mr-6 snap-start md:snap-align-none shadow-md"
                key={i}
              >
                <div className="text-8xl text-light-primary/10 font-semibold mb-10 grow">
                  0{i + 1}
                </div>
                <p className="text-light-primary text-left capitalize font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                  {item.heading}
                </p>
                <p className="text-light-primary text-left font-extralight text-base md:text-lg lg:text-xl mt-2 lg:mt-4 h-auto md:h-[200px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
