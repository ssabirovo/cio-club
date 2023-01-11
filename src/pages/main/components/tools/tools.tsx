import React, { useState } from "react";
import cls from "./tools.module.scss";
import Checkbox from "./components/checkbox/checkbox";
import { malumot, cards } from "./inside";
import Card from "./card";

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = () => {
  const [data, setData] = useState(malumot);
  const [subject, setSubject] = useState("frontend");

  const handleClick = (label: string) => {
    data.forEach((element) =>
      element.label === label
        ? (element.checked = true)
        : (element.checked = false)
    );

    setData([...data]);
  };

  return (
    <section className={cls.wrapper}>
      <div className={cls.checkboxs}>
        {data.map(({ checked, label }) => (
          <Checkbox
            key={label}
            onclick={() => handleClick(label)}
            checked={checked}
            title={label}
          />
        ))}
      </div>
      <div className={cls.cards}>
        {cards.mobile.map(({ imgUrl, label }) => (
          <Card imgUrl={imgUrl} title={label} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
