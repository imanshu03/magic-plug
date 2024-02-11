import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";

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

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
