import Button from "../../Button";
import Card from "./Card";
import { cardComoFuncionaData } from "@/data/data";

const ComoFunciona = () => {
  return (
    <section className="flex flex-col items-center w-screen min-h-screen bg-[#EBEBEB]">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div className="text-center">
          <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold mb-5 md:mb-0">Como Funciona</h2>
          <h3 className="text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem]">
            O Escrevendo na Quebrada promove aulas de escrita e redação com foco
            em vestibulares através de quatro tarefas:
          </h3>
        </div>
        <div className="flex flex-col  items-center flex-wrap lg:flex-nowrap sm:flex-row gap-16 justify-center w-full">
          {cardComoFuncionaData.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 1 ? "border-l border-gray-200 lg:pl-16" : ""
              } border-r border-gray-200 lg:pr-16`}
            >
              <Card
                alt={item.alt}
                img={item.img}
                text={item.text}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div>
          <p className="text-[1.25rem] text-center lg:w-[976px]">
            Vem conhecer o Escrevendo na Quebrada: um projeto gratuito, com
            alimentação nas aulas, tablets e acompanhamento psicológico para te
            apoiar em cada passo!
          </p>
          <div className="flex justify-center w-full md:w-[710px] h-[70px] mx-auto mt-16">
            <Button className="text-[1.125rem] sm:text-[1.5rem]">entenda como funciona</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
