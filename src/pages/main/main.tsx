import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import ContactUs from "./components/contact-us";
import Partners from "./components/partners";
import Event from "./components/event";
import Directions from "./components/directions";
import OurWork from "./components/our-work";
import cls from "./main.module.scss";
import mainBg from "../../assets/images/main-bg-60.png";
import PhotoCarusel from "./components/photo-carusel";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleNavigate = (hash: string) => {
    let navig = new Promise((res, rej) => {
      navigate("/");
      res("succses");
    });
    navig.then(() => {
      document.location.hash = hash;
    });
  };
  useEffect(() => {
    if (ref && ref.current && ref.current.clientHeight) {
      //                              ^ error: Object is possibly 'null'
      const height = ref.current.clientHeight;
      setHeight(height);
    }
  }, []);

  return (
    <div id="home">
      <Navbar fatherHeight={height} />

      <section
        className={cls.hero}
        style={{ background: `url(${mainBg})` }}
        ref={ref}
      >
        <div className={cls.info}>
          <h1 className={cls.title}>{t("header.title")}</h1>
          <p className={cls.paragraph}>{t("header.subtitle")}</p>
          <button
            className={cls.btn}
            onClick={() => handleNavigate("#contact")}
          >
            {t("buttons.contact")}
          </button>
        </div>
      </section>

      <Event />
      <Directions />

      <PhotoCarusel />

      <OurWork />

      <Partners />

      <ContactUs />
    </div>
  );
};

export default Main;
