import * as List from "../icons/list";
interface ileftSide {
  name: keyof typeof List;
  address: string;
}

interface iRightSide {
  name: string;
  children: iChildren[];
}
interface iChildren {
  type: string;
  label: string;
  adress: string;
  hash: string;
  pageName: string;
}

export const leftSide: ileftSide[] = [
  { name: "instagram", address: "https://www.instagram.com/teda.uz/" },
  { name: "telegram", address: "https://t.me/tedauz_bot" },
  {
    name: "mail",
    address:
      "https://mail.google.com/mail/u/0/#search/tedacompanyinfo%40gmail.com?compose=new",
  },
];

export const rightSide: iRightSide[] = [
  {
    name: "footer.services.label",
    children: [
      {
        type: "page",
        label: "footer.services.child1",
        adress: "",
        hash: "",
        pageName: "registration",
      },
      {
        type: "page",
        label: "footer.services.child2",
        adress: "",
        hash: "",
        pageName: "mobile",
      },
      {
        type: "page",
        label: "footer.services.child3",
        adress: "",
        hash: "",
        pageName: "telegramBot",
      },
      {
        type: "page",
        label: "footer.services.child4",
        adress: "",
        hash: "",
        pageName: "threeDesign",
      },
      {
        type: "page",
        label: "footer.services.child5",
        adress: "",
        hash: "",
        pageName: "crm",
      },
      {
        type: "page",
        label: "footer.services.child6",
        adress: "",
        hash: "",
        pageName: "eCommerce",
      },
      {
        type: "page",
        label: "footer.services.child7",
        adress: "",
        hash: "",
        pageName: "webApp",
      },
      {
        type: "page",
        label: "footer.services.child8",
        adress: "",
        hash: "",
        pageName: "smm",
      },
    ],
  },
  {
    name: "footer.aboutUs.label",
    children: [
      {
        type: "hash",
        label: "footer.aboutUs.child1",
        adress: "",
        hash: "#home",
        pageName: "",
      },
      {
        type: "hash",
        label: "footer.aboutUs.child2",
        adress: "",
        hash: "#about",
        pageName: "",
      },
      {
        type: "hash",
        label: "footer.aboutUs.child3",
        adress: "",
        hash: "#gallery",
        pageName: "",
      },
      {
        type: "hash",
        label: "footer.aboutUs.child4",
        adress: "",
        hash: "#contacts",
        pageName: "",
      },
    ],
  },
  {
    name: "footer.partners.label",
    children: [
      {
        type: "anchor",
        label: "magnetic.uz",
        adress: "https://magnetic.uz/",
        hash: "",
        pageName: "",
      },
      {
        type: "anchor",
        label: "verum.uz",
        adress: "http://verum.uz/",
        hash: "",
        pageName: "",
      },
      {
        type: "anchor",
        label: "shams.uz",
        adress: "http://shams.uz/",
        hash: "",
        pageName: "smm",
      },
      {
        type: "anchor",
        label: "avantage.events",
        adress: "https://avantage.events/",
        hash: "",
        pageName: "",
      },
    ],
  },
];
