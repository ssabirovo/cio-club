import React from "react";
import cls from "./company-info.module.scss";

import SideBar from "../../components/side-bar/side-bar";
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import { companies } from "../my-companies/inside";
import SecondBar from "../../components/second-bar";

interface MyAccountProps {}

const BankInfo: React.FC<MyAccountProps> = () => {
  const { company, bank } = useParams();

  // @ts-ignore
  const companyData = companies[company];
  const btnkKeys = Object.keys(companyData.bankInfo[bank]);

  return (
    <>
      <Navbar />
      <SecondBar />
      <div className={cls.wrapper}>
        <SideBar />
        <div className={cls.account}>
          <h1 className={cls.title}>{companyData.bankInfo[bank].name}</h1>
          <div className={cls.inputs}>
            {btnkKeys.map((value) => (
              <div key={value}>
                <p className={cls.label}>{value}</p>
                <div className={cls.content}>
                  {companyData.bankInfo[bank][value]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BankInfo;
