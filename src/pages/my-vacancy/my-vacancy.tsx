import React, { useEffect, useState } from "react";
import cls from "./my-vacancy.module.scss";

import SideBar from "../../components/side-bar/side-bar";
import Navbar from "../../components/navbar/navbar";
import SecondBar from "../../components/second-bar/second-bar";
import axios from "axios";


interface MyVacancyProps {}

const MyVacancy: React.FC<MyVacancyProps> = () => {
  const [vacancy, setVacancy] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://api.teda.uz:70/api/vacancy")
      .then((res) => {
        // eslint-disable-next-line array-callback-return
        res.data.data.filter((item: any): void => {
          if (item.active === true) {
            setVacancy([...vacancy, item]);
          }
        });
      })
      .catch((err) => {
        console.log("vacancy error", err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className={cls.wrapper}>
        <SideBar />
        <SecondBar />
        <div className={cls.vacancies}>
          <h2 className={cls.title}>Vakansiyalarim</h2>
          <div className={cls.container}>
            {vacancy.map((item: any) => (
              <div key={item.id} className={cls.vacancy}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVacancy;
