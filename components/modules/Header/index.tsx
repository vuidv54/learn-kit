"use client";

import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import { navList } from "./constant";
import LearnKitLogo from "@/assets/icons/logo.svg";
import NavbarDrawer from "./NavbarDrawer";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className={clsx("inner", "container")}>
        <LearnKitLogo />
        <nav className="navbar">
          {navList.map((navItem, index) => (
            <Link key={index} href={navItem.href}>
              <Title className="navbar__title">{navItem.title}</Title>
            </Link>
          ))}
        </nav>
        <div className="login">
          <Button rounded>Login</Button>
          <Button rounded>Register</Button>
        </div>
        <NavbarDrawer className="mobile-menu" />
      </div>
    </header>
  );
};

export default Header;
