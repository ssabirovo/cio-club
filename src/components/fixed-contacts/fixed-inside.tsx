import * as List from "../../components/icons/list";

interface ileftSide {
  iconName: keyof typeof List;
  title: string;
  url: string;
  color: string;
  bgColor: string;
}

export const fixedData: ileftSide[] = [
  {
    title: "94 708 04 28",
    url: "tel:+998947080428",
    iconName: "phone",
    color: "#ECECFF",
    bgColor: "#24BE4F",
  },
  {
    title: "teda@mail.ru",
    url: "https://mail.google.com/mail/u/0/#search/tedacompanyinfo%40gmail.com?compose=new",
    iconName: "mail",
    bgColor: "#489FDD",
    color: "#ECECFF",
  },
  {
    title: "teda@mail.ru",
    url: "https://mail.google.com/mail/u/0/#search/tedacompanyinfo%40gmail.com?compose=new",
    iconName: "mail",
    bgColor: "#489FDD",
    color: "#ECECFF",
  },
];
