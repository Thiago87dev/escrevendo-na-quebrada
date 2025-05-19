import ComoFunciona from "@/components/home/como_funciona/ComoFunciona";
import SejaAluno from "@/components/home/seja_aluno/SejaAluno";
import SejaVoluntario from "@/components/home/seja_voluntario/SejaVoluntario";
import Sobre from "@/components/home/sobre/Sobre";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center w-full h-full max-w-[1440px] text-preto1">
        <Sobre />
        <ComoFunciona />
        <SejaAluno/>
        <SejaVoluntario />
      </div>
    </main>
  );
}
