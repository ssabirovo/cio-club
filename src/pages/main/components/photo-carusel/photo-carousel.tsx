import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Slider, { Settings } from "react-slick";
import { Photos } from "./inside";
import cls from "./photo-carousel.module.scss";

interface CarouselProps {}

const PhotoCarousel: React.FC<CarouselProps> = () => {
  const { t } = useTranslation();
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
        <h2 className={cls.title}>{t("speakers")}</h2>
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

export default PhotoCarousel;
