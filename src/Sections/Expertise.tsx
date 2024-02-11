"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { H4Heading, SectionHeading } from "@/Atoms/Heading";
import ArrowIcon from "@/Icons/Arrow";
import CustomSvg from "@/Components/CustomSvg";
import { ExpertiseCollection } from "@studio/types";
import Description from "@/Atoms/Description";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import { useDotButton } from "@/hooks";
import ArrowButton from "@/Atoms/ArrowButton";

interface Props {
  data: ExpertiseCollection;
}

export const numberWithinRange = (
  number: number,
  min: number,
  max: number
): number => Math.min(Math.max(number, min), max);

const Expertise: React.FC<Props> = ({ data }) => {
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
    },
    [Autoplay({ delay: 8000 })]
  );
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * 2);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section
      className="w-screen h-auto flex flex-col md:flex-row items-center justify-center md:justify-start overflow-hidden gap-0 md:gap-4 xl:gap-6 px-[5vw] lg:px-[10vw]"
      ref={parentRef}
    >
      <SectionHeading
        className="md:items-start md:grow relative z-[10]"
        textClassName="md:text-left"
        heading="Our expertise"
      >
        Transforming ideas into exceptional digital products
      </SectionHeading>
      <div className="mt-6 md:mt-0 w-full md:w-[400px] lg:w-[450px] xl:w-[500px] shrink-0">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 lg:-ml-8 touch-pan-y">
            {data.map((item, i) => (
              <div
                className="pl-4 md:pl-6 lg:pl-8 grow-0 shrink-0 basis-full"
                key={i}
              >
                <div
                  className="w-full h-full flex flex-col items-start justify-end p-4 md:p-6 lg:p-8 bg-theme"
                  style={{
                    ...(tweenValues.length && {
                      transform: `scale(${tweenValues[i]})`,
                      opacity: tweenValues[i],
                    }),
                  }}
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
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between md:justify-center mt-6 px-[5vw] md:px-0">
          <ArrowButton
            onClick={() => onDotButtonClick(selectedIndex - 1)}
            disabled={selectedIndex === 0}
            direction="left"
            label="previous expertise"
          />
          <div className="flex items-center justify-center gap-2 mx-4">
            {data.map((_e, i) => (
              <div
                className={clsx(
                  "h-1 rounded-full transition-all duration-500 ease-in-out cursor-pointer",
                  selectedIndex === i
                    ? "w-6 md:w-8 bg-theme"
                    : "w-1 bg-dark-primary/20"
                )}
                key={i}
                onClick={() => onDotButtonClick(i)}
              ></div>
            ))}
          </div>
          <ArrowButton
            onClick={() => onDotButtonClick(selectedIndex + 1)}
            disabled={selectedIndex >= data.length - 1}
            direction="right"
            label="next expertise"
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
