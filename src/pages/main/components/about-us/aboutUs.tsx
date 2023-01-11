import logo from "../../../../assets/images/headerLogo.svg";
import aboutUs from "../../../../assets/images/header.svg";
import cls from "./aboutUs.module.scss";

import React from "react";
import Button from "../../../../components/button";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface AboutUsProps {}

window.addEventListener("resize", () => {
  console.log("change");
});

const AboutUs: React.FC<AboutUsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (hash: string) => {
    let navig = new Promise((res, rej) => {
      navigate("/");
      res("succses");
    });
    navig.then(() => {
      document.location.hash = hash;
    });
  };

  return (
    <>
      <section id="about" className={cls.container}>
        <h1 className={cls.title}>{t("aboutUs.title")}</h1>
        <div className={cls.wrapper}>
          <div className={cls.left}>
            <Reveal
              triggerOnce={true}
              duration={1000}
              delay={200}
              keyframes={customAnimation}
            >
              <img src={logo} alt="" />
            </Reveal>
            <Reveal
              triggerOnce={true}
              duration={1000}
              delay={300}
              keyframes={customAnimation}
            >
              <h3>{t("aboutUs.subTitle")}</h3>
            </Reveal>
            <Reveal
              triggerOnce={true}
              duration={1000}
              delay={400}
              keyframes={customAnimation}
            >
              <p>{t("aboutUs.description")}</p>
            </Reveal>
            <Reveal
              triggerOnce={true}
              duration={1000}
              delay={100}
              keyframes={customAnimation}
            >
              <Button
                onClick={() => handleNavigate("#contact")}
                title={t("aboutUs.applyBtn")}
              />
            </Reveal>
          </div>
          <Reveal
            triggerOnce={true}
            duration={1000}
            delay={100}
            keyframes={customAnimationIMG}
          >
            <div className={cls.right}>
              <img src={aboutUs} alt="" />

              <h3>{t("aboutUs.subTitle")}</h3>
              <p>{t("aboutUs.description")}</p>
              <Button
                onClick={() => handleNavigate("#contact")}
                title={t("aboutUs.applyBtn")}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const customAnimationIMG = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default AboutUs;
