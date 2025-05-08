"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
  PiTiktokLogoBold,
} from "react-icons/pi";

const socialMediaIcons = [
  { id: "tiktok", icon: <PiTiktokLogoBold size={26} />, href: "" },
  { id: "facebook", icon: <PiFacebookLogoBold size={26} />, href: "" },
  {
    id: "linkedin",
    icon: <PiLinkedinLogoBold size={26} />,
    href: "https://www.linkedin.com/company/escrevendonaquebrada/",
  },
  {
    id: "instagram",
    icon: <PiInstagramLogoBold size={26} />,
    href: "https://www.instagram.com/escrevendonaquebrada/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-40 border-t-2 border-preto1/30">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-center max-w-[1440px] h-full m-auto p-4 md:p-0">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={"/img/logo-sem-texto.svg"}
            width={88}
            height={88}
            className="border-2 border-preto1/75 rounded-3xl mr-3"
          />
          <p className="font-medium text-sm md:text-base">
            &#169; 2025 - Todos os direitos reservados a Escrevendo na Quebrada.
            Criado por Taina Alves, Thiago Alves, Gabryella Milan, Mauricio
            Antero
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
