import React from "react";
import StarIcon from "@/Icons/Star";
import clsx from "clsx";

export const ColoredHeading: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <StarIcon className="w-3 h-3 md:w-5 md:h-5 mr-2 [&>*]:fill-light-primary" />
      <h2 className="text-light-primary uppercase tracking-wider text-xs md:text-sm lg:text-base">
        {children}
      </h2>
    </div>
  );
};

export const SectionHeading: React.FC<{
  children: React.ReactNode;
  className?: string;
  heading: string;
  textClassName?: string;
}> = ({ children, className = "", heading, textClassName = "" }) => {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center", className)}
    >
      <div className="flex justify-center items-center">
        <StarIcon className="w-3 h-3 md:w-5 md:h-5 mr-2" />
        <h2 className="text-theme uppercase tracking-wider text-xs md:text-sm lg:text-base">
          {heading}
        </h2>
      </div>
      <h3
        className={clsx(
          "text-dark-primary font-semibold text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight mt-4",
          textClassName
        )}
      >
        {children}
      </h3>
    </div>
  );
};
