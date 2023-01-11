import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import image from "../../../../assets/svg/default.svg";
import Icons from "../../../icons";
import cx from "classnames";
import cls from "./imgCircle.module.scss";

interface ImgCircleProps {
  close: any;
  mobile: boolean;
}

const ImgCircle: React.FC<ImgCircleProps> = ({ close, mobile }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user") as string) || [];

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  const handleLogOut = () => {
    close(false);
    setOpen(!open);
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("lastOrders");
    localStorage.removeItem("userId");

    toast.info("See you again !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");
  };

  return (
    <div className={cls.wrapper}>
      <img
        className={cx(cls.img, cls[`${mobile && "imgMobile"}`])}
        ref={imgRef}
        onClick={() => setOpen(!open)}
        src={user.imageUrl ? user.imageUrl : image}
        alt=""
      />
      {open && (
        <div
          ref={menuRef}
          className={cx(cls.dropdown, cls[`${mobile && "dropdownLeft"}`])}
        >
          <div onClick={() => setOpen(!open)} className={cls.btn}>
            <p>
              Signed in as
              <br /> <br />
              {user.givenName ? user.givenName : localStorage.getItem("email")}
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/personal");
              setOpen(!open);
            }}
            className={cls.btn}
          >
            <Icons name="Person" /> <p>Shaxsiy kabinets</p>
          </div>
          <div
            onClick={() => {
              navigate("/orders");
              setOpen(!open);
            }}
            className={cls.btn}
          >
            <Icons name="Orders" /> <p>Buyurtmalar</p>
          </div>

          <div
            onClick={() => {
              navigate("/companies");
              setOpen(!open);
            }}
            className={cls.btn}
          >
            <Icons name="company" /> <p>Mening korxonalarim</p>
          </div>
          <div
            onClick={() => {
              navigate("/vacancy");
              setOpen(!open);
            }}
            className={cls.btn}
          >
            <Icons name="vacancy" /> <p>Mening vakansiyalarim</p>
          </div>

          <div onClick={() => handleLogOut()} className={cls.btn}>
            <Icons name="LogOut" /> <p>Tizimdan Chiqish</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgCircle;
