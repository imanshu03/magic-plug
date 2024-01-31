"use client";
import React from "react";
import { SectionHeading } from "@/Atoms/Heading";
import { ServiceCollection } from "@studio/types";
import Link from "next/link";
import { getImageData } from "@studio/image";
import ImageContainer from "@/Atoms/ImageContainer";
import Description from "@/Atoms/Description";

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
                className="bg-theme rounded-xl shadow-md relative overflow-hidden min-h-[260px] [&>.service-heading]:hover:-translate-y-full [&>.service-description]:hover:translate-y-0"
                key={i}
                href={item.slug}
              >
                <div className="w-full h-full flex items-center justify-center p-4 z-[2] absolute uppercase top-0 left-0 translate-x-0 translate-y-0 transition-transform duration-500 ease-in-out service-heading">
                  <h3 className="text-[265%] text-center text-light-primary [word-spacing:9999px] font-extrabold !leading-tight">
                    {item.name}
                  </h3>
                </div>
                <div className="w-full h-full flex items-center justify-center p-4 z-[1] absolute top-0 left-0 translate-x-0 translate-y-full transition-transform duration-500 ease-in-out service-description">
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
                    className="aspect-square w-full opacity-10"
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
