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
    <div className="flex flex-col gap-8 lg:gap-10">
      {listAccordion.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-roxo-escuro text-white py-3 rounded-3xl shadow-md shadow-preto1"
        >
          <div className="flex items-center justify-between gap-2  px-6  ">
            <div></div>
            <h2 className="text-base sm:text-lg">{item.title}</h2>
            {item.id !== activeId ? (
              <FaPlus
                onClick={() => handleToggle(item.id)}
                className="cursor-pointer"
                size={25}
              />
            ) : (
              <FaMinus
                onClick={() => handleToggle(item.id)}
                className="cursor-pointer"
                size={25}
              />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              item.id === activeId ? "max-h-96 py-5" : "max-h-0"
            } px-6 sm:px-12`}
          >
            <hr className="border-white" />
            <div className="pt-4">
              {item.text.map((item, index) => (
                <p className="py-2" key={index}>{item}</p>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
