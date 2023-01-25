import React from "react";
import { useTranslation } from "react-i18next";
import Icons from "../../../../components/icons";
import cls from "./directions.module.scss";
import { directionsData } from "./inside";

interface DirectionsProps {}

const Directions: React.FC<DirectionsProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="directions" className={cls.wrapper}>
      <h2 className={cls.title}>{t("directions.title")}</h2>
      <div className={cls.directions}>
        {directionsData.map(({ icon, title }, idx) => (
          <div key={idx} className={cls.direction}>
            <Icons size={30} name={`${icon}`} color="var(--primary)" />
            <p className={cls.description}>{t(title)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Directions;
