import Button from "@/components/Button";
import ContactCard from "./ContactCard";

const Contato = () => {
  return (
    <section className="flex justify-center items-center min-w-screen bg-[#EBEBEB]">
      <div className="flex flex-col gap-12 lg:gap-40 justify-center items-center max-w-[1440px] py-30 md:py-50 px-6">
        <div className="flex flex-col items-center lg:flex-row-reverse gap-12 lg:gap-20">
          <div className="flex flex-col gap-4 text-preto1 w-full max-w-lg">
            <h2 className="text-preto1/70 text-2xl">Contate-nos</h2>
            <h3 className="text-4xl font-bold">
              Dúvidas? Entre em contato com nossa equipe!
            </h3>
            <p className="text-md">
              Tire suas dúvidas sobre as aulas, voluntariado, funcionamento ou
              qualquer outro assunto! Nosso time está pronto para te receber de
              braços abertos.
            </p>
            <Button className="max-h-16 max-w-[16rem] rounded-[0.8rem] py-3 shadow-xs/80 shadow-preto1">
              Vamos conversar!
            </Button>
          </div>

          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contato;
