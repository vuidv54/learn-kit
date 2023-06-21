import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import "./AboutStory.scss";

const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="inner container">
        <div className="list-place">
          <div
            className="wrapper-img"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <Image src="/images/author_2.png" alt="Author" fill />
            <Title className="author-name">Nghia Tran</Title>
            <Text className="author-job">Engineering</Text>
          </div>
          <div className="wrapper-img" data-aos="fade-up" data-aos-delay="1000">
            <Image src="/images/author_2.png" alt="Author" fill />
          </div>
          <div className="wrapper-img" data-aos="fade-up" data-aos-delay="1200">
            <Image src="/images/author_2.png" alt="Author" fill />
          </div>
        </div>
        <div className="detail">
          <Title
            className="detail__title"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            About Our Story
          </Title>
          <Text
            className="detail__desc"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </Text>
          <Text
            className="detail__desc"
            data-aos="fade-left"
            data-aos-delay="1200"
          >
            The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which
            is said to have originated in the 16th century. Lorem Ipsum is
            composed in a pseudo-Latin language which more or less corresponds
            to &apos;proper&apos; Latin. It contains a series of real Latin
            words.
          </Text>
          <Button
            size="large"
            className="detail__btn"
            data-aos="fade-left"
            data-aos-delay="1400"
          >
            Read more <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
