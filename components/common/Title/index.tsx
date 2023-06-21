import React, { FC, useMemo } from "react";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import clsx from "clsx";

import "./Title.scss";

const { Title: ATitle } = Typography;

interface ITitle extends TitleProps {
  light?: boolean;
  bold?: boolean;
}

const Title: FC<ITitle> = ({ light, bold, className, children, ...rest }) => {
  const renderClassName = useMemo(
    () =>
      clsx("title", className, {
        light,
        bold,
      }),
    [bold, className, light]
  );

  return (
    <ATitle className={renderClassName} {...rest}>
      {children}
    </ATitle>
  );
};

export default Title;
