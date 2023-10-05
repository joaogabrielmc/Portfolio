type CardProps = {
  title: string;
  listItems: string[];
};

export const Card = ({ title, listItems }: CardProps) => {
  return (
    <div className="w fill bg-secondary/75 min-h-[200px] w-[300px] transition duration-300 font-popp mx-auto items-center pb-6 rounded-b-[1.2rem] hover:scale-[1.2]">
      <p className="text-lg mb-3 bg-lblue w-[300px] flex items-center justify-center p-6 rounded-b-[1.5rem] drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
        {title}
      </p>
      <div className="flex flex-col text-base font-roboto p-3 leading-[2] text-white">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};
