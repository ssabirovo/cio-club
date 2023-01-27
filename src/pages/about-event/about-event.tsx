/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { eventData } from "./inside";
import Button from "../../components/button/button";
import Icons from "../../components/icons";
import cls from "./about-event.module.scss";
import Modal from "../../components/modal/modal";
import Order from "../../components/order/order";
import Icon from "../../components/icons/icons";
import axios from "axios";

interface AboutEventProps {}

const AboutEvent: React.FC<AboutEventProps> = () => {
  const navigate = useNavigate();
  const [subscribe, setSubscribe] = useState(false);
  const [active, setActive] = useState(false);
  const [qrId, setQrId] = useState(0);
  const { type } = useParams();
  // const data: any = eventData;
  const [data, setData] = useState(null);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    axios
      .get("https://api.teda.uz:7788/api/product")
      .then((res) => {
        setData(res.data.data.filter(({ id }: any) => `${id}` === type)[0]);
      })
      .catch((err) => {
        console.log("vacancy error", err);
      });
  });

  return (
    <div className={cls.about}>
      <Navbar blackBg={true} />
      <Modal
        active={active}
        element={
          <Order
            type={type}
            setSubscribe={setSubscribe}
            setModalActive={setActive}
          />
        }
        setActive={setActive}
      />
      <div className={cls.wrapper}>
        {/* <div className={cls.hiddenNavbar}>af</div> */}
        <div className={cls.container}>
          <div className={cls.titleContainer}>
            <h2 className={cls.title}>{data && data["nameUz"]}</h2>
            <Icon
              color="var(--primary)"
              size={30}
              onClick={() => navigate(`/`)}
              name="Xmark"
            />
          </div>

          {/* tashkilotchilar bo'ladi */}
          {/* <h3 className={cls.subtitle}>Tashkilotchi</h3> */}
          {/* <p className={cls.description}>
            Samarqand вилояти термиз шахар йошлар ишлар агентлиги маркази
          </p> */}
          <br />
          <br />
          <h3 className={cls.subtitle}>Tadbir haqida</h3>
          <p className={cls.description}>{data && data["descriptionUz"]}</p>
          <br />

          <br />
          {/* <h3 className={cls.subtitle}>Sana</h3>
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
          </div> */}
          {!subscribe ? (
            <>
              <Button
                onClick={() => {
                  setActive(true);
                }}
                className={cls.butt}
                title="Murojat qilish !"
              />
            </>
          ) : (
            <>
              <div className={cls.success}>
                Siz bu tadbirga yozilgansiz <Icons size={22} name="Ticked" />
              </div>
              {/* <h3 className={cls.subtitle}>Murojaat vaqti</h3>
              <p className={cls.description}>{date}</p> */}
              <h3 className={cls.subtitle}>Sizning QR-kodingiz</h3>
              <img
                className={cls.qrCode}
                src="https://api.teda.uz:7788/api/site/getQrCode?requestId=58"
                alt=""
              />
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
