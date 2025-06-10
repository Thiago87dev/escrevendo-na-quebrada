import Card from "./Card";

const carreiras = [
  "Pedagogia",
  "Tecnologia e Design",
  "Recursos Humanos",
  "Captação de Recursos",
  "Muito mais!",
];

const SejaVoluntario = () => {
  return (
    <section className="flex justify-center items-center text-white1 w-screen bg-cover bg-[url(/img/home/seja_voluntario/imagem-fundo.png)]">
      <div className="flex flex-col relative gap-12 lg:gap-24 justify-center items-center max-w-[1440px] py-10 md:py-16 px-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-bold text-xl lg:text-2xl">Seja Voluntário</h2>
          <p className="text-lg text-center font-normal md:font-light">
            Se você acredita no poder das palavras e quer ajudar a transformar
            vidas através da escrita, venha fazer parte do nosso time!{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 w-full">
          <div className="text-lg/6 lg:text-xl/6">
            <h3 className="mb-4">Quais setores seguir dentro do EQ?</h3>
            <ul className="list-disc pl-5">
              {carreiras.map((carreira, index) => (
                <li key={index} className="mb-4">
                  {carreira}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-lg">
            <Card className="w-full lg:absolute -bottom-1/9 right-4 sm:max-w-xl z-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejaVoluntario;
