import * as React from "react";
import { SVGProps } from "react";

const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M-640 0H640v800H-640z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M27.194 12v8.025c-2.537.14-4.458.603-5.761 1.39-1.304.787-2.22 2.063-2.749 3.829-.528 1.766-.793 4.292-.793 7.579h9.303v19.145H8.113V33.767c0-7.518 1.612-13.025 4.836-16.522C16.174 13.748 20.922 12 27.194 12ZM56 12v8.025c-2.537.14-4.457.586-5.761 1.338-1.304.751-2.247 2.028-2.828 3.829-.581 1.8-.872 4.344-.872 7.631H56v19.145H36.814V33.767c0-7.518 1.603-13.025 4.809-16.522C44.83 13.748 49.622 12 56 12Z"
      style={{
        fillRule: "nonzero",
      }}
    />
  </svg>
);

export default QuoteIcon;
