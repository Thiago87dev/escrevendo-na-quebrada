import ComoFunciona from "@/components/home/como_funciona/ComoFunciona";
import Contato from "@/components/home/contato/Contato";
import Faq from "@/components/home/faq/Faq";
import Resultados from "@/components/home/resultados/Resultados";
import SejaAluno from "@/components/home/seja_aluno/SejaAluno";
import SejaVoluntario from "@/components/home/seja_voluntario/SejaVoluntario";
import Sobre from "@/components/home/sobre/Sobre";

export default function Home() {
  return (
    <main className="scroll-smooth flex flex-col gap-4 items-center overflow-x-hidden">
      <div className="flex flex-col items-center w-full h-full max-w-[1440px] text-preto1">
        <div id="sobre">
          <Sobre />
        </div>
        <div id="como_funciona">
          <ComoFunciona />
        </div>
        <div id="seja_aluno">
          <SejaAluno />
        </div>
        <div id="seja_voluntario">
          <SejaVoluntario />
        </div>
        <div id="nossos_resultados">
          <Resultados />
        </div>
        <div id="contato">
          <Contato />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </div>
    </main>
  );
}
