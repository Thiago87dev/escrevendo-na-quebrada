import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { PiWhatsappLogo } from "react-icons/pi";

const ContactCard = () => {
  const contactInfo = [
    {
      title: "Email",
      subTitle: "escrevendonaquebrada@gmail.com",
      icon: <AiOutlineMail size={40} fill="#4E164A" />,
    },
    {
      title: "Endereço",
      subTitle: "São Paulo, SP",
      icon: <MdOutlinePlace size={40} fill="#4E164A" />,
    },
    {
      title: "Whatsapp",
      subTitle: "+55 (11) 94536-9641",
      icon: <PiWhatsappLogo size={40} fill="#4E164A" />,
    },
  ];

  return (
    <article
      className={`flex flex-col justify-between items-center gap-6 text-center rounded-2xl shadow-lg drop-shadow-2xl p-6 md:p-12 px-4 shadow-preto1/50 text-preto1 bg-white1 w-full lg:max-w-lg`}
    >
      <h3 className="font-bold text-2xl lg:text-3xl">Entre em contato</h3>
      <ul className="flex flex-col gap-4 justify-start">
        {contactInfo.map((item) => (
          <li
            key={item.title}
            className="flex justify-start items-center gap-4 break-all"
          >
            {item.icon}
            <div className="flex flex-col justify-center text-start">
              <p className="text-lg/6 lg:text-2xl/6 font-bold">{item.title}</p>
              <p className="text-base font-bold">{item.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ContactCard;
