import React, { useRef } from "react";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import logo from "../../assets/images/heroLogo.svg";
import cls from "./main.module.scss";
import { Zoom } from "react-awesome-reveal";

import Circle from "./components/circle";
import { heroData } from "./heroInside";
import AboutUs from "./components/about-us/aboutUs";
import ContactUs from "./components/contact-us";
import PhotoCarusel from "./components/photo-carusel";
import Tilt from "react-parallax-tilt";
import Gallery from "./components/gallery";
import BasicTabs from "./components/tabs/tabs";
import Partners from "./components/partners";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const graph = useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    let lastOrders = {
      telegramBot: { id: "empty", date: "" },
      threeDesign: { id: "empty", date: "" },
      crm: { id: "empty", date: "" },
      mobile: { id: "empty", date: "" },
      eCommerce: { id: "empty", date: "" },
      smm: { id: "empty", date: "" },
      webApp: { id: "empty", date: "" },
      registration: { id: "empty", date: "" },
    };
    !localStorage.getItem("lastOrders") &&
      localStorage.setItem("lastOrders", JSON.stringify(lastOrders));

    let width = window.innerWidth;
    const { childNodes: circleElements, clientWidth } = graph.current!;

    let angle = 360 - 90;
    const dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      const circle = circleElements[i] as HTMLDivElement;

      angle += dangle;
      circle.style.transform = `rotate(${angle}deg ) translate(${
        width >= 700 ? clientWidth / 2.3 : clientWidth / 1.7
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  return (
    <div id="home">
      <Navbar />

      <Zoom triggerOnce={true}>
        <section className={cls.hero}>
          <Tilt
            className={cls.tilt}
            glareEnable={true}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={1000}
          >
            <div className="tiltComponent">
              {" "}
              <img src={logo} alt="" className={cls.logo} />
            </div>
          </Tilt>

          <div className={cls["circle-graph"]} ref={graph}>
            {heroData.map(({ title, iconName, pageName }) => (
              <Circle
                key={title}
                pageName={pageName}
                title={title}
                iconName={iconName}
              />
            ))}
          </div>
        </section>
      </Zoom>

      <AboutUs />

      <PhotoCarusel />

      <BasicTabs />

      <Gallery />

      <Partners />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default Main;
