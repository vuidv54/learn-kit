import { IPopularCourse } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import { RightOutlined } from "@ant-design/icons";

import "./PopularCourseItem.scss";

interface IPopularCourseProps {
  course: IPopularCourse;
}

const PopularCourseItem: FC<IPopularCourseProps> = ({ course }) => {
  return (
    <div
      className="popular-course-item"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div className="wapper-course-logo">
        <Image src={course.imagePath} alt={course.title} fill />
      </div>
      <div className="wapper-info">
        <Text className="sub-title">Programming</Text>
        <Title className="course-title">{course.title}</Title>
        <Text className="course-description">{course.description}</Text>
        <Button className="read-more-btn">
          Read more <RightOutlined className="arrow-right-icon" />
        </Button>
      </div>
    </div>
  );
};

export default PopularCourseItem;
