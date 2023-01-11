import React from "react";
import cls from "./tab.module.scss";
import cx from "classnames";

interface OrderTabProps {
  data: any;
}

const OrderTab: React.FC<OrderTabProps> = ({ data }) => {
  const [tabData, setTabData] = React.useState([]);
  const [activeBtn, setActiveBtn] = React.useState("all");

  let keys = Object.keys(data);
  let bottons = [...["Jami"], ...keys];
  console.log("keys", bottons);

  React.useEffect(() => handleAll(), [data]);

  const handleAll = () => {
    let tempData = [];
    for (let key of keys) {
      let result = data[key].filter(({ category }: any) => category === key);
      for (let res of result) {
        tempData.push(res);
      }
    }
    //@ts-ignore
    setTabData(tempData.sort((a, b) => b.id - a.id));
    setActiveBtn("Jami");
  };

  const handleFilter = function (key: string) {
    let result = data[key].filter(({ category }: any) => category === key);
    //@ts-ignore
    setTabData(result.sort((a, b) => b.id - a.id));
    setActiveBtn(key);
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.buttonsContainer}>
        <div className={cls.buttons}>
          
          {bottons &&
            bottons.map((key: string, idx) => (
              <button
                className={cx(
                  cls.button,
                  cls[`${key === activeBtn && "activeBtn"}`]
                )}
                onClick={() =>
                  key !== "Jami" ? handleFilter(key) : handleAll()
                }
                key={idx}
              >
                {key}
              </button>
            ))}
        </div>
      </div>

      <div className={cls.header}>
        <div>Holati</div>
        <div>Id</div>
        <div>Vaqti</div>
        <div>Buyurtma nomi</div>
      </div>
      <div className={cls.tables}>
        {tabData.map(({ id, category, dateTime }: any) => (
          <div key={dateTime} className={cls.table}>
            <div>tekshirilyapti</div>
            <div>{id}</div>
            <div>{dateTime}</div>
            <div>{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
