import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cls from "./tabs.module.scss";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={cls.wrapper}>
      <h1 className={cls.title}>{t("direction.title")}</h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Turizm" {...a11yProps(0)} />
            <Tab label="Tibbiyot" {...a11yProps(1)} />
            <Tab label="Suv Ho'jaligi" {...a11yProps(2)} />
            <Tab label="Savdo" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <a href="http://verum.uz/">verum.uz</a>
          <br />
          Verum ™ - universal sifat nazorati tizimi va zamonaviy shifrlash
          texnologiyalari - QR-dan foydalangan holda tovarlarning haqiqiyligi
          kafolati. Ishlab chiqaruvchi mahsulotining har bir elementiga noyob QR
          va raqam biriktirilgan (Verum™ tizimiga ulangan). Ushbu kodni
          skanerlashda iste'molchi mahsulot haqidagi barcha ma'lumotlarni oladi:
          fotosurat, kompozitsiya, ko'rsatmalar, yaroqlilik muddati, bir nechta
          tillardagi audio matn.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Bemorlar ma'lumotlar omborini yaratish
        </TabPanel>
        <TabPanel value={value} index={2}>
          Suv omborlarini avtomatlashtirish.
        </TabPanel>
      </Box>
    </section>
  );
}
