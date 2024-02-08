import ArrowIcon from "@/Icons/Arrow";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }
> = ({ children, className = "", loading = false, ...props }) => {
  return (
    <button
      className={clsx(
        "rounded-full relative [&>.btn-content]:hover:[clip-path:circle(100%)] overflow-hidden flex items-center justify-center transition-colors ease-out duration-500",
        className,
        loading ? "pointer-events-none" : ""
      )}
      {...props}
    >
      <div className="border border-solid border-dark-primary px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center rounded-full">
        {children}&nbsp;
        <ArrowIcon className="rotate-180" />
      </div>
      <div className="absolute z-[1] left-0 top-0 w-full h-full px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center btn-content [clip-path:circle(100%)] md:[clip-path:circle(0%)] bg-theme text-light-primary transition-all duration-500 ease-in-out">
        {children}&nbsp;
        <ArrowIcon className="rotate-180 [&>*]:stroke-light-primary" />
      </div>
      <div
        className={clsx(
          "absolute z-[2] left-0 top-0 w-full h-full flex items-center justify-center bg-theme",
          loading ? "block" : "hidden"
        )}
      >
        <div className="w-6 h-6 lg:w-10 lg:h-10 border-t-4 border-t-light-primary border-l-4 border-l-light-primary border-r-4 border-r-light-primary border-b-4 border-b-transparent rounded-[50%] animate-spin" />
      </div>
    </button>
  );
};

export const LinkButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  href: string;
}> = ({ children, className = "", href }) => {
  return (
    <Link
      className={clsx(
        "rounded-full relative [&>.btn-content]:hover:[clip-path:circle(100%)] overflow-hidden flex items-center justify-center no-underline",
        className
      )}
      href={href}
      prefetch
    >
      <div className="border border-solid border-dark-primary px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center rounded-full">
        {children}&nbsp;
        <ArrowIcon className="rotate-180" />
      </div>
      <div className="absolute left-0 top-0 w-full h-full px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center btn-content [clip-path:circle(100%)] md:[clip-path:circle(0%)] bg-theme text-light-primary transition-all duration-500 ease-in-out">
        {children}&nbsp;
        <ArrowIcon className="rotate-180 [&>*]:stroke-light-primary" />
      </div>
    </Link>
  );
};
