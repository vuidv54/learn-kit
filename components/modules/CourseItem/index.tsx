import React, { FC } from "react";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import clsx from "clsx";
import { ICourse } from "@/interfaces";

import "./CourseItem.scss";

interface ICourseItemProps {
  course: ICourse;
  isActive?: boolean;
  dataAos?: string;
}

const CourseItem: FC<ICourseItemProps> = ({ course, isActive, dataAos }) => {
  return (
    <div
      className={clsx("course-item", { isActive })}
      data-aos={dataAos}
      data-aos-delay="1000"
    >
      <div className="course-logo">{course.logo}</div>
      <Title className="course-title">{course.title}</Title>
      <Text className="course-description">{course.description}</Text>
    </div>
  );
};

export default CourseItem;
