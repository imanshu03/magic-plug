import SideArrowIcon from "@/Icons/SideArrow";
import clsx from "clsx";
import React from "react";

const CustomLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
> = ({ className = "", children, ...props }) => {
  return (
    <a
      className={clsx(
        "overflow-hidden flex items-center justify-start cursor-pointer text-xs sm:text-sm md:text-base",
        "[&>div>.arrow1]:hover:translate-x-[100%] [&>div>.arrow1]:hover:-translate-y-[100%]",
        "[&>div>.arrow2]:hover:translate-x-0 [&>div>.arrow2]:hover:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative overflow-hidden ml-1">
        <SideArrowIcon className="arrow1 transition-transform duration-500 ease-in-out w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <SideArrowIcon className="arrow2 transition-transform duration-500 ease-in-out absolute left-0 top-0 -translate-x-[100%] translate-y-[100%] sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </div>
    </a>
  );
};

export default CustomLink;
