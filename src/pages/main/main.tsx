import React from "react";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import cls from "./main.module.scss";

import AboutUs from "./components/about-us/aboutUs";
import ContactUs from "./components/contact-us";
import PhotoCarusel from "./components/photo-carusel";
import Gallery from "./components/gallery";
import Partners from "./components/partners";
import Event from "./components/event/event";

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
          <button className={cls.btn}>Bog’lanish</button>
        </div>
      </section>

      <Event />

      {/* <PhotoCarusel /> */}

      {/* <Gallery /> */}

      <Partners />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default Main;
