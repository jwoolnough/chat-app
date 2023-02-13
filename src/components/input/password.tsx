import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@components/button";
import { clsxm } from "@utils/clsxm";
import type { InputProps, RenderInputRightElement } from "./input";
import { Input } from "./input";


type PasswordInputProps = Omit<InputProps, "ref">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ placeholder = "••••••••••••", ...rest }, ref) => {
    const [show, setShow] = useState(false);

    const renderRightElement: RenderInputRightElement = ({
      defaultClasses,
    }) => (
      <Button
        className={clsxm(
          defaultClasses,
          "mr-[-2px] flex h-[21px] w-[21px] items-center justify-center"
        )}
        onClick={() => setShow(!show)}
        variant="link"
        aria-label={!show ? "Show password" : "Hide password"}
      >
        {!show ? <FiEye /> : <FiEyeOff />}
      </Button>
    );

    return (
      <Input
        ref={ref}
        placeholder={placeholder}
        renderRightElement={renderRightElement}
        {...rest}
        type={!show ? "password" : "text"}
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
