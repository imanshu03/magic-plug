import StarIcon from "@/Icons/Star";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  margin?: boolean;
  fullWidth?: boolean;
}

const Divider: FC<Props> = ({ margin = false, fullWidth = false }) => {
  return (
    <div
      className={clsx(
        "mx-auto box-border flex items-center justify-start",
        margin ? "my-8 md:my-12 lg:my-16 xl:my-24" : "",
        fullWidth ? "w-full" : "w-[90%] lg:w-[80%]"
      )}
    >
      <div className="grow bg-dark-primary/10 h-[1px]" />
      <StarIcon className="[&>*]:fill-dark-primary/10 mx-1" />
      <div className="grow bg-dark-primary/10 h-[1px]" />
    </div>
  );
};

export default Divider;
