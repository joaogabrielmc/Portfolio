import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardWithLink from "./Card";

export function TabsDefault() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: [
        {
          title: "DESENHO",
          description: "teste1",
          imageUrl: "teste1",
        },
        {
          title: "DESENHO1",
          description: "teste12",
          imageUrl: "teste12",
        },
        {
          title: "DESENHO3",
          description: "teste13",
          imageUrl: "teste13",
        },
      ],
    },
    {
      label: "DEV",
      value: "dev",
      desc: [
        {
          title: "DESENHssssO",
          description: "tesssste1",
          imageUrl: "teste1",
        },
        {
          title: "DESENHO1",
          description: "tessste12",
          imageUrl: "teste12",
        },
        {
          title: "DESENHO3",
          description: "teste13",
          imageUrl: "teste13",
        },
      ],
    },
  ];

  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="flex justify-between">
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
  );
}
