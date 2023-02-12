import { forwardRef } from "react";

import { clsxm } from "@utils/clsxm";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "link";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      className,
      size = "md",
      variant = "default",
      loading = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={clsxm(
          "button",
          "rounded-md",
          "border border-white border-opacity-10",
          "bg-accent py-2 px-4 font-medium text-white",
          "hover hover:bg-white hover:text-black",
          size === "sm" && "py-2 px-3",
          variant === "link" &&
            "border-0 bg-transparent p-0 text-accent hover:bg-transparent hover:text-white",
          loading && "",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
