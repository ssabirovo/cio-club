import React from "react";
import Navbar from "../../components/navbar";
import ContactUs from "./components/contact-us";
import Partners from "./components/partners";
import Event from "./components/event";
import Directions from "./components/directions";
import OurWork from "./components/our-work";
import cls from "./main.module.scss";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div id="home">
      <Navbar />

      <section className={cls.hero}>
        <div className={cls.info}>
          <h1 className={cls.title}>Istalgan tadbirni tashkil qilish</h1>
          <p className={cls.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            non!
          </p>
          <button className={cls.btn}>Bog’lanish !</button>
        </div>
      </section>

      <Event />
      <Directions />
      {/* <PhotoCarusel /> */}

      <OurWork />

      <Partners />

      <ContactUs />

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
