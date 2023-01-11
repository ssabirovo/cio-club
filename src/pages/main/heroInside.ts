import * as List from "../../components/icons/list";
import { aboutDataUz } from "../About/inside";
interface ileftSide {
  iconName: keyof typeof List;
  address: string;
  title: string;
  pageName: keyof typeof aboutDataUz;
}

export const heroData: ileftSide[] = [
  {
    pageName: "telegramBot",
    title: "Telegram Bot",
    iconName: "bot",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "threeDesign",
    title: "3D Design",
    iconName: "threeDesign",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "crm",
    title: "CRM",
    iconName: "crm",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "mobile",
    title: "Mobile Application",
    iconName: "mobile",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "eCommerce",
    title: "E-Commerce",
    iconName: "eCommerce",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "smm",
    title: "SMM",
    iconName: "smm",
    address: "https://www.instagram.com/tedacademyuz/",
  },

  {
    pageName: "webApp",
    title: "Web App",
    iconName: "webApp",
    address: "https://www.instagram.com/tedacademyuz/",
  },
  {
    pageName: "registration",
    title: "Registration System",
    iconName: "registration",
    address: "https://www.instagram.com/tedacademyuz/",
  },
];
