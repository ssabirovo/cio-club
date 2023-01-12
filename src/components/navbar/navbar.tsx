import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/logo2.png";
import Button from "../button/button";
import Icons from "../icons";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BasicSelect from "./components/drop/drop";
import ImgCircle from "./components/imgCircle/imgCircle";
import Register from "../register";
import Modal from "../modal";
import { links, MediaLinks } from "./inside";
import cls from "./navbar.module.scss";
import Icon from "../icons/icons";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isUser, setUser] = useState(false);
  const hamRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    let viewed = sessionStorage.getItem("loginModalViewed");
    if (!viewed || viewed !== "true") {
      setActive(true);
    }
    if (localStorage.getItem("user") || localStorage.getItem("email")) {
      setUser(true);
    }
  }, []);

  const toggleHam = (hash?: string): void => {
    document.body.style.overflow = `${!isActive ? "hidden" : "auto"}`;
    setIsActive(!isActive);
    hamRef.current?.classList.toggle(cls["t-none"]);
    hash && handleNavigate(hash);
  };

  const handleNavigate = (hash: string) => {
    let navig = new Promise((res, rej) => {
      navigate("/");
      res("succses");
    });
    navig.then(() => {
      document.location.hash = hash;
    });
  };
  const defaultEmail = localStorage.getItem("email");

  return (
    <div className={cls.container}>
      <section className={cls.wrapper}>
        <div className={cls.links}>
          {links.map(({ address, content }) => (
            <div key={content} onClick={() => handleNavigate(address)}>
              <p>{t(content)}</p>
            </div>
          ))}
        </div>

        <div className={cls.logo}>
          <img src={Logo} alt="" onClick={() => handleNavigate("#home")} />
        </div>

        <div className={cls.corner}>
          <div className={cls.contacts}>
            <div className={cls.phones}>
              <Icon color="var(--white)" name="phone" />
              <div className={cls.box}>
                <p>90-378-06-56</p>
                <p>94-442-98-89</p>
              </div>
            </div>
            <div className={cls.telegram}>
              <Icon color="var(--white)" name="telegram" />
              <p>@ibrat.club.uz</p>
            </div>
          </div>

          <BasicSelect color="white" />

          {/* {isUser ? (
            <ImgCircle close={setUser} mobile={false} />
          ) : (
            <Button onClick={() => setActive(true)} title={"Login"} />
          )} */}
        </div>

        {!defaultEmail && (
          <Modal
            active={active}
            element={<Register setUser={setUser} setActive={setActive} />}
            setActive={setActive}
          />
        )}

        <div
          onClick={() => {
            toggleHam();
          }}
          className={cls.ham}
        >
          <Icons name="hamburger" size={30} color="var(--primary)" />
        </div>
      </section>

      {/* second navbar */}

      <div ref={hamRef} className={cls.hamburger}>
        <div className={cls.xmark}>
          {isUser ? (
            <ImgCircle close={setUser} mobile={true} />
          ) : (
            <Button
              onClick={() => {
                setActive(true);
                hamRef.current?.classList.toggle(cls["t-none"]);
              }}
              title={"Login"}
            />
          )}
          <Icons onClick={() => toggleHam()} name="xMark" size={30} />
        </div>

        <div className={cls.content}>
          {links.map(({ address, content }) => (
            <p key={content} onClick={() => toggleHam(address)}>
              {t(content)}
            </p>
          ))}

          <div className={cls.lang}>
            <Icons name="globus" color="var(--secondary)" size={20} />
            <BasicSelect color="white" />
          </div>
        </div>
        <div className={cls.hamLinks}>
          {MediaLinks.map(({ address, iconName }) => (
            <a key={iconName} href={address} target={"blank"}>
              <Icons color="var(--white)" name={iconName} size={28} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
