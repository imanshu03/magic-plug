"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { FC, useState } from "react";
import ShimmerBlock from "./ShimmerBlock";

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
    <ShimmerBlock className={className} loading={!isLoaded}>
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
    </ShimmerBlock>
  );
};

export default ImageContainer;
