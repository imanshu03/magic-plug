import CloseIcon from "@/Icons/Close";
import MenuIcon from "@/Icons/Menu";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { CustomLink, NextLink } from "../Atoms/Links";
import { createPortal } from "react-dom";
import { LinkData } from "@/types";
import ClutchLogo from "./ClutchLogo";

interface Props {
  className?: string;
}
enum ANIMATION {
  IN = 1,
  OUT = 2,
  HIDE = 3,
}

const Menu: React.FC<Props & LinkData> = ({ className = "", linkData }) => {
  const [open, setOpen] = useState(false);
  const [animState, setAnimState] = useState(ANIMATION.HIDE);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = usePathname();

  const onClose = () => {
    setAnimState(ANIMATION.OUT);
  };

  const onAnimationEnd = () => {
    if (animState === ANIMATION.OUT) {
      setOpen(false);
      setAnimState(ANIMATION.HIDE);
    }
  };

  useEffect(() => {
    function checkSize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", checkSize);
    checkSize();
    return () => window.addEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      let id: NodeJS.Timeout;
      const onScroll = () => {
        setIsScrolling(true);
        clearTimeout(id);
        id = setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.addEventListener("scroll", onScroll);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isScrolling && animState === ANIMATION.IN && !isMobile) {
      window.addEventListener("scroll", onClose);
      return () => {
        window.removeEventListener("scroll", onClose);
      };
    }
  }, [isScrolling, animState, isMobile]);

  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <>
      <button
        className={clsx(
          "text-dark-primary text-xs sm:text-sm md:text-base font-medium relative overflow-hidden flex items-center justify-start",
          "md:[&_#menu-icon]:hover:[clip-path:circle(100%)]",
          className
        )}
        onClick={() => {
          setOpen((old) => !old);
          setAnimState(ANIMATION.IN);
        }}
        aria-label="Toggle menu"
      >
        <span className="mr-1 md:mr-3 hidden md:inline-block">Menu</span>
        <div className="w-8 h-8 relative p-1">
          <MenuIcon className="w-full h-full relative" />
          <div
            className="left-0 top-0 w-full h-full absolute bg-dark-primary rounded-[50%] p-1 transition-all duration-500 ease-in-out [clip-path:circle(0%)]"
            id="menu-icon"
          >
            <MenuIcon className="w-full h-full [&>*]:stroke-light-primary" />
          </div>
        </div>
      </button>
      {open
        ? createPortal(
            <div
              className={clsx(
                "fixed z-[60] top-0 left-0 pt-0 pr-0 md:pt-4 lg:pt-5 xl:pt-6 md:pr-[5vw] lg:pr-[10vw] w-screen h-screen flex items-start justify-end",
                "transition-colors duration-300 ease-out",
                animState === ANIMATION.IN ? "bg-black/10" : "bg-transparent"
              )}
              onClick={onClose}
            >
              <div
                className={clsx(
                  "flex flex-col items-start justify-start w-screen h-screen md:w-[40vw] xl:w-[30vw] md:h-auto pt-6 pb-14 px-10 text-4xl font-semibold tracking-wide bg-app-bg md:rounded-xl",
                  animState === ANIMATION.HIDE
                    ? "[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
                    : "",
                  animState === ANIMATION.IN ? "animate-slide-in" : "",
                  animState === ANIMATION.OUT ? "animate-slide-out" : ""
                )}
                ref={menuRef}
                onAnimationEnd={onAnimationEnd}
              >
                <CloseIcon
                  className="self-end w-8 h-8 cursor-pointer"
                  onClick={onClose}
                />
                <NextLink
                  href="/"
                  className="self-start mt-7"
                  triggerCallbackOnSamePath={onClose}
                >
                  Home
                </NextLink>
                {linkData.primaryPage.map(({ slug: { title, path } }) => (
                  <NextLink
                    href={path}
                    className="self-start mt-7"
                    triggerCallbackOnSamePath={onClose}
                    key={path}
                  >
                    {title}
                  </NextLink>
                ))}
                <NextLink
                  href="/contact-us"
                  className="self-start mt-7"
                  triggerCallbackOnSamePath={onClose}
                >
                  Contact Us
                </NextLink>
                <div className="flex flex-col items-end justify-start w-full mt-7">
                  {[...linkData.social, ...linkData.contact].map(
                    ({ name, link }, i) => (
                      <CustomLink href={link} className="self-end mb-4" key={i}>
                        {name}
                      </CustomLink>
                    )
                  )}
                </div>
                <div className="mt-auto">
                  <ClutchLogo />
                </div>
              </div>
            </div>,
            document.getElementById("menu-portal")!
          )
        : null}
    </>
  );
};

export default memo(Menu);
