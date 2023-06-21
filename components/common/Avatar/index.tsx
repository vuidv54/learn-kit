import React, { FC } from "react";
import clsx from "clsx";
import { Avatar as AAvatar, AvatarProps } from "antd";

import "./Avatar.scss";

interface IAvatarProps extends AvatarProps {
  path?: string;
  username?: string;
}

const Avatar: FC<IAvatarProps> = ({ path, username, className, ...rest }) => {
  return (
    <AAvatar className={clsx("avatar", className)} src={path} {...rest}>
      {username}
    </AAvatar>
  );
};

export default Avatar;
