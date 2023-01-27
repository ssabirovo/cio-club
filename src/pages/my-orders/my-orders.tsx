import React, { useEffect, useState } from "react";
import cls from "./my-orders.module.scss";
import SideBar from "../../components/side-bar/side-bar";
import axios from "axios";
import SecondBar from "../../components/second-bar/second-bar";
import Card from "../main/components/event/components/card/card";
import { useNavigate } from "react-router-dom";

interface MyAccountProps {}

const MyAccount: React.FC<MyAccountProps> = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const id = localStorage.getItem("userId");
  useEffect(() => {
    axios
      .get(`https://api.teda.uz:70/api/site/requestsByUser/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigate("/");
    }
  });
  return (
    <>
      <SecondBar />

      <div className={cls.wrapper}>
        <SideBar />
        <div className={cls.order}>
          <h1 className={cls.title}>Tadbirlar</h1>
          <p className={cls.description}>Men qatnashmoqchi bo’gan tadbirlar</p>
          <div className={cls.container}>
            <Card title="Ibrat event" onClick={() => console.log("hello")} />
            <Card title="Teda event" onClick={() => console.log("hello")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
