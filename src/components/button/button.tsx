import React from "react";
import cx from "classnames";
import cls from "./button.module.scss";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => (
  <div onClick={onClick} className={cx(cls.wrapper, cls[`${className}`])}>
    {title}
  </div>
);

export default Button;
