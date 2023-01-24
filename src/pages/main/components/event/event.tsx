import React, { useState } from "react";
import cls from "./event.module.scss";
import cx from "classnames";
import Card from "./components/card/card";
import Button from "../../../../components/button/button";
import { useNavigate } from "react-router-dom";
import { paths } from "./inside";

interface EventProps {}

const tablists = [
  { idx: 0, key: "Oldingi" },
  { idx: 1, key: "Hozirgi" },
];

const Event: React.FC<EventProps> = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  return (
    <section className={cls.events}>
      <h2 className={cls.title}>Tadbirlar</h2>
      <div className={cls.tablist}>
        {tablists.map(({ idx, key }) => (
          <div
            key={key}
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
          {paths.map((path, idx) => (
            <Card
              title={path}
              key={idx}
              onClick={() => navigate(`/about-event/${path}`)}
              statusColor="#CBCBCB"
            />
          ))}
        </div>
      </div>
      <div className={cls["tab-content"]} hidden={index !== 1}>
        <div className={cls.container}>
          {paths.map((path, idx) => (
            <Card
              title={path}
              key={idx}
              onClick={() => navigate(`/about-event/${path}`)}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={() => navigate("/events")}
        className="button"
        title="Yana"
      />
    </section>
  );
};

export default Event;
