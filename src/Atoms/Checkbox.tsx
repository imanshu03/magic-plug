import clsx from "clsx";
import React, { forwardRef } from "react";

const Checkbox = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error: Boolean;
  }
>(function Checkbox(
  { className = "", placeholder = "", label, error, ...props },
  ref
) {
  return (
    <label
      className={clsx(
        "flex items-center justify-center",
        "box-border transition-colors duration-500",
        "border border-solid rounded-full px-3 py-2 lg:px-4 lg:py-3 cursor-pointer",
        props.checked
          ? "bg-theme border-theme"
          : "bg-app-bg border-dark-primary",
        error ? "border-red-500" : "",
        className
      )}
      htmlFor={props.id}
    >
      <input type="checkbox" className="hidden" ref={ref} {...props} />
      <span
        className={clsx(
          "text-xs md:text-[0.5em] cursor-pointer transition-colors duration-500",
          props.checked ? "text-light-primary" : "text-dark-primary"
        )}
      >
        {label}
      </span>
    </label>
  );
});

export default Checkbox;
