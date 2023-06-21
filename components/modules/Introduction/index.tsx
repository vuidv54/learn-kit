import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import clsx from "clsx";
import { SearchOutlined } from "@ant-design/icons";
import HeroImage from "@/assets/icons/hero_image.svg";

import "./Introduction.scss";

const Introduction = () => {
  return (
    <section className={clsx("introduction", "container")}>
      <div className="detail" data-aos="fade-right" data-aos-delay="1000">
        <Button rounded size="large" className="detail_ready-btn">
          Are you learning online?
        </Button>
        <Title className="detail__title">Start Online Learning Now!</Title>
        <Text className="detail__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </Text>
        <Input
          size="large"
          className="detail__input"
          placeholder="Search course"
          suffix={<SearchOutlined />}
        />
      </div>
      <HeroImage
        className="hero_img"
        data-aos="fade-left"
        data-aos-delay="1000"
      />
    </section>
  );
};

export default Introduction;
