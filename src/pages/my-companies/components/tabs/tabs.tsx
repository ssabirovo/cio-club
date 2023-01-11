import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cls from "./tabs.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface itemsType {
  id: number;
  title: string;
}

const items: itemsType[] = [
  { id: 1, title: "Jami" },
  { id: 2, title: "Web App" },
  { id: 3, title: "Registration System" },
  { id: 4, title: "SMM" },
  { id: 5, title: "3D Dizayn" },
  { id: 6, title: "CRM" },
  { id: 7, title: "E-Commerce" },
  { id: 8, title: "Mobile" },
  { id: 9, title: "Telegram" },
];

interface valuesType {
  id: number;
  content: React.ReactNode;
}

const values: valuesType[] = [
  { id: 0, content: <>NO order yet !</> },
  { id: 1, content: <>NO order yet !</> },
  { id: 2, content: <>NO order yet !</> },
  { id: 3, content: <>NO order yet !</> },
  { id: 4, content: <>NO order yet !</> },
  { id: 5, content: <>NO order yet !</> },
  { id: 6, content: <>NO order yet !</> },
  { id: 7, content: <>NO order yet !</> },
];

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

export default function BasicTabs({ data }: any) {
  const [value, setValue] = React.useState(0);
  const [tabData, setTabData] = React.useState([]);

  console.log(data, "data tab");
  let keys = Object.keys(data);

  React.useEffect(() => {
    let tempData = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let result = data[key].map((o: any) => ({
        ...o,
        category: key,
      }));
      for (let res of result) {
        tempData.push(res);
      }
    }

    //@ts-ignore
    setTabData(tempData.sort((a, b) => b.id - a.id));
  }, [data]);

  const handleFilter = (key: string) => {
    console.log("filter");
    // let result = data[key].map((o: any) => ({
    //   ...o,
    //   category: key,
    // }));
    // //@ts-ignore
    // setTabData(result.sort((a, b) => b.id - a.id));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={cls.wrapper}>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className={cls.line}></div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab key={0} label={"Jami"} {...a11yProps(0)} />
            {keys ? (
              keys.map((key: string, idx) => (
                <Tab
                  onClick={() => handleFilter(key)}
                  key={idx}
                  label={key}
                  {...a11yProps(idx)}
                />
              ))
            ) : (
              <Tab label={"Loading"} {...a11yProps(1)} />
            )}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography
            className={cls["oders-wrapper"]}
            component={"span"}
            variant={"body1"}
          >
            <Typography component={"span"} variant={"body2"}>
              Holati
            </Typography>
            <Typography component={"span"} variant={"body2"}>
              Id Raqam
            </Typography>
            <Typography component={"span"} variant={"body2"}>
              Vaqti
            </Typography>
            <Typography component={"span"} variant={"body2"}>
              Buyurtma nomi
            </Typography>
          </Typography>
          <span className={cls.table}>
            {tabData ? (
              tabData.map(({ id, category, dateTime }: any) => (
                <Typography
                  component={"span"}
                  variant={"body2"}
                  key={id}
                  className={cls.order}
                >
                  <Typography component={"span"} variant={"body2"}>
                    Tekshirilyapti
                  </Typography>
                  <Typography component={"span"} variant={"body2"}>
                    {id}
                  </Typography>
                  <Typography component={"span"} variant={"body2"}>
                    {dateTime}
                  </Typography>
                  <Typography component={"span"} variant={"body2"}>
                    {category}
                  </Typography>
                </Typography>
              ))
            ) : (
              <Typography component={"span"}>Loading</Typography>
            )}
          </span>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Box>
    </div>
  );
}
