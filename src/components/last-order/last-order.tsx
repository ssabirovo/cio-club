import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button";
import cls from "./last-order.module.scss";

interface LastOrderProps {
  handleClick: () => void;
  id: string;
  date: string;
}

const LastOrder: React.FC<LastOrderProps> = ({ handleClick, id, date }) => {
  const { t } = useTranslation();
  return (
    <section className={cls.wrapper}>
      <h2 className={cls.title}>{t("lastOrder.title")}</h2>
      <div className={cls["order-case"]}>
        <div className={cls.card}>
          <h4 className={cls["card-title"]}>{t("lastOrder.number")}</h4>
          <p>{id}</p>
        </div>
        <div className={cls.card}>
          <h4 className={cls["card-title"]}>{t("lastOrder.status")}</h4>
          <p>Tekshirilyapti</p>
        </div>
        <div className={cls.card}>
          <h4 className={cls["card-title"]}>{t("lastOrder.date")}</h4>
          <p>{date.slice(0, 10)}</p>
        </div>
      </div>
      <div className={cls["operator-info"]}>
        <div className={cls.info}>
          <h4 className={cls["info-title"]}>{t("lastOrder.operator")} :</h4>
          <h4 className={cls["info-subtitle"]}>Matkarimova Charosxon </h4>
        </div>
        <div className={cls.info}>
          <h4 className={cls["info-title"]}>{t("lastOrder.operatorPhone")} : </h4>
          <a href="tel:+998947080428" className={cls["info-subtitle"]}>
            +998 94 708 04 28
          </a>
        </div>
        <div className="btn-wrapper">
          <Button onClick={() => handleClick()} title="Buyurtma berish" />
        </div>
      </div>
    </section>
  );
};

export default LastOrder;
