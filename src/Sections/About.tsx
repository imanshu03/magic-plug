"use client";
import React from "react";
import { ColoredHeading } from "@/Atoms/Heading";
import ImageContainer from "@/Atoms/ImageContainer";

const About = () => {
  return (
    <section className="bg-app-bg w-screen px-[5vw] lg:px-[10vw]">
      <div className="w-full h-auto md:h-[max(50vh,500px)] flex flex-col md:flex-row items-center justify-between flex-nowrap bg-theme rounded-xl box-border overflow-hidden shadow-md">
        <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8 order-2 md:order-1 w-full md:w-1/2 grow shrink-0">
          <ColoredHeading>How we help you ?</ColoredHeading>
          <p className="text-light-primary font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">
            With a customer-centric approach, we collaborate closely with you to
            understand your goals and aspirations.
          </p>
          <p className="text-light-secondary font-light text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            Leveraging the latest technologies and industry best practices, we
            craft seamless, user-friendly experiences that leave a lasting
            impact on your audience.
          </p>
        </div>
        <ImageContainer
          src="/assets/image/collaboration.webp"
          width={2000}
          height={2000}
          alt="collaborating with client"
          className="w-full h-auto md:w-auto md:max-h-full shrink grow-0 order-1 md:order-2 aspect-square"
          imageClassName="w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
