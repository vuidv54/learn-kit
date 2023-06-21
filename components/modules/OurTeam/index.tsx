import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import React from "react";
import { listMember } from "./constant";
import MemberItem from "../MemberItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./OurTeam.scss";

const OurTeam = () => {
  return (
    <section className="our-team">
      <div className="inner container">
        <div className="wrapper-heading">
          <Title
            className="ourteam-title"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            Our Team
          </Title>
          <Text
            className="ourteam-description"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </Text>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%" }}
        >
          <SwiperSlide data-aos="fade-left" data-aos-delay="1000">
            <div className="wrapper-member">
              {listMember.map((member, index) => (
                <MemberItem key={index} member={member} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper-member">
              {listMember.map((member, index) => (
                <MemberItem key={index} member={member} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper-member">
              {listMember.map((member, index) => (
                <MemberItem key={index} member={member} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;
