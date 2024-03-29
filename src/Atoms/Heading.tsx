import React, { FC } from "react";
import StarIcon from "@/Icons/Star";
import clsx from "clsx";

export const ColoredHeading: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <StarIcon className="w-3 h-3 md:w-5 md:h-5 mr-2 [&>*]:fill-light-primary" />
      <h1 className="text-light-primary uppercase tracking-wider text-xs md:text-sm lg:text-base">
        {children}
      </h1>
    </div>
  );
};

export const SectionHeading: React.FC<{
  children?: React.ReactNode;
  className?: string;
  heading: string;
  textClassName?: string;
}> = ({ children = null, className = "", heading, textClassName = "" }) => {
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
      {children ? (
        <h3
          className={clsx(
            "text-dark-primary font-semibold text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight mt-4",
            textClassName
          )}
        >
          {children}
        </h3>
      ) : null}
    </div>
  );
};

export const H1Heading: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <h1
      className={clsx(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-tight font-semibold text-dark-primary",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2Heading: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <h2
      className={clsx(
        "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl !leading-tight font-semibold  text-dark-primary",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3Heading: FC<{
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}> = ({ children, className = "", arrow = true }) => {
  return (
    <h3
      className={clsx(
        "flex items-center justify-start text-dark-primary font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl !leading-tight",
        className
      )}
    >
      {arrow ? <StarIcon className="mr-2" /> : null}
      {children}
    </h3>
  );
};

export const H4Heading: FC<{
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}> = ({ children, className = "", arrow = true }) => {
  return (
    <h4
      className={clsx(
        "flex items-center justify-start text-dark-primary font-semibold text-base sm:text-lg md:text-xl lg:text2xl xl:text-3xl mt-2 lg:mt-4 !leading-tight",
        className
      )}
    >
      {arrow ? <StarIcon className="mr-2" /> : null}
      {children}
    </h4>
  );
};
