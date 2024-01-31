import StarIcon from "@/Icons/Star";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  margin?: boolean;
  fullWidth?: boolean;
  direction?: "up" | "down";
  className?: string;
}

const Divider: FC<Props> = ({
  margin = false,
  fullWidth = false,
  direction = undefined,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "mx-auto box-border flex items-center justify-start",
        margin && !direction ? "my-8 md:my-12 lg:my-16 xl:my-24" : "",
        margin && direction === "up" ? "mt-8 md:mt-12 lg:mt-16 xl:mt-24" : "",
        margin && direction === "down" ? "mb-8 md:mb-12 lg:mb-16 xl:mb-24" : "",
        fullWidth ? "w-full" : "w-[90%] lg:w-[80%]",
        className
      )}
    >
      <div className="grow bg-dark-primary/10 h-[1px]" />
      <StarIcon className="[&>*]:fill-dark-primary/10 mx-1" />
      <div className="grow bg-dark-primary/10 h-[1px]" />
    </div>
  );
};

export default Divider;
