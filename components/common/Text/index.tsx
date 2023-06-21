import React, { FC, useMemo } from "react";
import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import clsx from "clsx";

import "./Text.scss";

const { Text: AText } = Typography;

interface IText extends TextProps {}

const Text: FC<IText> = ({ className, children, ...rest }) => {
  const renderClassName = useMemo(() => clsx("text", className), [className]);

  return (
    <AText className={renderClassName} {...rest}>
      {children}
    </AText>
  );
};

export default Text;
