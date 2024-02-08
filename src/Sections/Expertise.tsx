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
import { useDotButton } from "@/Components/EmblaCarouselDots";

interface Props {
  data: ExpertiseCollection;
}

const TWEEN_FACTOR = 2;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const Expertise: React.FC<Props> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000 }),
  ]);

  const [tweenValues, setTweenValues] = useState<number[]>([]);

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
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  console.log({ selectedIndex });
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
        <div className="w-full flex items-center justify-between mt-6">
          <button
            className={clsx(
              "w-8 h-8 lg:w-10 lg:h-10 cursor-pointer rounded-full p-1 relative overflow-hidden",
              "mr-2",
              selectedIndex !== 0
                ? "[&>.clipped]:hover:[clip-path:circle(100%)]"
                : "[&>.icon>*]:stroke-dark-primary/10 [&>.clipped]:[clip-path:circle(0%)]"
            )}
            onClick={
              selectedIndex !== 0
                ? () => onDotButtonClick(selectedIndex - 1)
                : undefined
            }
            aria-label="previous expertise"
          >
            <ArrowIcon className="icon md:[&>*]:stroke-dark-secondary w-full h-full transition-colors duration-500 relative z-[1]" />
            <div className="clipped absolute w-full h-full top-0 left-0 p-1 bg-theme z-[2] [clip-path:circle(100%)] md:[clip-path:circle(0%)] transition-none md:transition-all md:duration-500">
              <ArrowIcon className="[&>*]:stroke-light-primary w-full h-full" />
            </div>
          </button>
          <div className="flex items-center justify-center gap-2">
            {data.map((_e, i) => (
              <div
                className={clsx(
                  "h-2 rounded-full transition-all duration-500 ease-in-out cursor-pointer",
                  selectedIndex === i
                    ? "w-8 bg-theme"
                    : "w-2 bg-dark-primary/20"
                )}
                key={i}
                onClick={() => onDotButtonClick(i)}
              ></div>
            ))}
          </div>
          <button
            className={clsx(
              "w-8 h-8 lg:w-10 lg:h-10 cursor-pointer rounded-full relative overflow-hidden flex items-center justify-center p-1",
              selectedIndex !== data.length - 1
                ? "[&>.clipped]:hover:[clip-path:circle(100%)]"
                : "[&>.icon>*]:stroke-dark-primary/10 [&>.clipped]:[clip-path:circle(0%)]"
            )}
            onClick={
              selectedIndex !== data.length - 1
                ? () => onDotButtonClick(selectedIndex + 1)
                : undefined
            }
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
