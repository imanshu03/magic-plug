import clsx from "clsx";
import React from "react";

const Description: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <p
      className={clsx(
        "text-dark-secondary text-left font-normal text-sm md:text-base lg:text-lg xl:text-xl mt-2 lg:mt-4",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Description;
