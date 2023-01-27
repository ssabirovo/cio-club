import React from "react";
import { Controller, useForm } from "react-hook-form";
import cls from "./order.module.scss";
import { t } from "i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { object } from "prop-types";

interface OrderProps {
  setModalActive?: any;
  setSubscribe?: any;
  type?: any;
  title?: string;
  forceRender?: any;
}

const scheme = yup.object().shape({
  email: yup
    .string()
    .required("Maydonni to'ldiring !")
    .email("Noto'g'ri email kiritildi !"),
  phone: yup.string().matches(/^[0-9]{9}$/, "Must be exactly 5 digits"),
});

type FormValues = {
  email: string;
  //32q
  phone: string;
};

const Order: React.FC<OrderProps> = ({
  setModalActive,
  type,
  forceRender,
  setSubscribe,
}) => {
  const defaultEmail = localStorage.getItem("email");
  const defaultPhone = localStorage.getItem("phoneNumber");

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(scheme),
    defaultValues: {
      email: defaultEmail ? defaultEmail : "",
      phone: defaultPhone ? defaultPhone : "",
    },
  });

  const getQr = (id: string) => {
    axios
      .get(`https://185.185.80.245:7788/api/site/getQrCode?requestId=${id}`)
      .then((res) => {
        setSubscribe(true);
        console.log("lata", res);
        toast.success("Bog'langaniz uchun rahmat !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (data: any) => {
    axios
      .post(
        `https://api.teda.uz:7788/api/site?phone=${data.phone}&email=${data.email}`,
        {
          email: data.email,
          phone: "+998".concat(data.phone),
          aboutProduct: "",
          category: "",
          productId: type,
        }
      )
      .then((res) => {
        console.log("lata", res.data.data);
        getQr(res.data.data["id"]);
        setSubscribe(true);
        forceRender(1);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("email", data.email);
    localStorage.setItem("phoneNumber", data.phone);
    setModalActive(false);

    reset();
  };

  return (
    <form id="form" className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <p>Tadbirga yozilish uchun to'ldiring !</p>
      <Controller
        name="email"
        control={control}
        rules={{ required: "Required" }}
        render={({ field }) => (
          <>
            <input
              style={{
                border: `${
                  errors.email?.message
                    ? "1px solid red"
                    : "1px solid var( --link-text)"
                } `,
              }}
              className={cls.input}
              {...field}
              placeholder="Email"
            />
            {errors.email?.message && (
              <p className={cls.error}>
                {`${errors.email?.message}`}{" "}
                <i className="fa-solid fa-triangle-exclamation"></i>
              </p>
            )}
          </>
        )}
      />

      <Controller
        name="phone"
        control={control}
        rules={{ required: "Required" }}
        render={({ field }) => (
          <>
            <div className={cls.box}>
              <div>+998</div>
              <input
                style={{
                  border: `${
                    errors.phone?.message
                      ? "1px solid red"
                      : "1px solid  var(--link-text)"
                  } `,
                }}
                {...field}
                className={cls.phone}
                placeholder={"__ ___ __ __"}
              />
            </div>
            {errors.phone?.message && (
              <p className={cls.error}>
                Raqam noto'g'ri kiritildi !
                <i className="fa-solid fa-triangle-exclamation"></i>
              </p>
            )}
          </>
        )}
      />

      <input
        className={cls["submit-btn"]}
        type="submit"
        value={`${t("contact.submitBtn")}`}
      />
    </form>
  );
};

export default Order;
