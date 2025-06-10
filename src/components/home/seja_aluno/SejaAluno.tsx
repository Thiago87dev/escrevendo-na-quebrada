import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const SejaAluno = () => {
  return (
    <section className="flex flex-col items-center w-screen min-h-screen">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Seja Aluno</h2>
          <p className="text-xl mt-4 italic">
            “A nossa escrevivência não é para adormecer os da casa grande e,
            sim, para acordá-los de seus sonos injustos.”
          </p>
          <p className="font-bold text-xl text-right">Conceição Evaristo</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-14.5 items-center">
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image1.png"
            width={600}
            height={600}
            className="w-full max-w-[600px]"
          />
          <div className="flex flex-col gap-5.5 items-center lg:items-stretch lg:text-left">
            <h2 className="sm:text-[1.6875rem] text-2xl font-bold">
              Inscrições
            </h2>
            <p className="text-[1.125rem]">
              Acreditamos no poder do conhecimento para mudar vidas. Junte-se a
              nós e comece hoje a trilhar um caminho de novas oportunidades.
            </p>
            <p className="text-[1.125rem]">
              Inscreva-se agora e dê o primeiro passo.
            </p>
            {/* <div className="w-[16.25rem] h-[2.875rem]">
              <Button className="shadow-md/80 shadow-preto1">
                INSCREVA-SE
              </Button>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14.5 items-center">
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image2.png"
            width={600}
            height={600}
            className="lg:hidden w-full max-w-[600px]"
          />
          <div className="flex flex-col lg:items-end items-center gap-5.5 lg:text-right">
            <h2 className="lg:text-[1.6875rem] text-2xl font-bold">
              Ficou Alguma Dúvida ?
            </h2>
            <p className="text-[1.125rem]">Estamos aqui para ajudar.</p>
            <p className="text-[1.125rem]">
              Sabemos que começar algo novo pode gerar perguntas. Reunimos aqui
              as informações mais importantes para orientar você nessa jornada.
            </p>
            <div className="w-[16.25rem] h-[2.875rem] ">
              <Link href={"#faq"}>
                <Button className="shadow-md/80 shadow-preto1">
                  saiba mais
                </Button>
              </Link>
            </div>
          </div>
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image2.png"
            width={600}
            height={600}
            className="hidden lg:flex w-full max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SejaAluno;
