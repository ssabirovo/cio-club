import React from "react";
import * as List from "./list";
import get from "lodash/get";
import cx from "classnames";
import cls from "./icons.module.scss";

interface IconProps {
  name: keyof typeof List;
  size?: number;
  className?: string;
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 15,
  className,
  color,
  onClick,
}) => {
  const Component: any = get(List, `[${name}]`);

  if (!Component) {
    console.log("Icon component not found");

    return null;
  }

  return (
    <div
      className={cx(cls.wrapper, className)}
      onClick={onClick}
      style={{ ...{ "--size": `${size}px` }, color } as React.CSSProperties}
    >
      <Component />
    </div>
  );
};

export default Icon;
