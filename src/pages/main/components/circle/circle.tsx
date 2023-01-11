import React from "react";
import Icons from "../../../../components/icons";
import * as List from "../../../../components/icons/list";
import cls from "./circle.module.scss";
import { useNavigate } from "react-router-dom";
import { aboutDataUz } from "../../../About/inside";

interface CircleProps {
  title: string;
  iconName: keyof typeof List;
  pageName: keyof typeof aboutDataUz;
}

const Circle: React.FC<CircleProps> = ({ title, iconName, pageName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/about/${pageName}`);
  };

  return (
    <div onClick={handleClick} className={cls.wrapper}>
      <Icons name={iconName} size={40} />
      <p>{title}</p>
    </div>
  );
};

export default Circle;
