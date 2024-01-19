"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const ImageContainer: FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={clsx(
        className,
        "relative",
        !isLoaded
          ? "after:h-full after:w-full after:absolute after:content-[''] after:left-0 after:top-0 after:bg-dark-primary/10 after:animate-pulse"
          : ""
      )}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={clsx(
          imageClassName,
          "transition-opacity duration-500 ease-out",
          !isLoaded ? "opacity-0" : "opacity-100"
        )}
        priority
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageContainer;
