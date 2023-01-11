import React from "react";
import cls from "./company-info.module.scss";

import SideBar from "../../components/side-bar/side-bar";
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import { companies } from "../my-companies/inside";
import Bank from "./components/company/bank";
import SecondBar from "../../components/second-bar";

interface MyAccountProps {}

const buttons = ["Korxona malumotlari", "Bank malumotlari"];

const CompanyInfo: React.FC<MyAccountProps> = () => {
  const { company } = useParams();
  const [activeBtn, setActiveBtn] = React.useState("Korxona malumotlari");
  // @ts-ignore
  const companyData = companies[company];
  const companyKeys = Object.keys(companyData.companyInfo);
  const btnkKeys = Object.keys(companyData.bankInfo);

  return (
    <>
      <Navbar />
      <SecondBar/>
      <div className={cls.wrapper}>
        <SideBar />
        <div className={cls.account}>
          <h1 className={cls.title}>{companyData.companyInfo.name}</h1>
          <div className={cls.buttons}>
            {buttons.map((label) => (
              <button
                key={label}
                onClick={() => setActiveBtn(label)}
                className={cls[`${label === activeBtn && "activeBtn"}`]}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={cls.inputs}>
            {activeBtn === "Korxona malumotlari"
              ? companyKeys.map((value) => (
                  <div key={value}>
                    <p className={cls.label}>{value}</p>
                    <div className={cls.content}>
                      {companyData.companyInfo[value]}
                    </div>
                  </div>
                ))
              : btnkKeys.map((value) => (
                  <Bank
                    key={value}
                    companyKey={`${company}`}
                    name={companyData.bankInfo[value].name}
                    mfo={companyData.bankInfo[value].mfo}
                    currency={companyData.bankInfo[value].currency}
                    objectKey={value}
                    accountNumber={companyData.bankInfo[value].accountNumber}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
