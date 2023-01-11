import React, { useState } from "react";
import cls from "./my-accout.module.scss";
import Avatar from "../../assets/svg/default.svg";

import { Controller, useForm } from "react-hook-form";
import SideBar from "../../components/side-bar/side-bar";
import Navbar from "../../components/navbar/navbar";
import SecondBar from "../../components/second-bar/second-bar";

interface MyAccountProps {}

type FormValues = {
  name: any;
  email: any;
  phone: any;
  file: any;
};

const MyAccount: React.FC<MyAccountProps> = () => {
  const [disabled, setDisabled] = useState(true);
  const defaultPhone = localStorage.getItem("phoneNumber");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      name: user.givenName ? user.givenName : localStorage.getItem("name"),
      phone: defaultPhone ? defaultPhone : "Inter your phone",
      email: user.email ? user.email : localStorage.getItem("email"),
    },
  });

  const onSubmit = (data: any) => {
    user.givenName = data.name;
    user.email = data.email;
    localStorage.setItem("phoneNumber", data.phone);
    localStorage.setItem("user", JSON.stringify(user));
    setDisabled(true);
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className={cls.wrapper}>
        <SideBar />
        <SecondBar />
        <div className={cls.account}>
          <form
            id="form"
            className={cls.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <>
                  <div className={cls["img-wrapper"]}>
                    <img
                      src={user?.imageUrl ? user?.imageUrl : Avatar}
                      alt=""
                    />
                    {/* <div className={cls.edit}>
                      <Icons name="pen" size={14} />
                      <input type="file" disabled={disabled} {...field} />
                    </div> */}
                  </div>
                </>
              )}
            />
            {user.givenName && (
              <Controller
                name="name"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <>
                    <label>Name</label>
                    <input
                      disabled={disabled}
                      className={cls.input}
                      {...field}
                      placeholder="Name"
                    />
                  </>
                )}
              />
            )}

            {defaultPhone && (
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <>
                    <label>E-mail</label>
                    <input
                      {...field}
                      className={cls.input}
                      disabled={disabled}
                      placeholder={"Your phone"}
                    />
                  </>
                )}
              />
            )}

            <Controller
              name="email"
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <>
                  <label>Email</label>
                  <input
                    {...field}
                    disabled={disabled}
                    className={cls.input}
                    placeholder={"Your email"}
                  />
                </>
              )}
            />
            {/* {disabled ? (
              <Button onClick={() => setDisabled(false)} title="Edit" />
            ) : (
              <div className={cls["btn-wrapper"]}>
                <Button onClick={() => setDisabled(true)} title="Cancel" />
                <input
                  className={cls["submit-btn"]}
                  type="submit"
                  value={"Save"}
                />
              </div>
            )} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
