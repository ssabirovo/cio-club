import React from "react";
import Navbar from "../../components/navbar";
import ContactUs from "./components/contact-us";
import Partners from "./components/partners";
import Event from "./components/event";
import Directions from "./components/directions";
import OurWork from "./components/our-work";
import cls from "./main.module.scss";
import PhotoCarusel from "./components/photo-carusel";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
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
  return (
    <div id="home">
      <Navbar />

      <section className={cls.hero}>
        <div className={cls.info}>
          <h1 className={cls.title}>Istalgan tadbirni tashkil qilish</h1>

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
