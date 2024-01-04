import { useEffect } from "react";

export const useAnimation = (
  invokeScrollAnimation: Function,
  invokeStaticAnimation?: Function,
  adaptive: boolean = false
) => {
  useEffect(() => {
    let previousWidth = window.innerWidth;
    function handleResize() {
      if (window.innerWidth >= 768 && (previousWidth < 768 || adaptive)) {
        invokeScrollAnimation();
      } else if (
        window.innerWidth < 768 &&
        (previousWidth >= 768 || adaptive)
      ) {
        invokeStaticAnimation?.();
      }
      previousWidth = window.innerWidth;
    }
    window.addEventListener("resize", handleResize);
    if (window.innerWidth >= 768) {
      invokeScrollAnimation();
    } else {
      invokeStaticAnimation?.();
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
