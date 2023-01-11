interface ileftSide {
  label: string;
  checked: boolean;
}

export const malumot: ileftSide[] = [
  { label: "frontend", checked: true },
  { label: "backend", checked: false },
  { label: "devops", checked: false },
  { label: "mobile", checked: false },
];

export const cards = {
  mobile: [
    { label: "ios", imgUrl: "../../../../assets/svg/ios.png" },
    { label: "android", imgUrl: "../../../../assets/svg/ios.png" },
    { label: "dart", imgUrl: "../../../../assets/svg/ios.png" },
    { label: "flutter", imgUrl: "../../../../assets/svg/ios.png" },
    { label: "java", imgUrl: "../../../../assets/svg/ios.png" },
    
  ],
};
