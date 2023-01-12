import React from "react";
import Icons from "../../../../components/icons";
import cls from "./directions.module.scss";

interface DirectionsProps {}

const directionsData = [
  {
    icon: "events",
    title: "Tadbirlar tashkillashtirish",
  },
  {
    icon: "cosmetology",
    title: "Kosmetalogiya markazi",
  },
  {
    icon: "psychology",
    title: "Psihologiya markazi",
  },
  {
    icon: "eloquent",
    title: "Notiqlik markazi",
  },
  {
    icon: "seamstress",
    title: "Tikuvchilik sexi",
  },
];

const Directions: React.FC<DirectionsProps> = () => (
  <section className={cls.wrapper}>
    <h2 className={cls.title}>Yo'nalishlar</h2>

    <div className={cls.directions}>
      {directionsData.map(({ icon, title }) => (
        <div className={cls.direction}>
          <Icons size={30} name="cosmetology" color="var(--primary)" />
          <p className={cls.description}>{title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Directions;
