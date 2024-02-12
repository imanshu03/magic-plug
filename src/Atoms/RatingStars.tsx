import RatingIcon from "@/Icons/Rating";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  rating: number;
  className?: string;
}

const RatingStars: FC<Props> = ({ rating, className }) => {
  let maxIntRating = Math.floor(rating);
  const floatRating = Math.ceil((rating % maxIntRating) * 100);
  if (floatRating > 0) maxIntRating += 1;

  return (
    <div className={clsx("flex items-center justify-start gap-1", className)}>
      {Array.from({ length: 5 }).map((_e, i) => (
        <div className={clsx("w-8 h-8 relative")} key={i}>
          <RatingIcon className="w-full h-full [&>path]:fill-light-primary/20 relative" />
          <RatingIcon
            className={clsx(
              "absolute top-0 bottom-0 w-full h-full [&>path]:fill-light-primary",
              i + 1 > maxIntRating ? "hidden" : ""
            )}
            style={{
              clipPath:
                i + 1 === maxIntRating && floatRating
                  ? `polygon(0% 0%,${floatRating}% 0%,${floatRating}% 100%,0% 100%)`
                  : "",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
