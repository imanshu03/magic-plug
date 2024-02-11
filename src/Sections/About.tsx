"use client";
import React from "react";
import { ColoredHeading, H2Heading } from "@/Atoms/Heading";
import ImageContainer from "@/Atoms/ImageContainer";
import Description from "@/Atoms/Description";

const About = () => {
  return (
    <section className="bg-app-bg w-screen px-[5vw] lg:px-[10vw]">
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between flex-nowrap bg-theme box-border overflow-hidden shadow-md">
        <div className="flex flex-col items-start justify-center px-[5vw] py-6 md:p-6 lg:p-8 order-2 md:order-1 w-full md:w-1/2 grow shrink-0">
          <ColoredHeading>How we help you ?</ColoredHeading>
          <H2Heading className="text-light-primary mt-4">
            With a customer-centric approach, we collaborate closely with you to
            understand your goals and aspirations.
          </H2Heading>
          <Description className="text-light-secondary">
            Leveraging the latest technologies and industry best practices, we
            craft seamless, user-friendly experiences that leave a lasting
            impact on your audience.
          </Description>
        </div>
        <ImageContainer
          src="/assets/image/collaboration.webp"
          width={2000}
          height={2000}
          alt="collaborating with client"
          className="w-full h-auto md:w-auto md:max-h-[500px] shrink grow-0 order-1 md:order-2 aspect-square"
          imageClassName="w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
