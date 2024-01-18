import { SectionHeading } from "@/Atoms/Heading";
import { getImageData } from "@studio/image";
import { ClientsCollection } from "@studio/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: ClientsCollection;
}

const Clients: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-screen h-auto px-[5vw] lg:px-[10vw]">
      <SectionHeading
        heading="Our Successful Partnerships"
        className="w-full items-center"
      >
        Glimpse into the trusted partnerships and successful collaborations that
        defines us
      </SectionHeading>
      <div className="flex flex-wrap items-start justify-center gap-10 mt-6 md:mt-10 lg:mt-16">
        {data.map(({ name, image }) => {
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
    </section>
  );
};

export default Clients;
