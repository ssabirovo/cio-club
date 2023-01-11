import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Icons from "../icons";
import cls from "./footer.module.scss";
import { rightSide, leftSide } from "./inside";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (hash: string) => {
    let navig = new Promise((res, rej) => {
      navigate("/");
      res("succses");
    });
    navig.then(() => {
      document.location.hash = hash;
    });
  };

  const handleClick = (pageName: string) => {
    navigate(`/about/${pageName}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className={cls.wrapper}>
      <div className={cls.top}>
        <div className={cls.left}>
          <p className={cls.phone}>+998 (90) 977-77-99</p>
          <p className={cls.address}>
            Toshkent shahar. <br /> Yashnobod tum. <br />
            Elbek Ko’ch. 24/1
          </p>
          <div className={cls.links}>
            {leftSide.map(({ name, address }) => (
              <a key={name} target={"blank"} href={address}>
                <Icons size={32} name={name} />
              </a>
            ))}
          </div>
        </div>
        <div className={cls.right}>
          {rightSide.map(({ name, children }) => (
            <div key={name} className={cls.column}>
              <p>{t(name)}</p>
              {children.map(({ label, adress, hash, type, pageName }) =>
                type === "anchor" ? (
                  <a
                    onClick={() => hash && handleNavigate(hash)}
                    key={label}
                    href={adress ? adress : ""}
                    target={"blank"}
                  >
                    <p>{label}</p>
                  </a>
                ) : (
                  <div
                    onClick={() =>
                      type === "hash"
                        ? handleNavigate(hash)
                        : handleClick(pageName)
                    }
                    key={label}
                  >
                    <p>{t(label)}</p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <p className={cls.copyright}>{t("footer.copyright")}</p>
    </section>
  );
};
export default Footer;
