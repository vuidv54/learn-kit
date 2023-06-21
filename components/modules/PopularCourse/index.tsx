import React, { FC } from "react";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import PopularCourseItem from "../PopularCourseItem";
import { popularListCourse } from "./constant";

import "./PopularCourse.scss";

const PopularCourse: FC = () => {
  return (
    <section className="popular-course">
      <div className="inner container">
        <div className="wrapper-heading">
          <Title
            className="popular-title"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            Popular Courses
          </Title>
          <Text
            className="popular-description"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </Text>
        </div>
        <div className="wrapper-list">
          {popularListCourse.map((course, index) => (
            <PopularCourseItem key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
