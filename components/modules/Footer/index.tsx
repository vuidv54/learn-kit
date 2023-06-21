"use client";

import React, { FC } from "react";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import { companyInfo } from "./constant";
import Link from "next/link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="inner container">
        <div className="list-title">
          <Title className="learn-kit-title">Learn Kit</Title>
          <Title className="company-title">Company</Title>
          <Title className="company-title">Company</Title>
          <Title className="news-letter-title">Newsletter</Title>
        </div>
        <div className="wrapper-content">
          <div className="learn-kit">
            <Title className="learn-kit-title">Learn Kit</Title>
            <Text className="learn-kit__desc">
              Start working with Learn Kit that can provide everything you need
              to generate awareness, drive traffic, connect.
            </Text>
          </div>
          <div className="company">
            <Title className="company-title">Company</Title>
            {companyInfo.map((item, index) => (
              <Link key={index} href={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="company">
            <Title className="company-title">Company</Title>
            {companyInfo.map((item, index) => (
              <Link key={index} href={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="news-letter">
            <Title className="news-letter-title">Newsletter</Title>
            <Text className="news-letter__desc">
              Sign up and receive the latest tips via email.
            </Text>
            <div className="wrapper-input">
              <label htmlFor="email" className="input-label">
                Write your email<span>*</span>
              </label>
              <Input id="email" placeholder="Your Email" size="large" />
            </div>
            <Button className="subscribe-btn">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="author">© 2023 Learn Kit. Designed by Henefisa.</div>
    </footer>
  );
};

export default Footer;
