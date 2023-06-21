import React, { FC, useMemo } from "react";
import { Button as AButton, ButtonProps } from "antd";
import clsx from "clsx";

import "./Button.scss";

interface IButton extends ButtonProps {
  rounded?: boolean;
  outline?: boolean;
}

const Button: FC<IButton> = ({
  className,
  rounded,
  outline,
  disabled,
  children,
  ...rest
}) => {
  const renderClassName = useMemo(
    () =>
      clsx("button", className, {
        rounded,
        outline,
        disabled,
      }),
    [className, disabled, outline, rounded]
  );

  return (
    <AButton className={renderClassName} {...rest}>
      {children}
    </AButton>
  );
};

export default Button;
