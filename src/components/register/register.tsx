import axios from "axios";
import { gapi } from "gapi-script";
import { t } from "i18next";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Icons from "../icons";
import cls from "./register.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface RegisterProps {
  setActive?: any;
  setUser?: any;
}

interface IFormInputs {
  email: string;
  phone: string;
}

const scheme = yup.object().shape({
  email: yup
    .string()
    .required("Maydonni to'ldiring !")
    .email("Noto'g'ri email kiritildi !"),
  phone: yup.string().matches(/^[0-9]{9}$/, "Must be exactly 5 digits"),
});

const clientId =
  "1084261722186-769vrdq6nvifl54js8tusvuuo3j0sa02.apps.googleusercontent.com";
let user = {};

const Register: React.FC<RegisterProps> = ({ setActive, setUser }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }
    gapi.load("client:auth2", start);
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(scheme),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  const onLoginSuccess = (data: any) => {
    let params = {
      email: data.profileObj.email,
      phone: "",
    };
    setActive(false);
    axios
      .post(
        "https://api.teda.uz:70/api/site/login",
        {},
        {
          params,
        }
      )
      .then((res) => {
        console.log("data qaytdi", res);
        localStorage.setItem("userId", res.data.data.id);
        localStorage.setItem("email", data.profileObj.email);
        user = { ...user, ...data.profileObj };
        localStorage.setItem("user", JSON.stringify(user));
        setUser(true);
        toast.success(`Thank you for registering !`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log("error qaytdi", err);
        toast.error(`Something is wrong !`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const onSubmit = (data: any) => {
    setActive(false);

    const temp = "+998";
    let params = {
      email: data.email,
      phone: temp.concat(data.phone),
    };
    console.log(params, "params");

    axios
      .post(
        "https://api.teda.uz:70/api/site/login",
        {
          email: data.email,
          phone: temp.concat(data.phone),
        },
        {
          params,
        }
      )
      .then((res) => {
        console.log("data qaytdi", res);
        localStorage.setItem("userId", res.data.data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phoneNumber", data.phone);
        toast.success("Thank you for registering !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setUser(true);
      })
      .catch((err) => {
        console.log("error qaytdi", err);
        toast.error(`Something is wrong !`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    console.log(data, "data");
  };

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.title}>SIGN UP</h2>
      <Icons
        onClick={() => {
          sessionStorage.setItem("loginModalViewed", "true");
          setActive(false);
        }}
        name="Xmark"
        size={24}
        className="xmark"
        color={"var(--primary)"}
      />
      <form id="form" className={cls.form} onSubmit={handleSubmit(onSubmit)}>
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
                      : "1px solid var(--link-text)"
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
              <div
                style={{
                  border: `${
                    errors.phone?.message
                      ? "1px solid red"
                      : "1px solid  var(--link-text)"
                  } `,
                }}
                className={cls.box}
              >
                <p>+998</p>
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
        <b className={cls.or}>or</b>
        <GoogleLogin
          buttonText="Login with google"
          onSuccess={onLoginSuccess}
          clientId={clientId}
        />
        <input
          className={cls["submit-btn"]}
          type="submit"
          value={`${t("contact.submitBtn")}`}
        />
      </form>
    </div>
  );
};

export default Register;
