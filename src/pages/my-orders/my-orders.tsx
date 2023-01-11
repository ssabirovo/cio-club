import React, { useEffect, useState } from "react";
import cls from "./my-orders.module.scss";
import SideBar from "../../components/side-bar/side-bar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import OrderTab from "./components/tab/order-tab";
import SecondBar from "../../components/second-bar/second-bar";

interface MyAccountProps {}

const MyAccount: React.FC<MyAccountProps> = () => {
  const [data, setData] = useState([]);

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
  console.log("data order", data);
  return (
    <>
      <Navbar />
      <SecondBar />

      <div className={cls.wrapper}>
        <SideBar />
        <div className={cls.order}>
          <h1 className={cls.title}>Mening buyurtmalarim</h1>
          <OrderTab data={data} />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
