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
              <div
                key={item.slug}
                className="w-full h-full md:min-h-[260px] [&>a]:hover:[transform:rotateX(-180deg)] [perspective:1400px]"
              >
                <Link
                  className="block rounded-xl shadow-md relative [transform-style:preserve-3d] transition-transform duration-500 ease-in-out"
                  href={item.slug}
                >
                  <div
                    className={clsx(
                      "hidden md:block w-full h-full absolute z-[1] top-0 left-0 hide-backface bg-theme [transform:rotateX(-180deg)] rounded-xl overflow-hidden"
                    )}
                  >
                    <Description className="text-light-primary absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                      {item.description}
                    </Description>
                    {imageData ? (
                      <ImageContainer
                        src={imageData.src}
                        width={imageData.width}
                        height={imageData.height}
                        alt={item.name}
                        className="aspect-square w-full opacity-10"
                      />
                    ) : null}
                  </div>
                  <div
                    className={clsx(
                      "w-full h-full relative z-[1] hide-backface bg-theme [transform:rotateX(0deg)] rounded-xl overflow-hidden"
                    )}
                  >
                    <h3
                      className={clsx(
                        "text-[265%] uppercase text-center z-[1] text-light-primary [word-spacing:9999px] font-extrabold !leading-tight",
                        "relative py-3 md:py-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                      )}
                    >
                      {item.name}
                    </h3>
                    {imageData ? (
                      <ImageContainer
                        src={imageData.src}
                        width={imageData.width}
                        height={imageData.height}
                        alt={item.name}
                        className={clsx(
                          "aspect-square w-full opacity-10",
                          "!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          "md:!relative md:top-0 md:left-0 md:translate-x-0 md:translate-y-0"
                        )}
                      />
                    ) : null}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
