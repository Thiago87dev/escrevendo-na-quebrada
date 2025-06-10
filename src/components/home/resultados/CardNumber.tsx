import Button from "@/components/Button";
import CounterNumber from "./CounterNumber";
import Link from "next/link";

const CardNumber = () => {
  return (
    <div className="relative bg-azul-escuro w-full lg:p-[7.2rem] p-[5rem] rounded-4xl">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-around text-white ">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-bold">
              <CounterNumber to={845} />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">
              Média das redações
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-bold">
              <CounterNumber to={2000} plus />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">
              Estudantes impactados
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-bold">
              <CounterNumber to={95} percent />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">
              Aprovação dos alunos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-bold">
              <CounterNumber to={750} plus />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">
              Alunos matriculados
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[36.875rem] text-base sm:text-lg lg:text-[1.5rem]">
        <Link href={'#faq'}>
          <Button className="py-5" bg="bg-[#10a2c7]" hover="hover:bg-ciano shadow-md/80 shadow-preto1">
            VEJA MAIS SOBRE NOSSAS CONQUISTAS
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardNumber;
