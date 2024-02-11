import * as React from "react";
import { SVGProps } from "react";

const RatingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="m3.488 13.184 6.272 6.112-1.472 8.608L16 23.84l7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248L16 4.128l-3.872 7.808z" />
  </svg>
);

export default RatingIcon;
