import ArrowIcon from "@/Icons/Arrow";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={clsx(
        "rounded-full relative [&>.btn-content]:hover:[clip-path:circle(100%)] overflow-hidden flex items-center justify-center",
        className
      )}
      {...props}
    >
      <div className="border border-solid border-dark-primary px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center rounded-full">
        {children}&nbsp;
        <ArrowIcon className="rotate-180" />
      </div>
      <div className="absolute left-0 top-0 w-full h-full px-8 py-2 lg:px-10 lg:py-3 xl:px-12 xl:py-4 flex items-center justify-center btn-content [clip-path:circle(100%)] md:[clip-path:circle(0%)] bg-theme text-light-primary transition-all duration-500 ease-in-out">
        {children}&nbsp;
        <ArrowIcon className="rotate-180 [&>*]:stroke-light-primary" />
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
