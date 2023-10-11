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
      label: "Desenvolvimento de Sites e Aplicativos Web",
      value: "front",
      desc: [
        {
          title: "UI/UX",
          description:
            "Criação de interfaces intuitivas, wireframes e melhoria da experiência do usuário.",
          imageUrl: "/img/cards/ux.png",
        },
        {
          title: "Web Development",
          description:
            "Criação de sites e aplicativos web modernos, incluindo funcionalidades front-end e back-end, utilizando tecnologias como HTML, CSS, JavaScript, React, Tailwind, etc.",
          imageUrl: "/img/cards/web.png",
        },
        {
          title: "Otimização de Desempenho Web",
          description:
            "Aumento da velocidade de carregamento de sites, otimização de imagens e recursos, e implementação de melhores práticas para melhorar a experiência do usuário em sites.",
          imageUrl: "/img/cards/optimizeWeb.png",
        },
      ],
    },
    {
      label: "Automatização de Serviços",
      value: "back",
      desc: [
        {
          title: "Programação RPA",
          description:
            "Extração e análise de dados, desenvolvimento de robôs de automação, integração de sistemas e automação de fluxo de trabalho",
          imageUrl: "/img/cards/rpa.png",
        },
        {
          title: "Dados",
          description: "Extração e Análise de Dados",
          imageUrl: "/img/cards/data.png",
        },
        {
          title: "Bots",
          description:
            "Criação de bots RPA, geração de relatórios automatizados e mineração de dados",
          imageUrl: "/img/cards/bots.png",
        },
      ],
    },
    {
      label: "Tratamento de Dados",
      value: "data",
      desc: [
        {
          title: "Programação RPA",
          description:
            "Limpeza e preparação de dados, análise de dados e segurança de dados e privacidade.",
          imageUrl: "teste1",
        },
        {
          title: "Limpeza e Preparação de Dados",
          description:
            "Limpeza de dados brutos, formatação e criação de pipelines.",
          imageUrl: "teste12",
        },
        {
          title: "Análise de Dados",
          description:
            "Análise estatística, identificação de tendências e desenvolvimento de modelos preditivos.",
          imageUrl: "teste13",
        },
      ],
    },
  ];

  return (
    <Tabs value="front">
      <TabsHeader className="flex-col md:flex-row bg-secondary">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="font-popp text-xs md:text-sm p-4 text-white active:bg-primary"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex md:flex-row flex-col gap-4 justify-center"
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
  );
}
