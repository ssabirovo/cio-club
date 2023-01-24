import React, { useState } from "react";
import cx from "classnames";
import cls from "./our-work.module.scss";
import Icon from "../../../../components/icons/icons";
import { data } from "./inside";
import Button from "../../../../components/button/button";

interface OurWorkProps {}

const OurWork: React.FC<OurWorkProps> = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const [toggle, setToggle] = useState(false);
  const getItem = (item: string) => {
    setTempImg(item);
    setModel(true);
  };
  return (
    <section id="gallery" className={cls.wrapper}>
      <h2 className={cls.title}>Our Works</h2>
      <div className={cx(cls.model, model && cls.open)}>
        <img src={tempImg} alt="" />
        <div className={cls.icon}>
          <Icon
            size={24}
            onClick={() => setModel(false)}
            className={cls.xMark}
            name="xMark"
            color="white"
          />
        </div>
      </div>
      <div className={cx(cls.container, toggle && cls.opentoggle)}>
        <div className={cls.gallery}>
          {data.map((item, idx) => {
            return (
              <div
                className={cls.pics}
                key={idx}
                onClick={() => getItem(item.imgSrc)}
              >
                <img src={item.imgSrc} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={cls["btn-wrapper"]}>
        <Button
          onClick={() => setToggle(!toggle)}
          title={toggle ? "Close" : "See more"}
        />
      </div>
    </section>
  );
};

export default OurWork;
