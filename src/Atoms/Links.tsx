import Link from "next/link";
import SideArrowIcon from "@/Icons/SideArrow";
import clsx from "clsx";
import React from "react";
import { usePathname } from "next/navigation";

const anchorClass = clsx(
  "overflow-hidden flex items-center justify-start cursor-pointer text-xs sm:text-sm md:text-base no-underline",
  "[&>div>.arrow1]:hover:translate-x-[100%] [&>div>.arrow1]:hover:-translate-y-[100%]",
  "[&>div>.arrow2]:hover:translate-x-0 [&>div>.arrow2]:hover:translate-y-0"
);

const Arrows = (
  <div className="relative overflow-hidden ml-1">
    <SideArrowIcon className="arrow1 transition-transform duration-500 ease-in-out w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
    <SideArrowIcon className="arrow2 transition-transform duration-500 ease-in-out absolute left-0 top-0 -translate-x-[100%] translate-y-[100%] sm:w-5 sm:h-5 md:w-6 md:h-6" />
  </div>
);

export const CustomLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  }
> = ({ className = "", children, ...props }) => {
  return (
    <a className={clsx(anchorClass, className)} {...props}>
      {children}
      {Arrows}
    </a>
  );
};

export const CustomNextLink: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  return (
    <Link href={href} className={clsx(anchorClass, className)} prefetch>
      {children}
      {Arrows}
    </Link>
  );
};

export const NextLink: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
  triggerCallbackOnSamePath?: () => void;
}> = ({ href, className = "", children, triggerCallbackOnSamePath }) => {
  const location = usePathname();
  const onSamePath = () => {
    if (location === href) triggerCallbackOnSamePath?.();
  };

  return (
    <Link
      href={href}
      className={clsx(
        className,
        "relative overflow-hidden [&>.blacked-text]:hover:-translate-y-[100%] [&>.themed-text]:hover:-translate-y-[100%]"
      )}
      prefetch
      onClick={onSamePath}
    >
      <div className="flex items-center justify-start w-full h-full relative blacked-text transition-transform duration-500 ease-in-out">
        {children}
      </div>
      <div className="w-full h-full absolute top-full left-0 text-[1em] text-theme themed-text transition-transform duration-500 ease-in-out">
        {children}
      </div>
    </Link>
  );
};
