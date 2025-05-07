"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [activeSandwichMenu, setActiveSandwichMenu] = useState(false);

  const pathname = usePathname();

  const handleToggleMenu = () => {
    setActiveSandwichMenu(!activeSandwichMenu);
  };

  useEffect(() => {
    if (pathname.includes("/sobre")) {
      setActiveMenuItem("SOBRE");
    } else if (pathname.includes("/como_funciona")) {
      setActiveMenuItem("COMO FUNCIONA");
    } else if (pathname.includes("/seja_aluno")) {
      setActiveMenuItem("SEJA ALUNO");
    } else if (pathname.includes("/seja_voluntario")) {
      setActiveMenuItem("SEJA VOLUNTARIO");
    } else if (pathname.includes("/nossos_resultados")) {
      setActiveMenuItem("NOSSOS RESULTADOS");
    } else if (pathname.includes("/contato")) {
      setActiveMenuItem("CONTATO");
    } else {
      setActiveMenuItem("HOME");
    }
  }, [pathname]);

  const menuItens = [
    { label: "HOME", path: "/" },
    { label: "SOBRE", path: "/sobre" },
    { label: "COMO FUNCIONA", path: "/como_funciona" },
    { label: "SEJA ALUNO", path: "/seja_aluno" },
    { label: "SEJA VOLUNTARIO", path: "/seja_voluntario" },
    { label: "NOSSOS RESULTADOS", path: "/nossos_resultados" },
    { label: "CONTATO", path: "/contato" },
  ];
  return (
    <nav className="bg-white px-6 relative z-30">
      <div className="flex gap-5 items-center justify-between mx-auto w-full max-w-[1440px] py-5">
        <div className="flex gap-2">
          <div>
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/img/logo.png"}
                width={77}
                height={77}
                onClick={() => setActiveMenuItem("Home")}
              />
            </Link>
          </div>
          <div>
            <h3 className="text-[#4E164A] pt-2.5 font-bold  font-inter text-lg w-[132px] h-[44px]">
              Escrevendo na Quebrada
            </h3>
          </div>
        </div>

        <div className="flex lg:hidden">
          {!activeSandwichMenu && (
            <FiMenu size={30} onClick={handleToggleMenu} />
          )}
        </div>

        <div
          className={`fixed top-0 right-0 w-[80%] bg-black h-full pt-5 text-white transition-transform duration-300 ease-in-out ${
            activeSandwichMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end pr-6">
            <IoMdClose size={30} onClick={handleToggleMenu} />
          </div>
          <ul className="flex flex-col gap-8 mt-8 ml-10 text-xl font-semibold">
            {menuItens.map((item) => (
              <li
                className="flex flex-col gap-5"
                key={item.label}
                onClick={() => {
                  setActiveMenuItem(item.label);
                  setActiveSandwichMenu(false);
                }}
              >
                <Link
                  href={item.path}
                  className={`${
                    activeMenuItem === item.label
                      ? "bg-roxo w-fit text-white rounded-full px-2 py-1"
                      : "text-white"
                  } hover:bg-roxo hover:text-white hover:rounded-full px-2 py-1`}
                >
                  {item.label}
                </Link>

                <hr className="border-gray-700 opacity-70" />
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex gap-10">
          <ul className="flex items-center gap-5 font-semibold text-lg">
            {menuItens.map((item) => (
              <li
                key={item.label}
                onClick={() => setActiveMenuItem(item.label)}
              >
                <Link
                  href={item.path}
                  className={`${
                    activeMenuItem === item.label
                      ? "bg-roxo text-white rounded-full px-2 py-1"
                      : "text-black"
                  } hover:bg-roxo hover:text-white hover:rounded-full px-2 py-1`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
