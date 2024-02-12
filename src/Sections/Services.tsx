import React from "react";
import { H3Heading, SectionHeading } from "@/Atoms/Heading";
import { ServiceCollection } from "@studio/types";
import Link from "next/link";
import { getImageData } from "@studio/image";
import ImageContainer from "@/Atoms/ImageContainer";
import Description from "@/Atoms/Description";
import { getPrefixedNumber } from "@/utils";
import SideArrowIcon from "@/Icons/SideArrow";

interface Props {
  data: ServiceCollection;
}

const Services: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-screen h-auto flex flex-col items-center justify-center px-[5vw] lg:px-[10vw]">
      <SectionHeading heading="Our services" className="w-full items-center">
        From inception to implementation, in the realm of software solutions,
        consider it done - we&apos;ve got you covered.
      </SectionHeading>
      <div className="mt-6 md:mt-10 lg:mt-16 w-full">
        <div className="grid grid-flow-row auto-cols-fr">
          {data.map((item, i) => {
            const imageData = item.image?.asset
              ? getImageData(item.image.asset)
              : null;
            return (
              <Link
                className="box-border p-4 flex items-start justify-start border-b border-solid border-dark-primary/10 last:border-b-[0px] group transition-all duration-300 ease-in-out hover:bg-theme hover:border-theme"
                href={item.slug}
                key={item.slug}
              >
                <div className="w-full flex flex-col items-stretch justify-start">
                  <div className="w-full flex items-center justify-start">
                    <p className="text-theme/20 group-hover:text-light-primary/20 text-4xl md:text-6xl lg:text-8xl font-semibold min-w-[64px] md:min-w-[96px] lg:min-w-[160px] transition-colors duration-300 ease-in-out">
                      {getPrefixedNumber(i + 1)}
                    </p>
                    <H3Heading
                      arrow={false}
                      className="text-dark-primary transition-colors duration-300 ease-in-out group-hover:text-light-primary"
                    >
                      {item.name}
                    </H3Heading>
                    <div className="grow" />
                    <SideArrowIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 shrink-0transition-colors duration-300 ease-in-out group-hover:[&>path]:stroke-light-primary" />
                  </div>
                  <div className="w-full flex items-center justify-start pl-16 md:pl-24 lg:pl-40 gap-6 max-h-0 overflow-hidden group-hover:md:max-h-80 transition-all duration-300 ease-in-out">
                    <Description className="text-light-primary grow">
                      {item.description}
                    </Description>
                    {imageData ? (
                      <ImageContainer
                        src={imageData.src}
                        width={imageData.width}
                        height={imageData.height}
                        alt={item.name}
                        className="aspect-square w-full grow-0"
                      />
                    ) : null}
                  </div>
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
