import React from "react";
import logo from "../../../../assets/svg/ios.png";
import cls from "./card.module.scss";

interface CardProps {
  imgUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, title }) => (
  <div className={cls.wrapper}>
    <img src={imgUrl} alt="" />
    <p>{title}</p>
  </div>
);

export default Card;
