import Button from "@/components/Button";
import Image from "next/image";

const Sobre = () => {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center w-full min-h-fit pt-12">
      <div className="flex flex-col gap-3 max-w-md">
        <h1 className="font-bold text-6xl">
          Escrevendo novos caminhos através da educação
        </h1>
        <div className="text-2xl/6">
          <p>
            O Escrevendo na Quebrada é mais do que um <b>cursinho gratuito</b> —
            é um projeto transformador voltado para jovens que querem mandar bem
            na redação e construir um futuro com mais oportunidades. Aqui, você
            encontra acolhimento real, escuta atenta e acompanhamento
            individualizado, com correções detalhadas que te ajudam a evoluir de
            verdade.
          </p>
          <p className="pt-6">
            <b>Vencedor do prêmio LED em 2025</b>, o EQ faz parte de uma rede
            que acredita no seu potencial e caminha ao seu lado
          </p>
        </div>
        <Button className="w-full text-xl shadow-md/80 shadow-preto1 py-3 mt-3">
          Saiba mais sobre o projeto
        </Button>
      </div>
      <div>
        <Image
          alt=""
          src="/img/imagem-secao-sobre.png"
          width={650}
          height={650}
          className="bg-roxo/10 rounded-4xl"
        />
      </div>
    </section>
  );
};

export default Sobre;
