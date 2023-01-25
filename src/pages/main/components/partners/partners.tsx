import { keyframes } from "@emotion/react";

import Reveal from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Photos } from "./inside";
import cls from "./partners.module.scss";

interface PartnersProps {}

const Partners: React.FC<PartnersProps> = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Reveal
      triggerOnce={true}
      duration={1000}
      delay={100}
      keyframes={customAnimationInput}
    >
      <section id="carousel" className={cls.wrapper}>
        <h2 className={cls.title}>{t("footer.partners.label")}</h2>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {Photos.map((item, idx: number) => (
              <div key={idx} className={cls["img-container"]}>
                <img className={cls.img} src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Reveal>
  );
};

const customAnimationInput = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default Partners;
