import React, { useEffect, useState } from "react";
import cls from "./about.module.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { aboutDataUz } from "./inside";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Modal from "../../components/modal";
import Order from "../../components/order";
import LastOrder from "../../components/last-order";
import Button from "../../components/button";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [modalActive, setModalActive] = useState(false);
  const [forceRender, setForceRender] = useState(0);
  const { type } = useParams();
  const { t } = useTranslation();
  const phone = localStorage.getItem("phoneNumber");
  const email = localStorage.getItem("email");
  const lastOrders = JSON.parse(localStorage.getItem("lastOrders") || "{}");

  useEffect(() => {
    let params = {
      phone,
      email,
    };
    axios
      .post(
        `https://api.teda.uz:70/api/site/history`,
        {
          ipAddress: localStorage.getItem("userIp"),
          category: type,
          about: type,
        },
        {
          params,
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    setModalActive(true);
  };

  const data: any = aboutDataUz;

  return (
    <>
      <Navbar />
      <section className={cls.wrapper}>
        <h1>{t(data[`${type}`].title)}</h1>
        <h3>{t(data[`${type}`].subtitle)}</h3>
        {data[`${type}`].content.map((item: any) => (
          <div key={item}>
            <p>{t(item)}</p>
            <br />
          </div>
        ))}
        {lastOrders[`${type}`].id !== "empty" ? (
          <LastOrder
            date={lastOrders[`${type}`].date}
            id={lastOrders[`${type}`].id}
            handleClick={handleClick}
          />
        ) : (
          <div className="btn-wrapper">
            <Button onClick={() => handleClick()} title="Buyurtma berish" />
          </div>
        )}

        <Modal
          element={
            <Order
              forceRender={setForceRender}
              title={t(data[`${type}`].title)}
              type={type}
              setModalActive={setModalActive}
            />
          }
          active={modalActive}
          setActive={setModalActive}
        />
      </section>
      <Footer />
    </>
  );
};

export default About;
