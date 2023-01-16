import React, { useState } from "react";
import cx from "classnames";
import cls from "./our-work.module.scss";
import Icon from "../../../../components/icons/icons";

interface OurWorkProps {}

const data = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1670672950186-06319ae47429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1669985457873-0c540a1d832a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2095&q=80",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1669723009423-6c1b3d11dd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1661002476948-cb7a646b5162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1652971422886-784758cc28d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1668184162944-7ce7cdf1fc35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1666363418419-6a01151ccb1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const OurWork: React.FC<OurWorkProps> = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const getItem = (item: string) => {
    setTempImg(item);
    setModel(true);
  };
  return (
    <div className={cls.wrapper}>
      <h2>Image Gallery</h2>
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
  );
};

export default OurWork;
