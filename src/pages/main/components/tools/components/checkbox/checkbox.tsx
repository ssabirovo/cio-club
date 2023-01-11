import React from "react";
import cls from "./checkbox.module.scss";
import cx from "classnames";

interface CheckboxProps {
  title: string;
  checked: boolean;
  onclick?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, checked, onclick }) => (
  <div className={cls.wrapper}>
    <div
      onClick={onclick}
      className={cx(cls.checkBox, cls[`${checked && "checked"}`])}
    >
      {" "}
    </div>
    <p className={cls.label}>{title}</p>
  </div>
);

export default Checkbox;
