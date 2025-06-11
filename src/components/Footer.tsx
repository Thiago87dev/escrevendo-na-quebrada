import Image from "next/image";
import Link from "next/link";
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";

const currentYear = new Date().getFullYear();

const socialMediaIcons = [
  {
    id: "instagram",
    icon: <PiInstagramLogoBold size={26} />,
    href: "https://www.instagram.com/escrevendonaquebrada/",
  },

  {
    id: "linkedin",
    icon: <PiLinkedinLogoBold size={26} />,
    href: "https://www.linkedin.com/company/escrevendonaquebrada/",
  },
  {
    id: "facebook",
    icon: <PiFacebookLogoBold size={26} />,
    href: "https://www.facebook.com/Escrevendoquebrada",
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-40 border-t-2 border-preto1/30 px-6 z-50">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-center max-w-[1440px] h-full m-auto p-4 md:p-0">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={"/img/logo-sem-texto.svg"}
            width={88}
            height={88}
            className="border-2 border-preto1/75 rounded-3xl mr-3"
          />
          <p className="font-medium text-xs md:text-sm">
            &#169; {currentYear} - Todos os direitos reservados a Escrevendo na
            Quebrada. Criado por{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/tainaalvesdeoliveira/"}
            >
              Taina Alves,
            </Link>{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/thiago-alves-dev/"}
            >
              Thiago Alves,
            </Link>{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/gabryella-maria-milagres/"}
            >
              Gabryella Milan,
            </Link>{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/iago-boebel/"}
            >
              Iago Boebel,
            </Link>{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/mauricio-antero/"}
            >
              Mauricio Antero
            </Link>
          </p>
        </div>

        <ul className="flex gap-6">
          {socialMediaIcons.map((item) => (
            <li key={item.id} className="cursor-pointer hover:opacity-75">
              <Link href={item.href} target="_blank">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
