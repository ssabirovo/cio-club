import React from "react";
import cls from "./login.module.scss";
import { Controller, useForm } from "react-hook-form";
import Logo from "../../../assets/images/headerLogo.png";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  console.log(errors);
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.login}>
        <div className={cls.logo}>
          <img src={Logo} alt="" />
        </div>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <input
                  style={{
                    border: `${
                      errors.name?.message
                        ? "1px solid red"
                        : "1px solid var(--link-text)"
                    } `,
                  }}
                  className={cls.input}
                  onChange={onChange}
                  placeholder="Name"
                />
                {errors.name?.message && (
                  <p className={cls.error}>
                    {`${errors.name?.message}`}{" "}
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </p>
                )}
              </>
            )}
          />

          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <input
                  style={{
                    border: `${
                      errors.name?.message
                        ? "1px solid red"
                        : "1px solid var(--link-text)"
                    } `,
                  }}
                  type="password"
                  className={cls.input}
                  onChange={onChange}
                  placeholder="Password"
                />
                {errors.password?.message && (
                  <p className={cls.error}>
                    {`${errors.password?.message}`}{" "}
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </p>
                )}
              </>
            )}
          />

          <input
            className={cls["submit-btn"]}
            type="submit"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
