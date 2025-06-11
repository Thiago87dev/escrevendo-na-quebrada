import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const SejaAluno = () => {
  return (
    <section className="flex flex-col items-center w-screen min-h-screen">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Seja Aluno</h2>
          <p className="text-base mt-4 italic">
            “A nossa escrevivência não é para adormecer os da casa grande e,
            sim, para acordá-los de seus sonos injustos.”
          </p>
          <p className="font-bold text-base text-right">Conceição Evaristo</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image1.png"
            width={500}
            height={500}
            className="w-full max-w-lg"
          />
          <div className="flex flex-col gap-4 items-center lg:items-start lg:text-left max-w-lg">
            <h2 className="text-xl font-bold">
              Inscrições
            </h2>
            <p className="text-base">
              Acreditamos no poder do conhecimento para mudar vidas. Junte-se a
              nós e comece hoje a trilhar um caminho de novas oportunidades.
            </p>
            <p className="text-base">
              Inscreva-se agora e dê o primeiro passo.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image2.png"
            width={500}
            height={500}
            className="lg:hidden w-full max-w-lg"
          />
          <div className="flex flex-col lg:items-end items-center gap-4 lg:text-right max-w-lg">
            <h2 className="text-xl font-bold">
              Ficou Alguma Dúvida ?
            </h2>
            <p className="text-base">Estamos aqui para ajudar.</p>
            <p className="text-base">
              Sabemos que começar algo novo pode gerar perguntas. Reunimos aqui
              as informações mais importantes para orientar você nessa jornada.
            </p>
            <div className="w-xs">
              <Link href={"#faq"}>
                <Button className="py-2 text-sm">
                  saiba mais
                </Button>
              </Link>
            </div>
          </div>
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image2.png"
            width={500}
            height={500}
            className="hidden lg:flex w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SejaAluno;
