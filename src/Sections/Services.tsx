"use client";
import React from "react";
import { SectionHeading } from "@/Atoms/Heading";
import { ServiceCollection } from "@studio/types";
import Link from "next/link";
import { getImageData } from "@studio/image";
import ImageContainer from "@/Atoms/ImageContainer";
import Description from "@/Atoms/Description";
import clsx from "clsx";

interface Props {
  data: ServiceCollection;
}

const Services: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-screen h-auto min-h-screen px-[5vw] lg:px-[10vw]">
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <SectionHeading
          heading="Our services"
          className="w-full items-center px-[5vw] md:px-0"
        >
          From inception to implementation, in the realm of software solutions,
          consider it done - we&apos;ve got you covered.
        </SectionHeading>
        <div className="mt-6 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item, i) => {
            const imageData = item.image?.asset
              ? getImageData(item.image.asset)
              : null;
            return (
              <Link
                className="bg-theme rounded-xl shadow-md relative overflow-hidden md:min-h-[260px] [&>.service-heading]:hover:-translate-y-full [&>.service-description]:hover:translate-y-0"
                key={i}
                href={item.slug}
              >
                <div
                  className={clsx(
                    "w-full h-auto md:h-full flex flex-col items-center justify-center p-4 uppercase service-heading",
                    "md:absolute md:z-[2] md:top-0 nmd:left-0 md:translate-x-0 md:translate-y-0 md:transition-transform md:duration-500 md:ease-in-out"
                  )}
                >
                  <h3 className="text-[265%] text-center text-light-primary [word-spacing:9999px] font-extrabold !leading-tight">
                    {item.name}
                  </h3>
                </div>
                <div className="hidden md:flex w-full h-full items-center justify-center p-4 z-[1] absolute top-0 left-0 translate-x-0 translate-y-full transition-transform duration-500 ease-in-out service-description">
                  <Description className="text-light-primary ">
                    {item.description}
                  </Description>
                </div>
                {imageData ? (
                  <ImageContainer
                    src={imageData.src}
                    width={imageData.width}
                    height={imageData.height}
                    alt={item.name}
                    className="aspect-square w-full opacity-10 !absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:!relative md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0"
                  />
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
