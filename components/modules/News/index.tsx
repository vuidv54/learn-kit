import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import React, { FC } from "react";
import { listNews } from "../NewsItem/constant";
import NewsItem from "../NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./News.scss";

const News: FC = () => {
  return (
    <section className="news">
      <div className="inner container">
        <div className="wrapper-heading">
          <Title
            className="news-title"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            Lasted News
          </Title>
          <Text
            className="news-description"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </Text>
        </div>
        {/* <div className="wrapper-news"> */}
        <Swiper
          data-aos="fade-up"
          data-aos-delay="1000"
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", padding: "1rem 1rem 4rem 1rem" }}
        >
          {listNews.map((news, index) => (
            <SwiperSlide key={index}>
              <NewsItem news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default News;
