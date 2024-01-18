import clsx from "clsx";
import React, { forwardRef } from "react";

const Radio = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error: Boolean;
  }
>(function Radio(
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
      <input
        type="radio"
        className={clsx(
          "cursor-pointer relative",
          "before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:border before:p-1 before:border-solid before:rounded-[50%] before:transition-colors before:duration-500",
          props.checked
            ? "before:border-light-primary"
            : "before:border-dark-primary",
          "after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-[50%] after:bg-app-bg after:transition-transform after:duration-500",
          props.checked ? "after:scale-100" : "after:scale-0"
        )}
        {...props}
        ref={ref}
      />
      <span
        className={clsx(
          "text-xs md:text-[0.5em] ml-3 cursor-pointer transition-colors duration-500",
          props.checked ? "text-light-primary" : "text-dark-primary"
        )}
      >
        {label}
      </span>
    </label>
  );
});

export default Radio;
