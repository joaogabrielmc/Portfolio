import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ThemeProvider,
} from "@material-tailwind/react";
import CardWithLink from "./Card";
import { Services } from "../data/Data";

export function TabsDefault() {
  const theme = {
    tab: {
      styles: {
        base: {
          indicator: {
            bg: "bg-secondary",
          },
        },
      },
    },
  };
  return (
    <ThemeProvider value={theme}>
      <Tabs value={"front"}>
        <TabsHeader className="flex-col md:flex-row bg-black/50">
          {Services.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="font-popp text-xs md:text-sm p-4 text-white w-auto lg:w-full"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {Services.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="flex lg:flex-row flex-col gap-4 justify-center items-center lg:items-stretch xl:w-auto lg:w-screen"
            >
              {typeof desc === "string" ? (
                <div>{desc}</div>
              ) : (
                desc.map(({ title, description, imageUrl }, index) => (
                  <CardWithLink
                    key={index}
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                  />
                ))
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}
