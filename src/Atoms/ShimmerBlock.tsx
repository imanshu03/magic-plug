import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ShimmerBlock: FC<Props> = ({
  loading = false,
  children,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative",
        loading
          ? "after:h-full after:w-full after:absolute after:content-[''] after:left-0 after:top-0 after:bg-dark-primary/10 after:animate-pulse"
          : ""
      )}
    >
      {children}
    </div>
  );
};

export default ShimmerBlock;
