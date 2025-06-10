import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:flex-row justify-center lg:justify-evenly items-center w-full min-h-fit py-10 md:py-16 px-6">
      <div className="flex flex-col gap-5 w-full lg:max-w-xl md:max-lg:text-center lg:self-start">
        <h1 className="font-bold text-3xl lg:text-5xl">
          Escrevendo novos caminhos através da educação
        </h1>
        <div className="max-sm:w-[80%] lg:hidden flex mx-auto my-4 sm:max-lg:w-[50%]">
          <Image
            alt=""
            src="/img/home/sobre/imagem-secao-sobre.png"
            width={500}
            height={500}
          />
        </div>
        <div className="text-base/7">
          <p className="text-justify">
            O Escrevendo na Quebrada é mais do que um cursinho gratuito — é um
            cursinho popular que fortalece jovens periféricos por meio da
            educação e do acesso à cultura. Acreditamos na escrita como
            ferramenta de transformação e protagonismo. Por isso, oferecemos um
            espaço acolhedor, com escuta atenta e acompanhamento
            individualizado, onde cada jovem é apoiado em seu percurso de
            aprendizagem e construção de futuro. Somos uma iniciativa sem fins
            lucrativos, construída de forma colaborativa por voluntários de
            diversas áreas, comprometidos com a educação pública, o direito à
            universidade e a democratização do conhecimento.
          </p>
          <p className="pt-6 text-justify">
            <b>Vencedor do prêmio LED em 2025</b>, o EQ é movido por uma rede
            que acredita no potencial de cada estudante e trabalha para
            ampliá-lo por meio da educação e da cultura.
          </p>
        </div>
        <Link href="#faq" className="md:max-lg:self-center">
          <Button className="w-full md:max-lg:w-lg lg:w-full text-base lg:text-lg shadow-md/80 shadow-preto1 py-3 mt-3">
            Saiba mais sobre o projeto
          </Button>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Image
          alt=""
          src="/img/home/sobre/imagem-secao-sobre.png"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Sobre;
