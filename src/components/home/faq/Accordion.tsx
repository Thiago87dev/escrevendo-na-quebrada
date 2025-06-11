"use client";
import { listAccordion } from "@/data/data";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="flex flex-col md:items-center gap-6 lg:gap-8">
      {listAccordion.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:w-4/5 bg-roxo-escuro text-white py-2 rounded-3xl shadow-md shadow-preto1"
        >
          <div
            className="flex items-center cursor-pointer justify-between gap-2 px-6"
            onClick={() => handleToggle(item.id)}
          >
            <div></div>
            <h2 className="text-sm md:text-base">{item.title}</h2>
            {item.id !== activeId ? (
              <FaPlus className="cursor-pointer" size={20} />
            ) : (
              <FaMinus className="cursor-pointer" size={20} />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              item.id === activeId ? "max-h-[50rem] py-5" : "max-h-0"
            } px-6 sm:px-12`}
          >
            <hr className="border-white" />
            <div className="pt-4">
              {item.text.map((item, index) => (
                <p className="py-2 text-sm md:text-base" key={index}>
                  {item}
                </p>
              ))}
            </div>
            {item.list && (
              <ul>
                {item.list.map((item, index) => (
                  <li className="list-disc" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {item.text2 && <p className="py-2">{item.text2}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
