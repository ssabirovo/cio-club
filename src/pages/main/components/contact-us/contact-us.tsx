/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import cls from "./contact-us.module.scss";
import { Controller, useForm } from "react-hook-form";
import { ContactInfo } from "./inside";
import Icons from "../../../../components/icons";
import cx from "classnames";
import Reveal, { Zoom } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContactUsProps {}

const scheme = yup.object().shape({
  email: yup
    .string()
    .required("Maydonni to'ldiring !")
    .email("Noto'g'ri email kiritildi !"),
  phone: yup.string().matches(/^[0-9]{9}$/, "Must be exactly 5 digits"),
  aboutProduct: yup.string().required("Maydonni to'ldiring"),
});

interface IFormInputs {
  email: string;
  phone: string;
  aboutProduct: string;
}

const ContactUs: React.FC<ContactUsProps> = () => {
  const { t } = useTranslation();
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(scheme),
    defaultValues: {
      email: "",
      phone: "",
      aboutProduct: "",
    },
  });
  const onSubmit = (data: any) => {
    const phone = "+998".concat(data.phone);
    const temp = { ...data };
    temp.phone = phone;
    console.log(temp, "temp");
    axios
      .post("https://api.teda.uz:70/api/site", temp)
      .then((res) => {
        toast.success("Bog'langaniz uchun rahmat !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("Serverda xatolik !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(error);
      });
    localStorage.setItem("email", data.email);
    localStorage.setItem("phoneNumber", data.phone);

    reset();
  };

  return (
    <section id="contact" className={cls.wrapper}>
      <div className={cls["contact-us"]}>
        <Reveal
          triggerOnce={true}
          duration={500}
          delay={80}
          keyframes={customAnimationTitle}
        >
          <h1 className={cls.title}>{t("contact.title")}</h1>
        </Reveal>

        <div className={cls.container}>
          <div className={cls.apply}>
            <Reveal
              triggerOnce={true}
              duration={500}
              delay={100}
              keyframes={customAnimationTitle}
            >
              <h2 className={cls.subtitle}>{t("contact.subtitle1")}</h2>
            </Reveal>

            <form
              id="form"
              className={cls.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <Reveal
                      triggerOnce={true}
                      duration={500}
                      delay={100}
                      keyframes={customAnimationInput}
                    >
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
                        placeholder={`${t("contact.input1")}`}
                      />
                      {errors.email?.message && (
                        <p className={cls.error}>
                          {`${errors.email?.message}`}{" "}
                          <i className="fa-solid fa-triangle-exclamation"></i>
                        </p>
                      )}
                    </Reveal>
                  </>
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <>
                    <Reveal
                      triggerOnce={true}
                      duration={500}
                      delay={100}
                      keyframes={customAnimationInput}
                    >
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
                              borderLeft: `${
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
                        <Reveal
                          triggerOnce={true}
                          duration={500}
                          delay={100}
                          keyframes={customAnimationTitle}
                        >
                          {errors.phone?.message && (
                            <p className={cls.error}>
                              Raqam noto'g'ri kiritildi !
                              <i className="fa-solid fa-triangle-exclamation"></i>
                            </p>
                          )}
                        </Reveal>
                      </>
                    </Reveal>
                  </>
                )}
              />

              <Controller
                name="aboutProduct"
                control={control}
                render={({ field }) => (
                  <>
                    <Reveal
                      triggerOnce={true}
                      duration={900}
                      delay={100}
                      keyframes={customAnimationInput}
                    >
                      <textarea
                        style={{
                          border: `${
                            errors.aboutProduct?.message
                              ? "1px solid red"
                              : "1px solid var(--link-text)"
                          } `,
                        }}
                        {...field}
                        className={cx(cls.input, cls.aboutProduct)}
                        placeholder={`${t("contact.input3")}`}
                      />
                      {errors.aboutProduct?.message && (
                        <p className={cls.error}>
                          {`${errors.aboutProduct?.message}`}
                          <i className="fa-solid fa-triangle-exclamation"></i>
                        </p>
                      )}
                    </Reveal>
                  </>
                )}
              />

              <Reveal
                triggerOnce={true}
                duration={500}
                delay={100}
                keyframes={customAnimationInput}
              >
                <input
                  className={cls["submit-btn"]}
                  type="submit"
                  value={`${t("contact.submitBtn")}`}
                />
              </Reveal>
            </form>
          </div>

          <div className={cls.info}>
            <Reveal
              triggerOnce={true}
              duration={500}
              delay={100}
              keyframes={customAnimationTitle}
            >
              <h2 className={cls.subtitle}>{t("contact.subtitle2")}</h2>
            </Reveal>

            <div className={cls["info-container"]}>
              <div className={cls.child}>
                {ContactInfo.map(({ name, title, href }, idx) => (
                  <Reveal
                    key={idx}
                    triggerOnce={true}
                    keyframes={customAnimationText}
                  >
                    <div className={cls["info-wrapper"]}>
                      <a href={href}>
                        <Icons name={name} size={25} color="var(--primary)" />
                      </a>
                      <a href={href}>{title}</a>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Zoom triggerOnce={true} duration={900} delay={100}>
                <p>
                  <iframe
                    className={cls.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.8555574636114!2d69.3255393849019!3d41.29375551902539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8baaaaaaaac1%3A0x4a00aeebddd9ed18!2sTEXNO%20DARGOH!5e0!3m2!1suz!2s!4v1668419984766!5m2!1suz!2s"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const customAnimationTitle = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customAnimationInput = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customAnimationText = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default ContactUs;
