"use client";
import Description from "@/Atoms/Description";
import { SectionHeading } from "@/Atoms/Heading";
import QuoteIcon from "@/Icons/Quote";
import { getImageData } from "@studio/image";
import { ClientsCollection, TestimonialsCollection } from "@studio/types";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import StarIcon from "@/Icons/Star";
import RatingStars from "@/Atoms/RatingStars";
import { EmblaCarouselType } from "embla-carousel";
import ArrowButton from "@/Atoms/ArrowButton";
import clsx from "clsx";

interface Props {
  clients: ClientsCollection;
  testimonials: TestimonialsCollection;
}

const Clients: React.FC<Props> = ({ clients, testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section className="w-screen h-auto">
      <SectionHeading
        heading="Our Successful Partnerships"
        className="w-full items-center px-[5vw] lg:px-[10vw]"
      >
        Glimpse into the trusted partnerships and successful collaborations that
        defines us
      </SectionHeading>
      <div className="h-max flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 my-10 md:my-16 lg:my-24 px-[5vw] lg:px-[10vw]">
        {clients.map(({ name, image }) => {
          const imageData = getImageData(image);
          if (!imageData) return null;
          return (
            <Image
              src={imageData.src}
              width={imageData.width}
              height={imageData.height}
              key={name}
              alt={name}
              className="shrink-0 mix-blend-darken w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              priority
            />
          );
        })}
      </div>
      <div className="w-full">
        <div
          className="overflow-hidden scrollbar-hide px-[5vw] lg:px-[10vw]"
          ref={emblaRef}
        >
          <div className="flex items-stretch -ml-10 touch-pan-y">
            {testimonials.map(({ name, company, review, rating }, i) => (
              <div
                className="basis-full md:basis-1/2 shrink-0 grow-0 h-auto pl-10"
                key={i}
              >
                <div className="w-full h-full flex flex-col items-stretch justify-start">
                  <div className="flex flex-col items-start justify-between w-full h-full bg-theme relative p-4 md:p-6 lg:p-8 grow">
                    <QuoteIcon className="w-24 h-24 [&>*]:fill-light-primary/20" />
                    <Description className="text-light-primary">
                      {review}
                    </Description>
                    <RatingStars
                      rating={rating}
                      className="self-end mt-2 lg:mt-4"
                    />
                    <div className="absolute bottom-1 left-5 border-[24px] border-solid border-transparent border-t-theme translate-y-full" />
                  </div>
                  <Description className="text-dark-primary font-semibold !mt-8 flex items-center justify-start gap-2 pl-4 md:pl-0">
                    <StarIcon />
                    <span>
                      {name}
                      <br />
                      {company}
                    </span>
                  </Description>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-auto mx-auto mt-6 flex items-center justify-between md:justify-center px-[5vw] md:px-0">
          <ArrowButton
            disabled={!emblaApi?.canScrollPrev()}
            onClick={() => emblaApi?.scrollPrev()}
            label="previous review"
          />
          <div
            className={clsx(
              "w-28 h-1 bg-dark-primary/20 mx-4 relative rounded-full overflow-hidden",
              "after:absolute after:content-[''] after:h-full after:w-[--bar-width] after:bg-theme"
            )}
            style={
              { "--bar-width": `${scrollProgress}%` } as React.CSSProperties
            }
          />
          <ArrowButton
            disabled={!emblaApi?.canScrollNext()}
            onClick={() => emblaApi?.scrollNext()}
            direction="right"
            label="next review"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
