import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../../../components/icons";
import cls from "./bank.module.scss";

interface CompanyProps {
  name: string;
  accountNumber: string;
  mfo: string;
  currency: string;
  objectKey: string;
  companyKey: string;
}

const Bank: React.FC<CompanyProps> = ({
  name,
  accountNumber,
  mfo,
  currency,
  objectKey,
  companyKey,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/company/${companyKey}/${objectKey}`)}
      className={cls.wrapper}
    >
      <div className={cls.info}>
        <h2 className={cls.title}>{name}</h2>
        <div className={cls["company-types"]}>
          <table border={0}>
            <tr>
              <th>Xisob raqam</th>
              <th>MFO</th>
              <th>Valyuta turi</th>
            </tr>
            <tr>
              <td>{accountNumber}</td>
              <td>{mfo}</td>
              <td>{currency}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className={cls.circle}>
        <Icons size={22} name="up" className={cls.icon} />
      </div>
    </div>
  );
};

export default Bank;
