/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { eventData } from "./inside";
import Button from "../../components/button/button";
import Icons from "../../components/icons";
import cls from "./about-event.module.scss";

interface AboutEventProps {}

const AboutEvent: React.FC<AboutEventProps> = () => {
  const [subscribe, setSubscribe] = useState(false);
  const { type } = useParams();
  const data: any = eventData;

  let today = new Date();

  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <div className={cls.about}>
      <Navbar blackBg={true} />
      <div className={cls.wrapper}>
        <div className={cls.hiddenNavbar}>af</div>
        <div className={cls.container}>
          <h2 className={cls.title}>{data[`${type}`].title}</h2>
          <h3 className={cls.subtitle}>Tashkilotchi</h3>
          <p className={cls.description}>
            Samarqand вилояти термиз шахар йошлар ишлар агентлиги маркази
          </p>
          <br />
          <br />
          <h3 className={cls.subtitle}>Tadbir haqida</h3>
          <p className={cls.description}>
            muddatli biznesni qo'llab-quvvatlaydi: IT-konsalting, brending
            texnologiyalari, dizayn echimlari, Internet-loyihalarni ishlab
            chiqish va ularga xizmat ko'rsatish, Internet-marketing,
            veb-saytlarni loyihalash va ishlab chiqish, shuningdek ularni
            qo'llab-quvvatlash va rivojlantirish.
          </p>
          <br />
          <br />
          <h3 className={cls.subtitle}>Sana</h3>
          <p className={cls.description}>11.02.2022 - 17.02.2022</p>
          <br />
          <br />
          <h3 className={cls.subtitle}>Manzil</h3>
          <p className={cls.description}>
            Toshkent viloyati, UsmonNosir koch. 15-uy
          </p>
          <div>
            <iframe
              className={cls.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.8555574636114!2d69.3255393849019!3d41.29375551902539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8baaaaaaaac1%3A0x4a00aeebddd9ed18!2sTEXNO%20DARGOH!5e0!3m2!1suz!2s!4v1668419984766!5m2!1suz!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {!subscribe ? (
            <Button
              onClick={() => setSubscribe(true)}
              className={cls.butt}
              title="Murojat qilish !"
            />
          ) : (
            <>
              <div className={cls.success}>
                Siz bu tadbirga yozilgansiz <Icons size={22} name="Ticked" />
              </div>
              <h3 className={cls.subtitle}>Murojaat vaqti</h3>
              <p className={cls.description}>{date}</p>
              <br />
              <br />
              <h3 className={cls.subtitle}>Qatnashilgan sana</h3>
              <p className={cls.description}>23.02.2022</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
