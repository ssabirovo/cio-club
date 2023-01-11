import * as List from "../../../icons/list";

interface FlagsProps {
  lang: string;
  iconName: keyof typeof List;
}

export const Flags: FlagsProps[] = [
  { lang: "uz", iconName: "uzFlag" },
  { lang: "ru", iconName: "ruFlag" },
  { lang: "en", iconName: "ukFlag" },
];
