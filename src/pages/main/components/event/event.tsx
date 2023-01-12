import React, { useState } from "react";
import cls from "./event.module.scss";
import cx from "classnames";
import Card from "./components/card/card";
import Button from "../../../../components/button/button";

interface EventProps {}

const tablists = [
  { idx: 0, key: "Oldingi" },
  { idx: 1, key: "Hozirgi" },
];

const Event: React.FC<EventProps> = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className={cls.events}>
      <h2 className={cls.title}>Tadbirlar</h2>
      <div className={cls.tablist}>
        {tablists.map(({ idx, key }) => (
          <div
            className={cx(cls["tab-head"], index === idx ? cls.active : null)}
            onClick={() => {
              setIndex(idx);
              console.log(index);
            }}
          >
            {key}
          </div>
        ))}
      </div>
      <div className={cls["tab-content"]} hidden={index !== 0}>
        <div className={cls.container}>
          <Card statusColor="#CBCBCB" />
          <Card statusColor="#CBCBCB" />
          <Card statusColor="#CBCBCB" />
          <Card statusColor="#CBCBCB" />
          <Card statusColor="#CBCBCB" />
          <Card statusColor="#CBCBCB" />
        </div>
      </div>
      <div className={cls["tab-content"]} hidden={index !== 1}>
        <div className={cls.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Button className="button" title="Yana" />
    </section>
  );
};

export default Event;
