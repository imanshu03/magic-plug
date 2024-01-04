"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import lottie, { AnimationItem } from "lottie-web";
import Lenis from "@studio-freight/lenis";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/Components/Header";
import Footer from "@/Sections/Footer";

enum SLIDE_DIRECTION {
  IN,
  OUT,
  SHOW,
  HIDE,
}

type SliderContextType = {
  handleRouteChange: (route: string) => void;
  lenisInstance?: Lenis;
};

const SliderContext = React.createContext<SliderContextType>({
  handleRouteChange: () => {},
});

export const useRouteSlider = () => React.useContext(SliderContext);

const RouteTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [slide, setSlide] = useState(SLIDE_DIRECTION.SHOW);
  const [animationSettings, setAnimationSettings] = useState({
    slices: 10,
    delay: 75,
  });
  const lottieRef = useRef<HTMLDivElement>(null);
  const lottieAnimation = useRef<AnimationItem>();
  const [lenisInstance, setLenisInstance] = useState<Lenis>();
  const pathName = useRef<string>("");
  const router = useRouter();
  const location = usePathname();

  const handleRouteChange = useCallback(
    (route: string) => {
      if (route === location) {
        lenisInstance?.scrollTo(0);
      } else {
        pathName.current = route;
        setSlide(SLIDE_DIRECTION.IN);
      }
    },
    [lenisInstance, location]
  );

  const handleSlider = (isLast: boolean) => {
    switch (true) {
      case isLast && slide === SLIDE_DIRECTION.IN:
        router.push(pathName.current);
        lottieAnimation.current?.goToAndPlay(0, true);
        break;
      case isLast && slide === SLIDE_DIRECTION.OUT:
        setSlide(SLIDE_DIRECTION.HIDE);
        pathName.current = "";
        break;
    }
  };

  useEffect(() => {
    // resize handler
    function handleResize() {
      if (window.innerWidth < 768) {
        setAnimationSettings({
          slices: 5,
          delay: 100,
        });
      } else {
        setAnimationSettings({
          slices: 10,
          delay: 75,
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    // play lottie on navigation
    lottieAnimation.current = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      path: "/assets/lottie/MagicPlug.json",
    });
    lottieAnimation.current.play();
    lottieAnimation.current.addEventListener("complete", () => {
      setSlide(SLIDE_DIRECTION.OUT);
    });

    // setting lenis
    const lenisInstance = new Lenis();
    setLenisInstance(lenisInstance);
    const raf = (time: any) => {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lottieAnimation.current?.destroy();
      window.removeEventListener("resize", handleResize);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <SliderContext.Provider value={{ handleRouteChange, lenisInstance }}>
      <Header />
      {children}
      <Footer />
      <div
        className={clsx(
          "w-screen h-screen fixed z-50 top-0 left-0 flex items-stretch justify-start",
          slide === SLIDE_DIRECTION.HIDE ? "hidden" : "block"
        )}
      >
        <div
          className="max-w-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={lottieRef}
        ></div>
        {Array.from({ length: animationSettings.slices })
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={clsx(
                "h-full grow bg-dark-primary",
                {
                  "animate-slide-in": slide === SLIDE_DIRECTION.IN,
                },
                {
                  "animate-slide-out": slide === SLIDE_DIRECTION.OUT,
                }
              )}
              style={{ animationDelay: `${i * animationSettings.delay}ms` }}
              onAnimationEnd={() =>
                handleSlider(animationSettings.slices - 1 === i)
              }
            ></div>
          ))}
      </div>
    </SliderContext.Provider>
  );
};

export default RouteTransition;
