import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type ScrollLottieArguments = {
  lottieTarget: HTMLElement;
  scrollTarget: HTMLElement;
  start: string;
  end: string;
  path: string;
  duration?: number;
};

export const ScrollLottie = (obj: ScrollLottieArguments) => {
  const animation = lottie.loadAnimation({
    container: obj.lottieTarget,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: obj.path,
  });

  let timeObj = { currentFrame: 0 };
  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: obj.scrollTarget,
      scrub: true,
      start: obj.start,
      end: obj.end,
      onUpdate: (self) => {
        if (obj.duration) {
          gsap.to(timeObj, {
            duration: obj.duration,
            currentFrame: Math.floor(
              self.progress * (animation.totalFrames - 1)
            ),
            onUpdate: () => {
              animation.goToAndStop(timeObj.currentFrame, true);
            },
            ease: "expo",
          });
        } else {
          animation.goToAndStop(
            self.progress * (animation.totalFrames - 1),
            true
          );
        }
      },
    },
  });
  return {
    timeline,
    animation,
  };
};
