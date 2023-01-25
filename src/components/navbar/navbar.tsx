import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/PHG-1.png";
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
import Icon from "../icons/icons";
import cx from "classnames";
import cls from "./navbar.module.scss";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
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

  const changeBackground = () => {
    if (window.scrollY >= 780) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

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
      <section className={cx(cls.wrapper, navbar === true && cls.active)}>
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
                <a href="tel:+998903780656">90-378-06-56</a>
                <a href="tel:+998944429889">94-442-98-89</a>
              </div>
            </div>
            <div className={cls.telegram}>
              <Icon color="var(--white)" name="telegram" />
              <a href="https://t.me/Ibrat" target={"blank"}>
                @Ibrat
              </a>
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
          <Icons name="hamburger" size={30} color="var(--white)" />
        </div>
      </section>

      {/* second navbar */}

      <div ref={hamRef} className={cls.hamburger}>
        <div className={cls.xmark}>
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
