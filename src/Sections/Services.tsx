"use client";
import React from "react";
import { SectionHeading } from "@/Atoms/Heading";
import { ServiceCollection } from "@studio/types";
import Link from "next/link";
import { getImageData } from "@studio/image";
import ImageContainer from "@/Atoms/ImageContainer";

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
                className=" bg-theme rounded-xl shadow-md relative overflow-hidden min-h-[260px]"
                key={i}
                href={item.slug}
              >
                <div className="flex flex-col items-start justify-start p-4 md:p-6 lg:p-8 relative z-[1]">
                  {imageData ? (
                    <ImageContainer
                      src={imageData.src}
                      width={imageData.width}
                      height={imageData.height}
                      alt={item.name}
                      className="aspect-square h-auto w-full mb-4 hidden md:block"
                    />
                  ) : null}
                  <p className="text-light-primary text-left capitalize font-semibold text-xl md:text-2xl lg:text-3xl leading-tight relative z-[1]">
                    {item.name}
                  </p>
                  <p className="text-light-primary text-left font-normal text-base md:text-lg lg:text-xl mt-2 lg:mt-4 relative z-[1]">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
