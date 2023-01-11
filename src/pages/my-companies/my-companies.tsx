import React, { useEffect, useState } from "react";
import cls from "./my-companies.module.scss";
import SideBar from "../../components/side-bar";
import Navbar from "../../components/navbar";
import axios from "axios";
import Company from "./components/company";
import SecondBar from "../../components/second-bar/second-bar";
import { companies } from "./inside";

interface MyAccountProps {}

const MyCompanies: React.FC<MyAccountProps> = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("userId");

  const companiesData = companies;
  const keys = Object.keys(companiesData);

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
        <div className={cls.company}>
          <h1 className={cls.title}>Mening korxonalarim</h1>
          <div className={cls.companies}>
            {keys.map((item) => (
              <Company
                key={item}
                //@ts-ignore
                objectKey={item}
                //@ts-ignore
                name={companiesData[item].companyInfo.name}
                //@ts-ignore
                activityType={companiesData[item].companyInfo.activityType}
                //@ts-ignore
                stirNumber={companiesData[item].companyInfo.stirNumber}
                memberOrganization={
                  //@ts-ignore
                  companiesData[item].companyInfo.memberOrganization
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCompanies;
