import ArrowIcon from "@/Icons/Arrow";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  onClick: () => void;
  className?: string;
  direction?: "left" | "right";
  disabled?: boolean;
  label?: string;
}

const ArrowButton: FC<Props> = ({
  onClick,
  direction = "left",
  disabled = false,
  label,
}) => {
  return (
    <button
      className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer overflow-hidden relative group"
      onClick={!disabled ? onClick : undefined}
      aria-label={label}
    >
      <ArrowIcon
        className={clsx(
          "icon w-full h-full p-1 rounded-full relative z-[1] border border-solid transition-colors duration-500 ease-in-out",
          "[&>*]:transition-colors [&>*]:duration-500 [&>*]:ease-in-out",
          direction !== "left" ? "rotate-180" : "",
          disabled
            ? "border-dark-primary/20 [&>*]:stroke-dark-primary/20"
            : "border-dark-primary [&>*]:stroke-dark-primary"
        )}
      />

      <ArrowIcon
        className={clsx(
          "rounded-full absolute z-[2] w-full h-full top-0 left-0 p-1 [&>*]:stroke-light-primary bg-theme clip-path-full",
          "transition-all duration-500 ease-in-out",
          direction !== "left" ? "rotate-180" : "",
          !disabled ? "group-hover:clip-path-0" : ""
        )}
      />
    </button>
  );
};

export default ArrowButton;
