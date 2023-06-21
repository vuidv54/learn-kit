import { IMember } from "@/interfaces";
import React, { FC } from "react";
import Avatar from "@/components/common/Avatar";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";

import "./MemberItem.scss";

interface IMemberItemProps {
  member: IMember;
}

const MemberItem: FC<IMemberItemProps> = ({ member }) => {
  return (
    <div className="member-item">
      <div className="wrapper-avatar">
        <Avatar size={128} className="member-avatar" src={member.imgPath} />
      </div>
      <div className="wrapper-info">
        <Title className="member-name">{member.name}</Title>
        <Text className="member-detail">{member.detail}</Text>
      </div>
    </div>
  );
};

export default MemberItem;
