import * as List from "../../../../components/icons/list";

interface iContactInfo {
  name: keyof typeof List;
  title: string;
  href: string;
}

export const ContactInfo: iContactInfo[] = [
  {
    name: "location",
    title: "Fazilat 4/7, Termiz sh.",
    href: "https://www.google.com/maps/dir/37.224478,67.2690703/37.223329,67.267815/@37.2232868,67.2666882,421m/data=!3m1!1e3!4m2!4m1!3e0!5m2!1e2!1e4",
  },

  {
    name: "telegram",
    title: "@Ibrat",
    href: "https://t.me/Ibrat",
  },
  { name: "phone", title: "90-378-06-56", href: "tel:+998903780656" },
  { name: "phone", title: "94-442-98-89", href: "tel:+998944429889" },
  { name: "phone", title: "93-159-25-58", href: "tel:+998931592558" },
];
