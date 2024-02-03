"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";

import { H4Heading, SectionHeading } from "@/Atoms/Heading";
import ArrowIcon from "@/Icons/Arrow";
import CustomSvg from "@/Components/CustomSvg";
import { ExpertiseCollection } from "@studio/types";
import { getPrefixedNumber } from "@/utils";
import Description from "@/Atoms/Description";

interface Props {
  data: ExpertiseCollection;
}

const Expertise: React.FC<Props> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);

  const getPositionVariables = (currentIndex: number, selfIndex: number) => {
    let translate = "0px",
      scale = 1,
      opacity = 1,
      angle = 0;
    if (currentIndex < selfIndex) {
      const gap = selfIndex - currentIndex;
      translate = `${gap * 100}%`;
      scale = 0.8;
      opacity = 0;
      angle = 10;
    } else if (currentIndex > selfIndex) {
      const gap = currentIndex - selfIndex;
      translate = `-${gap * 100}%`;
      scale = 0.8;
      opacity = 0;
      angle = -10;
    }
    return {
      transform: `translate(${translate}) scale(${scale}) rotateY(${angle}deg)`,
      opacity,
    };
  };

  const updateCurrent = (inc: boolean) => {
    if (inc && current < data.length - 1) {
      setCurrent((e) => e + 1);
    }
    if (!inc && current > 0) {
      setCurrent((e) => e - 1);
    }
  };

  return (
    <section
      className="w-screen h-auto flex flex-col md:flex-row items-center justify-center md:justify-start overflow-hidden px-[5vw] lg:px-[10vw] gap-0 md:gap-4 xl:gap-6"
      ref={parentRef}
    >
      <SectionHeading
        className="md:items-start md:grow relative z-[10]"
        textClassName="md:text-left"
        heading="Our expertise"
      >
        Transforming ideas into exceptional digital products
      </SectionHeading>
      <div className="mt-6 md:mt-0 w-full max-w-[320px] md:max-w-none md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto flex flex-col items-center justify-start shrink-0 [perspective:300px]">
        <div className="w-full h-[360px] md:max-h-none md:h-[400px] lg:h-[450px] xl:h-[500px] relative [transform-style:preserve-3d]">
          {data.map((item, i) => (
            <div
              className={clsx(
                "flex flex-col items-start justify-end p-4 md:p-6 lg:p-8 bg-theme rounded-xl box-border transition duration-700 shadow-md",
                "absolute top-0 left-0 w-full h-full"
              )}
              ref={(e) => {
                boxRefs.current[i] = e;
              }}
              style={{
                zIndex: data.length - i,
                ...getPositionVariables(current, i),
              }}
              key={i}
            >
              <CustomSvg
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 shrink-0"
                src={item.image}
              />
              <H4Heading
                className="text-light-primary capitalize"
                arrow={false}
              >
                {item.name}
              </H4Heading>
              <Description className="text-light-secondary">
                {item.description}
              </Description>
            </div>
          ))}
        </div>
        <div className="w-[90%] self-center flex items-center justify-start mt-6">
          <span className="text-dark-secondary mr-auto text-base md:text-lg font-semibold">
            {getPrefixedNumber(current + 1)}/{getPrefixedNumber(data.length)}
          </span>
          <button
            className={clsx(
              "w-8 h-8 lg:w-10 lg:h-10 cursor-pointer rounded-full p-1 relative overflow-hidden",
              "mr-2",
              current !== 0
                ? "[&>.clipped]:hover:[clip-path:circle(100%)]"
                : "[&>.icon>*]:stroke-dark-primary/10 [&>.clipped]:[clip-path:circle(0%)]"
            )}
            onClick={() => updateCurrent(false)}
            aria-label="previous expertise"
          >
            <ArrowIcon className="icon md:[&>*]:stroke-dark-secondary w-full h-full transition-colors duration-500 relative z-[1]" />
            <div className="clipped absolute w-full h-full top-0 left-0 p-1 bg-theme z-[2] [clip-path:circle(100%)] md:[clip-path:circle(0%)] transition-none md:transition-all md:duration-500">
              <ArrowIcon className="[&>*]:stroke-light-primary w-full h-full" />
            </div>
          </button>
          <button
            className={clsx(
              "w-8 h-8 lg:w-10 lg:h-10 cursor-pointer rounded-full relative overflow-hidden flex items-center justify-center p-1",
              current !== data.length - 1
                ? "[&>.clipped]:hover:[clip-path:circle(100%)]"
                : "[&>.icon>*]:stroke-dark-primary/10 [&>.clipped]:[clip-path:circle(0%)]"
            )}
            onClick={() => updateCurrent(true)}
            aria-label="next expertise"
          >
            <ArrowIcon className="icon [&>*]:stroke-dark-secondary w-full h-full rotate-180 relative z-[1]" />
            <div className="clipped absolute w-full h-full top-0 left-0 p-1 bg-theme z-[2] [clip-path:circle(100%)] md:[clip-path:circle(0%)] transition-none md:transition-all md:duration-500">
              <ArrowIcon className="[&>*]:stroke-light-primary w-full h-full rotate-180" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
