import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Icons from "../../../icons";
import cls from "./drop.module.scss";
import { Flags } from "./inside";

interface BasicSelectProps {
  color: "primary" | "white";
}

const BasicSelect: React.FC<BasicSelectProps> = ({ color }) => {
  const { i18n } = useTranslation(["common"]);
  const [opened, setOpened] = useState(false);
  const menuRef = useRef(null);
  const imgRef = useRef(null);
  const lang = localStorage.getItem("i18nextLng");
  window.addEventListener("click", (e) => {
    if (e.target !== imgRef.current) {
      setOpened(false);
    }
  });
  const handleChange = (event: string) => {
    i18n.changeLanguage(event);
  };

  return (
    <div className={cls.wrappper}>
      <div
        style={{ color: `var(--${color})` }}
        ref={imgRef}
        onClick={() => setOpened(!opened)}
        className={cls.heading}
      >
        {lang}
      </div>
      {opened && (
        <div ref={menuRef} className={cls.content}>
          {Flags.map(({ iconName, lang }) => (
            <div
              key={lang}
              className={cls.flag}
              onClick={() => handleChange(lang)}
            >
              <Icons size={30} name={iconName} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default BasicSelect;
