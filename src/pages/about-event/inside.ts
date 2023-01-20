export interface eventType {
  title: string;
}

export interface eventDataType {
  ictWeek: eventType;
  ibrat: eventType;
  teda: eventType;
  seminar: eventType;
}

export const eventData = {
  ictWeek: {
    title: "ictWeek",
  },
  ibrat: {
    title: "ibrat",
  },
  teda: {
    title: "teda",
  },
  seminar: {
    title: "seminar",
  },
  webinar: {
    title: "webinar",
  },
  tadbir: {
    title: "tadbir",
  },
};
