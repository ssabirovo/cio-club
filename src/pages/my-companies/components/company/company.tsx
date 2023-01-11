import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../../../../components/icons/icons";
import cls from "./company.module.scss";

interface CompanyProps {
  name: string;
  activityType: string;
  stirNumber: string;
  memberOrganization: string;
  objectKey: string;
}

const Company: React.FC<CompanyProps> = ({
  name,
  activityType,
  stirNumber,
  memberOrganization,
  objectKey,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/company/${objectKey}`)}
      className={cls.wrapper}
    >
      <div className={cls.info}>
        <div className={cls["logo-wrapper"]}>
          <img
            className={cls.logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRc-h0wkKByI5wkKVwl5u3wAVgSiM2RP3Ng&usqp=CAU"
            alt=""
          />
          <h2 className={cls.title}>{name}</h2>

          <div className={cls["second-map"]}>
            <img
              src="https://www.shutterstock.com/image-vector/city-map-any-kind-digital-260nw-2037116720.jpg"
              alt=""
            />
          </div>
        </div>

        <p className={cls.location}>
          <Icon name="location" color="var(--primary)" />
          Toshkent viloyati, UsmonNosir koch. 15-uy
        </p>
        <div className={cls["company-types"]}>
          <table border={0}>
            <thead>
              <tr>
                <th>Faoliyat turi</th>
                <th>STIR raqami</th>
                <th>A’zo tashkilot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{activityType}</td>
                <td>{stirNumber}</td>
                <td>{memberOrganization}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={cls.map}>
        <img
          src="https://www.shutterstock.com/image-vector/city-map-any-kind-digital-260nw-2037116720.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Company;
