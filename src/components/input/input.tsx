import { forwardRef, useId } from "react";
import { clsxm } from "@utils/clsxm";
import "./style.css";

type RenderInputRightElement = (renderInputRightElementBag: {
  defaultClasses: string;
}) => React.ReactNode;

interface InputProps extends React.ComponentProps<"input"> {
  containerClassName?: string;
  label: string;
  labelClassName?: string;
  renderRightElement?: RenderInputRightElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      label,
      labelClassName,
      // Slight hack to leverage :placeholder-shown trick within `style.css`
      placeholder = " ",
      renderRightElement,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <div
        className={clsxm(
          "input-container",
          "relative mb-4",
          containerClassName
        )}
      >
        <label
          className={clsxm(
            "input-label",
            "absolute top-[9px] left-[13px] inline-block origin-top-left cursor-text px-1 text-sm text-body-dark",
            labelClassName
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={clsxm(
            "input",
            "w-full rounded-md border border-accent border-opacity-30 bg-transparent px-4 py-2 dark:text-white",
            "outline-none focus:border-opacity-100",
            "placeholder:text-body-dark placeholder:text-opacity-75 dark:placeholder:text-ui placeholder:opacity-0 placeholder:transition-opacity",
            className
          )}
          placeholder={placeholder}
          {...rest}
        />
        {renderRightElement?.({
          defaultClasses: "absolute right-[17px] top-[9px]",
        })}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps, RenderInputRightElement };
