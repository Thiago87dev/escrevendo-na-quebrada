import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="py-10 w-full px-6">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
          <p className="text-lg pt-4">
            Dê uma olhada nas dúvidas mais frequentes em nossa comunidade. Caso
            seu questionamento não tenha sido esclarecido, entre em contato
            conosco!
          </p>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
