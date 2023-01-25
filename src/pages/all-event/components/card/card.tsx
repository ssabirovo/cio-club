import React from "react";
import Icon from "../../../../components/icons/icons";

import cls from "./card.module.scss";

interface CardProps {
  statusColor?: string;
  title: string;
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ statusColor, onClick, title }) => (
  <div onClick={() => onClick()} className={cls.card}>
    <div className={cls["card-top"]}>
      <div className={cls.info}>
        <h3>{title}</h3>
        <p>Iqtsodiyot vazirligi</p>
      </div>
      <div style={{ background: statusColor }} className={cls.status}></div>
    </div>
    <div className={cls["card-bottom"]}>
      <div className={cls["info-bottom"]}>
        <Icon name="Calendar" color="var(--primary)" />{" "}
        <p>11.02.2022 - 17.02.2022</p>
      </div>
      <div className={cls["info-bottom"]}>
        <Icon name="location" color="var(--primary)" />{" "}
        <p>Toshkent viloyati, UsmonNosir koch. 15-uy</p>
      </div>
    </div>
  </div>
);

export default Card;
