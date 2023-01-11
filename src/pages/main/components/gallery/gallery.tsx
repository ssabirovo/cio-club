import React, { useState } from "react";
import cls from "./gallery.module.scss";
import cx from "classnames";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Button from "../../../../components/button";
import { useTranslation } from "react-i18next";
import { Photos } from "./inside";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customAnimationH2 = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const [openMore, setOpenMore] = useState(true);
  const { t } = useTranslation();
  return (
    <section id="gallery" className={cls.wrapper}>
      <Reveal
        triggerOnce={true}
        delay={300}
        duration={1000}
        keyframes={customAnimationH2}
      >
        <h1 className={cls.title}>{t("gallery.title")}</h1>
      </Reveal>
      <Reveal
        keyframes={customAnimation}
        triggerOnce={true}
        delay={500}
        duration={1000}
      >
        <div className={cx(cls.close, openMore && cls.open)}>
          {Photos.map(({ ulr, className, video }, idx: number) => (
            <div key={idx} className={cx(cls.container, cls[`${className}`])}>
              {video ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={ulr} alt="" />
              )}
            </div>
          ))}
        </div>
        <div className={cls["btn-wrapper"]}>
          <Button
            onClick={() => setOpenMore(!openMore)}
            title={
              openMore
                ? `${t("gallery.seeMoreBtn")}`
                : `${t("gallery.closeBtn")}`
            }
          />
        </div>
      </Reveal>
    </section>
  );
};

export default Gallery;
