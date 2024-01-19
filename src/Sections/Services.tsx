"use client";
import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";

import { SectionHeading } from "@/Atoms/Heading";
import { useAnimation } from "@/hooks";
import clsx from "clsx";
import Link from "next/link";
import { getPrefixedNumber } from "@/utils";
import { SERVICES_TYPE } from "@/dataStore/services";

interface Props {
  data: SERVICES_TYPE[];
}

const Services: React.FC<Props> = ({ data }) => {
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
        markers: false,
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
      className="w-screen h-auto md:h-[400vh] relative"
      id="services"
      ref={parentRef}
    >
      <div className="w-full h-auto min-h-screen md:h-screen flex flex-col items-center justify-center sticky top-0 left-0 overflow-hidden md:px-[5vw] lg:px-[10vw]">
        <SectionHeading
          heading="Our services"
          className="w-full items-center px-[5vw] md:px-0"
        >
          From inception to implementation, in the realm of software solutions,
          consider it done - we&apos;ve got you covered.
        </SectionHeading>
        <div className="w-full mt-6 md:mt-10 lg:mt-16" ref={scrollParentRef}>
          <div
            className={clsx(
              "w-full flex flex-nowrap items-stretch justify-start overflow-x-auto md:overflow-visible",
              "pl-[5vw] md:pl-0 scrollbar-hide scroll-px-[5vw] snap-x snap-mandatory md:scroll-px-0 md:snap-none",
              "[&>*:nth-last-child(1)]:mr-[5vw] md:[&>*:nth-last-child(1)]:mr-0"
            )}
            ref={scrollerRef}
          >
            {data.map((item, i) => (
              <Link
                className="flex flex-col items-start justify-start w-[320px] md:w-[500px] shrink-0 p-4 md:p-6 lg:p-8 bg-theme rounded-xl box-border mr-6 snap-start md:snap-align-none shadow-md"
                key={i}
                href={item.slug}
              >
                <div className="text-8xl text-light-primary/10 font-semibold mb-10 grow">
                  {getPrefixedNumber(i + 1)}
                </div>
                <p className="text-light-primary text-left capitalize font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                  {item.name}
                </p>
                <p className="text-light-primary text-left font-extralight text-base md:text-lg lg:text-xl mt-2 lg:mt-4 h-auto md:h-[200px]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
