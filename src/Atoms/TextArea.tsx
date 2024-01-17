import clsx from "clsx";
import React, { forwardRef } from "react";

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error: Boolean;
    inputClassName?: string;
  }
>(function Input(
  { className = "", placeholder = "", error, inputClassName = "", ...props },
  ref
) {
  return (
    <div
      className={clsx(
        "pb-[1px] box-border inline-block transition-colors duration-500 text-center text-base md:text-[0.8em]",
        "border-b border-solid border-b-dark-primary/50 hover:border-b-dark-primary focus:border-b-dark-primary",
        error ? "border-b-red-500" : "",
        "relative [&>span]:hover:text-dark-primary",
        className
      )}
    >
      <textarea
        className={clsx(
          "relative z-[1] bg-transparent [&~span]:focus:hidden text-left w-full h-full min-h-[48px]",
          inputClassName
        )}
        {...props}
        ref={ref}
        aria-label={props.id}
      ></textarea>
      {placeholder && !props.value ? (
        <span
          className={clsx(
            "absolute z-[0] w-full h-auto text-[0.5em] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-primary/50 transition-colors duration-500",
            error ? "text-red-500" : ""
          )}
        >
          {placeholder}
        </span>
      ) : null}
    </div>
  );
});

export default TextArea;
