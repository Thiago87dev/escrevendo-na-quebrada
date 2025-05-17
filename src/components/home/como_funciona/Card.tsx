import Image from "next/image";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const Card = ({ img, alt, title, text }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center lg:w-[11.875rem]">
      <Image className="sm:w-[15rem] lg:w-[11.875rem]" alt={alt} src={img} width={600} height={600} />
      <h2 className="text-[1.875rem] lg:text-lg font-bold">{title}</h2>
      <p className="text-center text-lg lg:text-xs sm:w-[15rem] lg:w-[11.875rem]">{text}</p>
    </div>
  );
};

export default Card;
