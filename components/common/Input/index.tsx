import React, { FC, useMemo } from "react";
import { InputProps } from "antd";
import { Input as AInput } from "antd";
import clsx from "clsx";

import "./Input.scss";

interface IInput extends InputProps {}

const Input: FC<IInput> = ({ disabled, className, ...rest }) => {
  const renderClassName = useMemo(
    () => clsx("input", className, { disabled }),
    [className, disabled]
  );

  return (
    <AInput
      disabled={disabled}
      spellCheck={false}
      className={renderClassName}
      {...rest}
    />
  );
};

export default Input;
