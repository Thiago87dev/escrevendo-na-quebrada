import CardNumber from "./CardNumber";

const Resultados = () => {
  return (
    <section className="pt-8 md:-mt-8 md:pt-0">
      <div className="flex flex-col gap-12 mt-10 mb-[8rem] sm:my-[10rem] px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Nossos Resultados</h2>
          <p className="text-lg lg:w-3xl">
            Impacto que transforma! Ao longo dos anos, o EQ tem fortalecido o
            acesso à educação e à cultura para jovens de diferentes territórios.
            Já são dezenas de turmas formadas, centenas de estudantes aprovados
            em universidades públicas e prêmios importantes que reconhecem a
            força e a inovação do nosso trabalho.
          </p>
        </div>
        <div className="mx-auto lg:w-6xl">
          <CardNumber />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
