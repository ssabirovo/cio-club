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
  { address: "#events", content: "events.title" },
  { address: "#directions", content: "navbar.directions" },
  { address: "#contact", content: "navbar.contact" },
];

export const MediaLinks: MediaLinksProps[] = [
  { address: "https://t.me/Ibrat", iconName: "telegram" },
  {
    address:
      "https://mail.google.com/mail/u/0/#search/ibratclub%40gmail.com?compose=new",
    iconName: "mail",
  },
];
