import * as List from "../../../../components/icons/list";

interface iContactInfo {
  name: keyof typeof List;
  title: string;
  href: string;
}

export const ContactInfo: iContactInfo[] = [
  {
    name: "location",
    title: "Elbek 24/1, Tashkent",
    href: "https://www.google.com/maps/dir//TEXNO+DARGOH,+%D0%93.+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%BC%D0%B5%D1%82%D1%80%D0%BE,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82+700000,+O%CA%BBzbekiston/@41.293983,69.326204,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38ae8baaaaaaaac1:0x4a00aeebddd9ed18!2m2!1d69.3262043!2d41.293983?hl=uz",
  },
  { name: "phone", title: "90-378-06-56", href: "tel:+998903780656" },
  {
    name: "message",
    title: "ibratclub@gmail.com",
    href: "https://mail.google.com/mail/u/0/#search/ibratclub%40gmail.com?compose=new",
  },
  {
    name: "telegram",
    title: "@ibratclub",
    href: "https://mail.google.com/mail/u/0/#search/ibratclub%40gmail.com?compose=new",
  },
  {
    name: "instagram",
    title: "@ibratclub",
    href: "https://mail.google.com/mail/u/0/#search/ibratclub%40gmail.com?compose=new",
  },
];
