import React from "react";
import cls from "./side-bar.module.scss";
import cx from "classnames";
import * as List from "../../components/icons/list";
import Avatar from "../../assets/svg/default.svg";
import { useNavigate } from "react-router-dom";
import Icons from "../icons";

type itemsType = {
  icon: keyof typeof List;
  title: string;
  link?: string;
};

const items: itemsType[] = [
  { icon: "personal", link: "/personal", title: "Shaxsiy Ma'lumotlar" },
  { icon: "order", link: "/orders", title: "Buyurtmalar" },
  { icon: "Case", link: "/companies", title: "Mening korxonalarim" },
  { icon: "vacancy", link: "/vacancy", title: "Mening vakansiyalarim" },
  { icon: "logOut", link: "/", title: "Asosiy sahifaga o'tish" },
];

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);
  return (
    <div className={cls.wrapper}>
      <div className={cls["img-wrapper"]}>
        <img src={user?.imageUrl ? user?.imageUrl : Avatar} alt="" />
      </div>
      <h2 className={cls.title}>{user?.name ? user?.name : "User"}</h2>
      <div className={cls.line}></div>
      <ul className={cls.items}>
        {items.map(({ icon, title, link }, id) => (
          <div
            key={id}
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
  );
};

export default SideBar;
