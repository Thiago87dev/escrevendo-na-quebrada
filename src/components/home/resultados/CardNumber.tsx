import Button from "@/components/Button";
import ConterNumber from "./ConterNumber";

const CardNumber = () => {
  return (
    <div className="relative bg-azul-escuro w-full lg:p-[7.2rem] p-[5rem] rounded-4xl lg:h-[372.781px]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-around text-white ">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl sm:text-[4.9875rem] font-bold">
              <ConterNumber to={840} />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">Média das redações</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl sm:text-[4.9875rem] font-bold">
              <ConterNumber to={2000} plus />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">Estudantes impactados</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl sm:text-[4.9875rem] font-bold">
              <ConterNumber to={480} />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">Texto de exemplo</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl sm:text-[4.9875rem] font-bold">
              <ConterNumber to={47} plus />
            </h3>
            <p className="text-center text-sm sm:text-[1.125rem] w-[200%]">Texto</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[36.875rem] text-base sm:text-lg lg:text-[1.5rem]">
        <Button className="py-5" bg="bg-[#10a2c7]" hover="hover:bg-ciano">
          VEJA MAIS SOBRE NOSSAS CONQUISTAS
        </Button>
      </div>
    </div>
  );
};

export default CardNumber;
