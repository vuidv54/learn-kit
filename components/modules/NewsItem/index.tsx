import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { INewsItem } from "@/interfaces";
import Image from "next/image";
import React, { FC } from "react";
import { EyeOutlined } from "@ant-design/icons";

import "./NewsItem.scss";

interface INewsItemProps {
  news: INewsItem;
}

const NewsItem: FC<INewsItemProps> = ({ news }) => {
  return (
    <div className="news-item">
      <div className="wapper-news-img">
        <Image src={news.imgPath} alt={news.title} fill />
      </div>
      <div className="wapper-info">
        <div>
          <Title className="news-title">{news.title}</Title>
          <Text className="news-description">{news.description}</Text>
        </div>

        <div className="news-view">
          <EyeOutlined />
          <span>{news.viewQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
