import React, { useEffect, useState } from "react";
import cls from "./event.module.scss";
import cx from "classnames";
import Card from "./components/card/card";
import Button from "../../../../components/button/button";
import { useNavigate } from "react-router-dom";
import { paths } from "./inside";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface EventProps {}

const tablists = [
  { idx: 0, key: "events.old" },
  { idx: 1, key: "events.new" },
];

const Event: React.FC<EventProps> = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.teda.uz:7788/api/product")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("vacancy error", err);
      });
  }, []);

  return (
    <section
      id="events"
      className={cx(cls.events, cls[`${data.length >= 4 && "heightShort"}`])}
    >
      <h2 className={cls.title}>{t("events.title")}</h2>
      {/* <div className={cls.tablist}>
        {tablists.map(({ idx, key }) => (
          <div
            key={key}
            className={cx(cls["tab-head"], index === idx ? cls.active : null)}
            onClick={() => {
              setIndex(idx);
              console.log(index);
            }}
          >
            {t(key)}
          </div>
        ))}
      </div> */}
      <div className={cls["tab-content"]} hidden={index !== 0}>
        <div className={cls.container}>
          {data.map(({ nameUz, id }) => (
            <Card
              title={nameUz}
              key={id}
              onClick={() => navigate(`/about-event/${id}`)}
              statusColor="#CBCBCB"
            />
          ))}
        </div>
      </div>
      <div className={cls["tab-content"]} hidden={index !== 1}>
        <div className={cls.container}>
          {data.map(({ nameUz, id }) => (
            <Card
              title={nameUz}
              key={id}
              onClick={() => navigate(`/about-event/${id}`)}
              statusColor="#CBCBCB"
            />
          ))}
        </div>
      </div>
      {data.length >= 4 && (
        <Button
          onClick={() => navigate("/events")}
          className="button"
          title={t("buttons.more")}
        />
      )}
    </section>
  );
};

export default Event;
