import { forwardRef } from "react";
import { clsxm } from "@utils/clsxm";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "link";
  loading?: boolean;
}

const VARIANT_CLASSES = {
  default: "button-default",
  link: "button-link",
};

const SIZE_CLASSES = {
  sm: "button-md",
  md: "button-md",
  lg: "button-lg",
};

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
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
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
