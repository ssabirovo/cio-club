import React, { useState } from "react";
import Icons from "../icons";
import cx from "classnames";
import cls from "./fixed.module.scss";

interface FixedProps {}

const FixedContacts: React.FC<FixedProps> = () => {
  const [opened, setState] = useState(false);

  return (
    <div
      onClick={() => setState(!opened)}
      className={cx(cls.wrapper, `${opened && cls.wOpened}`)}
    >
      <div className={cx(cls.content, `${opened && cls.opened}`)}>
        <a
          href="tel:+998947080428"
          style={{
            backgroundColor: `${opened ? "var(--phone-bg)" : "var(--primary)"}`,
          }}
          className={cls.card}
        >
          <Icons
            color="var(--secondary)"
            size={20}
            name="phone"
            className={cls.tel}
          />
          <p>94 708 04 28</p>
        </a>
        <div className={cls.rightSide}>
          <a
            href="https://t.me/tedauz_bot"
            target={"blank"}
            style={{
              backgroundColor: `${
                opened ? "var(--telegram-bg)" : "var(--primary)"
              }`,
            }}
            className={cls.card}
          >
            <Icons size={20} name="telegram" className={cls.mail} />
            <p>@tedauzbot</p>
          </a>
          <a
            target={"blank"}
            href="https://mail.google.com/mail/u/0/#search/tedacompanyinfo%40gmail.com?compose=new"
            style={{
              backgroundColor: `${
                opened ? "var(--mail-bg)" : "var(--primary)"
              }`,
              color: `${opened ? "var(--mail-color)" : "var(--secondary)"}`,
            }}
            className={cls.card}
          >
            <Icons size={20} name="mail" className={cls.telegram} />
            <p>@tedauzbot</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedContacts;
