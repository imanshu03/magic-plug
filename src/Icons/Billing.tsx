import * as React from "react";
import { SVGProps } from "react";

const BillingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    stroke="#FFFFFF"
    strokeWidth={3}
    viewBox="10 -6 64 64"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M45.77 51a.09.09 0 0 1 .11 0l3.4 3.31s.12 0 .12-.07V9.7H14.6v44.46a.08.08 0 0 0 .13.07l4.38-3.29a.08.08 0 0 1 .1 0l4.53 3.33a.08.08 0 0 0 .11 0l4-3.33h.11l4.52 3.32a.08.08 0 0 0 .11 0l4.2-3.26a.09.09 0 0 1 .12 0l4.51 3.31a.09.09 0 0 0 .12 0l4-3.3M18.72 31.11h13.3M18.72 25.77h15.97M18.72 15h17.33M18.72 20.11h14.43M41.01 30.95h4.27M18.72 36.81h15.97M41.86 36.66h3.42M41.01 42.56h4.27M41.01 25.61h4.27M41.86 20.11h3.42M41.01 15h4.27"
    />
  </svg>
);

export default BillingIcon;
