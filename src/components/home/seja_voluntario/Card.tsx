import Button from "@/components/Button";

interface CardProps {
  className?: string;
}

const Card = ({ className }: CardProps) => {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-6 lg:gap-10 px-8 py-8 sm:py-12 text-center rounded-4xl shadow-lg/30 shadow-preto1 text-preto1 bg-white1 ${className}`}
    >
      <div className="flex flex-col gap-4 lg:gap-6">
        <h3 className="font-bold text-xl lg:text-2xl">
          O EQ também oferece horas complementares e certificados!
        </h3>
        <p className="text-base/6 lg:text-lg/6">
          Além de todo o apoio oferecido, o Escrevendo na Quebrada também
          garante horas complementares e certificados para quem participa — uma
          oportunidade de aprender, se desenvolver e ainda valorizar seu
          currículo!
        </p>
      </div>
      <Button className="mt-3 py-2 lg:py-3 shadow-md/80 shadow-preto1">Faça parte do EQ</Button>
    </article>
  );
};

export default Card;
