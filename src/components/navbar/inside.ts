import * as List from "../icons/list";

interface linksProps {
  address: string;
  content: string;
}
interface MediaLinksProps {
  address: string;
  iconName: keyof typeof List;
}

export const links: linksProps[] = [
  { address: "#home", content: "navbar.home" },
  { address: "#directions", content: "navbar.directions" },
  { address: "#gallery", content: "navbar.gallery" },
  { address: "#contact", content: "navbar.contact" },
];

export const MediaLinks: MediaLinksProps[] = [
  { address: "https://www.instagram.com/teda.uz", iconName: "instagram" },
  { address: "https://t.me/tedauz_bot", iconName: "telegram" },
  {
    address:
      "https://mail.google.com/mail/u/0/#search/tedacompanyinfo%40gmail.com?compose=new",
    iconName: "mail",
  },
];
