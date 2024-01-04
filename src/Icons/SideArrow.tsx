import * as React from "react";
import { SVGProps } from "react";

const SideArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17 17 7m0 0H8m9 0v9"
    />
  </svg>
);

export default SideArrowIcon;
