import React from "react";

import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import CourseItem from "../CourseItem";
import { listCourse } from "./constant";
import Button from "@/components/common/Button";
import { ArrowRightOutlined } from "@ant-design/icons";

import "./ListCourse.scss";

const animations = [`fade-up`, `fade-down`, `fade-left`, `fade-right`];

const ListCourse = () => {
  return (
    <section className="list-course">
      <div className="inner container">
        <div
          className="wrapper-heading"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <Title className="list-title">Get a choice of your course</Title>
          <Text className="list-description">
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </Text>
        </div>
        <div className="wrapper-course">
          {listCourse.map((course, index) => (
            <CourseItem
              key={index}
              dataAos={animations[Math.floor(Math.random() * 4)]}
              course={course}
            />
          ))}
        </div>
        <Button
          className="more-btn"
          size="large"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          See more courses <ArrowRightOutlined />
        </Button>
      </div>
    </section>
  );
};

export default ListCourse;
