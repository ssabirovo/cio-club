import * as List from "../../../../components/icons/list";

type directionsDataType = {
  icon: keyof typeof List;
  title: string;
};

export const directionsData: directionsDataType[] = [
  {
    icon: "registration",
    title: "directions.child1",
  },
  {
    icon: "cosmetology",
    title: "directions.child2",
  },
  {
    icon: "brain",
    title: "directions.child3",
  },
  {
    icon: "speaking",
    title: "directions.child4",
  },
  {
    icon: "needle",
    title: "directions.child5",
  },
];
