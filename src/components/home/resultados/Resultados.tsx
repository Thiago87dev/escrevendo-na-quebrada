import CardNumber from "./CardNumber";

const Resultados = () => {
  return (
    <section >
      <div className="flex flex-col gap-12 mt-10 mb-[8rem] sm:my-[10rem] px-6">
        <div className="flex flex-col gap-12">
          <h2 className="text-[2.5rem] font-bold">Nossos Resultados</h2>
          <p className="text-xl sm:text-[1.5rem] lg:w-[46.125rem]">
            Impacto que transforma! Com dezenas de polos ativos, centenas de
            aprovações e prêmios conquistados, nosso cursinho popular de
            redações continua ampliando oportunidades e fortalecendo a educação.
          </p>
        </div>
        <div className="mx-auto lg:w-[70rem]">
          <CardNumber />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
