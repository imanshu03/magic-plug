import StarIcon from "@/Icons/Star";
import React from "react";

const commonAnimationClass =
  "flex items-center justify-start shrink-0 animate-scroll [animation-duration:10s] md:[animation-duration:12s] lg:[animation-duration:14s]";

const Carousel = () => {
  return (
    <div className="w-screen h-auto py-6 relative overflow-hidden">
      <div className="text-dark-primary/10 uppercase flex flex-nowrap items-center justify-start text-5xl md:text-8xl lg:text-[144px] font-semibold">
        <div className={commonAnimationClass}>
          <span className="shrink-0">Make you shine</span>
          <StarIcon className="mx-4 shrink-0" />
          <span className="shrink-0">Make you shine</span>
          <StarIcon className="mx-4 shrink-0" />
        </div>
        <div className={commonAnimationClass}>
          <span className="shrink-0">Make you shine</span>
          <StarIcon className="mx-4 shrink-0" />
          <span className="shrink-0">Make you shine</span>
          <StarIcon className="mx-4 shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
