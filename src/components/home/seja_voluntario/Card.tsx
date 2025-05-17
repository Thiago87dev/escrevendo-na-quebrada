import Button from "@/components/Button";

interface CardProps {
  className?: string;
}

const Card = ({ className }: CardProps) => {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-6 lg:gap-10 text-center rounded-4xl shadow-lg/30 shadow-preto1 text-preto1 bg-white1 ${className}`}
    >
      <div className="flex flex-col gap-4 lg:gap-6">
        <h3 className="font-bold text-2xl lg:text-3xl">
          O EQ também oferece horas complementares e certificados!
        </h3>
        <p className="text-lg/6 lg:text-xl/6">
          Além de todo o apoio oferecido, o Escrevendo na Quebrada também
          garante horas complementares e certificados para quem participa — uma
          oportunidade de aprender, se desenvolver e ainda valorizar seu
          currículo!
        </p>
      </div>
      <Button className="mt-3 py-3 lg:py-4">Faça parte do EQ</Button>
    </article>
  );
};

export default Card;
