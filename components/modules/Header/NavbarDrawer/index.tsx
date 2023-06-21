import React, { FC, useState } from "react";
import { Drawer } from "antd";
import { MenuUnfoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import Button from "@/components/common/Button";
import clsx from "clsx";
import { navList } from "../constant";
import Link from "next/link";
import Title from "@/components/common/Title";

import "./NavbarDrawer.scss";

interface INavbarDrawerProps {
  className?: string;
}

const NavbarDrawer: FC<INavbarDrawerProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={clsx(className, "navbar-drawer")}>
      <Button size="large" onClick={showDrawer} className="menu-btn">
        <MenuUnfoldOutlined />
      </Button>
      <Drawer
        title="Learn Kit Menu"
        placement="left"
        onClose={onClose}
        open={open}
        width={280}
        closeIcon={<CloseSquareOutlined />}
        headerStyle={{
          flexDirection: "row-reverse",
        }}
      >
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
      </Drawer>
    </div>
  );
};

export default NavbarDrawer;
