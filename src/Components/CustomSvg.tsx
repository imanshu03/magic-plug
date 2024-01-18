import clsx from "clsx";
import React, { forwardRef, memo, useEffect, useState } from "react";

interface Props {
  src: string;
  className: string;
}

const CustomSvg = forwardRef<HTMLDivElement, Props>(function SvgContainer(
  { src, className },
  ref
) {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(src);
        const text = await res.text();
        setSvgContent(text);
      } catch {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsx(className, "[&>svg]:w-full [&>svg]:h-full")}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      ref={ref}
    ></div>
  );
});

export default memo(CustomSvg);
