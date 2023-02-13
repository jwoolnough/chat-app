import "./style.css";
import { forwardRef, useId } from "react";
import { clsxm } from "@utils/clsxm";

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
            "absolute top-[9px] left-[13px] inline-block origin-top-left cursor-text px-1 text-sm",
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
            "w-full rounded-md border border-accent border-opacity-30 bg-transparent px-4 py-2 text-white",
            "outline-none focus:border-opacity-100",
            "placeholder:text-ui placeholder:opacity-0 placeholder:transition-opacity",
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
