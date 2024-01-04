import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

const StarIcon: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      fill="#7743DB"
      d="M8.753 17.695C7.721 14.071 3.944 10.308.306 9.28c-.408-.13-.408-.42 0-.557C3.95 7.687 7.72 3.931 8.76.3c.112-.4.382-.4.493 0 1.033 3.631 4.81 7.387 8.442 8.422.407.131.407.426 0 .557-3.639 1.03-7.415 4.792-8.448 8.416-.112.407-.382.407-.494 0Z"
    />
  </svg>
);

export default StarIcon;
