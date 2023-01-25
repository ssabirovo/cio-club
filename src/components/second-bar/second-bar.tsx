import React from "react";
import cls from "./second-bar.module.scss";
import cx from "classnames";
import * as List from "../../components/icons/list";
import Avatar from "../../assets/svg/default.svg";
import { useNavigate } from "react-router-dom";
import Icons from "../icons";
import Icon from "../icons/icons";
import { useState } from "react";

type itemsType = {
  icon: keyof typeof List;
  title: string;
  link?: string;
};

const items: itemsType[] = [
  { icon: "personal", link: "/personal", title: "Shaxsiy Ma'lumotlar" },
  { icon: "order", link: "/orders", title: "Tadbirlar" },
  // { icon: "company", link: "/companies", title: "Mening korxonalarim" },
  // { icon: "vacancy", link: "/vacancy", title: "Mening vakansiyalarim" },
  { icon: "logOut", link: "/", title: "Asosiy sahifaga o'tish" },
];

interface SecondBarProps {}

const SecondBar: React.FC<SecondBarProps> = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <>
      <div
        onClick={() => setToggle(true)}
        style={{
          background: !toggle ? "rgba(0, 0, 0, 0.2)" : "transparent",
          display: !toggle ? "block" : "none",
        }}
        className={cls.container}
      ></div>

      <div
        style={{
          width: toggle ? "0" : "240px",
          padding: toggle ? "20px 0" : "20px 30px",
        }}
        className={cls.wrapper}
      >
        <div onClick={() => setToggle(!toggle)} className={cls.arrow}>
          <Icon
            className={cx(cls.icon, `${toggle && cls.active}`)}
            name="down"
          />
        </div>
        <div
          style={{ display: toggle ? "none" : "flex" }}
          className={cls["img-wrapper"]}
        >
          <img src={user?.imageUrl ? user?.imageUrl : Avatar} alt="" />
        </div>
        <h2
          style={{ display: toggle ? "none" : "block" }}
          className={cls.title}
        >
          {user?.name ? user?.name : "User"}
        </h2>
        <div
          style={{ display: toggle ? "none" : "block" }}
          className={cls.line}
        ></div>
        <ul className={cls.items}>
          {items.map(({ icon, title, link }, id) => (
            <div
              key={id}
              style={{ display: toggle ? "none" : "flex" }}
              onClick={() => {
                navigate(`${link}`);
              }}
              className={cx(
                cls.item,
                cls[`${window.location.pathname === link && "active"}`]
              )}
            >
              <Icons name={icon} />
              {title}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SecondBar;
